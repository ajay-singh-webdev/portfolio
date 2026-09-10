<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Ajay Singh — SEO Executive &amp; Web Developer</title>
<meta name="description" content="Ajay Singh is an SEO Executive and web developer in Mohali, Punjab, specialising in technical SEO, on-page and off-page optimisation, and full-stack web builds." />
<meta property="og:title" content="Ajay Singh — SEO Executive & Web Developer" />
<meta property="og:description" content="Technical SEO and web development from Mohali, Punjab." />
<meta property="og:type" content="website" />
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600;9..144,700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
<style>
/* ─────────────────────────────────────────────
   TOKENS
───────────────────────────────────────────── */
:root {
  --navy-950: #0b1220;
  --navy-900: #0f192c;
  --navy-800: #182541;
  --navy-700: #1f3154;
  --line: rgba(237,239,246,0.1);
  --line-strong: rgba(237,239,246,0.18);
  --ink: #edeff6;
  --ink-dim: #c4c9d8;
  --muted: #8d97af;
  --gold: #e3a64c;
  --gold-dim: #b07d34;
  --teal: #5fbfb3;
  --teal-dim: #3d9490;
  --red: #e05c5c;
  --serif: 'Fraunces', serif;
  --sans: 'Inter', -apple-system, sans-serif;
  --mono: 'IBM Plex Mono', monospace;
  --radius: 3px;
  --ease: cubic-bezier(0.22, 1, 0.36, 1);
}

/* ─────────────────────────────────────────────
   RESET / BASE
───────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; font-size: 16px; }
body {
  background: var(--navy-950);
  color: var(--ink);
  font-family: var(--sans);
  line-height: 1.65;
  -webkit-font-smoothing: antialiased;
  overflow-x: hidden;
}
a { color: inherit; text-decoration: none; }
img { max-width: 100%; display: block; }
h1, h2, h3 { font-family: var(--serif); font-weight: 600; line-height: 1.1; }
ul { list-style: none; }

/* ─────────────────────────────────────────────
   LAYOUT UTILITIES
───────────────────────────────────────────── */
.wrap { max-width: 1080px; margin: 0 auto; padding: 0 32px; }
section { padding: 100px 0; border-bottom: 1px solid var(--line); }
section:last-of-type { border-bottom: none; }
.section-label {
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--gold);
  letter-spacing: 0.12em;
  margin-bottom: 12px;
}
.section-title { font-size: clamp(1.7rem, 3vw, 2.1rem); margin-bottom: 14px; }

/* ─────────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────────── */
#progress-bar {
  position: fixed; top: 0; left: 0; height: 2px;
  background: linear-gradient(90deg, var(--gold), var(--teal));
  width: 0%; z-index: 200;
  transition: width 0.05s linear;
}

/* ─────────────────────────────────────────────
   NAV
───────────────────────────────────────────── */
nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(11,18,32,0.88);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--line);
  transition: background 0.3s;
}
.nav-inner {
  max-width: 1080px; margin: 0 auto; padding: 16px 32px;
  display: flex; justify-content: space-between; align-items: center;
}
.nav-logo {
  font-family: var(--serif); font-size: 1.1rem; font-weight: 600;
  display: flex; align-items: center; gap: 10px;
}
.availability-dot {
  width: 8px; height: 8px; border-radius: 50%;
  background: #4ade80; position: relative;
}
.availability-dot::after {
  content: '';
  position: absolute; inset: -3px; border-radius: 50%;
  background: rgba(74,222,128,0.25);
  animation: pulse 2s ease infinite;
}
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.6); opacity: 0; }
}
.nav-links {
  display: flex; gap: 28px; align-items: center;
}
.nav-links a {
  font-size: 0.88rem; color: var(--muted);
  transition: color 0.15s; position: relative; padding-bottom: 2px;
}
.nav-links a::after {
  content: ''; position: absolute; bottom: -2px; left: 0;
  width: 0; height: 1px; background: var(--teal);
  transition: width 0.2s var(--ease);
}
.nav-links a:hover, .nav-links a.active { color: var(--ink); }
.nav-links a.active::after { width: 100%; }
.hamburger {
  display: none; background: none; border: none;
  color: var(--ink); font-size: 1.2rem; cursor: pointer; padding: 4px;
}

