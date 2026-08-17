export const FOUNDATION_NAME = "AP MEDIA FOUNDATION";

export const FOUNDATION_TAGLINE = "Empowering People. Enabling Opportunity. Transforming Society.";

export const FOUNDATION_SUBTITLE = "A Social Initiative of FG MEDIA GROUP";

export const FOUNDATION_INTRO =
  "AP MEDIA Foundation is a social-impact organisation working for the welfare and advancement of society, with a special commitment to the downtrodden, underprivileged, needy, vulnerable and underserved sections of society.";

export const FOUNDATION_INTRO_EXTENDED =
  "As part of the FG MEDIA GROUP, the Foundation brings together the power of media, technology, education, awareness, social responsibility and community participation to create opportunities for people who need support to move forward.";

export const FOUNDATION_PHILOSOPHY =
  "No person should be denied an opportunity to learn, grow, create, earn, lead or live with dignity because of poverty, lack of resources or lack of access.";

export const FOUNDATION_ACTION =
  "AP MEDIA Foundation works to convert this belief into action through awareness programmes, training camps, educational support, digital empowerment, sponsorships, community initiatives, safety programmes, entrepreneurship support and recognition of people creating positive change.";

export const FOUNDATION_BELIEF = [
  "Help should create hope.",
  "Hope should create opportunity.",
  "Opportunity should create independence.",
] as const;

export const FOUNDATION_BELIEF_BODY = [
  "AP MEDIA Foundation believes that meaningful social service goes beyond temporary relief.",
  "A laptop can become an education. A computer can become a career. Digital literacy can become employment. Training can become entrepreneurship. Education sponsorship can transform a student's future. Recognition can give a social worker the strength to continue serving society. Support to a journalist can enable important stories to reach the public.",
  "Therefore, our programmes are designed not only to provide immediate assistance, but wherever possible to create long-term empowerment.",
] as const;

export const FOUNDATION_VISION = {
  title: "A More Empowered, Educated, Safe and Equitable Society",
  intro:
    "We envision a society in which every individual—irrespective of economic background—has access to:",
  pillars: [
    "Education",
    "Technology",
    "Knowledge",
    "Opportunity",
    "Safety",
    "Dignity",
  ] as const,
  paragraphs: [
    "Our long-term vision is to build a strong ecosystem where individuals and institutions can receive the support, resources, knowledge and recognition required to create meaningful change.",
    "We believe social development is not merely about providing assistance. It is about creating the ability to become self-reliant.",
  ] as const,
};

export const FOUNDATION_MISSION = [
  "Uplifting underprivileged and needy communities",
  "Promoting education and digital literacy",
  "Providing access to computers and digital equipment",
  "Conducting awareness and training camps",
  "Supporting students and educational institutions",
  "Encouraging entrepreneurship and employment",
  "Empowering women and girls",
  "Promoting women and child safety",
  "Supporting journalists and investigative journalism",
  "Encouraging artists and creative professionals",
  "Supporting social workers and volunteers",
  "Strengthening voluntary organisations",
  "Supporting schools and colleges",
  "Extending assistance to hospitals and community institutions",
  "Encouraging science and technology",
  "Recognising changemakers and community leaders",
  "Creating awareness about important social issues",
  "Building stronger and more digitally capable communities",
] as const;

export type FoundationProgramSection = {
  id: string;
  overline: string;
  title: string;
  paragraphs?: readonly string[];
  bullets?: readonly string[];
  closing?: string;
  pullQuote?: string;
};

