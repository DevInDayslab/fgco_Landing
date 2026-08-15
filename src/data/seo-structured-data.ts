import {
  AWARD_COMES_TO_YOU_DESCRIPTION,
  AWARD_COMES_TO_YOU_KEYWORDS,
  AWARD_COMES_TO_YOU_PATH,
  AWARD_COMES_TO_YOU_TITLE,
} from "@/data/award-comes-to-you";
import { FG_CONTACT, FG_OFFICE } from "@/data/contact";
import { AWARDS_TAGLINE, EVENT_LOCATION } from "@/data/awards";
import type { LeaderProfile } from "@/data/leadership";
import { RAMESH_LINKEDIN_URL, SITE_SOCIALS } from "@/data/social";
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
    sameAs: [FG_CONTACT.website, ...SITE_SOCIALS.map((social) => social.href)],
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
  const sameAs =
    leader.id === "ramesh"
      ? [RAMESH_LINKEDIN_URL]
      : undefined;

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
    ...(sameAs ? { sameAs } : {}),
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

export function awardComesToYouPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: AWARD_COMES_TO_YOU_TITLE,
    description: AWARD_COMES_TO_YOU_DESCRIPTION,
    url: `${SITE_URL}${AWARD_COMES_TO_YOU_PATH}`,
    keywords: AWARD_COMES_TO_YOU_KEYWORDS.join(", "),
    isPartOf: {
      "@type": "WebSite",
      name: SITE_NAME,
      url: SITE_URL,
    },
    about: {
      "@type": "Event",
      name: "HIT ViERA National Awards 2026",
      description: AWARDS_TAGLINE,
      organizer: {
        "@type": "Organization",
        name: "FG Media and Safety Technologies Pvt. Ltd.",
        url: SITE_URL,
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "HIT ViERA National Awards 2026",
          item: `${SITE_URL}/awards`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: "Award Comes to You",
          item: `${SITE_URL}${AWARD_COMES_TO_YOU_PATH}`,
        },
      ],
    },
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
