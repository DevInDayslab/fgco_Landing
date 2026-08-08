import {
  createSponsorshipRazorpayOrder,
  verifySponsorshipRazorpayPayment,
} from "@/lib/sponsorship-payment";
import type { SponsorshipTierId } from "@/data/awards";

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
  onSuccess: () => void,
  onDismiss?: () => void,
): Promise<void> {
  const scriptLoaded = await loadRazorpayScript();
  if (!scriptLoaded || !window.Razorpay) {
    throw new Error("Unable to load Razorpay checkout. Please try again.");
  }

  const order = await createSponsorshipRazorpayOrder({ data: input });

  return new Promise((resolve, reject) => {
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
          await verifySponsorshipRazorpayPayment({
            data: {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            },
          });
          onSuccess();
          resolve();
        } catch (error) {
          reject(error);
        }
      },
      modal: {
        ondismiss: () => {
          onDismiss?.();
          reject(new Error("Payment was cancelled."));
        },
      },
    });

    rzp.on("payment.failed", () => {
      reject(new Error("Payment failed. Please try again."));
    });

    rzp.open();
  });
}
