import { FG_CONTACT, FG_OFFICE } from "@/data/contact";
import { paymentDetails } from "@/data/awards";

export const LEGAL_ENTITY = "FG Media and Safety Technologies Pvt Ltd";
export const LEGAL_BRAND = "FG Media Group";
export const LEGAL_EFFECTIVE_DATE = "9 August 2026";
export const LEGAL_JURISDICTION = "Bengaluru, Karnataka, India";
export const LEGAL_GST = paymentDetails.gst;

export const LEGAL_CONTACT = {
  email: FG_CONTACT.email,
  awardsEmail: FG_CONTACT.awardsEmail,
  phone: FG_CONTACT.phone,
  address: FG_OFFICE.full,
  website: FG_CONTACT.website,
};

export type LegalSubsection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type LegalSection = {
  id: string;
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  subsections?: LegalSubsection[];
};

export type LegalDocument = {
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
};
