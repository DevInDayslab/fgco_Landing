import { paymentDetails } from "@/data/awards";
import type { LegalDocument } from "@/data/legal";
import {
  LEGAL_BRAND,
  LEGAL_CONTACT,
  LEGAL_EFFECTIVE_DATE,
  LEGAL_ENTITY,
  LEGAL_GST,
  LEGAL_JURISDICTION,
} from "@/data/legal";

const nominationFee = `₹${paymentDetails.nominationFeeInr.toLocaleString("en-IN")}`;
const gstRate = paymentDetails.gstRate;

export const termsAndConditions: LegalDocument = {
  title: "Terms & Conditions",
  subtitle: `Rules governing use of ${LEGAL_BRAND} websites, platforms, nominations, sponsorships, and related services.`,
  lastUpdated: LEGAL_EFFECTIVE_DATE,
  sections: [
    {
      id: "introduction",
      title: "1. Introduction & Acceptance",
      paragraphs: [
        `These Terms and Conditions ("Terms") govern access to and use of the websites, applications, nomination portals, sponsorship programmes, events, and related services operated by ${LEGAL_ENTITY} ("FG Media", "we", "us", or "our"), including ${LEGAL_CONTACT.website} and associated HIT ViERA Awards properties.`,
        "By accessing our website, submitting a nomination, registering for sponsorship, making a payment, contacting us, or otherwise using our services, you agree to be bound by these Terms, our Privacy Policy, Refund Policy, and Cancellation Policy. If you do not agree, you must not use our services.",
        "If you are acting on behalf of an organisation, you represent that you have authority to bind that organisation to these Terms.",
      ],
    },
    {
      id: "services",
      title: "2. Our Services",
      paragraphs: [
        `${LEGAL_BRAND} provides media, technology, awards, event management, sponsorship, and related digital services, including but not limited to:`,
      ],
      bullets: [
        "Multilingual journalism and publication services through HIT News, Happy India Times, and Kurukshetra.",
        "Technology platforms including InViGIL and ViERA.",
        "The HIT ViERA National Awards and associated recognition programmes.",
        "Official nomination and sponsorship portals for awards and events.",
        "Corporate partnerships, advertising, and event participation opportunities.",
      ],
    },
    {
      id: "eligibility",
      title: "3. Eligibility & Account Responsibility",
      paragraphs: [
        "You must be at least 18 years of age, or the age of majority in your jurisdiction, to submit nominations, enter sponsorship agreements, or make payments through our platforms.",
        "You are responsible for maintaining the confidentiality of any credentials, reference numbers, or access details associated with your submissions. You agree to provide accurate, complete, and current information at all times.",
        "We reserve the right to refuse service, suspend access, or reject submissions that violate these Terms or applicable law.",
      ],
    },
    {
      id: "website-use",
      title: "4. Permitted Use of the Website",
      paragraphs: [
        "You may use our website and portals only for lawful purposes and in accordance with these Terms. You agree not to:",
      ],
      bullets: [
        "Use the website in any way that violates applicable Indian or international law.",
        "Attempt to gain unauthorised access to our systems, admin areas, databases, or payment infrastructure.",
        "Upload malicious code, scrape content at scale, or interfere with website performance or security.",
        "Misrepresent your identity, affiliation, or authority when submitting nominations or sponsorship requests.",
        "Use our brands, logos, or copyrighted materials without prior written consent.",
      ],
    },
    {
      id: "nominations",
      title: "5. Awards & Nominations",
      subsections: [
        {
          title: "5.1 Nomination submissions",
          paragraphs: [
            "The HIT ViERA National Awards nomination portal allows individuals and organisations to submit applications for consideration by an independent jury. Submission of a nomination does not guarantee selection, shortlisting, or an award.",
            `A non-refundable nomination processing fee of ${nominationFee} plus applicable GST (${gstRate}) may be required to complete a nomination, unless otherwise stated on the portal at the time of submission.`,
          ],
        },
        {
          title: "5.2 Accuracy and authenticity",
          bullets: [
            "All information, documents, photographs, videos, and supporting materials must be accurate, authentic, and lawfully provided.",
            "You warrant that you have the right to submit all content and to grant FG Media the rights described in the nomination declaration.",
            "False, misleading, plagiarised, or defamatory submissions may result in disqualification without refund.",
          ],
        },
        {
          title: "5.3 Jury decisions",
          paragraphs: [
            "All evaluation, shortlisting, and award decisions are made at the sole discretion of the HIT ViERA jury and organising committee. Decisions are final and binding, subject only to applicable law.",
            "FG Media may verify credentials, conduct background checks, and request additional documentation before confirming finalists or winners.",
          ],
        },
        {
          title: "5.4 Publicity rights",
          paragraphs: [
            "By submitting a nomination, you grant FG Media a non-exclusive, royalty-free licence to use submitted names, biographies, images, and related materials for evaluation, publicity, publications, event programmes, digital media, and post-event recognition, unless otherwise agreed in writing.",
          ],
        },
      ],
    },
    {
      id: "sponsorship",
      title: "6. Sponsorship Programmes",
      subsections: [
        {
          title: "6.1 Sponsorship tiers and reservation",
          paragraphs: [
            "Sponsorship opportunities for the HIT ViERA National Awards and related events are offered in designated tiers (including Super, Power, Golden, and Silver ViERA Sponsor categories) on a first-come, first-served basis, subject to availability and internal approval.",
            "A sponsorship request or online registration does not create a binding contract until confirmed in writing by FG Media and the required advance payment is received.",
          ],
        },
        {
          title: "6.2 Payment schedule",
          bullets: [
            `Unless otherwise specified in your sponsorship confirmation, a minimum advance of ${paymentDetails.advancePercent} of the total sponsorship value is required to reserve a sponsorship slot.`,
            `The remaining balance must be paid at least ${paymentDetails.balanceDueDays} days before the scheduled event date.`,
            `All amounts are subject to GST at ${gstRate}. GSTIN: ${LEGAL_GST}. Official tax invoices will be issued upon receipt of payment.`,
            "Payments may be made through our authorised payment gateway (Razorpay) or other methods approved by FG Media.",
          ],
        },
        {
          title: "6.3 Deliverables and brand usage",
          paragraphs: [
            "Sponsorship benefits, branding placements, media schedules, and deliverables are as described in the applicable sponsorship proposal, confirmation letter, or event kit. FG Media may modify non-material deliverables for operational, editorial, or legal reasons while preserving substantially equivalent value.",
            "Sponsors must submit brand assets, approvals, and content within agreed timelines. Delays caused by the sponsor may reduce or postpone deliverables without liability to FG Media.",
          ],
        },
      ],
    },
    {
      id: "payments",
      title: "7. Payments, Pricing & Taxes",
      paragraphs: [
        "All fees, sponsorship amounts, and service charges are quoted in Indian Rupees (INR) unless stated otherwise.",
        "You are responsible for any bank charges, currency conversion costs, or third-party transaction fees imposed by your payment provider.",
        "Pricing, tier availability, and programme details may change prior to confirmation. Confirmed engagements will honour the pricing stated in your written confirmation.",
      ],
    },
    {
      id: "ip",
      title: "8. Intellectual Property",
      paragraphs: [
        `All website content, logos, trademarks, publications, software, event materials, and proprietary technology (including InViGIL and ViERA) are owned by or licensed to ${LEGAL_ENTITY} and protected by applicable intellectual property laws.`,
        "No rights are granted to you except the limited right to access and use the website and services in accordance with these Terms.",
      ],
    },
    {
      id: "disclaimers",
      title: "9. Disclaimers",
      paragraphs: [
        'Our website and services are provided on an "as is" and "as available" basis. To the fullest extent permitted by law, FG Media disclaims all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement.',
        "We do not warrant uninterrupted or error-free operation of the website, payment gateway, or third-party integrations.",
        "Editorial content, award descriptions, and forward-looking statements on our platforms are for informational purposes and do not constitute professional, legal, or investment advice.",
      ],
    },
    {
      id: "liability",
      title: "10. Limitation of Liability",
      paragraphs: [
        `To the maximum extent permitted under Indian law, ${LEGAL_ENTITY} shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, goodwill, data, or business opportunity, arising from your use of our services.`,
        "Our aggregate liability for any claim relating to these Terms or our services shall not exceed the amount paid by you to FG Media for the specific service giving rise to the claim in the twelve (12) months preceding the event, except where liability cannot be limited by law.",
      ],
    },
    {
      id: "indemnity",
      title: "11. Indemnity",
      paragraphs: [
        "You agree to indemnify and hold harmless FG Media, its directors, officers, employees, partners, and affiliates from any claims, losses, damages, liabilities, and expenses (including reasonable legal fees) arising from your breach of these Terms, inaccurate submissions, infringement of third-party rights, or unlawful use of our services.",
      ],
    },
    {
      id: "law",
      title: "12. Governing Law & Disputes",
      paragraphs: [
        `These Terms are governed by the laws of India. Courts at ${LEGAL_JURISDICTION} shall have exclusive jurisdiction, subject to applicable consumer protection laws.`,
        "Before initiating formal proceedings, parties agree to attempt good-faith resolution by contacting us at the details below. Nothing in this clause limits your statutory rights as a consumer under applicable law.",
      ],
    },
    {
      id: "changes",
      title: "13. Changes to These Terms",
      paragraphs: [
        "We may update these Terms from time to time. The revised version will be posted on this page with an updated date. Material changes may also be communicated via email or website notice where appropriate. Continued use after changes constitutes acceptance.",
      ],
    },
  ],
};