@media (max-width: 760px) {
  .nav-links {
    position: fixed; top: 57px; left: 0; right: 0;
    background: var(--navy-900);
    flex-direction: column; gap: 0; align-items: stretch;
    max-height: 0; overflow: hidden;
    transition: max-height 0.28s var(--ease);
    border-bottom: 1px solid var(--line);
  }
  .nav-links.open { max-height: 360px; }
  .nav-links li { border-top: 1px solid var(--line); }
  .nav-links a { display: block; padding: 15px 32px; }
  .nav-links a::after { display: none; }
  .hamburger { display: block; }
}

/* ─────────────────────────────────────────────
   HERO
───────────────────────────────────────────── */
.hero { padding: 88px 0 100px; }
.hero .wrap {
  display: grid; grid-template-columns: 1.2fr 0.8fr;
  gap: 56px; align-items: center;
}
.availability-badge {
  display: inline-flex; align-items: center; gap: 8px;
  font-family: var(--mono); font-size: 0.75rem; color: #4ade80;
  border: 1px solid rgba(74,222,128,0.3);
  background: rgba(74,222,128,0.06);
  padding: 6px 14px; border-radius: 2px; margin-bottom: 22px;
}
.availability-badge span { width: 6px; height: 6px; border-radius: 50%; background: #4ade80; }
.hero h1 {
  font-size: clamp(2.5rem, 5.5vw, 3.8rem);
  letter-spacing: -0.02em; margin-bottom: 10px;
}
.hero h1 em {
  font-style: normal;
  background: linear-gradient(135deg, var(--gold) 0%, var(--teal) 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent;
  background-clip: text;
}
.hero-role {
  font-family: var(--mono); color: var(--muted);
  font-size: 0.88rem; margin-bottom: 22px;
}
.hero p.lede {
  color: var(--ink-dim); font-size: 1.05rem; max-width: 48ch;
  margin-bottom: 34px; line-height: 1.7;
}
.hero-btns { display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 32px; }
.btn {
  display: inline-flex; align-items: center; gap: 8px;
  padding: 12px 22px; font-size: 0.88rem; font-weight: 500;
  border-radius: var(--radius); border: 1px solid transparent;
  transition: all 0.18s var(--ease); cursor: pointer;
}
.btn-primary { background: var(--gold); color: var(--navy-950); }
.btn-primary:hover { background: #edb86a; transform: translateY(-1px); }
.btn-outline { border-color: var(--line-strong); color: var(--ink-dim); }
.btn-outline:hover { border-color: var(--teal); color: var(--teal); }
.social-row { display: flex; gap: 18px; }
.social-row a {
  color: var(--muted); font-size: 1.15rem;
  transition: color 0.15s, transform 0.15s;
  display: flex; align-items: center;
}
.social-row a:hover { color: var(--teal); transform: translateY(-2px); }

/* rank panel */
.rank-panel {
  background: var(--navy-900); border: 1px solid var(--line-strong);
  padding: 26px; position: relative; border-radius: var(--radius);
}
.rank-panel-head {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 16px;
}
.rank-panel-head span:first-child { font-size: 0.82rem; color: var(--muted); }
.rank-panel-head span:last-child { font-family: var(--mono); color: var(--teal); font-size: 0.75rem; }
.rank-chart { overflow: hidden; }
.rank-stats {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 18px; margin-top: 20px;
}
.rank-stat b {
  display: block; font-family: var(--serif);
  font-size: 1.8rem; color: var(--ink); line-height: 1.1;
}
.rank-stat span { font-size: 0.76rem; color: var(--muted); }

@media (max-width: 760px) {
  .hero .wrap { grid-template-columns: 1fr; }
  .rank-panel { margin-top: 8px; }
}

/* ─────────────────────────────────────────────
   ABOUT
───────────────────────────────────────────── */
.about-inner { display: grid; grid-template-columns: 200px 1fr; gap: 52px; }
.about-photo img {
  border: 1px solid var(--line-strong);
  border-radius: var(--radius);
  filter: grayscale(10%);
  width: 100%;
}
.about-photo .loc {
  margin-top: 12px; font-size: 0.8rem; color: var(--muted);
  display: flex; align-items: center; gap: 6px;
}
.about-text p { color: var(--ink-dim); font-size: 1rem; max-width: 60ch; line-height: 1.75; }
.about-text p + p { margin-top: 12px; }
.skill-groups { margin-top: 30px; display: grid; gap: 20px; }
.skill-group-label {
  font-size: 0.75rem; color: var(--gold);
  font-family: var(--mono); margin-bottom: 9px;
}
.tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  font-size: 0.8rem; border: 1px solid var(--line-strong);
  color: var(--ink-dim); padding: 5px 12px; border-radius: var(--radius);
  transition: border-color 0.15s, color 0.15s;
}
.tag:hover { border-color: var(--teal); color: var(--teal); }

@media (max-width: 760px) {
  .about-inner { grid-template-columns: 1fr; }
  .about-photo { max-width: 150px; }
}

/* ─────────────────────────────────────────────
   SKILLS / PROFICIENCY
───────────────────────────────────────────── */
.skills-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 40px 56px;
  margin-top: 12px;
}
.skill-item { margin-bottom: 18px; }
.skill-meta {
  display: flex; justify-content: space-between; align-items: baseline;
  margin-bottom: 8px;
}
.skill-name { font-size: 0.88rem; color: var(--ink-dim); }
.skill-pct { font-family: var(--mono); font-size: 0.75rem; color: var(--muted); }
.skill-bar-track {
  height: 3px; background: var(--navy-700); border-radius: 2px; overflow: hidden;
}
.skill-bar-fill {
  height: 100%; width: 0;
  border-radius: 2px;
  background: linear-gradient(90deg, var(--teal), var(--gold));
  transition: width 1.2s var(--ease);
}

@media (max-width: 640px) {
  .skills-grid { grid-template-columns: 1fr; }
}

/* ─────────────────────────────────────────────
   EXPERIENCE TIMELINE
───────────────────────────────────────────── */
.timeline { position: relative; margin-top: 8px; }
.timeline::before {
  content: ''; position: absolute; left: 6px; top: 6px; bottom: 6px;
  width: 1px; background: var(--line-strong);
}
.tl-item { position: relative; padding: 0 0 46px 44px; }
.tl-item:last-child { padding-bottom: 0; }
.tl-dot {
  position: absolute; left: 0; top: 5px;
  width: 13px; height: 13px; border-radius: 50%;
  background: var(--navy-950); border: 2px solid var(--muted);
  transition: border-color 0.2s;
}
.tl-item.current .tl-dot { border-color: var(--gold); background: var(--gold); }
.tl-top {
  display: flex; justify-content: space-between; align-items: baseline;
  flex-wrap: wrap; gap: 8px; margin-bottom: 4px;
}
.tl-role { font-family: var(--serif); font-size: 1.18rem; font-weight: 600; }
.tl-date { font-family: var(--mono); font-size: 0.75rem; color: var(--muted); white-space: nowrap; }
.tl-company { color: var(--teal); font-size: 0.9rem; margin-bottom: 2px; }
.tl-loc { color: var(--muted); font-size: 0.8rem; margin-bottom: 14px; }
.current-pill {
  display: inline-block; font-size: 0.68rem; font-family: var(--mono);
  color: var(--navy-950); background: var(--gold);
  padding: 2px 9px; border-radius: 2px; margin-left: 10px; vertical-align: middle;
}
.tl-desc ul { padding-left: 18px; color: var(--muted); font-size: 0.92rem; }
.tl-desc ul { list-style: disc; }
.tl-desc li { margin-bottom: 6px; }
.tl-desc li::marker { color: var(--gold); }
.tl-tags { margin-top: 14px; }

/* edu */
.edu-row {
  display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 24px; margin-top: 16px;
}
.edu-item { border-top: 1px solid var(--line-strong); padding-top: 14px; }
.edu-item b { display: block; font-family: var(--serif); font-size: 1.02rem; margin-bottom: 4px; }
.edu-item span { color: var(--muted); font-size: 0.82rem; }

/* ─────────────────────────────────────────────
   SERVICES
───────────────────────────────────────────── */
.service-list { margin-top: 8px; }
.service-row {
  display: grid; grid-template-columns: 56px 1fr 2fr;
  gap: 20px; align-items: start;
  padding: 26px 0; border-top: 1px solid var(--line);
  transition: background 0.15s;
}
.service-row:last-child { border-bottom: 1px solid var(--line); }
.service-row:hover { background: rgba(255,255,255,0.015); }
.service-row .icon-wrap {
  width: 42px; height: 42px;
  border: 1px solid var(--line-strong); border-radius: var(--radius);
  display: flex; align-items: center; justify-content: center;
  color: var(--gold); font-size: 1.1rem;
  background: var(--navy-900);
}
.service-row h3 { font-size: 1.1rem; margin-bottom: 4px; }
.service-row p { color: var(--muted); font-size: 0.92rem; line-height: 1.6; }

@media (max-width: 760px) {
  .service-row { grid-template-columns: 42px 1fr; }
  .service-row > p { grid-column: 2; }
}

/* ─────────────────────────────────────────────
   PROJECTS
───────────────────────────────────────────── */
.project-row {
  display: flex; justify-content: space-between;
  align-items: center; gap: 24px;
  padding: 30px 0; border-top: 1px solid var(--line);
  flex-wrap: wrap; transition: background 0.15s;
}
.project-row:last-child { border-bottom: 1px solid var(--line); }
.project-row:hover { background: rgba(255,255,255,0.015); }
.project-row h3 { font-size: 1.25rem; margin-bottom: 6px; }
.project-row p { color: var(--muted); font-size: 0.9rem; max-width: 46ch; }
.project-row .proj-tags { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
.project-link {
  display: inline-flex; align-items: center; gap: 7px;
  font-size: 0.85rem; color: var(--teal); border-bottom: 1px solid transparent;
  transition: border-color 0.15s; white-space: nowrap;
}
.project-row:hover .project-link { border-color: var(--teal); }

/* ─────────────────────────────────────────────
   TESTIMONIALS
───────────────────────────────────────────── */
.testimonials-grid {
  display: grid; grid-template-columns: 1fr 1fr; gap: 24px; margin-top: 12px;
}
.testi-card {
  background: var(--navy-900); border: 1px solid var(--line-strong);
  border-radius: var(--radius); padding: 26px 28px;
  position: relative;
}
.testi-card::before {
  content: '\201C';
  font-family: var(--serif); font-size: 4rem; line-height: 1;
  color: var(--gold); opacity: 0.25;
  position: absolute; top: 12px; left: 20px;
}
.testi-body {
  color: var(--ink-dim); font-size: 0.93rem; line-height: 1.7;
  margin-bottom: 18px; padding-top: 22px;
}
.testi-author { display: flex; align-items: center; gap: 12px; }
.testi-avatar {
  width: 36px; height: 36px; border-radius: 50%;
  background: var(--navy-700); border: 1px solid var(--line-strong);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--serif); font-size: 0.9rem; color: var(--gold);
}
.testi-name { font-size: 0.88rem; font-weight: 500; }
.testi-role-co { font-size: 0.78rem; color: var(--muted); }

@media (max-width: 640px) {
  .testimonials-grid { grid-template-columns: 1fr; }
}

/* ─────────────────────────────────────────────
   CONTACT
───────────────────────────────────────────── */
.contact-inner {
  display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 56px; align-items: start;
}
.contact-inner p { color: var(--muted); max-width: 44ch; line-height: 1.7; }
.contact-list { margin-top: 24px; display: grid; gap: 14px; }
.contact-list a {
  display: flex; align-items: center; gap: 12px; font-size: 0.92rem;
  color: var(--ink-dim); transition: color 0.15s;
}
.contact-list a:hover { color: var(--teal); }
.contact-list i { color: var(--gold); width: 18px; flex-shrink: 0; }

@media (max-width: 760px) {
  .contact-inner { grid-template-columns: 1fr; }
}

/* ─────────────────────────────────────────────
   FOOTER
───────────────────────────────────────────── */
footer {
  padding: 30px 0; text-align: center;
  color: var(--muted); font-size: 0.8rem; border-top: 1px solid var(--line);
}

/* ─────────────────────────────────────────────
   SCROLL TO TOP
───────────────────────────────────────────── */
#scroll-top {
  position: fixed; bottom: 28px; right: 28px;
  width: 40px; height: 40px; border-radius: var(--radius);
  background: var(--navy-800); border: 1px solid var(--line-strong);
  color: var(--muted); font-size: 0.9rem;
  display: flex; align-items: center; justify-content: center;
  cursor: pointer; z-index: 90;
  opacity: 0; pointer-events: none;
  transition: opacity 0.2s, color 0.15s, transform 0.15s;
}
#scroll-top.visible { opacity: 1; pointer-events: all; }
#scroll-top:hover { color: var(--teal); transform: translateY(-2px); }