export const foundationProgramSections: FoundationProgramSection[] = [
  {
    id: "digital-empowerment",
    overline: "DIGITAL EMPOWERMENT",
    title: "Bridging the Digital Divide",
    paragraphs: [
      "Digital access has become essential for education, employment, communication, entrepreneurship and participation in modern society. Yet many students, families, institutions and communities continue to face barriers because they lack access to appropriate digital equipment and knowledge.",
      "AP MEDIA Foundation works towards reducing this digital divide through initiatives such as:",
    ],
    bullets: [
      "Laptop & Computer Distribution — providing laptops and computers to deserving students, individuals, institutions and beneficiaries wherever support is identified as necessary.",
      "Digital Literacy Equipment — supporting access to digital-learning equipment and resources.",
      "Digital Awareness Camps — conducting programmes to introduce communities to digital technologies and their practical applications.",
      "Technology Training — encouraging people to learn and use technology for education, employment, entrepreneurship and personal development.",
    ],
    closing:
      "Our objective is not simply to distribute devices. Our objective is to create digitally empowered people.",
  },
  {
    id: "education",
    overline: "EDUCATION — THE FOUNDATION OF CHANGE",
    title: "Every Student Deserves a Chance",
    paragraphs: [
      "Education is one of the strongest instruments of social transformation. AP MEDIA Foundation supports deserving students through initiatives that may include:",
    ],
    bullets: [
      "Education sponsorships",
      "Learning equipment",
      "Digital devices",
      "Training programmes",
      "Educational awareness",
      "Institutional support",
      "Scholarships and assistance where possible",
      "Technology-enabled learning initiatives",
    ],
    closing:
      "We also support schools and colleges that work towards improving educational opportunities for students and communities. Our belief: A student's economic circumstances should never be allowed to determine the limits of their dreams.",
  },
  {
    id: "journalism",
    overline: "SUPPORTING JOURNALISTS & INVESTIGATIVE JOURNALISM",
    title: "Supporting Those Who Seek the Truth",
    paragraphs: [
      "A healthy society needs responsible journalism. AP MEDIA Foundation recognises the importance of journalists, investigative journalism and independent efforts to bring important public-interest issues to light.",
      "The Foundation supports initiatives involving:",
    ],
    bullets: [
      "Journalists",
      "Investigative journalism",
      "Media professionals",
      "Journalism-related training",
      "Public-interest information initiatives",
      "Digital journalism awareness",
      "Emerging media professionals",
    ],
    closing:
      "Where appropriate, the Foundation seeks to support individuals and initiatives that contribute to responsible journalism, public awareness and social accountability. Because an informed society is a stronger society.",
  },
  {
    id: "women",
    overline: "EMPOWERING WOMEN",
    title: "From Participation to Leadership",
    paragraphs: [
      "Women are not merely beneficiaries of social development. They are powerful agents of transformation.",
      "AP MEDIA Foundation promotes initiatives focused on:",
    ],
    bullets: [
      "Women empowerment",
      "Education and digital literacy",
      "Entrepreneurship",
      "Economic independence",
      "Leadership",
      "Skill development",
      "Awareness",
      "Safety and security",
      "Participation in technology and innovation",
    ],
    closing:
      "Our objective is to help create an environment in which women can learn, lead, earn, innovate and participate confidently in society.",
  },
  {
    id: "safety",
    overline: "WOMEN & CHILD SAFETY",
    title: "Protecting the Most Vulnerable",
    paragraphs: [
      "Safety is a fundamental social responsibility. AP MEDIA Foundation supports awareness and community initiatives related to:",
    ],
    bullets: [
      "Women safety",
      "Child safety",
      "Digital safety",
      "Cyber awareness",
      "Personal security awareness",
      "Prevention of exploitation and abuse",
      "Responsible technology usage",
      "Community vigilance",
    ],
    closing:
      "We believe that safety requires not only protection systems, but also awareness, education, preparedness and community participation.",
  },
  {
    id: "entrepreneurship",
    overline: "SUPPORTING ENTREPRENEURSHIP",
    title: "Turning Ideas Into Opportunities",
    paragraphs: [
      "Entrepreneurship can transform individuals, families and communities. AP MEDIA Foundation encourages aspiring entrepreneurs, innovators and small-business creators by promoting:",
    ],
    bullets: [
      "Entrepreneurship awareness",
      "Digital entrepreneurship",
      "Skill development",
      "Technology awareness",
      "Business guidance",
      "Networking opportunities",
      "Visibility and recognition",
      "Support for deserving initiatives",
    ],
    closing:
      "Our objective is to help people move from seeking opportunities to creating opportunities. A supported entrepreneur can potentially create opportunities for many others.",
  },
  {
    id: "arts",
    overline: "SUPPORTING ARTISTS & CREATIVE TALENT",
    title: "Talent Deserves a Platform",
    paragraphs: [
      "Society progresses not only through science and business, but also through art, culture and creativity.",
      "AP MEDIA Foundation supports and encourages deserving:",
    ],
    bullets: [
      "Artists",
      "Performers",
      "Creative professionals",
      "Emerging talent",
      "Cultural contributors",
      "Young creators",
    ],
    closing:
      "We believe talented people should receive opportunities to demonstrate their abilities and contribute to society.",
  },
  {
    id: "social-workers",
    overline: "SUPPORT FOR SOCIAL WORKERS & VOLUNTEERS",
    title: "Recognising Those Who Serve Without Expecting Recognition",
    paragraphs: [
      "Across communities, countless individuals dedicate their time and energy to helping others. AP MEDIA Foundation seeks to encourage:",
    ],
    bullets: [
      "Social workers",
      "Community volunteers",
      "Humanitarian initiatives",
      "Grassroots activists",
      "Community organisers",
      "Voluntary organisations",
    ],
    closing:
      "These individuals and organisations often work with limited resources while addressing significant social challenges. We believe their service deserves support, visibility and recognition.",
  },
  {
    id: "voluntary-orgs",
    overline: "SUPPORTING VOLUNTARY ORGANISATIONS",
    title: "Stronger Together",
    paragraphs: [
      "Many voluntary organisations work directly with communities and understand local needs better than anyone else.",
      "AP MEDIA Foundation seeks to collaborate with deserving Voluntary Organisations, NGOs and community initiatives working for genuine social benefit. Potential areas of collaboration include:",
    ],
    bullets: [
      "Awareness campaigns",
      "Education",
      "Digital literacy",
      "Women and child safety",
      "Community development",
      "Health awareness",
      "Social welfare",
      "Entrepreneurship",
      "Environmental initiatives",
      "Technology-enabled social programmes",
    ],
    closing:
      "By connecting resources with grassroots organisations, we can extend the reach and effectiveness of social initiatives.",
  },
  {
    id: "healthcare",
    overline: "SUPPORTING HOSPITALS & HEALTHCARE INSTITUTIONS",
    title: "Supporting Institutions That Serve Humanity",
    paragraphs: [
      "Healthcare institutions play an essential role in society. AP MEDIA Foundation supports and collaborates, where appropriate, with hospitals and healthcare institutions involved in community service and public welfare.",
      "Our broader social-support philosophy encourages initiatives that improve:",
    ],
    bullets: [
      "Public awareness",
      "Community health awareness",
      "Digital access",
      "Institutional capabilities",
      "Social support systems",
    ],
  },
  {
    id: "science",
    overline: "SCIENCE & TECHNOLOGY",
    title: "Encouraging the Minds That Will Build Tomorrow",
    paragraphs: [
      "Science and technology are among the most powerful forces shaping the future. AP MEDIA Foundation encourages:",
    ],
    bullets: [
      "Scientific thinking",
      "Technology awareness",
      "Innovation",
      "Research orientation",
      "Digital literacy",
      "Student innovation",
      "Emerging technologies",
      "Technology entrepreneurship",
    ],
    closing:
      "We especially believe in encouraging young people to move from being consumers of technology to creators of technology. Today's curious student can become tomorrow's scientist, engineer, inventor or technology leader.",
  },
  {
    id: "training-camps",
    overline: "AWARENESS & TRAINING CAMPS",
    title: "Knowledge Creates Capability",
    paragraphs: [
      "AP MEDIA Foundation conducts and supports awareness programmes, training camps, workshops and community education initiatives covering areas relevant to social development.",
      "These may include:",
    ],
    bullets: [
      "Digital literacy",
      "Cyber awareness",
      "Technology",
      "Education",
      "Entrepreneurship",
      "Women empowerment",
      "Child safety",
      "Media literacy",
      "Social awareness",
      "Skill development",
      "Community welfare",
    ],
    pullQuote: "Inform → Educate → Train → Empower",
  },
  {
    id: "changemakers",
    overline: "RECOGNISING CHANGE MAKERS",
    title: "Celebrating People Who Make a Difference",
    paragraphs: [
      "Not every hero is famous. Many of society's most valuable contributors work quietly in villages, schools, hospitals, communities, voluntary organisations, newsrooms, laboratories and social institutions.",
      "AP MEDIA Foundation believes such people deserve to be recognised. Through awards, honours, appreciation programmes and public recognition, the Foundation seeks to celebrate:",
    ],
    bullets: [
      "Changemakers",
      "Social workers",
      "Volunteers",
      "Teachers",
      "Students",
      "Scientists",
      "Entrepreneurs",
      "Journalists",
      "Artists",
      "Community leaders",
      "Institutions",
      "Organisations",
      "Technology innovators",
    ],
    pullQuote:
      "Recognition creates encouragement. Encouragement creates participation. Participation creates transformation.",
  },
];

