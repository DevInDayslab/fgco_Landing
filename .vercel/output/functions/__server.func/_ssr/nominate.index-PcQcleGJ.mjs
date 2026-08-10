import { i as __toESM } from "../_runtime.mjs";
import { A as nominatorRelationshipOptions, E as isSelfNominationInput, L as selectionTimeline, P as publicationOptions, c as JsonLd, h as awardsEventSchema, j as nomineeTypes, k as nominationCategories, r as EVENT_LOCATION, t as AWARDS_TAGLINE, x as getNominationFeeBreakdown, y as excellenceAwards, z as signatureTiers } from "./router-BsC5ZfFx.mjs";
import { n as useForm, r as require_react, t as u } from "../_libs/@hookform/resolvers+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as MapPin, B as Image, J as FileText, P as LoaderCircle, _t as ArrowRight, p as Sparkles, q as Film, r as X, s as Upload, v as Send, vt as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as HeroAccent, o as HeroBackdrop } from "./PageLayout-pd1GZ2pX.mjs";
import { t as BrandLogo } from "./BrandLogo-CgwpUbYQ.mjs";
import { a as checkNomineeEmail, m as uploadNominationFile, o as isApiConfigured, s as postApplication } from "./api-client-povPFUIH.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { t as siteHeroImages } from "./site-heroes-aSUPdp6v.mjs";
import { a as stringType, i as objectType, n as booleanType, r as enumType, t as arrayType } from "../_libs/zod.mjs";
import { _ as selectClass, b as textareaClass, c as fileDropzoneClass, d as optionalUrlField, f as phoneField, g as secondaryButtonClass, h as requiredTextField, i as Toaster$1, m as radioCardClass, n as FormSectionHeader, o as emailField, p as primaryInlineButtonClass, r as FormSuccessState, t as FormPanel, u as nameField, y as submitButtonClass } from "./form-validation-BNzlUher.mjs";
import { t as openNominationRazorpayCheckout } from "./razorpay-checkout-Bt1j4ehi.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/nominate.index-PcQcleGJ.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var champion = signatureTiers.find((t) => t.shortName === "Champion");
var pride = signatureTiers.find((t) => t.shortName === "Pride");
var chakra = signatureTiers.find((t) => t.shortName === "Chakra");
var processLabels = [
	"Nominations",
	"Verification",
	"Panel",
	"Jury"
];
var stats = [
	{
		value: "₹5L",
		label: "Top cash prize"
	},
	{
		value: `${excellenceAwards.length}+`,
		label: "Excellence awards"
	},
	{
		value: "4",
		label: "Review stages"
	}
];
function NominateBrief() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-center gap-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "hitNews",
						size: "sm"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-lg font-light text-muted-foreground",
						children: "×"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandLogo, {
						id: "viera",
						size: "sm"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "section-label mt-6",
				children: "Official Portal"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "fg-hero-title mt-4 text-3xl md:text-4xl lg:text-[2.75rem]",
				children: ["HIT Awards ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroAccent, { children: "Nomination Portal" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
				className: "relative mt-8 border-l-4 border-gold/35 pl-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-lg leading-relaxed text-foreground/95 md:text-xl",
					children: AWARDS_TAGLINE
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm leading-relaxed text-muted-foreground",
					children: [
						"National honours for individuals and organisations shaping India's future — reviewed by an independent jury in ",
						EVENT_LOCATION,
						"."
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-gold/25 bg-gold/10 px-4 py-2.5 text-xs text-gold",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "h-3.5 w-3.5 shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["HIT ViERA National Awards 2026 · ", EVENT_LOCATION] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pointer-events-none absolute -inset-4 rounded-3xl bg-[radial-gradient(ellipse_at_50%_80%,rgba(209,176,117,0.12),transparent_70%)]",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex flex-col items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "w-full max-w-[220px] rounded-2xl border border-gold/45 bg-gradient-to-b from-gold/15 to-gold/[0.04] px-5 py-5 text-center shadow-[0_0_40px_-12px_rgba(209,176,117,0.35)]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "mx-auto h-4 w-4 text-gold" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-[0.65rem] tracking-[0.2em] text-gold uppercase",
								children: "Tier I"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xl font-bold",
								children: champion.shortName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-3xl font-bold text-gold",
								children: champion.cashAward
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-3 grid w-full grid-cols-2 gap-3",
						children: [pride, chakra].map((tier) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "rounded-xl border border-border/80 bg-card/60 px-4 py-4 text-center backdrop-blur-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-[0.6rem] tracking-[0.18em] text-muted-foreground uppercase",
									children: ["Tier ", tier.tier === 2 ? "II" : "III"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-base font-semibold",
									children: tier.shortName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "mt-1 text-lg font-bold text-gold",
									children: [tier.cashAward, tier.cashNote ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground",
										children: " each"
									}) : null]
								})
							]
						}, tier.tier))
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
				className: "mt-10 grid grid-cols-3 gap-4",
				children: stats.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "fg-card rounded-xl px-3 py-4 text-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fg-card-inner",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-xl font-bold text-gold md:text-2xl",
							children: item.value
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "mt-1 text-[0.65rem] leading-tight tracking-wide text-muted-foreground uppercase",
							children: item.label
						})]
					})
				}, item.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[0.65rem] tracking-[0.2em] text-muted-foreground uppercase",
					children: "From nomination to honour"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 flex items-center gap-0",
					children: selectionTimeline.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-1 items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex h-7 w-7 items-center justify-center rounded-full border border-gold/30 bg-gold/10 text-[0.65rem] font-semibold text-gold",
								children: item.step
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "max-w-[4.5rem] text-center text-[0.6rem] leading-tight text-muted-foreground",
								children: processLabels[i]
							})]
						}), i < selectionTimeline.length - 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mx-1 h-px flex-1 bg-gradient-to-r from-gold/40 to-gold/10",
							"aria-hidden": true
						})]
					}, item.step))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/awards",
				className: "mt-10 inline-flex items-center gap-2 text-sm font-medium text-gold transition-opacity hover:opacity-80",
				children: ["Explore the full awards programme", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
			})
		]
	});
}
var UPLOAD_MAX_BYTES = {
	profile: 8388608,
	document: 15728640,
	video: 104857600
};
function formatMaxUploadSize(bytes) {
	return `${Math.round(bytes / 1048576)}MB`;
}
function formatFileSize(bytes) {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1048576) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / 1048576).toFixed(1)} MB`;
}
function FileDropzone({ label, required, accept, hint, variant = "image", value, onChange, maxBytes, processFile }) {
	const inputRef = (0, import_react.useRef)(null);
	const [dragging, setDragging] = (0, import_react.useState)(false);
	const [processing, setProcessing] = (0, import_react.useState)(false);
	const [error, setError] = (0, import_react.useState)(null);
	const acceptFile = (0, import_react.useCallback)(async (file) => {
		if (!file) {
			setError(null);
			onChange(null);
			return;
		}
		setProcessing(true);
		setError(null);
		try {
			const processed = processFile ? await processFile(file) : file;
			if (!processed) return;
			if (maxBytes && processed.size > maxBytes) {
				const message = `File must be under ${Math.round(maxBytes / 1048576)}MB.`;
				setError(message);
				toast.error(message);
				onChange(null);
				if (inputRef.current) inputRef.current.value = "";
				return;
			}
			onChange(processed);
			if (processed.size < file.size) toast.success(`Compressed ${file.name} (${formatFileSize(file.size)} → ${formatFileSize(processed.size)})`);
		} catch (err) {
			const message = err instanceof Error ? err.message : "Could not process file.";
			setError(message);
			toast.error(message);
			onChange(null);
			if (inputRef.current) inputRef.current.value = "";
		} finally {
			setProcessing(false);
		}
	}, [
		maxBytes,
		onChange,
		processFile
	]);
	const onDrop = (e) => {
		e.preventDefault();
		setDragging(false);
		const file = e.dataTransfer.files[0];
		if (file) acceptFile(file);
	};
	const Icon = variant === "document" ? FileText : variant === "video" ? Film : Image;
	const hoverBorder = variant === "document" ? "hover:border-blue-500" : variant === "video" ? "hover:border-violet-500" : "hover:border-amber-500";
	const iconHover = variant === "document" ? "group-hover:text-blue-500" : variant === "video" ? "group-hover:text-violet-500" : "group-hover:text-amber-500";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			role: "button",
			tabIndex: 0,
			onKeyDown: (e) => e.key === "Enter" && !processing && inputRef.current?.click(),
			onClick: () => !processing && inputRef.current?.click(),
			onDragOver: (e) => {
				e.preventDefault();
				if (!processing) setDragging(true);
			},
			onDragLeave: () => setDragging(false),
			onDrop,
			className: `group cursor-pointer ${fileDropzoneClass} ${hoverBorder} ${dragging ? "border-amber-500 bg-amber-500/5" : ""} ${processing ? "pointer-events-none opacity-70" : ""}`,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: `mx-auto mb-3 h-8 w-8 text-gray-500 transition-colors ${iconHover}` }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm font-medium text-gray-300",
					children: [
						label,
						" ",
						required && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-amber-500",
							children: "*"
						})
					]
				}),
				hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-xs text-gray-500",
					children: hint
				}),
				processing ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 flex items-center justify-center gap-2 text-sm text-amber-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "h-4 w-4 animate-spin" }), "Processing file…"]
				}) : value ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex flex-col items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-sm text-gray-300",
							children: value.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: (e) => {
								e.stopPropagation();
								acceptFile(null);
							},
							className: "rounded-full p-1 hover:bg-gray-800",
							"aria-label": "Remove file",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-xs text-gray-500",
						children: formatFileSize(value.size)
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-4 text-sm text-gray-400",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "mr-1 inline h-4 w-4" }), "Drag and drop or browse"]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					ref: inputRef,
					type: "file",
					accept,
					className: "hidden",
					disabled: processing,
					onChange: (e) => void acceptFile(e.target.files?.[0] ?? null)
				})
			]
		}),
		error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-red-400",
			children: error
		}),
		!value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: `mt-3 block mb-2 block text-sm font-medium text-gray-400`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				accept,
				required,
				disabled: processing,
				className: "w-full text-sm text-gray-400 file:mr-4 file:rounded-full file:border-0 file:bg-amber-500/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-amber-500 hover:file:bg-amber-500/20 disabled:opacity-60",
				onChange: (e) => void acceptFile(e.target.files?.[0] ?? null)
			})
		})
	] });
}
function pickVideoMimeType() {
	return [
		"video/webm;codecs=vp9",
		"video/webm;codecs=vp8",
		"video/webm",
		"video/mp4"
	].find((type) => MediaRecorder.isTypeSupported(type)) ?? "video/webm";
}
function extensionForMime(mimeType) {
	return mimeType.includes("mp4") ? "mp4" : "webm";
}
async function loadVideoElement(file) {
	const url = URL.createObjectURL(file);
	const video = document.createElement("video");
	video.preload = "auto";
	video.playsInline = true;
	video.muted = true;
	video.src = url;
	await new Promise((resolve, reject) => {
		video.onloadedmetadata = () => resolve();
		video.onerror = () => reject(/* @__PURE__ */ new Error("Could not read video file."));
	});
	return {
		video,
		url
	};
}
function releaseVideo(video, url) {
	URL.revokeObjectURL(url);
	video.removeAttribute("src");
	video.load();
	video.remove();
}
function getVideoStream(video) {
	const withCapture = video;
	return withCapture.captureStream?.() ?? withCapture.mozCaptureStream?.() ?? null;
}
async function recordStream(stream, durationSec, videoBitsPerSecond) {
	const mimeType = pickVideoMimeType();
	const chunks = [];
	const recorder = new MediaRecorder(stream, {
		mimeType,
		videoBitsPerSecond
	});
	const blob = await new Promise((resolve, reject) => {
		recorder.onerror = () => reject(/* @__PURE__ */ new Error("Video compression failed."));
		recorder.ondataavailable = (event) => {
			if (event.data.size > 0) chunks.push(event.data);
		};
		recorder.onstop = () => resolve(new Blob(chunks, { type: mimeType }));
		recorder.start(1e3);
		setTimeout(() => {
			if (recorder.state === "recording") recorder.stop();
		}, Math.ceil(durationSec * 1e3) + 750);
	});
	stream.getTracks().forEach((track) => track.stop());
	return blob;
}
async function recordScaledVideo(video, width, height, durationSec, videoBitsPerSecond) {
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) throw new Error("Video compression is not supported in this browser.");
	const canvasStream = canvas.captureStream(24);
	const sourceStream = getVideoStream(video);
	if (sourceStream) sourceStream.getAudioTracks().forEach((track) => canvasStream.addTrack(track));
	video.currentTime = 0;
	await video.play();
	const drawUntil = performance.now() + durationSec * 1e3;
	const drawFrame = () => {
		if (performance.now() >= drawUntil || video.ended) return;
		ctx.drawImage(video, 0, 0, width, height);
		requestAnimationFrame(drawFrame);
	};
	drawFrame();
	const blob = await recordStream(canvasStream, durationSec, videoBitsPerSecond);
	video.pause();
	return blob;
}
async function transcodeVideo(file, maxBytes) {
	const { video, url } = await loadVideoElement(file);
	try {
		const duration = Math.min(video.duration || 180, 180);
		if (!Number.isFinite(duration) || duration <= 0) throw new Error("Could not determine video length.");
		const scale = video.videoWidth > 0 ? Math.min(1, 1280 / video.videoWidth) : 1;
		const width = Math.max(1, Math.round(video.videoWidth * scale));
		const height = Math.max(1, Math.round(video.videoHeight * scale));
		const bitrates = [
			25e5,
			18e5,
			12e5,
			8e5,
			5e5,
			35e4
		];
		const baseName = file.name.replace(/\.[^.]+$/, "") || "video";
		for (const videoBitsPerSecond of bitrates) {
			const sourceStream = getVideoStream(video);
			let blob = null;
			if (sourceStream && scale >= 1) {
				video.currentTime = 0;
				await video.play();
				blob = await recordStream(sourceStream, duration, videoBitsPerSecond);
				video.pause();
			}
			if (!blob || blob.size > maxBytes) blob = await recordScaledVideo(video, width, height, duration, videoBitsPerSecond);
			if (blob.size <= maxBytes) {
				const ext = extensionForMime(blob.type);
				return new File([blob], `${baseName}-compressed.${ext}`, { type: blob.type });
			}
		}
		throw new Error(`Video is still too large after compression. Please upload a shorter clip under ${formatMaxUploadSize(maxBytes)} or paste an alternative video link.`);
	} finally {
		releaseVideo(video, url);
	}
}
async function compressImageFile(file, maxWidth = 1920, quality = .82) {
	if (!file.type.startsWith("image/")) return {
		file,
		compressed: false,
		originalSize: file.size
	};
	const originalSize = file.size;
	const bitmap = await createImageBitmap(file);
	const scale = Math.min(1, maxWidth / bitmap.width);
	const width = Math.max(1, Math.round(bitmap.width * scale));
	const height = Math.max(1, Math.round(bitmap.height * scale));
	const canvas = document.createElement("canvas");
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext("2d");
	if (!ctx) return {
		file,
		compressed: false,
		originalSize
	};
	ctx.drawImage(bitmap, 0, 0, width, height);
	bitmap.close();
	const blob = await new Promise((resolve) => {
		canvas.toBlob((b) => resolve(b), "image/jpeg", quality);
	});
	if (!blob) return {
		file,
		compressed: false,
		originalSize
	};
	const baseName = file.name.replace(/\.[^.]+$/, "") || "upload";
	const compressedFile = new File([blob], `${baseName}.jpg`, { type: "image/jpeg" });
	return {
		file: compressedFile,
		compressed: compressedFile.size < originalSize,
		originalSize
	};
}
async function compressVideoFile(file, maxBytes = UPLOAD_MAX_BYTES.video) {
	const originalSize = file.size;
	if (originalSize <= maxBytes) return {
		file,
		compressed: false,
		originalSize
	};
	if (typeof MediaRecorder === "undefined") throw new Error(`Video must be under ${formatMaxUploadSize(maxBytes)}. Try a smaller file or use the alternative video link.`);
	const compressedFile = await transcodeVideo(file, maxBytes);
	return {
		file: compressedFile,
		compressed: compressedFile.size < originalSize,
		originalSize
	};
}
async function prepareNominationUpload(file, purpose) {
	if (purpose === "video") return compressVideoFile(file);
	if (file.type === "application/pdf") return {
		file,
		compressed: false,
		originalSize: file.size
	};
	if (file.type.startsWith("image/")) return compressImageFile(file);
	return {
		file,
		compressed: false,
		originalSize: file.size
	};
}
var wordCount = (text) => text.trim().split(/\s+/).filter(Boolean).length;
var schema = objectType({
	nominatorName: nameField,
	nominatorOrg: stringType().optional(),
	nominatorEmail: emailField,
	nominatorPhone: phoneField,
	relationship: stringType().min(1, "Select your relationship to the nominee"),
	nomineeType: enumType(nomineeTypes, { message: "Select a nomination type" }),
	nomineeName: requiredTextField("Nominee name"),
	nomineeDesignation: stringType().optional(),
	nomineePhone: phoneField,
	nomineeEmail: emailField,
	nomineeLocation: requiredTextField("Location"),
	nomineeSocial: stringType().optional(),
	category: enumType(nominationCategories, { message: "Select a category" }),
	publications: arrayType(stringType()).min(1, "Select at least one publication"),
	executiveSummary: stringType().optional(),
	achievement: stringType().optional(),
	impact: stringType().optional(),
	futureGoals: stringType().optional(),
	altVideoLink: optionalUrlField,
	declaration: booleanType().optional()
});
var STEPS = [
	"Nominator Information",
	"Nominee Details",
	"Categories & Publications",
	"Justification",
	"Attachments",
	"Declaration"
];
var stepFields = {
	0: [
		"nominatorName",
		"nominatorEmail",
		"nominatorPhone",
		"relationship"
	],
	1: [
		"nomineeType",
		"nomineeName",
		"nomineePhone",
		"nomineeEmail",
		"nomineeLocation"
	],
	2: ["category", "publications"],
	3: ["executiveSummary", "achievement"],
	4: [],
	5: ["declaration"]
};
function NominationWizard() {
	const [step, setStep] = (0, import_react.useState)(0);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const [successInfo, setSuccessInfo] = (0, import_react.useState)(null);
	const [profilePhoto, setProfilePhoto] = (0, import_react.useState)(null);
	const [supportingDocs, setSupportingDocs] = (0, import_react.useState)(null);
	const [videoFile, setVideoFile] = (0, import_react.useState)(null);
	const { register, watch, setValue, trigger, handleSubmit, formState: { errors } } = useForm({
		resolver: u(schema),
		defaultValues: {
			publications: [],
			declaration: void 0
		},
		mode: "onChange"
	});
	const publications = watch("publications") ?? [];
	const nomineeType = watch("nomineeType");
	const relationship = watch("relationship");
	const nominatorEmail = watch("nominatorEmail");
	const nomineeEmail = watch("nomineeEmail");
	const summaryWords = wordCount(watch("executiveSummary") ?? "");
	const isSelfNomination = isSelfNominationInput({
		relationship,
		nominatorEmail,
		nomineeEmail
	});
	const feeBreakdown = getNominationFeeBreakdown(isSelfNomination);
	const lastStepIndex = STEPS.length - 1;
	async function nextStep() {
		if (step === 4 && !profilePhoto) {
			toast.error("Profile photo or company logo is required.");
			return;
		}
		if (step === 3) {
			const summary = (watch("executiveSummary") ?? "").trim();
			const achievement = (watch("achievement") ?? "").trim();
			if (!summary) {
				toast.error("Executive summary is required.");
				return;
			}
			if (wordCount(summary) > 100) {
				toast.error("Executive summary must be 100 words or fewer.");
				return;
			}
			if (!achievement) {
				toast.error("Achievement description is required.");
				return;
			}
		}
		const fields = stepFields[step] ?? [];
		if (!(fields.length === 0 || await trigger(fields))) return;
		if (step === 1 && isApiConfigured()) {
			const nomineeEmail = watch("nomineeEmail")?.trim();
			if (nomineeEmail) try {
				await checkNomineeEmail(nomineeEmail);
			} catch (err) {
				toast.error(err instanceof Error ? err.message : "This nominee email cannot be used for a new nomination.");
				return;
			}
		}
		setStep((s) => Math.min(s + 1, lastStepIndex));
	}
	function prevStep() {
		setStep((s) => Math.max(s - 1, 0));
	}
	function togglePublication(pub) {
		const current = publications;
		const next = current.includes(pub) ? current.filter((p) => p !== pub) : [...current, pub];
		setValue("publications", next, { shouldValidate: true });
	}
	async function processProfileUpload(file) {
		const prepared = await prepareNominationUpload(file, "profile");
		if (prepared.file.size > UPLOAD_MAX_BYTES.profile) throw new Error(`Profile photo must be under ${formatMaxUploadSize(UPLOAD_MAX_BYTES.profile)}.`);
		return prepared.file;
	}
	async function processDocumentUpload(file) {
		const prepared = await prepareNominationUpload(file, "document");
		if (prepared.file.size > UPLOAD_MAX_BYTES.document) throw new Error(`Supporting document must be under ${formatMaxUploadSize(UPLOAD_MAX_BYTES.document)}.`);
		return prepared.file;
	}
	async function processVideoUpload(file) {
		const previewUrl = URL.createObjectURL(file);
		const previewVideo = document.createElement("video");
		previewVideo.preload = "metadata";
		previewVideo.src = previewUrl;
		try {
			await new Promise((resolve, reject) => {
				previewVideo.onloadedmetadata = () => resolve();
				previewVideo.onerror = () => reject(/* @__PURE__ */ new Error("Could not read video file."));
			});
			if (previewVideo.duration > 180) toast.message("Video is longer than 3 minutes. Only the first 3 minutes will be uploaded.");
		} finally {
			URL.revokeObjectURL(previewUrl);
			previewVideo.removeAttribute("src");
			previewVideo.load();
		}
		const prepared = await prepareNominationUpload(file, "video");
		if (prepared.file.size > UPLOAD_MAX_BYTES.video) throw new Error(`Video must be under ${formatMaxUploadSize(UPLOAD_MAX_BYTES.video)}. Please use a shorter clip or the alternative video link.`);
		return prepared.file;
	}
	async function onSubmit(data) {
		const selfNomination = isSelfNominationInput({
			relationship: data.relationship,
			nominatorEmail: data.nominatorEmail,
			nomineeEmail: data.nomineeEmail
		});
		if (!isApiConfigured()) {
			toast.error("Nomination API is not configured. Set VITE_API_BASE_URL.");
			return;
		}
		if (!data.declaration) {
			toast.error("You must accept the declaration.");
			setStep(5);
			return;
		}
		const summary = (data.executiveSummary ?? "").trim();
		const achievement = (data.achievement ?? "").trim();
		if (!summary || wordCount(summary) > 100 || !achievement) {
			toast.error("Please complete the justification step before submitting.");
			setStep(3);
			return;
		}
		if (!profilePhoto) {
			toast.error("Profile photo or company logo is required.");
			setStep(4);
			return;
		}
		setSubmitting(true);
		try {
			const profileUpload = await uploadNominationFile(profilePhoto, "profile");
			let supportingUpload = null;
			if (supportingDocs) supportingUpload = await uploadNominationFile(supportingDocs, "document");
			let videoUpload = null;
			if (videoFile) videoUpload = await uploadNominationFile(videoFile, "video");
			const applicationPayload = {
				nominatorName: data.nominatorName,
				nominatorEmail: data.nominatorEmail,
				nominatorPhone: data.nominatorPhone,
				nomineeName: data.nomineeName,
				category: data.category,
				profilePhotoKey: profileUpload.key,
				formData: {
					...data,
					attachments: {
						profilePhoto: {
							key: profileUpload.key,
							originalName: profileUpload.originalName,
							contentType: profileUpload.contentType,
							size: profileUpload.size,
							originalSize: profileUpload.originalSize,
							compressed: profileUpload.compressed,
							publicUrl: profileUpload.publicUrl
						},
						supportingDocs: supportingUpload ? {
							key: supportingUpload.key,
							originalName: supportingUpload.originalName,
							contentType: supportingUpload.contentType,
							size: supportingUpload.size,
							originalSize: supportingUpload.originalSize,
							compressed: supportingUpload.compressed,
							publicUrl: supportingUpload.publicUrl
						} : null,
						videoFile: videoUpload ? {
							key: videoUpload.key,
							originalName: videoUpload.originalName,
							contentType: videoUpload.contentType,
							size: videoUpload.size,
							originalSize: videoUpload.originalSize,
							compressed: videoUpload.compressed,
							publicUrl: videoUpload.publicUrl
						} : null
					}
				},
				...supportingUpload ? { supportingDocsKey: supportingUpload.key } : {},
				...videoUpload ? { videoKey: videoUpload.key } : {}
			};
			await openNominationRazorpayCheckout({
				nominatorName: data.nominatorName,
				nominatorEmail: data.nominatorEmail,
				nominatorPhone: data.nominatorPhone,
				nomineeName: data.nomineeName,
				nomineeEmail: data.nomineeEmail,
				category: data.category,
				relationship: data.relationship
			}, async (paymentId) => {
				const result = await postApplication({
					...applicationPayload,
					paymentId
				});
				setSuccessInfo({
					referenceId: result.referenceId,
					isSelfNomination: selfNomination,
					nominatorEmail: data.nominatorEmail.trim(),
					nomineeEmail: data.nomineeEmail.trim()
				});
				setSubmitted(true);
				toast.success(`Nomination submitted (ref ${result.referenceId}).`);
			}, () => {
				toast.message("Payment was cancelled. Your uploads are saved — complete payment to submit.");
			});
		} catch (err) {
			toast.error(err instanceof Error ? err.message : "Failed to submit nomination.");
		} finally {
			setSubmitting(false);
		}
	}
	if (submitted && successInfo) {
		const emailNotices = successInfo.isSelfNomination ? [{
			label: "CEO letter & application acknowledgement",
			email: successInfo.nomineeEmail
		}] : [{
			label: "Payment receipt & nominator acknowledgement",
			email: successInfo.nominatorEmail
		}, {
			label: "CEO letter & nomination acknowledgement",
			email: successInfo.nomineeEmail
		}];
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSuccessState, {
			title: "Nomination Submitted Successfully",
			referenceId: successInfo.referenceId,
			message: "Thank you for your submission. The National Jury will review this nomination.",
			emailNotices
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(FormPanel, {
		className: "!p-6 md:!p-8 lg:!p-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-8 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "fg-hero-title text-2xl md:text-3xl",
				children: "HIT Awards & Special Edition"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-sm font-medium text-gold md:text-base",
				children: "Official Comprehensive Nomination Portal"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: handleSubmit(onSubmit),
			className: "space-y-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FormSectionHeader, {
					step: step + 1,
					title: STEPS[step] ?? STEPS[0]
				}),
				step === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-6 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "nominatorName",
								children: "Full Name *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nominatorName",
								placeholder: "John Doe",
								...register("nominatorName"),
								className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
							}),
							errors.nominatorName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.nominatorName.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm font-medium text-gray-400",
							htmlFor: "nominatorOrg",
							children: "Organization / Affiliation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "nominatorOrg",
							placeholder: "Company Inc.",
							...register("nominatorOrg"),
							className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "nominatorEmail",
								children: "Email Address *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nominatorEmail",
								type: "email",
								autoComplete: "email",
								placeholder: "john@example.com",
								...register("nominatorEmail"),
								className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
							}),
							errors.nominatorEmail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.nominatorEmail.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "nominatorPhone",
								children: "WhatsApp Number *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nominatorPhone",
								type: "tel",
								inputMode: "numeric",
								autoComplete: "tel",
								placeholder: "+91 00000 00000",
								maxLength: 15,
								...register("nominatorPhone"),
								className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
							}),
							errors.nominatorPhone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.nominatorPhone.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "relationship",
								children: "Relationship to Nominee *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								id: "relationship",
								...register("relationship"),
								className: selectClass,
								defaultValue: "",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "",
									disabled: true,
									children: "Select relationship..."
								}), nominatorRelationshipOptions.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: option,
									children: option
								}, option))]
							}),
							errors.relationship && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.relationship.message
							})
						] })
					]
				}),
				step === 1 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm font-medium text-gray-400",
							children: "Type of Nomination *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-3 md:gap-4",
							children: nomineeTypes.map((type) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: radioCardClass(nomineeType === type),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "radio",
									value: type,
									...register("nomineeType"),
									className: "h-4 w-4 accent-amber-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs md:text-sm",
									children: type
								})]
							}, type))
						}),
						errors.nomineeType && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-en",
							children: errors.nomineeType.message
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 gap-6 md:grid-cols-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-gray-400",
									htmlFor: "nomineeName",
									children: "Nominee Name *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "nomineeName",
									...register("nomineeName"),
									className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
								}),
								errors.nomineeName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-en",
									children: errors.nomineeName.message
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "nomineeDesignation",
								children: "Designation / Job Title"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "nomineeDesignation",
								...register("nomineeDesignation"),
								className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
							})] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-gray-400",
									htmlFor: "nomineePhone",
									children: "Contact Number *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "nomineePhone",
									type: "tel",
									inputMode: "numeric",
									autoComplete: "tel",
									placeholder: "10-digit mobile number",
									maxLength: 15,
									...register("nomineePhone"),
									className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
								}),
								errors.nomineePhone && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-en",
									children: errors.nomineePhone.message
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-gray-400",
									htmlFor: "nomineeEmail",
									children: "Email Address *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "nomineeEmail",
									type: "email",
									autoComplete: "email",
									placeholder: "name@example.com",
									...register("nomineeEmail"),
									className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
								}),
								errors.nomineeEmail && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-en",
									children: errors.nomineeEmail.message
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-gray-400",
									htmlFor: "nomineeLocation",
									children: "Location *"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									id: "nomineeLocation",
									placeholder: "City, State, Country",
									...register("nomineeLocation"),
									className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
								}),
								errors.nomineeLocation && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-xs text-en",
									children: errors.nomineeLocation.message
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "md:col-span-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-gray-400",
									htmlFor: "nomineeSocial",
									children: "Social Media Links"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
									id: "nomineeSocial",
									...register("nomineeSocial"),
									rows: 3,
									placeholder: "LinkedIn, Twitter/X, Instagram, Website...",
									className: textareaClass
								})]
							})
						]
					})]
				}),
				step === 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm font-medium text-gray-400",
							htmlFor: "category",
							children: "HIT Awards Nomination Category *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							id: "category",
							...register("category"),
							className: selectClass,
							defaultValue: "",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: "",
								disabled: true,
								children: "Select Category..."
							}), nominationCategories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
								value: c,
								children: c
							}, c))]
						}),
						errors.category && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-en",
							children: errors.category.message
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm font-medium text-gray-400",
							children: "Preferred Publication *"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "space-y-3",
							children: publicationOptions.map((pub) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
								className: radioCardClass(publications.includes(pub)),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "checkbox",
									checked: publications.includes(pub),
									onChange: () => togglePublication(pub),
									className: "h-4 w-4 accent-amber-500"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs md:text-sm",
									children: pub
								})]
							}, pub))
						}),
						errors.publications && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-xs text-en",
							children: errors.publications.message
						})
					] })]
				}),
				step === 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-2 flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "mb-2 block text-sm font-medium text-gray-400",
									htmlFor: "executiveSummary",
									children: "Executive Summary (Max 100 words) *"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: `text-xs ${summaryWords > 100 ? "text-en" : "text-gray-500"}`,
									children: [summaryWords, "/100 words"]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "executiveSummary",
								...register("executiveSummary"),
								rows: 4,
								placeholder: "Briefly summarize why this nominee is being recommended...",
								className: textareaClass
							}),
							errors.executiveSummary && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.executiveSummary.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "achievement",
								children: "Detailed Description of Achievement *"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								id: "achievement",
								...register("achievement"),
								rows: 5,
								className: textareaClass
							}),
							errors.achievement && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.achievement.message
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm font-medium text-gray-400",
							htmlFor: "impact",
							children: "Measurable Impact and Outcomes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "impact",
							...register("impact"),
							rows: 4,
							className: textareaClass
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "mb-2 block text-sm font-medium text-gray-400",
							htmlFor: "futureGoals",
							children: "Future Goals & Vision"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							id: "futureGoals",
							...register("futureGoals"),
							rows: 4,
							className: textareaClass
						})] })
					]
				}),
				step === 4 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 gap-6 md:grid-cols-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDropzone, {
								label: "Profile Photo / Logo",
								required: true,
								accept: "image/jpeg,image/png,image/webp",
								hint: `JPG, PNG · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.profile)}`,
								value: profilePhoto,
								onChange: setProfilePhoto,
								maxBytes: UPLOAD_MAX_BYTES.profile,
								processFile: processProfileUpload
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDropzone, {
								label: "Supporting Documents",
								variant: "document",
								accept: ".pdf,.doc,.docx,.ppt,.pptx,application/pdf,image/jpeg,image/png,image/webp",
								hint: `PDF or images · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.document)}`,
								value: supportingDocs,
								onChange: setSupportingDocs,
								maxBytes: UPLOAD_MAX_BYTES.document,
								processFile: processDocumentUpload
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileDropzone, {
							label: "Introduction or Showcase Video (Max 3 minutes)",
							variant: "video",
							accept: "video/mp4,video/quicktime,video/webm",
							hint: `MP4, MOV, WebM · max ${formatMaxUploadSize(UPLOAD_MAX_BYTES.video)} · compressed automatically`,
							value: videoFile,
							onChange: setVideoFile,
							maxBytes: UPLOAD_MAX_BYTES.video,
							processFile: processVideoUpload
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "mb-2 block text-sm font-medium text-gray-400",
								htmlFor: "altVideoLink",
								children: "Alternative Video Link"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								id: "altVideoLink",
								type: "url",
								placeholder: "https://youtube.com/... or Google Drive link",
								...register("altVideoLink"),
								className: "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base"
							}),
							errors.altVideoLink && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-en",
								children: errors.altVideoLink.message
							})
						] })
					]
				}),
				step === 5 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-xl border border-gold/30 bg-gold/[0.06] p-4 md:p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-xs font-semibold uppercase tracking-wider text-gold",
								children: "Nomination fee"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1 text-xs text-gray-400",
								children: feeBreakdown.feeLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 space-y-1 text-sm text-gray-200",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Application fee" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", feeBreakdown.baseInr.toLocaleString("en-IN")] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "GST (18%)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", feeBreakdown.gstInr.toLocaleString("en-IN")] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "flex justify-between gap-4 border-t border-gold/20 pt-2 font-semibold text-white",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Total payable" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["₹", feeBreakdown.totalInr.toLocaleString("en-IN")] })]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-xs text-gray-400",
								children: "Payment is collected securely via Razorpay when you submit. Your nomination is only finalized after successful payment."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
						className: "flex cursor-pointer items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							...register("declaration"),
							className: "mt-1 h-5 w-5 shrink-0 accent-amber-500"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "text-xs leading-relaxed text-gray-300 md:text-sm",
							children: [
								"I confirm that the information provided is accurate and authentic. I grant FG MEDIA GROUP the rights to utilise the submitted details and media for publication and the HIT Awards consideration process. I agree to the",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/terms",
									className: "text-gold hover:underline",
									children: "Terms & Conditions"
								}),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/privacy",
									className: "text-gold hover:underline",
									children: "Privacy Policy"
								}),
								",",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/refund-policy",
									className: "text-gold hover:underline",
									children: "Refund Policy"
								}),
								", and",
								" ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/cancellation-policy",
									className: "text-gold hover:underline",
									children: "Cancellation Policy"
								}),
								"."
							]
						})]
					}), errors.declaration && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: `mt-2 mt-1 text-xs text-en`,
						children: errors.declaration.message
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-4",
					children: [step > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: prevStep,
						className: secondaryButtonClass,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), " Back"]
					}), step < lastStepIndex ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: nextStep,
						className: primaryInlineButtonClass,
						children: ["Next ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						disabled: submitting,
						className: submitButtonClass,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center justify-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Send, { className: "h-4 w-4" }), submitting ? "Processing..." : `Pay ₹${feeBreakdown.totalInr.toLocaleString("en-IN")} & Submit`]
						})
					})]
				})
			]
		})]
	});
}
function NominateIndex() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(JsonLd, { data: awardsEventSchema() }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "relative overflow-hidden border-b border-border",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroBackdrop, {
				image: siteHeroImages.city,
				showBlur: false
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-16 lg:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/awards",
					className: "mb-10 inline-flex items-center text-sm font-medium text-gold transition-opacity hover:opacity-80",
					children: "← Back to Awards"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid items-start gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,40rem)] lg:gap-14 xl:gap-16",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 max-w-xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NominateBrief, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 w-full lg:max-w-[40rem]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:sticky lg:top-24 lg:self-start",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NominationWizard, {})
						})
					})]
				})]
			})]
		})
	] });
}
//#endregion
export { NominateIndex as component };
