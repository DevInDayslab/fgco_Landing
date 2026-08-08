FG Media Group - Screen-wise UI & UX Functional Design Document
​1. Global Simulator Wrapper (Prototype Router)
​Purpose: Provide stakeholders with a contained environment to preview the application across different device form factors (Desktop, Tablet, Mobile) without needing physical devices.
​Top Control Bar: Fixed at the top, bypassing the app's scrolling.
​Screen Selector: A dropdown menu mapping to the 9 primary screens (Home, About, Media, Technology, Operations, Awards, Nominate, Sponsorship, Dashboard). Changing the selection updates the active view and resets the scroll position.
​Device Viewport Toggles: Three buttons (Mobile, Tablet, Desktop) that dynamically apply CSS styles (width, height, border-radius, border-width) to the inner application container to mimic device frames.
​Container Stage: A carbon-fibre textured background that houses the application viewport, creating a distinct separation between the testing environment and the actual app UI.
​2. Global Application Layout
​Purpose: Maintain navigation consistency across the public-facing application.
​Sticky Navbar: * Branding: "FG MEDIA GROUP" logo with a golden gradient text effect.
​Desktop Links: Tab-based navigation with a glowing amber underline effect for the active state.
​Dashboard CTA: A prominent, gradient-filled button directing to the Admin Dashboard.
​Mobile Menu: A hamburger icon triggering a dropdown menu for smaller viewports. Automatically closes when a new route is selected.
​Global Footer: Dark-themed footer containing a brief company bio, social media icons, quick links, and contact information.
​3. Screen-by-Screen Functional Breakdown
​Screen 1: Home View (/home)
​UX Goal: Deliver a high-impact, premium introduction to the brand ecosystem.
​Hero Section: Full viewport height with a dark, blurred gradient background. Features a large, elegant headline ("Recognising Excellence. Celebrating Vision.").
​Primary CTAs: Two main buttons: "Discover InViGIL" (routes to Technology) and "HIT ViERA Awards" (routes to Awards).
​Ecosystem Grid: Four interactive cards (Media Wing, Technology, Excellence Awards, Special Operations) that provide a quick overview of the company's pillars. Clicking a card navigates to its respective detailed screen.
​Screen 2: About Us (/about)
​UX Goal: Establish corporate identity, vision, and leadership credibility.
​Content Blocks: Split layout detailing the Vision and Mission statements.
​Leadership Card: A stylized, offset profile card for the CEO/Publisher featuring a quote about recognizing excellence, establishing a personal connection with the brand's mission.
​Screen 3: Media Wing (/media)
​UX Goal: Showcase the diverse portfolio of news publications.
​Publication Grid: Four distinct cards representing HIT NEWS, Happy India Times, AP MEDIA, and Kurukshetra.
​Visual Indicators: Each card includes an "EST. 2024" badge and color-coded headers (e.g., Red for HIT NEWS) to distinguish regional vs. national scope.
​Screen 4: Technology - InViGIL (/technology)
​UX Goal: Explain complex technological concepts (Virtual Commerce, AI, Security) in an accessible, visually engaging manner.
​Header: Introduces InViGIL as the "World's First Virtual Commerce Platform."
​Feature Grid: Three cards detailing Global Talent Capital, Unprecedented Security, and Virtual Commerce.
​IPS & Cyber Commandos: A dedicated section explaining social initiatives (rural empowerment via global crop auctions) and security measures (Cyber Commandos). Features a spinning, animated radar/intelligence graphic representing "ViERA".
​Screen 5: Operations (/operations)
​UX Goal: Highlight specialized business divisions.
​Grid Layout: Displays four operational wings (Automobile, Supply Chain, Investigations, E-Commerce) with accompanying icons and brief functional descriptions.
​Screen 6: Awards Hub (/awards)
​UX Goal: Serve as the central landing page for the HIT ViERA National Awards.
​Action Header: Prominent CTAs for "Submit Nomination" and "Sponsorship Opportunities."
​Tiered Categories: A visual hierarchy of the top three awards (Champion of India, Pride of India, Chakra Award) displaying their respective cash prizes (₹5L, ₹3L, ₹1L) and perks.
​Process Timeline: A horizontal, step-by-step visual tracker explaining the transparent 7-step selection process from Nomination to Awards Night.
​Screen 7: Nomination Form (/nominate)
​UX Goal: Provide a seamless, multi-step data collection experience with AI assistance.
​Form Sections: Broken down logically into Nominator Info, Nominee Details, and Justifications.
​ViERA Co-Pilot (AI Integration): A specialized text input where users can type brief bullet points. Clicking "Draft Summary" triggers an API call to Google Gemini to generate a professional 100-word executive summary for the nomination.
​File Uploads: Styled drop-zones for profile photos and supporting documents.
​Simulated Submission: Intercepts the form submit, displays a 4-second success animation (green checkmark), and automatically routes the user back to the Awards Hub.
​Screen 8: Sponsorship Form (/sponsorship)
​UX Goal: Facilitate corporate sponsorship applications.
​Tier Selection: Four interactive tier cards (Platinum, Gold, Silver, Bronze). The user must select a tier to enable the submit button.
​Registration Form: Captures company details. Features the same simulated submission and auto-routing UX as the Nomination form.
​Screen 9: Admin Dashboard (/dashboard)
​UX Goal: Provide a restricted, analytical view for platform administrators.
​Layout: A sidebar navigation (collapsible on mobile) and a main content area, replacing the standard public Navbar/Footer.
​Metrics Row: Four statistic cards displaying Total Nominations, Pending Reviews, Sponsorship Funds, and Confirmed Juries with percentage change indicators.
​Data Table: A responsive table listing recent nominations with color-coded status badges (Shortlisted, Reviewing, Pending, Rejected).
​4. Global Interactive Feature: ViERA AI Assistant
​UX Goal: Offer contextual help and engagement across all public screens.
​Floating Action Button (FAB): Positioned bottom-right. Pulses to attract attention.
​Chat UI: A sliding chat window. Supports automatic scrolling to the newest message.
​API Integration: Connects to the Google Gemini AI, instructed to act as "ViERA" (Virtual Intelligence Enabled Real Actor), maintaining a professional and elegant persona to answer user queries about the platform. Includes a "Processing..." loading state.


