import type { PublicationId } from "@/data/brands";

export type NewspaperTone = "en" | "te" | "ka";

export type NewspaperContent = {
  id: PublicationId;
  tone: NewspaperTone;
  kicker: string;
  title: string;
  native?: string;
  masthead: string;
  tagline: string;
  intro: string;
  stats: { value: string; label: string }[];
  quote: string;
  about: {
    overline: string;
    title: string;
    paragraphs: string[];
    facts: { label: string; value: string }[];
  };
  vision: {
    overline: string;
    title: string;
    intro?: string;
    cards: { title: string; text: string }[];
  };
  standard: {
    overline: string;
    title: string;
    intro?: string;
    items: string[];
  };
  questions?: {
    overline: string;
    title: string;
    intro?: string;
    items: string[];
  };
  /** Place questions after coverage (Kurukshetra). Default is before coverage. */
  questionsAfterCoverage?: boolean;
  /** Place recognition/people after ethics (Kurukshetra). */
  peopleAfterEthics?: boolean;
  unityAfterPromise?: boolean;
  coverage: {
    overline: string;
    title: string;
    intro?: string;
    items: { title: string; text: string }[];
  };
  people: {
    overline: string;
    title: string;
    intro?: string;
    quote?: string;
    tags: string[];
  };
  interviews?: {
    overline: string;
    title: string;
    intro?: string;
    items: string[];
  };
  ethics: {
    overline: string;
    title: string;
    intro?: string;
    items: { title: string; text: string }[];
    extra?: string[];
  };
  unity?: {
    overline: string;
    title: string;
    text: string;
  };
  readers?: {
    overline: string;
    title: string;
    intro?: string;
    items: string[];
  };
  promise: {
    overline: string;
    title: string;
    intro?: string;
    items: string[];
    closing?: string;
  };
  archive?: {
    overline: string;
    title: string;
    intro?: string;
    items: string[];
  };
  close: {
    title: string;
    subtitle?: string;
    lines: string[];
  };
};
