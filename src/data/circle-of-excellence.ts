export const AWARD_COMES_TO_YOU_HASH = "award-comes-to-you";

export const CIRCLE_OF_EXCELLENCE_HASH = "circle-of-excellence";

export const awardDeliveryPlaces = [
  "Home",
  "Office",
  "Factory",
  "Institution",
  "Laboratory",
  "Studio",
  "Farm",
  "Organisation",
  "Workplace",
] as const;

export const awardDeliveryProcess = [
  {
    step: "01",
    title: "Nomination",
    text: "An individual, organisation, institution or authorised representative may nominate an eligible achiever for an appropriate HIT ViERA Award category.",
  },
  {
    step: "02",
    title: "Evaluation",
    text: "Every nomination is assessed on achievement, excellence, leadership, innovation, integrity, professional contribution, social impact, national contribution, sustainability and overall distinction.",
  },
  {
    step: "03",
    title: "Verification",
    text: "The Committee verifies identity, achievements, professional background and supporting information so recognition rests on credible, verifiable accomplishments.",
  },
  {
    step: "04",
    title: "National Jury Decision",
    text: "Following evaluation and verification, the HIT ViERA National Awards Jury finalises recipients. Award delivery begins only after formal Committee approval.",
  },
  {
    step: "05",
    title: "Award Delivery Planning",
    text: "A dedicated Award Delivery Team identifies the most meaningful location — home, office, factory, institution, laboratory, studio, farm or workplace.",
  },
  {
    step: "06",
    title: "The Surprise Visit",
    text: "Where circumstances permit, the presentation may be arranged as a surprise recognition visit — family, colleagues, students and community members witness the moment together.",
  },
] as const;

export const circleEvaluationCriteria = [
  "Achievement",
  "Excellence",
  "Leadership",
  "Innovation",
  "Integrity",
  "Professional Contribution",
  "Social Impact",
  "National Contribution",
  "Sustainability",
  "Overall Distinction",
] as const;

export const achievementPlaces = [
  "Laboratories",
  "Classrooms",
  "Factories",
  "Offices",
  "Fields",
  "Studios",
  "Communities",
  "Homes",
] as const;

export const leadershipMeets = [
  {
    city: "Kolkata",
    title: "East India Leadership & Excellence Meet",
  },
  {
    city: "Mumbai",
    title: "Business, Enterprise & Innovation Meet",
  },
  {
    city: "Bengaluru",
    title: "Technology, AI, Innovation & Entrepreneurship Meet",
  },
  {
    city: "Delhi",
    title: "National Leadership & Excellence Meet",
  },
] as const;

export const circleOfExcellenceBenefits = [
  "Leadership Interaction",
  "Professional Networking",
  "Knowledge Exchange",
  "Speaking Opportunities",
  "Innovation Showcases",
  "Business Connections",
  "Mentorship",
  "Collaboration",
  "Media Visibility",
  "Social-Impact Initiatives",
] as const;

export const legacyPathSteps = [
  "Achievement",
  "Nomination",
  "Evaluation",
  "Recognition",
  "Award Comes to You",
  "Media & Public Recognition",
  "National Leadership Network",
  "Greater Visibility and Opportunity",
] as const;