no viera chatbot for now 

HIT ViERA NATIONAL AWARDS 2026
Recognising Excellence. Celebrating Vision. Inspiring the
Future.
Presented by
FG Media Group
INVITATION
Dear Sir/Madam,
Greetings from FG Media and Safety Technologies Pvt. Ltd.
It is our distinct privilege to invite you to participate in the HIT ViERA
National Awards 2026, one of India's most prestigious national recognition
platforms dedicated to celebrating excellence, leadership, innovation and
distinguished service to society.
The HIT ViERA National Awards honour extraordinary individuals,
institutions, entrepreneurs, innovators, researchers, professionals, public
leaders, educators, creators and visionary organisations whose outstanding
achievements are transforming industries, empowering communities and
contributing to the progress of India.
An award is far more than a symbol of recognition. It represents credibility,
integrity, excellence and enduring achievement. It reflects years of
dedication, perseverance, innovation and leadership while inspiring future
generations to pursue excellence with purpose and responsibility.The HIT ViERA National Awards 2026 are established to recognise
individuals and organisations whose contributions create meaningful and
measurable impact across society.
Our Vision
To identify India's finest achievers, celebrate their accomplishments and
inspire a new generation of visionary leaders who will shape the future of
the nation and represent India with distinction on the global stage.
ViERA Signature National Awards 2026
ViERA Champion of India Award 2026
The Highest Honour of the HIT ViERA National Awards
National Grand Winner
The recipient will receive:
●
●
●
●
●
●
●
●
●
Cash Award of ₹5,00,000
Grand Crystal Trophy
Gold Medal
Certificate of National Excellence
One-Year Corporate Sponsorship valued at ₹5,00,000
National Media Recognition
Exclusive Cover Feature
Brand Ambassador Opportunities
Lifetime Recognition in the HIT ViERA Hall of Excellence
ViERA Pride of India Award 2026National Excellence Award
The recipient will receive:
●
●
●
●
●
●
Cash Award of ₹3,00,000
Premium Trophy
Gold Medal
Certificate of Excellence
One-Year Corporate Sponsorship valued at ₹5,00,000
National Media Promotion and Recognition
ViERA Chakra Award 2026
Two National Winners
Each recipient will receive:
●
●
●
●
●
●
Cash Award of ₹1,00,000
Premium Trophy
Medal
Certificate of Excellence
One-Year Corporate Sponsorship valued at ₹5,00,000
National Recognition across FG Media platforms
ViERA Excellence Awards 2026
The National Jury will honour outstanding achievers through the following
distinguished awards:
●
●
●
ViERA Power Star Award 2026
ViERA Best Entrepreneur Award 2026
ViERA Innovation Excellence Award 2026●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
ViERA Technology Visionary Award 2026
ViERA AI & VI Excellence Award 2026
ViERA Digital Leadership Award 2026
ViERA Startup Excellence Award 2026
ViERA Business Icon Award 2026
ViERA Industrial Excellence Award 2026
ViERA Wealth Creator Award 2026
ViERA Education Excellence Award 2026
ViERA Academic Leadership Award 2026
ViERA Healthcare Excellence Award 2026
ViERA Agricultural Excellence Award 2026
ViERA Climate Leadership Award 2026
ViERA Green Earth Award 2026
ViERA Social Impact Award 2026
ViERA Public Service Excellence Award 2026
ViERA Governance Excellence Award 2026
ViERA Women Leadership Award 2026
ViERA Youth Icon Award 2026
ViERA Lifetime Achievement Award 2026
ViERA Global Indian Excellence Award 2026
ViERA Media Excellence Award 2026
ViERA Journalism Excellence Award 2026
ViERA Arts & Culture Award 2026
ViERA Sports Excellence Award 2026
ViERA Cinema Excellence Award 2026
ViERA Traditional Heritage Award 2026
ViERA Excellence in Public Administration Award 2026
ViERA Top 100 Influencers of India 2026
The HIT ViERA National Jury will identify and recognise the Top 100
Influencers of India 2026 across business, entrepreneurship, technology,governance, education, healthcare, media, arts, sports, innovation and
social leadership.
Each recognised influencer will receive:
●
●
●
●
●
●
●
●
●
●
HIT ViERA Influencer Medal
Certificate of National Recognition
National Media Coverage
Digital Promotion
Business Promotion
Leadership Recognition
Speaking Opportunities
Corporate Networking Opportunities
Brand Collaboration Opportunities
Invitation to Exclusive HIT ViERA Leadership Events
Exceptional influencers may also be considered for:
●
●
●
●
●
●
Annual Corporate Sponsorship
National Brand Endorsement Campaigns
Advertising and Promotional Opportunities
Product Ambassador Assignments
Investment and Startup Networking
International Recognition through FG Media platforms
Excellence Recognition
Outstanding finalists will receive:
●
●
●
●
●
HIT ViERA Excellence Medal
Certificate of Appreciation
Digital Recognition
National Media Coverage
Official Recognition among India's Distinguished AchieversFields of Recognition
Awards will be presented across diverse sectors including:
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
●
Education
Science and Technology
Artificial Intelligence
Virtual Intelligence
Entrepreneurship
Innovation
Research and Development
Healthcare
Agriculture
Public Administration
Governance
Defence
Police Services
Social Leadership
Journalism
Media
Literature
Arts and Culture
Cinema
Television
Digital Content Creation
Sports
Environment
Climate Action
Finance
Manufacturing
Corporate Leadership
Startups●
●
●
●
●
●
●
●
●
Women Leadership
Youth Leadership
Community Development
Traditional Arts and Heritage
Emerging Technologies
Public Policy
Social Entrepreneurship
Sustainability
Other Emerging Fields of Excellence
Selection Process
The HIT ViERA National Awards uphold the highest standards of
transparency, integrity and credibility through a rigorous multi-stage
evaluation process.
The assessment includes:
●
●
●
●
●
●
●
●
●
●
●
National Nominations
Achievement Verification
Independent Research
Professional Due Diligence
Public Opinion Surveys
Expert Panel Evaluation
National Jury Assessment
Innovation and Leadership Analysis
Social Impact Evaluation
Contribution to Nation Building
Overall Excellence Review
The decision of the National Jury shall be final and binding.Grand Awards Ceremony
The HIT ViERA National Awards 2026 will be hosted in Bengaluru,
Karnataka, bringing together distinguished personalities from Government,
Industry, Business, Academia, Science, Technology, Defence, Media, Arts,
Sports and Civil Society.
The ceremony will celebrate excellence, recognise transformative
leadership and inspire future generations of innovators and nation builders.
National Invitation
It is with great honour that the HIT ViERA National Awards Jury invites
you to participate in this prestigious national recognition programme.
Your achievements, professional excellence and valuable contributions to
society make you a deserving candidate for consideration among India's
most distinguished achievers.
We cordially invite you to submit your nomination or accept this invitation by
sharing your recent photograph, professional profile and biodata for
evaluation by the National Jury and for publication through FG Media's
national platforms.
Join an inspiring community of exceptional leaders, innovators and
changemakers who are shaping the future of India.
Nominate. Inspire. Lead. Be Recognised.
With Best RegardsRamesh Babu Pasupuleti
Editor-in-Chief | Publisher | Chief Executive Officer
FG Media Group
Website: www.fgco.in
WhatsApp: +91 8762283868
HIT ViERA NATIONAL AWARDS 2026
Honouring Excellence • Empowering Leaders • Inspiring Generations