/* ─────────────────────────────────────────────
   ENTRANCE ANIMATIONS
───────────────────────────────────────────── */
@media (prefers-reduced-motion: no-preference) {
  .reveal {
    opacity: 0; transform: translateY(28px);
    transition: opacity 0.6s var(--ease), transform 0.6s var(--ease);
  }
  .reveal.visible { opacity: 1; transform: none; }
  .reveal-delay-1 { transition-delay: 0.08s; }
  .reveal-delay-2 { transition-delay: 0.16s; }
  .reveal-delay-3 { transition-delay: 0.24s; }
  .reveal-delay-4 { transition-delay: 0.32s; }
}
</style>
</head>
<body>

<!-- Progress bar -->
<div id="progress-bar"></div>

<!-- ─── NAV ─── -->
<nav>
  <div class="nav-inner">
    <a class="nav-logo" href="#home">
      <div class="availability-dot"></div>
      Ajay Singh
    </a>
    <ul class="nav-links" id="navLinks">
      <li><a href="#home">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#skills">Skills</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#projects">Projects</a></li>
      <li><a href="#contact">Contact</a></li>
    </ul>
    <button class="hamburger" id="hamburger" aria-label="Toggle menu">
      <i class="fas fa-bars"></i>
    </button>
  </div>
</nav>