export const privacyPolicy: LegalDocument = {
  title: "Privacy Policy",
  subtitle: `How ${LEGAL_BRAND} collects, uses, stores, and protects personal information.`,
  lastUpdated: LEGAL_EFFECTIVE_DATE,
  sections: [
    {
      id: "overview",
      title: "1. Overview",
      paragraphs: [
        `${LEGAL_ENTITY} ("FG Media", "we", "us") respects your privacy and is committed to protecting personal data in accordance with applicable Indian law, including the Digital Personal Data Protection Act, 2023 ("DPDP Act"), and other relevant regulations.`,
        "This Privacy Policy explains what information we collect when you visit our website, submit nominations, register for sponsorship, contact us, make payments, or interact with our events and platforms.",
      ],
    },
    {
      id: "controller",
      title: "2. Data Controller",
      paragraphs: [
        `Data Controller: ${LEGAL_ENTITY}`,
        `Registered office: ${LEGAL_CONTACT.address}`,
        `Email: ${LEGAL_CONTACT.email} | Awards: ${LEGAL_CONTACT.awardsEmail} | Phone: ${LEGAL_CONTACT.phone}`,
      ],
    },
    {
      id: "collection",
      title: "3. Information We Collect",
      subsections: [
        {
          title: "3.1 Information you provide",
          bullets: [
            "Identity and contact details: name, email, phone, address, organisation, designation.",
            "Nomination data: nominee profiles, biographies, achievements, category selections, supporting documents, photographs, and videos.",
            "Sponsorship data: company name, billing details, GSTIN, authorised signatory information, and brand assets.",
            "Payment-related information: transaction references and billing records (card or UPI details are processed by our payment gateway and not stored by us in full).",
            "Communications: messages sent through contact forms, email, WhatsApp, or event enquiries.",
          ],
        },
        {
          title: "3.2 Information collected automatically",
          bullets: [
            "Device and browser information, IP address, and general location derived from IP.",
            "Usage data such as pages visited, referral source, session duration, and interaction events.",
            "Cookies and similar technologies as described in Section 9.",
          ],
        },
        {
          title: "3.3 Information from third parties",
          bullets: [
            "Payment confirmation and fraud-prevention signals from Razorpay or other authorised processors.",
            "Publicly available information used for verification of nominations or due diligence.",
            "Referrals or introductions provided by partners with your consent.",
          ],
        },
      ],
    },
    {
      id: "use",
      title: "4. How We Use Your Information",
      bullets: [
        "To process nominations, sponsorship registrations, payments, and event participation.",
        "To evaluate award applications, communicate with nominees, nominators, and sponsors.",
        "To issue invoices, receipts, GST documentation, and transactional correspondence.",
        "To publish award-related content, event programmes, media coverage, and promotional materials.",
        "To respond to enquiries and provide customer support.",
        "To improve website performance, security, and user experience.",
        "To comply with legal obligations, prevent fraud, and enforce our Terms.",
        "To send programme updates, event notices, and marketing communications where permitted by law and your preferences.",
      ],
    },
    {
      id: "legal-basis",
      title: "5. Legal Basis for Processing",
      paragraphs: [
        "Under the DPDP Act and applicable law, we process personal data based on one or more of the following grounds:",
      ],
      bullets: [
        "Your consent, including consent provided when submitting forms or accepting declarations.",
        "Performance of a contract or steps taken at your request before entering a contract.",
        "Compliance with legal obligations, including tax, accounting, and regulatory requirements.",
        "Legitimate interests such as event administration, security, fraud prevention, and service improvement, where not overridden by your rights.",
      ],
    },
    {
      id: "sharing",
      title: "6. How We Share Information",
      paragraphs: [
        "We do not sell personal data. We may share information only as necessary:",
      ],
      bullets: [
        "With payment processors (e.g. Razorpay) to complete transactions securely.",
        "With jury members, event partners, auditors, and service providers bound by confidentiality obligations.",
        "With publication, production, and media teams for award coverage and sponsor deliverables.",
        "With legal, regulatory, or law enforcement authorities when required by law or to protect rights and safety.",
        "In connection with a merger, restructuring, or business transfer, subject to appropriate safeguards.",
      ],
    },
    {
      id: "retention",
      title: "7. Data Retention",
      paragraphs: [
        "We retain personal data only for as long as necessary for the purposes described in this policy, including:",
      ],
      bullets: [
        "Nomination and sponsorship records: for the duration of the awards cycle and a reasonable period thereafter for audit, dispute resolution, and archival purposes.",
        "Financial and tax records: as required under Indian tax and company law (typically up to eight years or longer if legally required).",
        "Marketing preferences: until you withdraw consent or object to processing.",
        "Website logs and security data: for a limited period consistent with security and analytics needs.",
      ],
    },
    {
      id: "security",
      title: "8. Security",
      paragraphs: [
        "We implement administrative, technical, and organisational measures designed to protect personal data, including access controls, encryption in transit where supported, secure hosting practices, and staff confidentiality obligations. FG Media maintains ISO 27001 certified information security management practices.",
        "No method of transmission or storage is completely secure. You are responsible for safeguarding credentials and devices used to access our services.",
      ],
    },
    {
      id: "cookies",
      title: "9. Cookies & Analytics",
      paragraphs: [
        "We use cookies and similar technologies to enable core website functionality, remember preferences, analyse traffic, and improve performance. You may control cookies through your browser settings. Disabling certain cookies may affect site functionality.",
        "We may use third-party analytics or embedded services (such as maps or payment widgets) that collect information according to their own privacy policies.",
      ],
    },
    {
      id: "rights",
      title: "10. Your Rights",
      paragraphs: [
        "Subject to applicable law, including the DPDP Act, you may have the right to:",
      ],
      bullets: [
        "Access personal data we hold about you.",
        "Request correction of inaccurate or incomplete data.",
        "Withdraw consent where processing is consent-based.",
        "Request erasure or restriction of processing in certain circumstances.",
        "Nominate a grievance redressal contact as permitted under law.",
        "To exercise these rights, contact us using the details in Section 12. We may need to verify your identity before responding.",
      ],
    },
    {
      id: "children",
      title: "11. Children's Privacy",
      paragraphs: [
        "Our nomination and sponsorship services are not directed at individuals under 18. We do not knowingly collect personal data from children without appropriate parental or guardian consent. If you believe we have collected data from a minor improperly, please contact us for deletion.",
      ],
    },
    {
      id: "grievance",
      title: "12. Grievance & Contact",
      paragraphs: [
        `For privacy questions, data access requests, or complaints, contact our Grievance Officer at ${LEGAL_CONTACT.email} with the subject line "Privacy Request".`,
        "We aim to acknowledge requests within 7 business days and resolve them within timelines prescribed by applicable law.",
      ],
    },
    {
      id: "updates",
      title: "13. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy periodically. The latest version will always be available on this page with the updated date. Material changes may be communicated through the website or email where appropriate.",
      ],
    },
  ],
};

