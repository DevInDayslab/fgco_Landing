import fgGroupLogo from "@/assets/fg_grouplogo.png";
import hitNewsLogo from "@/assets/hitnews_logo.png";
import happyIndiaTimesLogo from "@/assets/hit_news.png";
import kurukshetraLogo from "@/assets/kurukshetra.png";

export const logos = {
  fgGroup: fgGroupLogo,
  hitNews: hitNewsLogo,
  happyIndiaTimes: happyIndiaTimesLogo,
  kurukshetra: kurukshetraLogo,
} as const;

export type PublicationId = "hit-news" | "happy-india-times" | "kurukshetra";

export const publications = {
  "hit-news": {
    id: "hit-news" as const,
    title: "HIT News",
    subtitle: "Happy India Techs News",
    language: "English",
    code: "EN",
    logo: hitNewsLogo,
    logoAlt: "HIT News — Happy India Techs",
  },
  "happy-india-times": {
    id: "happy-india-times" as const,
    title: "Happy India Times",
    subtitle: "హ్యాపీ ఇండియా టైమ్స్",
    language: "Telugu",
    code: "TE",
    logo: happyIndiaTimesLogo,
    logoAlt: "Happy India Times",
  },
  kurukshetra: {
    id: "kurukshetra" as const,
    title: "Kurukshetra",
    subtitle: "ಕುರುಕ್ಷೇತ್ರ ವರದ ವ್ಯಭವ",
    language: "Kannada",
    code: "KA",
    logo: kurukshetraLogo,
    logoAlt: "Kurukshetra",
  },
} as const;

export const fgBrand = {
  name: "FG Media Group",
  tagline: "MEDIA · TECHNOLOGY",
  legalName: "FG Media and Safety Technologies Pvt Ltd",
  logo: fgGroupLogo,
  logoAlt: "FG Media Group",
};
