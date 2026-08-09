import { j as requireAdminToken, w as logoutAdmin } from "./router-rKTGDRj6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/api-client-C0fbUDSo.js
function getApiBaseUrl() {
	const configured = "https://api.fgco.in".trim().replace(/\/$/, "");
	if (typeof window !== "undefined") {
		const host = window.location.hostname;
		if (host === "fgco.in" || host === "www.fgco.in") {
			if (!configured || configured.includes("localhost") || configured.includes("127.0.0.1")) return "https://api.fgco.in";
		}
	}
	return configured;
}
async function parseJsonResponse(res) {
	const text = await res.text();
	if (!text) {
		if (!res.ok) throw new Error(`Request failed (${res.status})`);
		return {};
	}
	if (text.trimStart().startsWith("<")) throw new Error(res.ok ? "Server returned an unexpected HTML response." : `Request failed (${res.status}). Check that the API is running and returning JSON.`);
	let data;
	try {
		data = JSON.parse(text);
	} catch {
		throw new Error(`Invalid response from server (${res.status}).`);
	}
	if (!res.ok) {
		const message = typeof data === "object" && data !== null && "error" in data ? String(data.error) : `Request failed (${res.status})`;
		throw new Error(message);
	}
	return data;
}
async function apiFetch(path, options = {}) {
	const base = getApiBaseUrl();
	if (!base) throw new Error("VITE_API_BASE_URL is not configured");
	const headers = new Headers(options.headers);
	if (!(typeof FormData !== "undefined" && options.body instanceof FormData) && !headers.has("Content-Type") && options.body) headers.set("Content-Type", "application/json");
	let res;
	try {
		res = await fetch(`${base}${path}`, {
			...options,
			headers
		});
	} catch (err) {
		const message = err instanceof Error ? err.message : "Network error";
		throw new Error(`${message}. Check that the API is running at ${base} and CORS allows this site.`);
	}
	return parseJsonResponse(res);
}
async function adminFetch(path, options = {}) {
	const token = requireAdminToken();
	const base = getApiBaseUrl();
	if (!base) throw new Error("VITE_API_BASE_URL is not configured");
	const headers = new Headers(options.headers);
	headers.set("Authorization", `Bearer ${token}`);
	if (!(typeof FormData !== "undefined" && options.body instanceof FormData) && !headers.has("Content-Type") && options.body) headers.set("Content-Type", "application/json");
	let res;
	try {
		res = await fetch(`${base}${path}`, {
			...options,
			headers
		});
	} catch (err) {
		const message = err instanceof Error ? err.message : "Network error";
		throw new Error(`${message}. Check that the API is running at ${base} and CORS allows this site.`);
	}
	if (res.status === 401) {
		logoutAdmin("Your session has expired. Please sign in again.");
		throw new Error("Unauthorized");
	}
	return parseJsonResponse(res);
}
async function postContact(payload) {
	return apiFetch("/api/contact", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
async function adminFetchBlob(path) {
	const token = requireAdminToken();
	const base = getApiBaseUrl();
	if (!base) throw new Error("VITE_API_BASE_URL is not configured");
	const res = await fetch(`${base}${path}`, { headers: { Authorization: `Bearer ${token}` } });
	if (res.status === 401) {
		logoutAdmin("Your session has expired. Please sign in again.");
		throw new Error("Unauthorized");
	}
	if (!res.ok) throw new Error(`Failed to load file (${res.status})`);
	return res.blob();
}
async function uploadNominationFile(file, purpose) {
	const formData = new FormData();
	formData.append("file", file);
	formData.append("purpose", purpose);
	return apiFetch("/api/uploads", {
		method: "POST",
		body: formData
	});
}
async function checkNomineeEmail(email) {
	return apiFetch("/api/nominations/check-email", {
		method: "POST",
		body: JSON.stringify({ email })
	});
}
async function postApplication(payload) {
	return apiFetch("/api/applications", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
async function postNominationCreateOrder(payload) {
	return apiFetch("/api/nominations/create-order", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
async function postNominationPayment(payload) {
	return apiFetch("/api/nominations/complete-payment", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
async function postSponsorshipCreateOrder(payload) {
	return apiFetch("/api/sponsorship/create-order", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
async function postSponsorshipRegister(payload) {
	return apiFetch("/api/sponsorship/register", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
async function postSponsorshipPayment(payload) {
	return apiFetch("/api/sponsorship/complete-payment", {
		method: "POST",
		body: JSON.stringify(payload)
	});
}
//#endregion
export { getApiBaseUrl as a, postNominationCreateOrder as c, postSponsorshipPayment as d, postSponsorshipRegister as f, checkNomineeEmail as i, postNominationPayment as l, adminFetchBlob as n, postApplication as o, uploadNominationFile as p, apiFetch as r, postContact as s, adminFetch as t, postSponsorshipCreateOrder as u };