<!-- ─── HERO ─── -->
<section class="hero" id="home">
  <div class="wrap">
    <div>
      <div class="availability-badge reveal">
        <span></span> Open to full-time roles &amp; freelance
      </div>
      <h1 class="reveal reveal-delay-1">Ajay<br><em>Singh</em></h1>
      <p class="hero-role reveal reveal-delay-2">SEO Executive &amp; Web Developer · Mohali, Punjab</p>
      <p class="lede reveal reveal-delay-2">I help businesses grow their organic visibility through technical SEO and build the websites that visibility points to — from keyword research and crawl fixes to full front-end builds.</p>
      <div class="hero-btns reveal reveal-delay-3">
        <a href="https://drive.google.com/file/d/13WBQENttr0-opJBeUtDlQduKS_Tpu0Gn/view" class="btn btn-primary" target="_blank">
          <i class="fas fa-download"></i> Résumé
        </a>
        <a href="#contact" class="btn btn-outline">Get in Touch</a>
      </div>
      <div class="social-row reveal reveal-delay-4">
        <a href="https://github.com/ajay-singh-webdev" target="_blank" aria-label="GitHub"><i class="fab fa-github"></i></a>
        <a href="https://linkedin.com/in/ajay-singh-seo-dev" target="_blank" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        <a href="mailto:your-email@example.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
      </div>
    </div>

    <div class="rank-panel reveal reveal-delay-2">
      <div class="rank-panel-head">
        <span>Career snapshot</span>
        <span>UPDATED SEP 2026</span>
      </div>
      <div class="rank-chart">
        <svg viewBox="0 0 300 90" width="100%" height="80" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stop-color="#5fbfb3" stop-opacity="0.18"/>
              <stop offset="100%" stop-color="#5fbfb3" stop-opacity="0"/>
            </linearGradient>
          </defs>
          <polygon points="0,90 0,80 40,68 80,70 120,48 160,52 200,30 240,34 300,10 300,90"
            fill="url(#chartFill)"/>
          <polyline points="0,80 40,68 80,70 120,48 160,52 200,30 240,34 300,10"
            fill="none" stroke="#5fbfb3" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="300" cy="10" r="4" fill="#e3a64c"/>
          <circle cx="300" cy="10" r="8" fill="none" stroke="#e3a64c" stroke-opacity="0.3" stroke-width="2">
            <animate attributeName="r" from="4" to="12" dur="2s" repeatCount="indefinite"/>
            <animate attributeName="stroke-opacity" from="0.4" to="0" dur="2s" repeatCount="indefinite"/>
          </circle>
        </svg>
      </div>
      <div class="rank-stats">
        <div class="rank-stat">
          <b class="counter" data-target="1.7" data-suffix="+ yrs" data-decimal="1">0</b>
          <span>SEO experience</span>
        </div>
        <div class="rank-stat">
          <b class="counter" data-target="2" data-suffix="">0</b>
          <span>Live SEO domains</span>
        </div>
        <div class="rank-stat">
          <b class="counter" data-target="5" data-suffix="">0</b>
          <span>Core SEO tools</span>
        </div>
        <div class="rank-stat">
          <b class="counter" data-target="2" data-suffix="">0</b>
          <span>Shipped web projects</span>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── ABOUT ─── -->
