<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>HIT ViERA National Awards 2026 – Application Acknowledgement</title>
  <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=EB+Garamond:ital,wght@0,400;0,500;1,400&family=Cinzel:wght@400;600;700&display=swap" rel="stylesheet" />
  <style>
    * { margin: 0; padding: 0; box-sizing: border-box; }
    body { background: #0a0a0f; font-family: 'EB Garamond', Georgia, serif; -webkit-font-smoothing: antialiased; }

    .email-wrapper {
      max-width: 680px;
      margin: 0 auto;
      background: #0d0d18;
    }

    /* ── HERO HEADER ── */
    .hero {
      position: relative;
      background: #050508;
      text-align: center;
      overflow: hidden;
    }
    .hero-bg-ornament {
      position: absolute;
      inset: 0;
      background:
        radial-gradient(ellipse 80% 60% at 50% 100%, rgba(180,130,20,0.18) 0%, transparent 70%),
        radial-gradient(ellipse 60% 40% at 50% 0%,   rgba(100,60,10,0.25) 0%, transparent 60%);
      pointer-events: none;
    }
    .top-border-strip {
      height: 6px;
      background: linear-gradient(90deg, #3a2500, #8B6010, #D4A017, #F5C842, #D4A017, #8B6010, #3a2500);
    }
    .inner-gold-line {
      height: 1px;
      background: linear-gradient(90deg, transparent 5%, #8B6010 30%, #D4A017 50%, #8B6010 70%, transparent 95%);
      margin: 0 40px;
    }

    .hero-top-text {
      padding: 28px 40px 0;
      font-family: 'Cinzel', serif;
      font-size: 10px;
      letter-spacing: 5px;
      color: #7a6030;
      text-transform: uppercase;
    }

    .trophy-container {
      padding: 20px 0 0;
      position: relative;
    }
    .trophy-img {
      width: 220px;
      height: auto;
      display: block;
      margin: 0 auto;
      filter: drop-shadow(0 0 40px rgba(212,160,23,0.5)) drop-shadow(0 0 80px rgba(212,160,23,0.2));
    }

    .hero-title-block {
      padding: 10px 40px 0;
      position: relative;
      z-index: 2;
    }
    .hit-viera-title {
      font-family: 'Cinzel', serif;
      font-size: 38px;
      font-weight: 700;
      letter-spacing: 8px;
      text-transform: uppercase;
      background: linear-gradient(180deg, #F5E070 0%, #D4A017 35%, #F5C842 60%, #B8860B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      line-height: 1;
    }
    .national-awards-text {
      font-family: 'Cinzel', serif;
      font-size: 13px;
      letter-spacing: 7px;
      color: #a07828;
      text-transform: uppercase;
      margin-top: 6px;
    }
    .ornament-divider {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      margin: 14px 40px 0;
    }
    .ornament-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, #8B6010 40%, #D4A017);
    }
    .ornament-line.right {
      background: linear-gradient(90deg, #D4A017, #8B6010 60%, transparent);
    }
    .ornament-diamond {
      width: 8px; height: 8px;
      background: #D4A017;
      transform: rotate(45deg);
      flex-shrink: 0;
    }
    .ornament-diamond-sm {
      width: 4px; height: 4px;
      background: #8B6010;
      transform: rotate(45deg);
      flex-shrink: 0;
    }
    .year-badge {
      display: inline-block;
      font-family: 'Cinzel', serif;
      font-size: 15px;
      letter-spacing: 6px;
      color: #D4A017;
      padding: 8px 28px;
      border: 1px solid #4a3508;
      margin-top: 14px;
      position: relative;
      background: linear-gradient(135deg, rgba(212,160,23,0.08), rgba(180,130,20,0.04));
    }
    .hero-tagline {
      font-family: 'EB Garamond', serif;
      font-size: 12px;
      letter-spacing: 3px;
      color: #6a5020;
      text-transform: uppercase;
      padding: 16px 40px 28px;
      font-style: italic;
    }

    /* ── ACKNOWLEDGEMENT BAND ── */
    .ack-band {
      background: linear-gradient(135deg, #120e04, #1e1608, #120e04);
      border-top: 1px solid #3a2c08;
      border-bottom: 1px solid #3a2c08;
      padding: 14px 40px;
      text-align: center;
    }
    .ack-label {
      font-family: 'Cinzel', serif;
      font-size: 10px;
      letter-spacing: 5px;
      color: #D4A017;
      text-transform: uppercase;
    }

    /* ── BODY ── */
    .body-section {
      padding: 44px 52px 36px;
      background: linear-gradient(180deg, #0d0d18 0%, #0f0f1c 100%);
    }
    .greeting {
      font-family: 'Cormorant Garamond', serif;
      font-size: 26px;
      font-weight: 600;
      color: #e8d898;
      margin-bottom: 28px;
      line-height: 1.3;
    }
    .body-para {
      font-family: 'EB Garamond', serif;
      font-size: 16px;
      line-height: 1.9;
      color: #c8bfa0;
      margin-bottom: 20px;
    }
    .body-para strong {
      color: #D4A017;
      font-weight: 500;
    }

    /* Highlight quote box */
    .quote-box {
      margin: 32px 0;
      position: relative;
      padding: 28px 32px;
      background: linear-gradient(135deg, #120e04, #1a1406);
      border: 1px solid #3a2c08;
    }
    .quote-box::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #D4A017 30%, #F5C842 50%, #D4A017 70%, transparent);
    }
    .quote-box::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #D4A017 30%, #F5C842 50%, #D4A017 70%, transparent);
    }
    .quote-mark {
      font-family: 'Cormorant Garamond', serif;
      font-size: 64px;
      color: #D4A017;
      line-height: 0.5;
      display: block;
      margin-bottom: 12px;
      opacity: 0.7;
    }
    .quote-text {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px;
      font-style: italic;
      color: #e2c878;
      line-height: 1.8;
    }
    .quote-attribution {
      margin-top: 12px;
      font-family: 'Cinzel', serif;
      font-size: 9px;
      letter-spacing: 3px;
      color: #8B6010;
      text-transform: uppercase;
    }

    /* Status badge */
    .status-row {
      display: flex;
      align-items: center;
      gap: 16px;
      margin: 28px 0;
      padding: 18px 24px;
      background: linear-gradient(135deg, #0a1a0a, #0d1f0d);
      border: 1px solid #1a3a1a;
      border-left: 4px solid #2a7a2a;
    }
    .status-dot {
      width: 10px; height: 10px;
      background: #4CAF50;
      border-radius: 50%;
      flex-shrink: 0;
      box-shadow: 0 0 8px rgba(76,175,80,0.6);
    }
    .status-text {
      font-family: 'Cinzel', serif;
      font-size: 11px;
      letter-spacing: 2px;
      color: #4CAF50;
      text-transform: uppercase;
    }

    /* ── SIGNATURE ── */
    .signature-section {
      padding: 0 52px 44px;
      background: linear-gradient(180deg, #0f0f1c, #0d0d18);
    }
    .sig-warm-regards {
      font-family: 'Cormorant Garamond', serif;
      font-size: 18px;
      font-style: italic;
      color: #a09070;
      margin-bottom: 24px;
    }
    .sig-card {
      display: flex;
      gap: 28px;
      align-items: flex-start;
      padding: 28px 32px;
      background: linear-gradient(135deg, #120e04, #1a1406);
      border: 1px solid #3a2c08;
      position: relative;
    }
    .sig-card::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 2px;
      background: linear-gradient(90deg, transparent, #D4A017 30%, #F5C842 50%, #D4A017 70%, transparent);
    }
    .sig-photo-wrap {
      flex-shrink: 0;
      position: relative;
    }
    .sig-photo-frame {
      width: 100px; height: 100px;
      border-radius: 50%;
      background: linear-gradient(135deg, #D4A017, #F5C842, #8B6010, #D4A017);
      padding: 3px;
      display: inline-block;
    }
    .sig-photo {
      width: 94px; height: 94px;
      border-radius: 50%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }
    .sig-info { flex: 1; }
    .sig-name {
      font-family: 'Cinzel', serif;
      font-size: 20px;
      font-weight: 600;
      color: #F5C842;
      letter-spacing: 2px;
      margin-bottom: 4px;
    }
    .sig-title {
      font-family: 'Cinzel', serif;
      font-size: 10px;
      letter-spacing: 4px;
      color: #8B6010;
      text-transform: uppercase;
      margin-bottom: 12px;
    }
    .sig-divider {
      width: 48px; height: 1px;
      background: linear-gradient(90deg, #D4A017, transparent);
      margin-bottom: 12px;
    }
    .sig-org {
      font-family: 'EB Garamond', serif;
      font-size: 14px;
      color: #9a8860;
      line-height: 1.7;
      margin-bottom: 14px;
    }
    .sig-contacts { display: flex; flex-direction: column; gap: 6px; }
    .sig-contact-row {
      display: flex;
      align-items: center;
      gap: 10px;
      font-family: 'EB Garamond', serif;
      font-size: 14px;
      color: #a09070;
    }
    .sig-contact-row a { color: #D4A017; text-decoration: none; }
    .contact-icon {
      width: 22px; height: 22px;
      background: rgba(212,160,23,0.12);
      border: 1px solid #3a2c08;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      flex-shrink: 0;
    }

    /* ── FOOTER ── */
    .footer {
      background: linear-gradient(135deg, #050508, #0a0808, #050508);
      padding: 32px 40px;
      text-align: center;
      position: relative;
    }
    .footer::before {
      content: '';
      display: block;
      height: 1px;
      background: linear-gradient(90deg, transparent 5%, #3a2c08 30%, #8B6010 50%, #3a2c08 70%, transparent 95%);
      margin-bottom: 24px;
    }
    .footer-ornament {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 16px;
    }
    .footer-fg {
      font-family: 'Cinzel', serif;
      font-size: 14px;
      letter-spacing: 5px;
      color: #8B6010;
      text-transform: uppercase;
    }
    .footer-text {
      font-family: 'EB Garamond', serif;
      font-size: 12px;
      color: #3a3020;
      line-height: 1.9;
    }
    .footer-bottom-strip {
      height: 4px;
      background: linear-gradient(90deg, #3a2500, #8B6010, #D4A017, #F5C842, #D4A017, #8B6010, #3a2500);
      margin-top: 24px;
    }

    @media (max-width: 600px) {
      .body-section, .signature-section { padding-left: 24px; padding-right: 24px; }
      .hit-viera-title { font-size: 26px; letter-spacing: 5px; }
      .trophy-img { width: 160px; }
      .sig-card { flex-direction: column; align-items: center; text-align: center; }
      .sig-divider { margin: 12px auto; }
      .sig-contact-row { justify-content: center; }
      .quote-box { padding: 20px 20px; }
    }
  </style>
</head>
<body>
<div class="email-wrapper">

  <!-- ══ HERO ══ -->
  <div class="hero">
    <div class="hero-bg-ornament"></div>
    <div class="top-border-strip"></div>

    <div class="hero-top-text">FG Media Group &nbsp;·&nbsp; India's Premier Recognition Platform</div>

    <div class="trophy-container">
      <img src="https://hercules-cdn.com/file_b2DU3aBUuAvhNj9hib9bhLeG" alt="HIT ViERA Trophy" class="trophy-img" />
    </div>

    <div class="inner-gold-line"></div>

    <div class="hero-title-block">
      <div class="hit-viera-title">HIT ViERA</div>
      <div class="national-awards-text">National Awards</div>
    </div>

    <div class="ornament-divider">
      <div class="ornament-line"></div>
      <div class="ornament-diamond-sm"></div>
      <div class="ornament-diamond"></div>
      <div class="ornament-diamond-sm"></div>
      <div class="ornament-line right"></div>
    </div>

    <div class="year-badge">2 0 2 6</div>

    <div class="hero-tagline">Honouring Innovation · Excellence · Remarkable Achievement</div>
    <div class="top-border-strip"></div>
  </div>

  <!-- ══ ACK BAND ══ -->
  <div class="ack-band">
    <span class="ack-label">✦ &nbsp; Application Acknowledgement &nbsp; ✦</span>
  </div>

  <!-- ══ BODY ══ -->
  <div class="body-section">
    <div class="greeting">Dear Arjun Sharma,</div>

    <p class="body-para">
      Thank you for submitting your application for the <strong>HIT ViERA National Awards 2026</strong> through our official website.
    </p>

    <p class="body-para">
      We sincerely appreciate your interest in becoming part of one of India's most distinguished platforms dedicated to recognising excellence, leadership, innovation and meaningful contribution to society.
    </p>

    <div class="quote-box">
      <span class="quote-mark">"</span>
      <div class="quote-text">
        Every remarkable achievement begins with the courage to take the first step.
        Your application reflects not only your accomplishments but also your commitment
        to creating a positive impact within your profession, community and the nation.
      </div>
      <div class="quote-attribution">✦ &nbsp; HIT ViERA Awards Committee &nbsp; ✦</div>
    </div>

    <p class="body-para">
      We commend your pursuit of excellence and your willingness to inspire others through your journey.
    </p>

    <div class="status-row">
      <div class="status-dot"></div>
      <div class="status-text">Application Successfully Received &amp; Under Review</div>
    </div>

    <p class="body-para">
      Your application will now undergo a comprehensive evaluation by the <strong>HIT ViERA Awards Committee</strong> in accordance with our transparent and merit-based assessment process. Should any additional information or supporting documents be required, our team will contact you through your registered email or mobile number.
    </p>

    <p class="body-para">
      We encourage you to continue your pursuit of excellence with confidence, integrity and purpose. True leadership is measured not merely by success, but by the lives it inspires and the legacy it creates.
    </p>

    <p class="body-para">
      Thank you once again for choosing to be part of the <strong>HIT ViERA National Awards 2026</strong>. We wish you every success and look forward to celebrating outstanding achievements that contribute to a stronger, more innovative and more prosperous India.
    </p>
  </div>

  <!-- ══ SIGNATURE ══ -->
  <div class="signature-section">
    <div class="sig-warm-regards">Warm Regards,</div>
    <div class="sig-card">
      <div class="sig-photo-wrap">
        <div class="sig-photo-frame">
          <img src="https://hercules-cdn.com/file_lrKNLabjpjLQdctOev3AWiwb" alt="Roopa T" class="sig-photo" />
        </div>
      </div>
      <div class="sig-info">
        <div class="sig-name">Roopa . T</div>
        <div class="sig-title">Convener</div>
        <div class="sig-divider"></div>
        <div class="sig-org">
          HIT ViERA Awards Committee<br />
          FG MEDIA GROUP<br />
          48A, MLA Layout, RT Nagar, Bengaluru
        </div>
        <div class="sig-contacts">
          <div class="sig-contact-row">
            <div class="contact-icon">✉</div>
            <a href="mailto:hitawards@fgco.in">hitawards@fgco.in</a>
          </div>
          <div class="sig-contact-row">
            <div class="contact-icon">📱</div>
            <a href="https://wa.me/917382098888">+91 73820 98888</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- ══ FOOTER ══ -->
  <div class="footer">
    <div class="footer-ornament">
      <div class="ornament-line" style="max-width:60px"></div>
      <div class="ornament-diamond-sm"></div>
      <div class="footer-fg">FG &nbsp;Media &nbsp;Group</div>
      <div class="ornament-diamond-sm"></div>
      <div class="ornament-line right" style="max-width:60px"></div>
    </div>
    <div class="footer-text">
      HIT ViERA National Awards 2026 &nbsp;|&nbsp; 48A, MLA Layout, RT Nagar, Bengaluru<br />
      This is an automated acknowledgement. Please do not reply directly to this email.<br />
      For queries — Email: hitawards@fgco.in &nbsp;|&nbsp; WhatsApp: +91 73820 98888
    </div>
    <div class="footer-bottom-strip"></div>
  </div>

</div>
</body>
</html>
