import { postNominationCreateOrder, postNominationPayment, postSponsorshipCreateOrder, postSponsorshipPayment } from "@/lib/api-client";
import type { SponsorshipTierId } from "@/data/awards";
import { toast } from "sonner";

type RazorpayHandlerResponse = {
  razorpay_order_id: string;
  razorpay_payment_id: string;
  razorpay_signature: string;
};

type RazorpayConstructor = new (options: Record<string, unknown>) => {
  open: () => void;
  on: (event: string, handler: () => void) => void;
};

declare global {
  interface Window {
    Razorpay?: RazorpayConstructor;
  }
}

export function loadRazorpayScript(): Promise<boolean> {
  if (typeof window === "undefined") return Promise.resolve(false);
  if (window.Razorpay) return Promise.resolve(true);

  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(
      'script[src="https://checkout.razorpay.com/v1/checkout.js"]',
    );
    if (existing) {
      existing.addEventListener("load", () => resolve(Boolean(window.Razorpay)));
      existing.addEventListener("error", () => resolve(false));
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => resolve(Boolean(window.Razorpay));
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

export type SponsorshipCheckoutInput = {
  tierId: SponsorshipTierId;
  company: string;
  contactName: string;
  contactEmail: string;
  contactPhone: string;
};

export async function openSponsorshipRazorpayCheckout(
  input: SponsorshipCheckoutInput,
  reservationId: string,
  onSuccess: () => void,
  onDismiss?: () => void,
): Promise<void> {
  const scriptLoaded = await loadRazorpayScript();
  if (!scriptLoaded || !window.Razorpay) {
    throw new Error("Unable to load Razorpay checkout. Please try again.");
  }

  const order = await postSponsorshipCreateOrder({
    ...input,
    reservationId,
  });

  if (order.isTestCharge) {
    const testInr = (order.amount / 100).toLocaleString("en-IN");
    const displayInr = (order.displayAmountPaise / 100).toLocaleString("en-IN");
    toast.message(
      `Checkout will charge ₹${testInr} for testing (advance shown: ₹${displayInr}).`,
    );
  }

  return new Promise((resolve, reject) => {
    let settled = false;

    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      fn();
    };

    const rzp = new window.Razorpay!({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      name: "FG Media Group",
      description: `${order.tierName} — ${order.advanceLabel}`,
      order_id: order.orderId,
      prefill: {
        name: input.contactName,
        email: input.contactEmail,
        contact: input.contactPhone,
      },
      notes: {
        company: input.company,
        tier: input.tierId,
      },
      theme: {
        color: "#d97706",
      },
      handler: async (response: RazorpayHandlerResponse) => {
        try {
          await postSponsorshipPayment({
            reservationId,
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            amountPaise: order.totalPaise ?? order.displayAmountPaise,
            basePaise: order.basePaise,
            gstPaise: order.gstPaise,
          });

          onSuccess();
          finish(() => resolve());
        } catch (error) {
          finish(() => reject(error));
        }
      },
      modal: {
        ondismiss: () => {
          if (settled) return;
          onDismiss?.();
          finish(() => resolve());
        },
      },
    });

    rzp.on("payment.failed", (response: { error?: { description?: string; reason?: string } }) => {
      const description =
        response?.error?.description?.trim() ||
        response?.error?.reason?.trim() ||
        "Payment failed. Please try again.";
      finish(() => reject(new Error(description)));
    });

    rzp.open();
  });
}

export type NominationCheckoutInput = {
  nominatorName: string;
  nominatorEmail: string;
  nominatorPhone: string;
  nomineeName: string;
  nomineeEmail: string;
  category: string;
  relationship?: string;
};

export async function openNominationRazorpayCheckout(
  input: NominationCheckoutInput,
  onSuccess: (paymentId: string) => void | Promise<void>,
  onDismiss?: () => void,
): Promise<void> {
  const scriptLoaded = await loadRazorpayScript();
  if (!scriptLoaded || !window.Razorpay) {
    throw new Error("Unable to load Razorpay checkout. Please try again.");
  }

  const order = await postNominationCreateOrder(input);

  if (order.isTestCharge) {
    const testInr = (order.amount / 100).toLocaleString("en-IN");
    const displayInr = (order.displayAmountPaise / 100).toLocaleString("en-IN");
    toast.message(
      `Checkout will charge ₹${testInr} for testing (nomination fee shown: ₹${displayInr}).`,
    );
  }

  return new Promise((resolve, reject) => {
    let settled = false;

    const finish = (fn: () => void) => {
      if (settled) return;
      settled = true;
      fn();
    };

    const rzp = new window.Razorpay!({
      key: order.keyId,
      amount: order.amount,
      currency: order.currency,
      name: "FG Media Group",
      description: order.feeLabel,
      order_id: order.orderId,
      prefill: {
        name: input.nominatorName,
        email: input.nominatorEmail,
        contact: input.nominatorPhone,
      },
      notes: {
        nominee: input.nomineeName,
        category: input.category,
      },
      theme: {
        color: "#d97706",
      },
      handler: async (response: RazorpayHandlerResponse) => {
        try {
          const payment = await postNominationPayment({
            razorpayOrderId: response.razorpay_order_id,
            razorpayPaymentId: response.razorpay_payment_id,
            razorpaySignature: response.razorpay_signature,
            amountPaise: order.totalPaise ?? order.displayAmountPaise,
            basePaise: order.basePaise,
            gstPaise: order.gstPaise,
            nominatorName: input.nominatorName,
            nominatorEmail: input.nominatorEmail,
            nominatorPhone: input.nominatorPhone,
            nomineeName: input.nomineeName,
            nomineeEmail: input.nomineeEmail,
            category: input.category,
            relationship: input.relationship,
          });

          await onSuccess(payment.paymentId);
          finish(() => resolve());
        } catch (error) {
          finish(() => reject(error));
        }
      },
      modal: {
        ondismiss: () => {
          if (settled) return;
          onDismiss?.();
          finish(() => resolve());
        },
      },
    });

    rzp.on("payment.failed", (response: { error?: { description?: string; reason?: string } }) => {
      const description =
        response?.error?.description?.trim() ||
        response?.error?.reason?.trim() ||
        "Payment failed. Please try again.";
      finish(() => reject(new Error(description)));
    });

    rzp.open();
  });
}
