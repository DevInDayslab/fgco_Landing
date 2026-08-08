export const FG_OFFICE = {
  line1: "#107, 2nd Main, MLA Layout",
  line2: "RT Nagar, Bengaluru, Karnataka — 560032",
  full: "#107, 2nd Main, MLA Layout, RT Nagar, Bengaluru, Karnataka 560032",
  mapsQuery: "FG Media MLA Layout RT Nagar Bengaluru Karnataka 560032",
  lat: 13.017661,
  lng: 77.5909819,
};

export const FG_CONTACT = {
  website: "https://www.fgco.in",
  websiteLabel: "www.fgco.in",
  email: "pro@fgco.in",
  awardsEmail: "hitawards@fgco.in",
  whatsappDisplay: "+91 73820 98888",
  whatsappLink: "https://wa.me/917382098888",
  phone: "+91 73820 98888",
};

/** Share link — FG Media corporate office on Google Maps */
export const googleMapsShareUrl =
  "https://maps.app.goo.gl/851GMYsr9EseF1Sb7?g_st=ac";

export const googleMapsEmbedUrl = `https://www.google.com/maps?q=${FG_OFFICE.lat},${FG_OFFICE.lng}&z=16&output=embed`;

export const googleMapsOpenUrl = googleMapsShareUrl;

export const inquiryTypes = [
  "General Inquiry",
  "InViGIL / Technology",
  "ViERA Platform",
  "Media Wing / Publications",
  "Automobile Wing",
  "AP MEDIA Foundation",
  "HIT ViERA Awards",
  "Videos & Content",
  "Advertising & Partnerships",
  "Press & Media",
] as const;