export const FOUNDATION_ECOSYSTEM = {
  overline: "THE FG MEDIA GROUP CONNECTION",
  title: "Social Responsibility Powered by a Larger Ecosystem",
  paragraphs: [
    "AP MEDIA Foundation is part of the FG MEDIA GROUP, an ecosystem bringing together media, technology, innovation, safety and social-impact initiatives.",
    "The relationship creates opportunities to connect media, technology, education, awareness, community, innovation and social responsibility.",
    "The Foundation can leverage the wider ecosystem's communication and technology capabilities to amplify awareness, showcase social initiatives and connect people and organisations with opportunities.",
    "This reflects the broader FG Media philosophy of using information and technology as instruments of empowerment.",
  ] as const,
};

export const FOUNDATION_APPROACH = [
  { step: "Identify", text: "Understand genuine community needs." },
  { step: "Connect", text: "Bring together people, institutions, volunteers and resources." },
  { step: "Empower", text: "Provide knowledge, equipment, training and opportunities." },
  { step: "Enable", text: "Help beneficiaries develop greater independence and capability." },
  { step: "Recognise", text: "Celebrate people and institutions creating meaningful change." },
  { step: "Amplify", text: "Use media and technology to increase awareness and reach." },
] as const;

export const FOUNDATION_PHILOSOPHY_SECTION = {
  overline: "OUR SOCIAL IMPACT PHILOSOPHY",
  title: "Everyone Has Something to Contribute",
  intro:
    "We do not believe that social development belongs to governments, charities or foundations alone. It belongs to everyone.",
  contributions: [
    "A student can help another student.",
    "A professional can teach a skill.",
    "A business can sponsor education.",
    "A journalist can expose an important issue.",
    "A scientist can inspire young minds.",
    "An entrepreneur can create employment.",
    "A volunteer can reach someone in need.",
    "A technology professional can bridge the digital divide.",
    "A citizen can become a changemaker.",
  ] as const,
  closing:
    "Everyone has something to contribute. AP MEDIA Foundation seeks to create a platform where those contributions can come together.",
};