export const refundPolicy: LegalDocument = {
  title: "Refund Policy",
  subtitle: "Conditions under which payments for nominations, sponsorships, and related services may be refunded.",
  lastUpdated: LEGAL_EFFECTIVE_DATE,
  sections: [
    {
      id: "scope",
      title: "1. Scope",
      paragraphs: [
        `This Refund Policy applies to payments made to ${LEGAL_ENTITY} through ${LEGAL_CONTACT.website}, the HIT ViERA Awards nomination portal, sponsorship registration flows, and other authorised FG Media payment channels.`,
        "This policy should be read together with our Terms & Conditions, Cancellation Policy, and Privacy Policy.",
      ],
    },
    {
      id: "general",
      title: "2. General Principles",
      bullets: [
        "All refund requests are assessed on a case-by-case basis in accordance with this policy, your confirmation documents, and applicable Indian consumer protection law.",
        "Approved refunds are processed to the original payment method wherever technically possible.",
        "Payment gateway charges, bank fees, or currency conversion costs may be non-refundable.",
        "GST-compliant credit notes or revised invoices will be issued where applicable.",
      ],
    },
    {
      id: "nominations",
      title: "3. Nomination Fees",
      subsections: [
        {
          title: "3.1 Standard policy",
          paragraphs: [
            `The nomination processing fee of ${nominationFee} plus GST (${gstRate}) is generally non-refundable once payment is successfully completed and the nomination is submitted for jury review.`,
            "This fee covers application processing, verification, platform costs, and administrative review.",
          ],
        },
        {
          title: "3.2 Refundable circumstances",
          bullets: [
            "Duplicate payment for the same nomination reference, where only one valid submission exists.",
            "Payment debited but nomination not recorded due to a confirmed technical failure on our systems.",
            "Nomination rejected solely because the category or programme was closed in error by FG Media before your submission timestamp.",
            "Event or nomination cycle cancelled by FG Media without rescheduling, unless an alternative remedy is offered.",
          ],
        },
        {
          title: "3.3 Non-refundable circumstances",
          bullets: [
            "Change of mind after submission.",
            "Disqualification due to inaccurate, incomplete, or ineligible submissions.",
            "Failure to provide requested verification documents within stipulated timelines.",
            "Non-selection, non-shortlisting, or non-award by the jury.",
          ],
        },
      ],
    },
    {
      id: "sponsorship",
      title: "4. Sponsorship Payments",
      subsections: [
        {
          title: "4.1 Advance payments",
          paragraphs: [
            `Sponsorship slots are reserved upon receipt of the required advance (${paymentDetails.advancePercent} of total sponsorship value, unless otherwise stated in your confirmation). Advance amounts may be partially or fully non-refundable once production, media scheduling, or brand placement work has commenced.`,
          ],
        },
        {
          title: "4.2 Refund eligibility",
          bullets: [
            "Cancellation requested in writing before sponsorship confirmation and before any deliverable production begins: full refund of amounts paid, minus payment gateway charges where applicable.",
            "Cancellation after confirmation but before publication or production milestones: partial refund at FG Media's discretion, offsetting reasonable costs incurred.",
            "Cancellation after deliverables have been published, printed, or aired: no refund for completed or in-progress deliverables.",
            "If FG Media cancels the event or cannot allocate the confirmed sponsorship tier, a full refund or credit toward a rescheduled event will be offered.",
          ],
        },
      ],
    },
    {
      id: "failed-payments",
      title: "5. Failed, Duplicate & Pending Transactions",
      paragraphs: [
        "If your account is debited but our system does not record a successful payment, contact us within 7 business days with transaction proof. We will verify with our payment gateway and either fulfil the service or initiate a refund.",
        "Duplicate transactions verified by our finance team will be refunded within 10–15 business days.",
      ],
    },
    {
      id: "processing",
      title: "6. Refund Processing Timeline",
      bullets: [
        "Refund requests are acknowledged within 3–5 business days of receipt of complete information.",
        "Approved refunds are typically initiated within 7–10 business days.",
        "Credit to your bank account or original payment method may take an additional 5–10 business days depending on your bank or payment provider.",
      ],
    },
    {
      id: "chargebacks",
      title: "7. Chargebacks & Disputes",
      paragraphs: [
        "Initiating a chargeback without first contacting us may delay resolution and could affect your eligibility for future programmes. We cooperate with payment partners and provide transaction records to resolve legitimate disputes.",
        "Fraudulent chargeback claims may result in suspension from future nominations, sponsorships, or platform access.",
      ],
    },
    {
      id: "requests",
      title: "8. How to Request a Refund",
      paragraphs: [
        "Email refund requests to the appropriate address with your full name, organisation (if any), payment reference/transaction ID, date of payment, amount, and reason for the request:",
      ],
      bullets: [
        `Nominations & awards: ${LEGAL_CONTACT.awardsEmail}`,
        `Sponsorship & corporate payments: ${LEGAL_CONTACT.email}`,
        `Phone / WhatsApp: ${LEGAL_CONTACT.phone}`,
      ],
    },
  ],
};