HIT ViERA Awards and Special Edition
Invitation - Comprehensive Nomination
Form
This document contains the expanded and highly detailed blueprint for your Google Form. You
can use this structure to build a robust application portal that collects all necessary text and
media files.
Form Overview & Instructions
Form Title: HIT Awards & Special Edition - Official Nomination Portal
Description: Organized by FG MEDIA GROUP (a venture of FG Media and Safety
Technologies Pvt Ltd). We invite you to recommend individuals, companies, startups, and
projects with remarkable achievements for inclusion in our prestigious Special Editions and for
consideration for the esteemed HIT Awards.
Contact Information:
Email: cpro@fgco.in (CPRO) | hitawards@fgco.in
WhatsApp: +91 7382098888
Social Media: @hitnewsai
Section 1: Nominator Information
●
●
●
●
●
Nominator's Full Name: (Short answer - Required)
Nominator's Organization/Affiliation: (Short answer)
Nominator's Email Address: (Short answer - Required)
Nominator's Phone/WhatsApp Number: (Short answer - Required)
Relationship to Nominee: (Short answer - e.g., Self, Colleague, Manager, Client)
Section 2: Nominee Basic Details
●
Type of Nomination: (Multiple Choice - Required)
○
Individual
○
Company / Organization●
●
●
●
●
●
○
Startup
○
Government Official / Department
Nominee Name (Individual or Company): (Short answer - Required)
Nominee Designation / Job Title: (Short answer)
Nominee Contact Number (WhatsApp preferred): (Short answer - Required)
Nominee Email Address: (Short answer - Required)
Nominee Location (City, State, Country): (Short answer - Required)
Nominee Social Media Links (LinkedIn, Twitter/X, Instagram, Website): (Paragraph)
Section 3: Nomination Categories & Selection
●
HIT Awards Nomination Category: (Dropdown - Required)
○
Remarkable Achievements
○
○
○
Startup Ideas & Innovation
Business Plans & Strategy
Academic Excellence
●
○
Excellence in Governance (Government Officials)
○
Inspiring Life Stories
○
Social Impact & Community Service
○
Other Noteworthy Nominations
Preferred Publication (Select all that apply): (Checkboxes - Required)
○
India Times (Telugu)
○
HIT NEWS (English)
○
Kurukshetra News (Kannada)
Section 4: Detailed Justification & Impact
●
●
●
●
Executive Summary (Max 100 words): (Paragraph - Required)
Briefly summarize why this nominee is being recommended.
Detailed Description of Achievement/Business Plan: (Paragraph - Required)
Provide a comprehensive overview of the nominee's accomplishments, innovative ideas,
or business model. Highlight key milestones.
Measurable Impact and Outcomes: (Paragraph)
Detail any statistical data, revenue growth, societal impact, or academic milestones that
support this nomination.
Future Goals & Vision: (Paragraph)
What are the nominee's plans for the next 3-5 years?Section 5: Media & Document Uploads
(Note: In Google Forms, use the "File Upload" question type for these fields to allow users to
attach media directly to their submission.)
●
Upload High-Resolution Profile Photo / Company Logo: (File Upload - Required)
Supported formats: JPG, PNG. Used for the Special Edition print feature.
●
Upload Supporting Documents (Business Plans, Academic Certificates, Pitch
Decks): (File Upload)
Supported formats: PDF, DOCX, PPTX. Upload any documents that substantiate the
nomination.
●
Upload Introduction or Showcase Video (Max 3 minutes): (File Upload)
Supported formats: MP4, MOV. A short video explaining the achievement or introducing
the startup.
●
Alternative Video Link: (Short Answer)
If the video is too large to upload, provide a public YouTube or Google Drive link here.
Section 6: Declaration
●
Consent and Authenticity Declaration: (Checkboxes - Required)
○
I confirm that the information provided is accurate and authentic to the best of my
knowledge. I grant FG MEDIA GROUP the rights to utilize the submitted details and
media for publication in the Special Editions and for the HIT Awards consideration
process.

