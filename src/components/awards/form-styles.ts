/** Reference-aligned form field styles (#111a33 inputs, amber focus) */
import { siteButtonClass } from "@/lib/site-buttons";
export const fieldClass =
  "w-full rounded-lg border border-gray-700 bg-[#111a33] px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-gray-500 focus:border-amber-500 focus:outline-none md:text-base";

export const selectClass = `${fieldClass} appearance-none`;

export const textareaClass = `${fieldClass} resize-none leading-relaxed`;

export const labelClass = "mb-2 block text-sm font-medium text-gray-400";

export const errorClass = "mt-1 text-xs text-en";

export const formPanelClass =
  "rounded-3xl border border-gray-800 bg-[#0f172a] p-6 shadow-2xl md:p-8 lg:p-12";

export const formPanelInnerClass = "mx-auto max-w-4xl";

export const stepBadgeClass =
  "mr-3 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-500 text-sm font-bold text-black";

export const checkboxBoxClass =
  "flex cursor-pointer items-start gap-3 rounded-lg border border-amber-500/20 bg-amber-500/5 p-4";

export const benefitsPanelClass =
  "rounded-xl border border-blue-800/50 bg-blue-900/20 p-6";

export const fileDropzoneClass =
  "rounded-xl border border-dashed border-gray-600 bg-[#111a33]/50 p-6 text-center transition-colors hover:border-amber-500";

export const fileInputClass =
  "w-full text-sm text-gray-400 file:mr-4 file:rounded-full file:border-0 file:bg-amber-500/10 file:px-4 file:py-2 file:text-sm file:font-semibold file:text-amber-500 hover:file:bg-amber-500/20";

export const submitButtonClass = `${siteButtonClass("gold", "full")} rounded-xl py-4 text-base md:text-lg font-bold`;

export const secondaryButtonClass = `${siteButtonClass("outline", "md")} rounded-xl border-gray-700 bg-[#0f172a]/80 hover:border-amber-500/50 hover:bg-amber-500/5`;

export const primaryInlineButtonClass = `${siteButtonClass("gold", "md")} rounded-xl font-bold`;

export function radioCardClass(selected: boolean) {
  return `flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-2 transition-colors md:px-4 md:py-3 ${
    selected
      ? "border-amber-500 bg-[#111a33] text-foreground"
      : "border-gray-700 bg-[#111a33] text-gray-300 hover:border-amber-500"
  }`;
}

export function tierSelectWrapperClass(selected: boolean) {
  return `cursor-pointer rounded-xl p-1 transition-all ${
    selected
      ? "scale-[1.02] bg-gradient-to-r from-amber-500 to-yellow-400 shadow-[0_0_20px_rgba(251,191,36,0.3)]"
      : "bg-gray-800 hover:bg-gray-700"
  }`;
}

export function tierSelectInnerClass() {
  return "flex h-full w-full flex-col items-center rounded-lg bg-[#0f172a] p-5 text-center";
}

export function selectedTierFieldClass(hasTier: boolean) {
  return `w-full rounded-lg border px-4 py-3 text-white outline-none transition-colors focus:outline-none ${
    hasTier
      ? "border-amber-500 bg-amber-900/20 font-bold text-amber-400"
      : "border-gray-700 bg-[#111a33] text-sm text-gray-500"
  }`;
}
