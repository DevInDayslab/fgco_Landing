import { d as postSponsorshipCreateOrder, f as postSponsorshipPayment, l as postNominationCreateOrder, u as postNominationPayment } from "./api-client-BpfiLZPJ.mjs";
import { n as toast } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/razorpay-checkout-C42rYowh.js
function loadRazorpayScript() {
	if (typeof window === "undefined") return Promise.resolve(false);
	if (window.Razorpay) return Promise.resolve(true);
	return new Promise((resolve) => {
		const existing = document.querySelector("script[src=\"https://checkout.razorpay.com/v1/checkout.js\"]");
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
async function openSponsorshipRazorpayCheckout(input, reservationId, onSuccess, onDismiss) {
	if (!await loadRazorpayScript() || !window.Razorpay) throw new Error("Unable to load Razorpay checkout. Please try again.");
	const order = await postSponsorshipCreateOrder({
		...input,
		reservationId
	});
	if (order.isTestCharge) {
		const testInr = (order.amount / 100).toLocaleString("en-IN");
		const displayInr = (order.displayAmountPaise / 100).toLocaleString("en-IN");
		toast.message(`Razorpay test mode: checkout will charge ₹${testInr} (advance shown: ₹${displayInr}).`);
	}
	return new Promise((resolve, reject) => {
		let settled = false;
		const finish = (fn) => {
			if (settled) return;
			settled = true;
			fn();
		};
		const rzp = new window.Razorpay({
			key: order.keyId,
			amount: order.amount,
			currency: order.currency,
			name: "FG Media Group",
			description: `${order.tierName} — ${order.advanceLabel}`,
			order_id: order.orderId,
			prefill: {
				name: input.contactName,
				email: input.contactEmail,
				contact: input.contactPhone
			},
			notes: {
				company: input.company,
				tier: input.tierId
			},
			theme: { color: "#d97706" },
			handler: async (response) => {
				try {
					await postSponsorshipPayment({
						reservationId,
						razorpayOrderId: response.razorpay_order_id,
						razorpayPaymentId: response.razorpay_payment_id,
						razorpaySignature: response.razorpay_signature,
						amountPaise: order.totalPaise ?? order.displayAmountPaise,
						basePaise: order.basePaise,
						gstPaise: order.gstPaise
					});
					onSuccess();
					finish(() => resolve());
				} catch (error) {
					finish(() => reject(error));
				}
			},
			modal: { ondismiss: () => {
				if (settled) return;
				onDismiss?.();
				finish(() => resolve());
			} }
		});
		rzp.on("payment.failed", (response) => {
			const description = response?.error?.description?.trim() || response?.error?.reason?.trim() || "Payment failed. Please try again.";
			finish(() => reject(new Error(description)));
		});
		rzp.open();
	});
}
async function openNominationRazorpayCheckout(input, onSuccess, onDismiss) {
	if (!await loadRazorpayScript() || !window.Razorpay) throw new Error("Unable to load Razorpay checkout. Please try again.");
	const order = await postNominationCreateOrder(input);
	if (order.isTestCharge) {
		const testInr = (order.amount / 100).toLocaleString("en-IN");
		const displayInr = (order.displayAmountPaise / 100).toLocaleString("en-IN");
		toast.message(`Razorpay test mode: checkout will charge ₹${testInr} (nomination fee shown: ₹${displayInr}).`);
	}
	return new Promise((resolve, reject) => {
		let settled = false;
		const finish = (fn) => {
			if (settled) return;
			settled = true;
			fn();
		};
		const rzp = new window.Razorpay({
			key: order.keyId,
			amount: order.amount,
			currency: order.currency,
			name: "FG Media Group",
			description: order.feeLabel,
			order_id: order.orderId,
			prefill: {
				name: input.nominatorName,
				email: input.nominatorEmail,
				contact: input.nominatorPhone
			},
			notes: {
				nominee: input.nomineeName,
				category: input.category
			},
			theme: { color: "#d97706" },
			handler: async (response) => {
				try {
					await onSuccess((await postNominationPayment({
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
						category: input.category
					})).paymentId);
					finish(() => resolve());
				} catch (error) {
					finish(() => reject(error));
				}
			},
			modal: { ondismiss: () => {
				if (settled) return;
				onDismiss?.();
				finish(() => resolve());
			} }
		});
		rzp.on("payment.failed", (response) => {
			const description = response?.error?.description?.trim() || response?.error?.reason?.trim() || "Payment failed. Please try again.";
			finish(() => reject(new Error(description)));
		});
		rzp.open();
	});
}
//#endregion
export { openSponsorshipRazorpayCheckout as n, openNominationRazorpayCheckout as t };