<section id="about">
  <div class="wrap">
    <div class="about-inner">
      <div class="about-photo reveal">
        <img src="images/ajay-singh.jpg" alt="Ajay Singh" loading="lazy" />
        <div class="loc"><i class="fas fa-map-marker-alt"></i> Mohali, Punjab, India</div>
      </div>
      <div>
        <p class="section-label reveal">About</p>
        <h2 class="section-title reveal reveal-delay-1">SEO + Development<br>under one roof</h2>
        <div class="reveal reveal-delay-2">
          <p>I'm an SEO Executive and web developer who works comfortably across both disciplines — running audits, keyword research, and link-building campaigns that grow organic traffic, and writing the HTML, CSS, JavaScript, and PHP that make those landing pages worth visiting.</p>
          <p>I hold an MCA from Punjabi University. I started out building websites before moving into full-time SEO, which means I approach search strategy with a developer's understanding of how pages are actually built and crawled.</p>
        </div>

        <div class="skill-groups reveal reveal-delay-3">
          <div>
            <div class="skill-group-label">SEO</div>
            <div class="tag-row">
              <span class="tag">On-page SEO</span>
              <span class="tag">Off-page SEO</span>
              <span class="tag">Technical SEO</span>
              <span class="tag">Keyword Research</span>
              <span class="tag">Link Building</span>
              <span class="tag">Content Optimisation</span>
              <span class="tag">Site Audits</span>
            </div>
          </div>
          <div>
            <div class="skill-group-label">Tools</div>
            <div class="tag-row">
              <span class="tag">Google Search Console</span>
              <span class="tag">GA4</span>
              <span class="tag">SEMrush</span>
              <span class="tag">Ahrefs</span>
              <span class="tag">Screaming Frog</span>
            </div>
          </div>
          <div>
            <div class="skill-group-label">Development</div>
            <div class="tag-row">
              <span class="tag">HTML</span>
              <span class="tag">CSS</span>
              <span class="tag">JavaScript</span>
              <span class="tag">PHP</span>
              <span class="tag">WordPress / CMS</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── SKILLS PROFICIENCY ─── -->
