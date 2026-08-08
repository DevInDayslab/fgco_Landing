import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { paymentDetails, sponsorshipTiers, type SponsorshipTierId } from "@/data/awards";

const tierIds = ["super", "power", "golden", "silver"] as const;

const createOrderInput = z.object({
  tierId: z.enum(tierIds),
  company: z.string().min(1),
  contactName: z.string().min(1),
  contactEmail: z.string().email(),
  contactPhone: z.string().min(10),
});

const verifyPaymentInput = z.object({
  razorpay_order_id: z.string().min(1),
  razorpay_payment_id: z.string().min(1),
  razorpay_signature: z.string().min(1),
});

function getRazorpayCredentials() {
  const keyId = process.env.RAZORPAY_KEY_ID ?? process.env.VITE_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    throw new Error(
      "Razorpay is not configured. Set RAZORPAY_KEY_ID and RAZORPAY_KEY_SECRET in your environment.",
    );
  }

  return { keyId, keySecret };
}

function getAdvanceAmountInr(tierId: SponsorshipTierId) {
  const tier = sponsorshipTiers.find((t) => t.id === tierId);
  if (!tier) throw new Error("Invalid sponsorship tier.");

  const advancePercent = Number.parseFloat(paymentDetails.advancePercent) / 100;
  return Math.round(tier.amountInr * advancePercent);
}

function bufferToHex(buffer: ArrayBuffer) {
  return [...new Uint8Array(buffer)]
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

async function hmacSha256Hex(secret: string, message: string) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );
  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(message));
  return bufferToHex(signature);
}

export const createSponsorshipRazorpayOrder = createServerFn({ method: "POST" })
  .validator((data: unknown) => createOrderInput.parse(data))
  .handler(async ({ data }) => {
    const { keyId, keySecret } = getRazorpayCredentials();
    const tier = sponsorshipTiers.find((t) => t.id === data.tierId);
    if (!tier) throw new Error("Invalid sponsorship tier.");

    const advanceInr = getAdvanceAmountInr(data.tierId);
    const amountInPaise = advanceInr * 100;
    const receipt = `sponsor_${data.tierId}_${Date.now()}`;

    const response = await fetch("https://api.razorpay.com/v1/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${btoa(`${keyId}:${keySecret}`)}`,
      },
      body: JSON.stringify({
        amount: amountInPaise,
        currency: "INR",
        receipt,
        notes: {
          tierId: data.tierId,
          tierName: tier.name,
          company: data.company,
          contactName: data.contactName,
          contactEmail: data.contactEmail,
          contactPhone: data.contactPhone,
          paymentType: "sponsorship_advance",
        },
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Razorpay order error:", errorBody);
      throw new Error("Unable to create payment order. Please try again or use bank transfer.");
    }

    const order = (await response.json()) as { id: string };

    return {
      orderId: order.id,
      amount: amountInPaise,
      currency: "INR",
      keyId,
      tierName: tier.name,
      advanceLabel: `${paymentDetails.advancePercent} advance — ₹ ${advanceInr.toLocaleString("en-IN")}`,
    };
  });

export const verifySponsorshipRazorpayPayment = createServerFn({ method: "POST" })
  .validator((data: unknown) => verifyPaymentInput.parse(data))
  .handler(async ({ data }) => {
    const { keySecret } = getRazorpayCredentials();
    const expected = await hmacSha256Hex(
      keySecret,
      `${data.razorpay_order_id}|${data.razorpay_payment_id}`,
    );

    if (expected !== data.razorpay_signature) {
      throw new Error("Payment verification failed. Please contact support.");
    }

    return { verified: true };
  });