export const cancellationPolicy: LegalDocument = {
  title: "Cancellation Policy",
  subtitle: "Rules for cancelling nominations, sponsorships, and event participation with FG Media.",
  lastUpdated: LEGAL_EFFECTIVE_DATE,
  sections: [
    {
      id: "scope",
      title: "1. Scope",
      paragraphs: [
        `This Cancellation Policy describes how cancellations are handled for HIT ViERA National Awards nominations, sponsorship agreements, event registrations, and related services offered by ${LEGAL_ENTITY}.`,
        "Cancellation may affect refund eligibility as described in our Refund Policy.",
      ],
    },
    {
      id: "nominations",
      title: "2. Nomination Cancellations & Withdrawals",
      subsections: [
        {
          title: "2.1 Voluntary withdrawal",
          paragraphs: [
            "You may request withdrawal of a nomination by emailing us with your application reference number. Withdrawal requests must come from the submitting party or an authorised representative.",
            "Withdrawal does not automatically entitle you to a refund of the nomination fee once jury review or verification has commenced.",
          ],
        },
        {
          title: "2.2 Cancellation by FG Media",
          bullets: [
            "We may cancel or reject nominations that violate our Terms, contain false information, or fall outside programme eligibility.",
            "We may remove submissions that pose legal, reputational, or security risks to the event or participants.",
          ],
        },
      ],
    },
    {
      id: "sponsorship",
      title: "3. Sponsorship Cancellations",
      subsections: [
        {
          title: "3.1 Cancellation by sponsor",
          paragraphs: [
            "Sponsors wishing to cancel must submit written notice to the email address on their sponsorship confirmation. Cancellation takes effect upon written acknowledgement by FG Media.",
          ],
          bullets: [
            `Before slot confirmation and before any production work: cancellation may qualify for a full refund of amounts paid, subject to the Refund Policy.`,
            `After confirmation but more than ${paymentDetails.balanceDueDays + 15} days before the event: partial refund may be considered after deducting planning, design, and reservation costs.`,
            `Within ${paymentDetails.balanceDueDays} days of the event or after deliverables have begun: sponsorship fees are generally non-cancellable and non-refundable except as required by law.`,
            "Failure to pay the balance by the due date may be treated as sponsor cancellation and may result in forfeiture of the reserved slot and amounts paid.",
          ],
        },
        {
          title: "3.2 Cancellation by FG Media",
          paragraphs: [
            "FG Media may cancel a sponsorship allocation if payment is not received as agreed, brand assets violate guidelines, or the sponsor's conduct is inconsistent with event values or applicable law.",
            "If we cancel a confirmed sponsorship due to our inability to deliver the agreed tier, we will offer a comparable alternative, credit, or refund in accordance with the Refund Policy.",
          ],
        },
        {
          title: "3.3 Substitution and tier changes",
          paragraphs: [
            "Sponsors may request a change of tier or substitution of authorised representative subject to availability and written approval. Price differences and production timelines may apply.",
          ],
        },
      ],
    },
    {
      id: "events",
      title: "4. Event Postponement, Relocation & Cancellation",
      paragraphs: [
        "FG Media reserves the right to postpone, relocate, or modify the format of the HIT ViERA National Awards or related events due to operational, safety, regulatory, or force majeure circumstances.",
      ],
      bullets: [
        "Postponement: Sponsorship and participation benefits will carry forward to the rescheduled date unless otherwise agreed. Nomination cycles may be extended or transferred as announced.",
        "Relocation within the same city or region: Programmes will continue with reasonable adjustments to logistics.",
        "Full cancellation by FG Media: Affected sponsors and paid participants will be offered refunds or credits as outlined in the Refund Policy.",
      ],
    },
    {
      id: "force-majeure",
      title: "5. Force Majeure",
      paragraphs: [
        "Neither party shall be liable for failure or delay in performance caused by events beyond reasonable control, including natural disasters, epidemics, government restrictions, strikes, utility failures, war, civil unrest, or internet/telecom outages.",
        "In such cases, FG Media will communicate alternative arrangements and applicable refund or credit options as soon as practicable.",
      ],
    },
    {
      id: "notice",
      title: "6. Notice Requirements",
      paragraphs: [
        "All cancellation requests must be sent in writing by email from the registered contact used during registration. Verbal or social media messages alone do not constitute valid cancellation notice.",
        "Include your name, organisation, reference/transaction ID, sponsorship tier or nomination category, and preferred resolution (withdrawal, postponement, or refund request).",
      ],
    },
    {
      id: "contact",
      title: "7. Contact for Cancellations",
      bullets: [
        `Awards & nominations: ${LEGAL_CONTACT.awardsEmail}`,
        `Sponsorship & partnerships: ${LEGAL_CONTACT.email}`,
        `Phone / WhatsApp: ${LEGAL_CONTACT.phone}`,
        `Office: ${LEGAL_CONTACT.address}`,
      ],
    },
  ],
};