<section id="skills">
  <div class="wrap">
    <p class="section-label reveal">Proficiency</p>
    <h2 class="section-title reveal reveal-delay-1">Where I'm strongest</h2>
    <div class="skills-grid" id="skillsGrid">
      <div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">On-page &amp; Technical SEO</span><span class="skill-pct">90%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="90"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">Keyword Research</span><span class="skill-pct">88%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="88"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">Link Building</span><span class="skill-pct">82%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="82"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">Google Search Console</span><span class="skill-pct">88%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="88"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">SEMrush / Ahrefs</span><span class="skill-pct">80%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="80"></div></div>
        </div>
      </div>
      <div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">HTML &amp; CSS</span><span class="skill-pct">85%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="85"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">JavaScript</span><span class="skill-pct">72%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="72"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">PHP</span><span class="skill-pct">68%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="68"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">WordPress / CMS</span><span class="skill-pct">78%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="78"></div></div>
        </div>
        <div class="skill-item reveal">
          <div class="skill-meta"><span class="skill-name">GA4 &amp; Analytics</span><span class="skill-pct">83%</span></div>
          <div class="skill-bar-track"><div class="skill-bar-fill" data-width="83"></div></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ─── EXPERIENCE ─── -->
<section id="experience">
  <div class="wrap">
    <p class="section-label reveal">Career</p>
    <h2 class="section-title reveal reveal-delay-1">Experience</h2>

    <div class="timeline">
      <div class="tl-item current reveal">
        <div class="tl-dot"></div>
        <div class="tl-top">
          <div class="tl-role">SEO Executive <span class="current-pill">Current</span></div>
          <div class="tl-date">Jul 2026 — Present · 3 mos</div>
        </div>
        <div class="tl-company">Softtrix Tech Solutions Pvt. Ltd.</div>
        <div class="tl-loc"><i class="fas fa-map-marker-alt"></i> Mohali, Punjab · On-site</div>
        <div class="tl-desc">
          <ul>
            <li>Keyword research, on-page optimisation, and technical SEO across client accounts</li>
            <li>Content optimisation, link building, and website audits</li>
            <li>SEO performance analysis using Google Search Console, GA4, SEMrush, Ahrefs, and Screaming Frog</li>
            <li>Implementing data-driven strategies to improve organic growth and support business objectives</li>
          </ul>
        </div>
        <div class="tag-row tl-tags">
          <span class="tag">Technical SEO</span>
          <span class="tag">On-page SEO</span>
          <span class="tag">Link Building</span>
          <span class="tag">SEMrush</span>
          <span class="tag">Ahrefs</span>
          <span class="tag">GA4</span>
        </div>
      </div>

      <div class="tl-item reveal">
        <div class="tl-dot"></div>
        <div class="tl-top">
          <div class="tl-role">SEO Executive</div>
          <div class="tl-date">Jan 2025 — Jun 2026 · 1 yr 6 mos</div>
        </div>
        <div class="tl-company">Arizers Solutions</div>
        <div class="tl-loc"><i class="fas fa-map-marker-alt"></i> Mohali, Punjab</div>
        <div class="tl-desc">
          <ul>
            <li>Worked on live SEO projects in Travel and E-Commerce domains</li>
            <li>Performed detailed keyword research, on-page optimisation, and off-page link building</li>
            <li>Conducted technical SEO audits, fixed crawl and indexing issues, and improved page speed</li>
            <li>Hands-on experience across keyword research, technical fixes, and link building on multiple client sites</li>
          </ul>
        </div>
        <div class="tag-row tl-tags">
          <span class="tag">On-page SEO</span>
          <span class="tag">Off-page SEO</span>
          <span class="tag">Technical SEO</span>
          <span class="tag">Keyword Research</span>
          <span class="tag">Screaming Frog</span>
        </div>
      </div>
    </div>

    <h2 class="section-title reveal" style="margin-top:64px;">Education</h2>
    <div class="edu-row">
      <div class="edu-item reveal">
        <b>MCA</b>
        <span>Punjabi University · 2025</span>
      </div>
      <div class="edu-item reveal reveal-delay-1">
        <b>BCA</b>
        <span>Govt. Shivalik College · 2020–2023</span>
      </div>
      <div class="edu-item reveal reveal-delay-2">
        <b>12th, Humanities</b>
        <span>2020</span>
      </div>
      <div class="edu-item reveal reveal-delay-3">
        <b>10th</b>
        <span>GSSS Kathera · 2018</span>
      </div>
    </div>
  </div>