export const FOUNDATION_COMMITMENT = {
  overline: "OUR COMMITMENT",
  title: "People-Centred, Impact-Focused Programmes",
  traits: [
    "People-Centred",
    "Need-Based",
    "Inclusive",
    "Transparent in Purpose",
    "Technology-Enabled",
    "Community-Oriented",
    "Impact-Focused",
  ] as const,
  closing:
    "Our aim is to reach people who are often overlooked and help convert disadvantage into opportunity wherever our resources and partnerships permit.",
};

export const FOUNDATION_FUTURE = {
  overline: "THE FUTURE WE WANT TO BUILD",
  title: "Communities Where Opportunity Is Inclusive",
  visions: [
    "Every child has the opportunity to learn.",
    "Every deserving student can access technology.",
    "Every woman can live, learn and work with confidence.",
    "Every child deserves safety and protection.",
    "Every entrepreneur can dream beyond their circumstances.",
    "Every journalist committed to public interest can be supported.",
    "Every artist can find an opportunity to express talent.",
    "Every volunteer and social worker can receive recognition.",
    "Every community can access digital knowledge.",
    "Every young mind can explore science and technology.",
    "Every genuine changemaker can inspire others.",
  ] as const,
};

export const FOUNDATION_CLOSING = {
  tagline: "For Society. For Humanity. For a Better Tomorrow.",
  paragraphs: [
    "AP MEDIA Foundation is committed to building a society where knowledge is accessible, technology is empowering, opportunity is inclusive and human dignity is respected.",
    "We work to support those who need a helping hand—and, wherever possible, transform that helping hand into a pathway towards independence and empowerment.",
    "We don't just support people. We strive to empower them. We don't just recognise change. We strive to create more changemakers. We don't just talk about the future. We work with communities to build it.",
  ] as const,
  footerLine:
    "Empowering the Needy. Educating Communities. Bridging the Digital Divide. Supporting Talent. Protecting the Vulnerable. Encouraging Innovation. Recognising Changemakers.",
  cta: "Together, We Can Make Society Stronger.",
};

/** Summary cards for homepage section */
export const FOUNDATION_INITIATIVES = [
  {
    title: "Digital Empowerment",
    text: "Bridging the digital divide through laptops, digital literacy camps, and technology training.",
  },
  {
    title: "Education",
    text: "Sponsorships, learning equipment, and institutional support so economic circumstances never limit dreams.",
  },
  {
    title: "Journalism",
    text: "Supporting journalists, investigative reporting, and public-interest media initiatives.",
  },
  {
    title: "Women Empowerment",
    text: "Education, entrepreneurship, leadership, and participation in technology and innovation.",
  },
  {
    title: "Safety",
    text: "Women and child safety, cyber awareness, and community vigilance programmes.",
  },
  {
    title: "Entrepreneurship",
    text: "Helping people move from seeking opportunities to creating opportunities.",
  },
  {
    title: "Arts & Talent",
    text: "Platforms for artists, performers, and young creators to contribute to society.",
  },
  {
    title: "Science & Technology",
    text: "Encouraging young minds to become creators—not just consumers—of technology.",
  },
] as const;