SPONSORSHIP PROPOSAL
HIT ViERA National Awards 2026 & InViGIL Global Launch Event
Recognising Excellence. Celebrating Vision. Inspiring the Future.
Presented by FG Media Group
AN EXCLUSIVE INVITATION TO ALIGN WITH GLOBAL EXCELLENCE
It is our distinct privilege to extend a highly exclusive invitation to your esteemed organization
to partner with the HIT ViERA National Awards 2026. This is not merely an event; it is India’s
most prestigious and eagerly anticipated national recognition platform, dedicated to celebrating
the pinnacle of human excellence, visionary leadership, and distinguished service to society.
This year, the awards ceremony is poised to make history. It coincides with a monumental leap
in digital technology: the official global launch of the InViGIL Application. By sponsoring this
legacy-defining mega-event, your brand will not only stand shoulder-to-shoulder with India’s
finest achievers, visionaries, and celebrities, but you will also cement your position as a pioneer
within the world’s most advanced decentralized media and commerce ecosystem.
This is a rare opportunity to command the spotlight. Sponsors of the HIT ViERA Awards are
viewed not just as advertisers, but as an elite consortium of global visionaries driving the future
of the nation.
THE UNRIVALED MEDIA BLITZ: OWNING THE NARRATIVE
Your brand will dominate the national conversation through a meticulously crafted, high-octane
media blitz.
Our event is backed by the colossal distribution network of FG Media Group, ensuring your
brand reaches over 20,00,000 households and decision-makers across India. The campaign
spans:
• The Print Media Dominance: Special, collector's editions of our leading weekly
publications—HIT NEWS (English), Happy India Times (Telugu), and Kurukshetra
(Kannada). Sponsors will receive prominent multi-page editorials, feature articles
on their corporate leadership, and premium full-color advertising real estate.
• The Tharangam Podcast Network: Sponsors will be featured in exclusive, deep-
dive audio and video podcast episodes, discussing your brand's innovations, market
leadership, and vision for the future, broadcasted to a highly engaged global
audience.• Cinematic Promotional Teasers: High-budget, cinematic event teasers and trailers
will flood social media, television, and digital platforms in the months leading up to
the event, prominently displaying sponsor branding to build massive public
anticipation.
• Omni-Channel Digital Promotions: Unrelenting social media campaigns,
influencer partnerships, and digital banners across the entire InViGIL network.
DISCOVER THE FUTURE: THE InViGIL APPLICATION
Intelligence beyond Vision.
InViGIL is the world’s first and most advanced decentralized media, commerce, spatial
journalism, and event management ecosystem. By replacing opaque, clickbait-driven legacy
models with an architecture anchored to the ViERA Engine Core and an immutable
PostgreSQL ledger, InViGIL shifts economic incentives strictly toward high-integrity content
generation based on Truth, Telemetry, and Real-World Impact.
InViGIL Core Features & Capabilities:
• Core Engines: Powered by ViERA (Virtual Intelligence Enabled Real Avatar)
verification and a proprietary Fact Score Engine, ensuring deterministically
calculated payouts every 5 minutes.
• Spatial Evidentiary Journalism: Integrates Augmented Reality (AR), WebXR, and
multimodal RAG pipelines to project 3D investigative scenes directly into physical
living environments.
• The Show Room & Events Engine: A unique digital storefront equipped with an
autonomous ViERA Business Manager, Tharangam audio podcasts, E-Papers, and
C2PA-verified cryptographic event ticketing.
• ViERA Family & Smart Home IoT: Connects family micro-networks to smart home
appliances and enables interactive Smart TV tuitions backed by real-time AR
posture and focus telemetry.
• Comprehensive Governance & Security: Features an omni-channel Ads Manager,
automated penalty loops for deepfakes, and an unprecedented Cascading Legal
Defense Matrix spanning up to the Supreme Court.
EXCLUSIVE InViGIL SPONSOR BENEFITS
To ensure our sponsors receive unparalleled ROI and protection, all sponsorship tiers include
exclusive access to the InViGIL ecosystem:
• One-Year InViGIL Premium Subscription: Complete free access to all premium
ViERA features, business promotion tools, and omni-channel Ads Managers.
• InViGIL Social Security Support: As an invisible security guard for your brand, you
will receive exclusive surveillance and security cover, as well as access to free,highly confidential corporate investigations driven by InViGIL’s Spatial Evidentiary
mechanisms.
• Credibility Rating Improvement Support: Algorithmic support to boost your
brand's Fact Score and Trust Factor within the ViERA Engine, ensuring a Tier A+
Global Credibility Rating.
PRESTIGIOUS SPONSORSHIP TIERS
We offer four elite sponsorship tiers, designed to confer maximum authority, visibility, and
prestige upon your brand.
1. SUPER ViERA SPONSOR (Title Sponsor)
Investment: ₹ 20,00,000 | Availability: 1 Exclusive Spot
The ultimate pinnacle of brand integration, reserving the highest honor and visibility for a single
industry titan.
Benefits Include:
• Title Integration: The entire event will be presented as the "[Your Brand] HIT ViERA
National Awards 2026".
• Supreme Award Presentation: A highly publicized moment on stage for your
CEO/Leadership to present the highest honour: the VIERA Champion of India Award
2026.
• Ultimate Print Media Reach: A majestic Front Page Full-Color Advertisement and a
dedicated 2-page editorial spread in all three special editions (HIT News, Happy
India Times, Kurukshetra), profiling your corporate legacy.
• Cinematic Teaser Integration: Your brand logo and tagline will spearhead every
high-octane event teaser, trailer, and digital countdown broadcasted to millions
globally.
• Exclusive Podcast Series: A bespoke 3-part exclusive video podcast series on
Tharangam featuring interviews with your top executives.
• Unrivaled Venue Branding: Dominant, apex logo placement on the main stage
backdrop, entrance arches, the VIP red carpet photo walls, and exclusive branding
of the VVIP lounges.
• InViGIL Elite Package: 1-Year Free Subscription, comprehensive Social Security
cover (highest priority surveillance and free corporate investigations), and Tier A+
Credibility Rating scaling.
2. POWER ViERA SPONSOR (Co-Sponsor)
Investment: ₹ 15,00,000 | Availability: 2 SpotsA commanding presence designed for market leaders seeking to project absolute authority and
influence.
Benefits Include:
• Co-Sponsorship Status: High-prestige branding across all national and
international event collateral as the official Co-Sponsor.
• Award Presentation: An exclusive opportunity for your leadership to present the
VIERA Pride of India Award or the VIERA Chakra Award.
• Premium Print Media Reach: A Full Page Inside Color Advertisement and a
dedicated 1-page feature article in all three special editions (English, Telugu,
Kannada).
• High-Impact Teasers: Prominent co-branded logo placement in all event
promotional videos, teasers, and television spots.
• Featured Podcast Episode: A dedicated 45-minute feature episode on the
Tharangam podcast, diving into your brand's industry innovations.
• Venue Branding: Strategic, eye-catching logo placement on massive stage side-
panels, LED standees, and exclusive networking dining areas.
• InViGIL Premium Package: 1-Year Free Subscription, dedicated Social Security
cover (surveillance and strategic investigations), and active Credibility Rating
improvement support.
3. GOLDEN ViERA SPONSOR (Associate Sponsor)
Investment: ₹ 10,00,000 | Availability: 4 Spots
A distinguished partnership tier that aligns your brand with innovation and national progress.
Benefits Include:
• Associate Status: Distinguished logo positioning on all digital and physical event
marketing materials.
• Award Presentation: The honor of presenting a prestigious category (e.g., VIERA
Business Icon Award or Technology Visionary Award).
• Print Media Reach: A Half-Page Color Advertisement and a dedicated half-page
corporate spotlight article in all three special editions.
• Digital & Multimedia: Highlighted in collaborative social media campaigns,
inclusion in the event highlight reels, and a spotlight mention in pre-event podcasts.
• Venue Branding: Elegant logo placement on sponsor walls, premium seating area
markers, and VIP registration desks.
• InViGIL Business Package: 1-Year Free Subscription, access to essential security
consulting and background checks, plus Credibility Rating support.
4. SILVER ViERA SPONSOR (Partner Sponsor)Investment: ₹ 5,00,000 | Availability: 10 Spots
An excellent entry point for emerging leaders and established brands to secure a highly
respected presence.
Benefits Include:
• Partner Status: Officially recognized and celebrated as a proud partner of the HIT
ViERA Awards.
• Award Presentation: The opportunity to present an Excellence Award category
(e.g., Youth Icon or Emerging Startup Award).
• Print Media Reach: A Quarter-Page Color Advertisement accompanied by a
corporate brief in all three special editions.
• Venue Branding: Dedicated logo presence on standard sponsor panels, digital
rotators, and event brochures.
• Digital & Multimedia: Inclusion in rapid-fire sponsor shout-outs across social
media channels and promotional teasers.
• InViGIL Starter Package: 1-Year Free Subscription, localized digital security
assessments, and base-level Credibility Rating support.
ONLINE RESERVATION & PAYMENT TERMS
Due to the unprecedented scale and prestige of the HIT ViERA National Awards 2026, spots
across our exclusive tiers are highly coveted and awarded on a strict first-come, first-served
basis.
How to Secure Your Position of Privilege:
1. 2. 3. Select Your Tier: Choose to command the stage as a Super, Power, Golden, or
Silver ViERA Sponsor.
Advance Payment: A minimum advance payment of 50% of the total sponsorship
value is required to instantly lock in your slot. This immediately triggers the
inclusion of your brand in our pre-event teasers, media blitz, and print publications.
Balance Payment: The remaining 50% must be cleared 15 days prior to the grand
event.
Bank Details for Direct Transfer: Through Payment Gateway
• Account Name: FG Media and Safety Technologies Pvt Ltd
• Bank: [Bank Name]
• Account Number: [Account Number]
• IFSC Code: [IFSC Code]
• GST No: 29AADCF9850F1ZC(Note: GST of 18% is applicable on all sponsorship amounts. Official GST invoices and media
schedules will be generated immediately upon receipt of the advance).
ACCEPT THE INVITATION
Step into the future of media, secure your brand's legacy, and stand alongside the architects of
tomorrow. Partner with us to honor excellence and leverage the most advanced Virtual
Intelligence platform on Earth.
FG Media Group
Corporate Office: #107, 2nd Main, MLA Layout, RT Nagar, Bengaluru, Karnataka State.
Phone / WhatsApp: +91 8762283868 / +91 7382098888
Email: cpro@fgco.in | hitawards@fgco.in
Website: www.fgco.in


they need to add a event , sponsorship etc thing 