</section>

<!-- ─── SERVICES ─── -->
<section id="services">
  <div class="wrap">
    <p class="section-label reveal">What I do</p>
    <h2 class="section-title reveal reveal-delay-1">Services</h2>
    <div class="service-list">
      <div class="service-row reveal">
        <div class="icon-wrap"><i class="fas fa-search"></i></div>
        <h3>SEO</h3>
        <p>On-page, off-page, and technical SEO — keyword research, audits, crawl and indexing fixes, content optimisation, and link building aimed at sustainable organic growth.</p>
      </div>
      <div class="service-row reveal">
        <div class="icon-wrap"><i class="fab fa-wordpress"></i></div>
        <h3>CMS Builds</h3>
        <p>Building and customising WordPress sites that are structured to rank well from day one, not retrofitted for SEO afterwards.</p>
      </div>
      <div class="service-row reveal">
        <div class="icon-wrap"><i class="fas fa-code"></i></div>
        <h3>Web Development</h3>
        <p>Front-end and PHP-based development for landing pages, dashboards, and small web apps, built with performance and crawlability in mind.</p>
      </div>
    </div>
  </div>
</section>

<!-- ─── PROJECTS ─── -->
<section id="projects">
  <div class="wrap">
    <p class="section-label reveal">Work</p>
    <h2 class="section-title reveal reveal-delay-1">Projects</h2>
    <div class="project-list">
      <div class="project-row reveal">
        <div>
          <h3>E-Learning Platform</h3>
          <p>A responsive e-learning platform built with SEO-optimised structure from the ground up — clean semantic HTML, fast load times, and structured content hierarchy.</p>
          <div class="proj-tags tag-row">
            <span class="tag">HTML/CSS</span>
            <span class="tag">JavaScript</span>
            <span class="tag">SEO</span>
          </div>
        </div>
        <a href="https://ajay-singh-webdev.github.io/e-learning/" target="_blank" class="project-link">
          View project <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
      <div class="project-row reveal">
        <div>
          <h3>Shoplift Trends</h3>
          <p>A web app for tracking and visualising retail trend data — built for clarity and speed, with a clean data-driven UI.</p>
          <div class="proj-tags tag-row">
            <span class="tag">HTML/CSS</span>
            <span class="tag">JavaScript</span>
            <span class="tag">Data Viz</span>
          </div>
        </div>
        <a href="https://ajay-singh-webdev.github.io/Shoplift-Trends/" target="_blank" class="project-link">
          View project <i class="fas fa-arrow-up-right-from-square"></i>
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ─── TESTIMONIALS ─── -->
<section id="testimonials">
  <div class="wrap">
    <p class="section-label reveal">Social proof</p>
    <h2 class="section-title reveal reveal-delay-1">What colleagues say</h2>
    <div class="testimonials-grid">
      <div class="testi-card reveal">
        <p class="testi-body">Ajay has a sharp eye for technical issues that others miss. He fixed crawl problems we hadn't even noticed, and the impact on our rankings was visible within weeks.</p>
        <div class="testi-author">
          <div class="testi-avatar">R</div>
          <div>
            <div class="testi-name">Rahul M.</div>
            <div class="testi-role-co">Team Lead · Arizers Solutions</div>
          </div>
        </div>
      </div>
      <div class="testi-card reveal reveal-delay-1">
        <p class="testi-body">What sets Ajay apart is that he thinks like a developer when doing SEO — he understands why certain fixes matter technically, not just what the tools recommend.</p>
        <div class="testi-author">
          <div class="testi-avatar">P</div>
          <div>
            <div class="testi-name">Priya S.</div>
            <div class="testi-role-co">Senior SEO · Arizers Solutions</div>
          </div>
        </div>
      </div>
    </div>
    <p style="color:var(--muted);font-size:0.78rem;margin-top:18px;font-family:var(--mono);">* Replace with real testimonials before publishing</p>
  </div>
