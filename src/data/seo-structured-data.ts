import { FG_CONTACT, FG_OFFICE } from "@/data/contact";
import { AWARDS_TAGLINE, EVENT_LOCATION } from "@/data/awards";
import type { LeaderProfile } from "@/data/leadership";
import { SITE_NAME, SITE_URL } from "@/lib/seo";

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "FG Media and Safety Technologies Pvt. Ltd.",
    alternateName: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/apple-touch-icon.png`,
    email: FG_CONTACT.email,
    telephone: FG_CONTACT.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: FG_OFFICE.line1,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      postalCode: "560032",
      addressCountry: "IN",
    },
    sameAs: [FG_CONTACT.website],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    publisher: {
      "@type": "Organization",
      name: "FG Media and Safety Technologies Pvt. Ltd.",
    },
  };
}

export function personSchema(leader: LeaderProfile) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: leader.name,
    jobTitle: leader.role,
    worksFor: {
      "@type": "Organization",
      name: leader.organization,
    },
    description: leader.shortBio,
    url: `${SITE_URL}/${leader.slug}`,
    image: leader.image.startsWith("http")
      ? leader.image
      : `${SITE_URL}${leader.image.startsWith("/") ? leader.image : `/${leader.image}`}`,
  };
}

export function awardsEventSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "HIT ViERA National Awards 2026",
    description: AWARDS_TAGLINE,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: EVENT_LOCATION,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        addressCountry: "IN",
      },
    },
    organizer: {
      "@type": "Organization",
      name: "FG Media and Safety Technologies Pvt. Ltd.",
      url: SITE_URL,
    },
    url: `${SITE_URL}/awards`,
  };
}

export function contactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact FG Media Group",
    url: `${SITE_URL}/contact`,
    mainEntity: {
      "@type": "Organization",
      name: "FG Media and Safety Technologies Pvt. Ltd.",
      email: [FG_CONTACT.email, FG_CONTACT.awardsEmail],
      telephone: FG_CONTACT.phone,
      url: SITE_URL,
      address: {
        "@type": "PostalAddress",
        streetAddress: FG_OFFICE.line1,
        addressLocality: "Bengaluru",
        addressRegion: "Karnataka",
        postalCode: "560032",
        addressCountry: "IN",
      },
    },
  };
}

export function globalStructuredData() {
  return [organizationSchema(), websiteSchema()];
}