</section>

<!-- ─── CONTACT ─── -->
<section id="contact">
  <div class="wrap">
    <div class="contact-inner">
      <div>
        <p class="section-label reveal">Let's talk</p>
        <h2 class="section-title reveal reveal-delay-1">Open to the right opportunity</h2>
        <p class="reveal reveal-delay-2">Available for SEO and web development roles and freelance projects. The fastest way to reach me is email or LinkedIn — I typically respond within 24 hours.</p>
      </div>
      <div class="contact-list reveal reveal-delay-2">
        <a href="mailto:your-email@example.com">
          <i class="fas fa-envelope"></i> your-email@example.com
        </a>
        <a href="https://linkedin.com/in/ajay-singh-seo-dev" target="_blank">
          <i class="fab fa-linkedin"></i> linkedin.com/in/ajay-singh-seo-dev
        </a>
        <a href="https://github.com/ajay-singh-webdev" target="_blank">
          <i class="fab fa-github"></i> github.com/ajay-singh-webdev
        </a>
        <a href="#about">
          <i class="fas fa-map-marker-alt"></i> Mohali, Punjab, India
        </a>
      </div>
    </div>
  </div>
</section>

<footer>
  © 2026 Ajay Singh. Built with care &amp; clean markup.
</footer>

<!-- Scroll to top -->
<button id="scroll-top" aria-label="Back to top">
  <i class="fas fa-chevron-up"></i>
</button>

<script>
/* ── Hamburger ── */
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');
hamburger?.addEventListener('click', () => navLinks?.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => navLinks?.classList.remove('open'))
);

/* ── Scroll progress bar ── */
const progressBar = document.getElementById('progress-bar');
function updateProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  progressBar.style.width = pct + '%';
}

/* ── Active nav ── */
const sections = document.querySelectorAll('section[id]');
const navAs = document.querySelectorAll('.nav-links a');
function updateActiveNav() {
  let current = '';
  sections.forEach(sec => {
    if (window.scrollY >= sec.offsetTop - 100) current = sec.id;
  });
  navAs.forEach(a => {
    a.classList.toggle('active', a.getAttribute('href') === '#' + current);
  });
}

/* ── Scroll to top button ── */
const scrollTopBtn = document.getElementById('scroll-top');
function updateScrollTop() {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
}
scrollTopBtn?.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

window.addEventListener('scroll', () => {
  updateProgress();
  updateActiveNav();
  updateScrollTop();
}, { passive: true });

/* ── Intersection Observer: reveal ── */
const revealEls = document.querySelectorAll('.reveal');
const revealObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
revealEls.forEach(el => revealObs.observe(el));

/* ── Skill bars ── */
const bars = document.querySelectorAll('.skill-bar-fill');
const barObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.width = entry.target.dataset.width + '%';
      barObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
bars.forEach(bar => barObs.observe(bar));

/* ── Animated counters ── */
function animateCounter(el) {
  const target = parseFloat(el.dataset.target);
  const suffix = el.dataset.suffix || '';
  const isDecimal = el.dataset.decimal === '1';
  const duration = 1400;
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    const val = target * ease;
    el.textContent = (isDecimal ? val.toFixed(1) : Math.round(val)) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = (isDecimal ? target.toFixed(1) : target) + suffix;
  }
  requestAnimationFrame(step);
}

const counters = document.querySelectorAll('.counter');
const counterObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObs.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObs.observe(c));

/* ── Trigger visible for already-in-view elements ── */
window.dispatchEvent(new Event('scroll'));
</script>
</body>
</html>