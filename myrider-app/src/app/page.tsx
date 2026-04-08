"use client";

import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Business", href: "#business" },
];

const themes = {
  dark: {
    bg: "#0a0a0a",
    bgSecondary: "#111111",
    surface: "#111111",
    surface2: "#181818",
    surface3: "#202020",
    text: "#ffffff",
    textSecondary: "rgba(255,255,255,0.55)",
    textMuted: "rgba(255,255,255,0.45)",
    textDim: "rgba(255,255,255,0.3)",
    border: "rgba(255,255,255,0.07)",
    borderHover: "rgba(255,255,255,0.15)",
    overlay: "rgba(10,10,10,0.7)",
    gradient: "linear-gradient(105deg, #0a0a0a 45%, rgba(10,10,10,0.7) 70%, rgba(10,10,10,0.3) 100%)",
    gradientTop: "linear-gradient(to top, #0a0a0a 0%, transparent 40%)",
    navScrolled: "rgba(10,10,10,0.85)",
    goldText: "#C9A84C",
    surfaceVar: "#111111",
    surface3Var: "#202020",
    borderVar: "rgba(255,255,255,0.07)",
  },
  light: {
    bg: "#f8f7f4",
    bgSecondary: "#ffffff",
    surface: "#ffffff",
    surface2: "#f5f4f1",
    surface3: "#eceae5",
    text: "#1a1a1a",
    textSecondary: "rgba(26,26,26,0.65)",
    textMuted: "rgba(26,26,26,0.55)",
    textDim: "rgba(26,26,26,0.4)",
    border: "rgba(26,26,26,0.08)",
    borderHover: "rgba(26,26,26,0.2)",
    overlay: "rgba(248,247,244,0.75)",
    gradient: "linear-gradient(105deg, #f8f7f4 45%, rgba(248,247,244,0.8) 70%, rgba(248,247,244,0.5) 100%)",
    gradientTop: "linear-gradient(to top, #f8f7f4 0%, transparent 50%)",
    navScrolled: "rgba(248,247,244,0.85)",
    goldText: "#996B2D",
    surfaceVar: "#ffffff",
    surface3Var: "#eceae5",
    borderVar: "rgba(26,26,26,0.08)",
  },
};

const features = [
  {
    icon: "📊",
    title: "Real-Time Tracking",
    description: "Millisecond-level GPS telemetry. Watch your package move — block by block.",
    img: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&q=80",
  },
  {
    icon: "💳",
    title: "Transparent Pricing",
    description: "Zero hidden fees. Dynamic pricing based on distance, weight, and declared value.",
    img: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80",
  },
  {
    icon: "🛡️",
    title: "Insured Delivery",
    description: "Full coverage on every parcel. Multi-stage verification for absolute peace of mind.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80",
  },
  {
    icon: "💬",
    title: "In-App Messaging",
    description: "Direct rider chat with live translation — no language barrier, ever.",
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  },
  {
    icon: "💰",
    title: "Multi-Payment",
    description: "Cards, wallets, corporate credit — frictionless checkout every time.",
    img: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=600&q=80",
  },
  {
    icon: "📅",
    title: "Smart Scheduling",
    description: "Send now or pre-book up to 7 days out with one tap.",
    img: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&q=80",
  },
];

const steps = [
  { num: "01", title: "Request", desc: "Post your order in under 30 seconds", icon: "📦" },
  { num: "02", title: "Matched", desc: "Nearest rider assigned in < 20s", icon: "🏍️" },
  { num: "03", title: "Pickup", desc: "Item collected & verified", icon: "✅" },
  { num: "04", title: "In Transit", desc: "Live GPS telemetry active", icon: "📍" },
  { num: "05", title: "Delivered", desc: "Proof captured, receipt sent", icon: "🔐" },
];

const useCases = [
  { icon: "🎁", label: "Personal Gifts" },
  { icon: "🏢", label: "Corporate Logistics" },
  { icon: "📄", label: "Legal Documents" },
  { icon: "🛍️", label: "E-Commerce Returns" },
  { icon: "💊", label: "Urgent Pharmacy" },
  { icon: "🍱", label: "Food & Perishables" },
  { icon: "📱", label: "Electronics" },
  { icon: "🔑", label: "Keys & Access" },
];

const testimonials = [
  {
    name: "Mike Okafor",
    role: "Operations Lead, Wavepay Africa",
    quote: "MyRider cut our internal courier costs by 40%. The dual-pricing model is genuinely revolutionary.",
    avatar: "https://images.unsplash.com/flagged/photo-1557878430-4a2b256ce9fc?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Israel Sampson",
    role: "Founder, Chowpaddi",
    quote: "We run 300+ daily deliveries through MyRider. Zero disputes in 6 months. The proof system is bulletproof.",
    avatar: "https://images.unsplash.com/photo-1731497772468-972aadd8e056?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fatima Al-Hassan",
    role: "Personal user, Lagos",
    quote: "I sent a gold bracelet to my sister across the city. Tracked every turn. Arrived in 22 minutes, insured.",
    avatar: "https://images.unsplash.com/photo-1502823403499-6ccfcf4fb453?w=200&q=80",
  },
];

const stats = [
  { value: "4.9", label: "Average Rating", sub: "From 1M+ deliveries" },
  { value: "18m", label: "Avg. Delivery", sub: "Request to doorstep" },
  { value: "99.7%", label: "Success Rate", sub: "No lost packages" },
  { value: "40k+", label: "Active Riders", sub: "Background verified" },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [count, setCount] = useState({ rating: 0, time: 0, success: 0, riders: 0 });
  const [darkMode, setDarkMode] = useState(true);
  const statsVisible = useRef(false);
  const t = darkMode ? themes.dark : themes.light;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);

      const sectionIds = [
        "hero", "features", "dispatch", "valuation", "ai",
        "how-it-works", "proof", "usecases", "stats", "testimonials", "cta"
      ];
      const visible = new Set<string>();
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.82) visible.add(id);
        }
      });
      setVisibleSections(visible);

      // Animate step based on how-it-works scroll
      const hw = document.getElementById("how-it-works");
      if (hw) {
        const rect = hw.getBoundingClientRect();
        const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / (rect.height + window.innerHeight)));
        setActiveStep(Math.floor(progress * 5));
      }

      // Stats counter
      const statsEl = document.getElementById("stats");
      if (statsEl && !statsVisible.current) {
        const rect = statsEl.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          statsVisible.current = true;
          animateStats();
        }
      }
    };

    const animateStats = () => {
      const duration = 2000;
      const start = Date.now();
      const tick = () => {
        const elapsed = Date.now() - start;
        const t = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - t, 3);
        setCount({
          rating: parseFloat((ease * 4.9).toFixed(1)),
          time: Math.round(ease * 18),
          success: parseFloat((ease * 99.7).toFixed(1)),
          riders: Math.round(ease * 40000),
        });
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const vis = (s: string) => visibleSections.has(s);

  return (
    <div className="min-h-screen overflow-x-hidden" style={{ 
      background: t.bg, 
      color: t.text,
      "--surface": t.surface,
      "--surface-2": t.surface2,
      "--surface-3": t.surface3,
      "--border": t.border,
      "--text-secondary": t.textSecondary,
      "--text-muted": t.textMuted,
      "--text-dim": t.textDim,
    } as React.CSSProperties}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;1,9..40,300&display=swap');
        
        :root {
          --gold: #C9A84C;
          --gold-light: #F2D280;
          --gold-dim: rgba(201,168,76,0.15);
          --surface: #111111;
          --surface-2: #181818;
          --surface-3: #202020;
          --border: rgba(255,255,255,0.07);
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'DM Sans', sans-serif; background: var(--surface, #0a0a0a); color: white; }

        .font-headline { font-family: 'Syne', sans-serif; }

        .glass {
          background: rgba(255,255,255,0.04);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.08);
        }

        .gold-gradient {
          background: linear-gradient(135deg, #C9A84C 0%, #F2D280 50%, #C9A84C 100%);
        }

        .gold-text {
          background: linear-gradient(135deg, #C9A84C, #F2D280, #C9A84C);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .glow-gold {
          box-shadow: 0 0 40px rgba(201,168,76,0.25), 0 0 80px rgba(201,168,76,0.1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideLeft {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
        @keyframes pulse-ring {
          0% { transform: scale(1); opacity: 0.6; }
          100% { transform: scale(1.8); opacity: 0; }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scan {
          0% { top: 10%; opacity: 1; }
          50% { opacity: 0.8; }
          100% { top: 85%; opacity: 1; }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes progress-fill {
          from { width: 0; }
          to { width: 75%; }
        }

        .animate-slide-up { animation: slideUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slide-left { animation: slideLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-slide-right { animation: slideRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards; }
        .animate-fade { animation: fadeIn 1s ease forwards; }
        .animate-float { animation: float 4s ease-in-out infinite; }
        .hidden-init { opacity: 0; transform: translateY(30px); }
        .hidden-left { opacity: 0; transform: translateX(-30px); }
        .hidden-right { opacity: 0; transform: translateX(30px); }

        .marquee-track { animation: marquee 30s linear infinite; }
        .scan-line { animation: scan 3s ease-in-out infinite alternate; }

        .btn-gold {
          background: linear-gradient(135deg, #C9A84C 0%, #F2D280 50%, #C9A84C 100%);
          background-size: 200% auto;
          color: #0a0a0a;
          font-family: 'Syne', sans-serif;
          font-weight: 700;
          border: none;
          cursor: pointer;
          transition: all 0.4s ease;
          letter-spacing: -0.01em;
        }
        .btn-gold:hover {
          background-position: right center;
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(201,168,76,0.4);
        }

        .btn-outline {
          background: transparent;
          color: white;
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          border: 1px solid rgba(255,255,255,0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .btn-outline:hover {
          background: rgba(255,255,255,0.06);
          border-color: rgba(255,255,255,0.4);
          transform: translateY(-2px);
        }

        .feature-card {
          background: var(--surface);
          border: 1px solid var(--border);
          transition: all 0.4s ease;
          overflow: hidden;
          background: ${t.surface};
          border-color: ${t.border};
        }
        .feature-card:hover {
          border-color: rgba(201,168,76,0.3);
          transform: translateY(-6px);
          box-shadow: 0 30px 60px rgba(0,0,0,0.4), 0 0 30px rgba(201,168,76,0.08);
        }
        .feature-card:hover .feature-img {
          transform: scale(1.08);
        }
        .feature-img { transition: transform 0.6s ease; }

        .step-dot {
          width: 44px; height: 44px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 13px;
          flex-shrink: 0;
          transition: all 0.4s ease;
        }
        .step-dot.active {
          background: linear-gradient(135deg, #C9A84C, #F2D280);
          color: #0a0a0a;
          box-shadow: 0 0 20px rgba(201,168,76,0.5);
        }
        .step-dot.inactive {
          background: var(--surface-3, #202020);
          border: 1px solid var(--border);
          color: var(--text-dim, rgba(255,255,255,0.4));
        }

        .noise {
          position: relative;
        }
        .noise::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.03'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 1;
        }

        .testimonial-card {
          background: var(--surface, #111111);
          border: 1px solid var(--border);
          transition: all 0.4s ease;
        }
        .testimonial-card:hover {
          border-color: rgba(201,168,76,0.2);
          transform: translateY(-4px);
        }

        .rider-photo {
          object-fit: cover;
          filter: grayscale(20%);
          transition: filter 0.4s ease;
        }
        .rider-photo:hover { filter: grayscale(0%); }

        /* Scrollbar */
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: var(--surface, #0a0a0a); }
        ::-webkit-scrollbar-thumb { background: var(--gold); border-radius: 2px; }

        @media (max-width: 768px) {
          .hero-title { font-size: clamp(2.5rem, 10vw, 4.5rem) !important; }
          .section-title { font-size: clamp(2rem, 7vw, 3.5rem) !important; }
        }
      `}</style>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.5s ease",
        padding: scrolled ? "12px 0" : "24px 0",
        background: scrolled ? t.navScrolled : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? `1px solid ${t.border}` : "none",
      }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 32px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div className="font-headline" style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.03em" }}>
            <span className="gold-text">My</span>
            <span style={{ color: t.text }}>Rider</span>
          </div>
          <div style={{ display: "flex", gap: 36, alignItems: "center" }} className="hidden md:flex">
            {navItems.map((item) => (
              <a key={item.label} href={item.href} style={{
                fontFamily: "'Syne', sans-serif",
                fontWeight: 600,
                fontSize: 14,
                color: t.textSecondary,
                textDecoration: "none",
                letterSpacing: "0.01em",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = t.goldText)}
                onMouseLeave={e => (e.currentTarget.style.color = t.textSecondary)}
              >
                {item.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              width: 40,
              height: 40,
              borderRadius: "50%",
              border: `1px solid ${t.border}`,
              background: t.surface3,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 18,
              transition: "all 0.3s ease",
            }}
            onMouseEnter={e => (e.currentTarget.style.borderColor = t.borderHover)}
            onMouseLeave={e => (e.currentTarget.style.borderColor = t.border)}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="btn-gold" style={{ padding: "10px 26px", borderRadius: 100, fontSize: 14 }}>
            Send a Package →
          </button>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden", padding: "120px 32px 80px" }}>
        
        {/* Background hero image */}
        <div style={{ position: "absolute", inset: 0, zIndex: 0 }}>
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1800&q=80"
            alt="Rider on motorcycle"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
          />
          <div style={{ position: "absolute", inset: 0, background: t.gradient }} />
          <div style={{ position: "absolute", inset: 0, background: t.gradientTop }} />
        </div>

        {/* Noise overlay */}
        <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.025'/%3E%3C/svg%3E\")", zIndex: 1 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1280, margin: "0 auto", width: "100%" }}>
          <div className={vis("hero") ? "animate-slide-up" : "hidden-init"} style={{ animationDelay: "0.1s" }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)",
              padding: "6px 16px", borderRadius: 100, marginBottom: 32,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#C9A84C", display: "inline-block", animation: "blink 1.5s ease infinite" }} />
              <span className="font-headline" style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", color: "#C9A84C" }}>LAST-MILE LOGISTICS REIMAGINED</span>
            </div>
          </div>

          <h1 className={`font-headline hero-title ${vis("hero") ? "animate-slide-up" : "hidden-init"}`}
            style={{ fontSize: "clamp(3.2rem, 6vw, 6rem)", fontWeight: 800, lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 28, animationDelay: "0.2s" }}>
            Fast. Reliable.<br />
            <span className="gold-text">At Your Fingertips.</span>
          </h1>

          <p className={`${vis("hero") ? "animate-slide-up" : "hidden-init"}`}
            style={{ fontSize: 18, color: t.textSecondary, lineHeight: 1.75, maxWidth: 480, marginBottom: 48, fontWeight: 300, animationDelay: "0.35s" }}>
            On-demand urban logistics with AI-powered dispatch, dual-valuation security, and real-time telemetry — built for the modern city.
          </p>

          <div className={`${vis("hero") ? "animate-slide-up" : "hidden-init"}`} style={{ display: "flex", gap: 16, flexWrap: "wrap", animationDelay: "0.5s" }}>
            <button className="btn-gold" style={{ padding: "16px 36px", borderRadius: 100, fontSize: 16 }}>
              Start Sending Now
            </button>
            <button className="btn-outline" style={{ padding: "16px 36px", borderRadius: 100, fontSize: 16 }}>
              Track a Shipment
            </button>
          </div>

          {/* Floating stat cards */}
          {/* <div className={`${vis("hero") ? "animate-fade" : "hidden-init"}`} style={{ display: "flex", gap: 16, marginTop: 64, flexWrap: "wrap", animationDelay: "0.8s" }}>
            {[
              { val: "18 min", label: "Avg. delivery time" },
              { val: "4.9★", label: "Customer rating" },
              { val: "40k+", label: "Verified riders" },
            ].map((s) => (
              <div key={s.val} className="glass" style={{ padding: "14px 22px", borderRadius: 16 }}>
                <div className="font-headline" style={{ fontSize: 20, fontWeight: 800, color: "#C9A84C" }}>{s.val}</div>
                <div style={{ fontSize: 12, color: "rgba(255,255,255,0.45)", marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </div> */}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.4 }}>
          <span style={{ fontSize: 11, letterSpacing: "0.12em", fontWeight: 600 }}>SCROLL</span>
          <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(255,255,255,0.5), transparent)" }} />
        </div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div style={{ background: "#C9A84C", padding: "14px 0", overflow: "hidden" }}>
        <div className="marquee-track" style={{ display: "flex", gap: 60, whiteSpace: "nowrap" }}>
          {Array(2).fill(["⚡ AI-Powered Dispatch", "🛡️ Insured Delivery", "📍 Live GPS Tracking", "💎 Dual-Value Pricing", "🏍️ 40,000+ Riders", "✅ 99.7% Success Rate", "⚡ AI-Powered Dispatch", "🛡️ Insured Delivery", "📍 Live GPS Tracking", "💎 Dual-Value Pricing", "🏍️ 40,000+ Riders", "✅ 99.7% Success Rate"]).flat().map((item, i) => (
            <span key={i} className="font-headline" style={{ color: "#0a0a0a", fontWeight: 700, fontSize: 13, letterSpacing: "0.05em" }}>{item}</span>
          ))}
        </div>
      </div>

      {/* ── DISPATCH SECTION ── */}
      <section id="dispatch" style={{ padding: "120px 32px", background: t.surface }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-responsive">
          
          <div className={vis("dispatch") ? "animate-slide-right" : "hidden-right"} style={{ animationDelay: "0.1s" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 20 }}>HOW IT BEGINS</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24, lineHeight: 1.05 }}>
              Smart Dispatch.<br />Zero Delay.
            </h2>
            <p style={{ color: t.textSecondary, lineHeight: 1.8, marginBottom: 40, fontSize: 16, fontWeight: 300 }}>
              Our kinetic algorithm scans live rider positions across the city and assigns the optimal match in under 20 seconds. No middlemen, no lag.
            </p>

            {[
              { icon: "📍", title: "GPS Coordinate Lock", sub: "Pickup location resolved to 3-meter accuracy" },
              { icon: "🏍️", title: "Rider Matched Instantly", sub: "Proximity, rating & capacity — all factored in real time" },
              { icon: "🔔", title: "Both Parties Notified", sub: "Sender and rider alerted simultaneously" },
            ].map((item) => (
              <div key={item.title} style={{ display: "flex", gap: 20, marginBottom: 20, padding: "20px 24px", background: t.surface3, borderRadius: 16, border: `1px solid ${t.border}`, transition: "border-color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(201,168,76,0.3)")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = t.border)}
              >
                <span style={{ fontSize: 22 }}>{item.icon}</span>
                <div>
                  <div style={{ fontWeight: 600, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: t.textMuted }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          <div className={vis("dispatch") ? "animate-slide-left" : "hidden-left"} style={{ animationDelay: "0.3s", position: "relative" }}>
            <div style={{ borderRadius: 28, overflow: "hidden", position: "relative", aspectRatio: "4/3" }}>
              <img src="/image.png" alt="Delivery rider" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 60%)" }} />
              
              {/* Live overlay card */}
              <div className="glass animate-float" style={{ position: "absolute", bottom: 24, left: 24, right: 24, padding: "20px 24px", borderRadius: 20, border: "1px solid rgba(201,168,76,0.3)" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", marginBottom: 4 }}>Rider assigned</div>
                    <div className="font-headline" style={{ fontSize: 22, fontWeight: 800, color: "#C9A84C" }}>ETA: 4 mins</div>
                  </div>
                  <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                    <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80", boxShadow: "0 0 8px #4ade80", animation: "blink 1s ease infinite" }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: "#4ade80" }}>LIVE</span>
                  </div>
                </div>
                <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
                  {["Pickup", "In Transit", "Delivery"].map((s, i) => (
                    <div key={s} style={{
                      flex: 1, height: 4, borderRadius: 2,
                      background: i === 0 ? "#C9A84C" : i === 1 ? "rgba(201,168,76,0.3)" : "rgba(255,255,255,0.1)"
                    }} />
                  ))}
                </div>
              </div>

              {/* Pulse ring */}
              <div style={{ position: "absolute", top: 24, right: 24 }}>
                <div style={{ position: "relative", width: 48, height: 48 }}>
                  <div style={{ position: "absolute", inset: 0, borderRadius: "50%", border: "2px solid #C9A84C", animation: "pulse-ring 2s ease-out infinite" }} />
                  <div style={{ position: "absolute", inset: 8, borderRadius: "50%", background: "#C9A84C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16 }}>🏍️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES GRID ── */}
      <section id="features" style={{ padding: "120px 32px", background: t.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className={vis("features") ? "animate-slide-up" : "hidden-init"} style={{ marginBottom: 64, animationDelay: "0.1s" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 16 }}>PLATFORM FEATURES</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, maxWidth: 560 }}>
              Industrial-Grade. <span className="gold-text">Consumer-Simple.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={f.title} className={`feature-card ${vis("features") ? "animate-slide-up" : "hidden-init"}`}
                style={{ borderRadius: 24, animationDelay: `${0.1 + i * 0.08}s` }}>
                <div style={{ height: 200, overflow: "hidden", borderRadius: "24px 24px 0 0", position: "relative" }}>
                  <img src={f.img} alt={f.title} className="feature-img" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(17,17,17,0.9))" }} />
                </div>
                <div style={{ padding: "24px 28px 28px" }}>
                  <div style={{ fontSize: 24, marginBottom: 12 }}>{f.icon}</div>
                  <h3 className="font-headline" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8, letterSpacing: "-0.02em" }}>{f.title}</h3>
                  <p style={{ fontSize: 14, color: t.textMuted, lineHeight: 1.7 }}>{f.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DUAL PRICING ── */}
      <section id="valuation" style={{ padding: "120px 32px", background: t.surface }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-responsive">

            <div className={vis("valuation") ? "animate-slide-right" : "hidden-right"} style={{ animationDelay: "0.1s" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 20 }}>THE INNOVATION</div>
              <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24, lineHeight: 1.05 }}>
                Dual-Pricing.<br /><span className="gold-text">One Smart System.</span>
              </h2>
              <p style={{ color: t.textSecondary, lineHeight: 1.8, marginBottom: 48, fontSize: 16, fontWeight: 300 }}>
                Why pay luxury rates for a bag of cement, or risk a gold watch in standard delivery? We separate weight logistics from value logistics — forever.
              </p>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { icon: "⚖️", title: "Standard Weight", desc: "Bulk, durable goods. Priced for mass.", color: "rgba(255,255,255,0.08)" },
                  { icon: "💎", title: "Premium Value", desc: "Fragile, luxury items. White-glove handling.", color: "rgba(201,168,76,0.12)", accent: true },
                ].map((tier) => (
                  <div key={tier.title} style={{ padding: "28px 24px", borderRadius: 20, background: tier.color, border: `1px solid ${tier.accent ? "rgba(201,168,76,0.3)" : t.border}` }}>
                    <div style={{ fontSize: 28, marginBottom: 16 }}>{tier.icon}</div>
                    <div className="font-headline" style={{ fontWeight: 700, marginBottom: 8, color: tier.accent ? "#C9A84C" : t.text }}>{tier.title}</div>
                    <div style={{ fontSize: 13, color: t.textMuted, lineHeight: 1.6 }}>{tier.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className={vis("valuation") ? "animate-slide-left" : "hidden-left"} style={{ animationDelay: "0.3s", position: "relative" }}>
              <div style={{ display: "grid", gap: 16 }}>
                {[
                  { img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80", label: "Construction Materials", tag: "WEIGHT", w: "100%" },
                  { img: "https://images.unsplash.com/photo-1547996160-81dfa63595aa?w=800&q=80", label: "Luxury Timepiece", tag: "VALUE", w: "100%", accent: true },
                ].map((item) => (
                  <div key={item.label} style={{ borderRadius: 20, overflow: "hidden", position: "relative", height: 180 }}>
                    <img src={item.img} alt={item.label} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(10,10,10,0.8) 0%, transparent 60%)" }} />
                    <div style={{ position: "absolute", top: 20, left: 20 }}>
                      <div style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.12em", color: item.accent ? "#C9A84C" : "rgba(255,255,255,0.8)", background: item.accent ? "rgba(201,168,76,0.2)" : "rgba(255,255,255,0.1)", border: `1px solid ${item.accent ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.15)"}`, padding: "4px 12px", borderRadius: 100, marginBottom: 8 }}>{item.tag}</div>
                      <div className="font-headline" style={{ fontWeight: 700, fontSize: 16 }}>{item.label}</div>
                    </div>
                  </div>
                ))}

                {/* Threshold bar */}
                <div style={{ padding: "24px", background: "var(--surface-3)", borderRadius: 20, border: "1px solid var(--border)" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 12, fontSize: 13 }}>
                    <span style={{ color: "rgba(255,255,255,0.5)" }}>Value Threshold</span>
                    <span className="font-headline" style={{ color: "#C9A84C", fontWeight: 700 }}>$500+</span>
                  </div>
                  <div style={{ height: 6, background: "rgba(255,255,255,0.08)", borderRadius: 3, overflow: "hidden" }}>
                    <div style={{ height: "100%", width: "75%", background: "linear-gradient(to right, #C9A84C, #F2D280)", borderRadius: 3, animation: vis("valuation") ? "progress-fill 2s 0.5s cubic-bezier(0.22,1,0.36,1) both" : "none" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI SECTION ── */}
      <section id="ai" style={{ padding: "120px 32px", background: t.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-responsive">

          {/* AI phone mockup */}
          <div className={vis("ai") ? "animate-slide-right" : "hidden-right"} style={{ animationDelay: "0.1s", order: 1 }}>
            <div style={{ maxWidth: 320, margin: "0 auto", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 36, padding: 16, boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 0 40px rgba(201,168,76,0.08)" }}>
              {/* Phone inner */}
              <div style={{ background: "#0a0a0a", borderRadius: 24, overflow: "hidden" }}>
                {/* Camera scan area */}
                <div style={{ position: "relative", height: 240, background: "#111" }}>
                  <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80" alt="Scanned item" style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.6 }} />
                  {/* Scan line */}
                  <div className="scan-line" style={{ position: "absolute", left: 0, right: 0, height: 2, background: "linear-gradient(to right, transparent, #C9A84C, transparent)" }} />
                  {/* Corner markers */}
                  {[["0%","0%","right","bottom"],["0%","auto","right","top"],["auto","0%","left","bottom"],["auto","auto","left","top"]].map(([t,b,br,bl], i) => (
                    <div key={i} style={{ position: "absolute", top: t === "auto" ? undefined : 16, bottom: b === "auto" ? undefined : 16, right: br === "auto" ? 16 : undefined, left: bl === "auto" ? 16 : undefined, width: 20, height: 20, borderTop: bl === "left" ? "2px solid #C9A84C" : "none", borderBottom: bl !== "left" ? "2px solid #C9A84C" : "none", borderLeft: bl === "left" ? "2px solid #C9A84C" : "none", borderRight: bl !== "left" ? "2px solid #C9A84C" : "none" }} />
                  ))}
                  {/* AI label */}
                  <div style={{ position: "absolute", top: 12, left: 12, background: "rgba(201,168,76,0.9)", borderRadius: 8, padding: "4px 10px", display: "flex", alignItems: "center", gap: 6 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0a0a0a", animation: "blink 0.8s ease infinite" }} />
                    <span className="font-headline" style={{ fontSize: 10, fontWeight: 800, color: "#0a0a0a", letterSpacing: "0.08em" }}>AI SCANNING</span>
                  </div>
                </div>

                {/* Results */}
                <div style={{ padding: 20 }}>
                  <div className="font-headline" style={{ fontSize: 12, fontWeight: 700, letterSpacing: "0.08em", color: "rgba(255,255,255,0.4)", marginBottom: 16 }}>DETECTED</div>
                  {[
                    { label: "Item Type", value: "Electronics", color: "#C9A84C" },
                    { label: "Est. Value", value: "₦349,000.00", color: "#C9A84C" },
                    { label: "Fragility", value: "HIGH ⚠️", color: "#f87171" },
                    { label: "Pricing Tier", value: "Premium", color: "#C9A84C" },
                  ].map((r) => (
                    <div key={r.label} style={{ display: "flex", justifyContent: "space-between", padding: "10px 0", borderBottom: "1px solid var(--border)" }}>
                      <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>{r.label}</span>
                      <span className="font-headline" style={{ fontSize: 13, fontWeight: 700, color: r.color }}>{r.value}</span>
                    </div>
                  ))}

                  <button className="btn-gold" style={{ width: "100%", padding: "14px", borderRadius: 16, fontSize: 14, marginTop: 20 }}>
                    Confirm & Book
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className={vis("ai") ? "animate-slide-left" : "hidden-left"} style={{ animationDelay: "0.3s", order: 2 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 20 }}>AI-ASSISTED BOOKING</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24, lineHeight: 1.05 }}>
              Just Snap a Photo.<br /><span className="gold-text">We Handle the Rest.</span>
            </h2>
            <p style={{ color: t.textSecondary, lineHeight: 1.8, marginBottom: 40, fontSize: 16, fontWeight: 300 }}>
              Not sure about weight or value? Our computer vision model auto-classifies your item, estimates insurance value, and flags fragility — in under 2 seconds.
            </p>
            {[
              { icon: "🔍", label: "Auto-Classification — Category detected from camera" },
              { icon: "💰", label: "Insurance Estimation — Market value assessed instantly" },
              { icon: "⚠️", label: "Fragile Flagging — Rider briefed before pickup" },
            ].map((f) => (
              <div key={f.label} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.2)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 16, flexShrink: 0 }}>{f.icon}</div>
                <span style={{ color: t.textSecondary, lineHeight: 1.7, paddingTop: 6 }}>{f.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section id="how-it-works" style={{ padding: "120px 32px", background: t.surface }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className={vis("how-it-works") ? "animate-slide-up" : "hidden-init"} style={{ marginBottom: 80, animationDelay: "0.1s" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 16 }}>THE JOURNEY</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Five Steps to <span className="gold-text">Your Door.</span>
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 20 }} className="steps-grid">
            {steps.map((step, i) => (
              <div key={step.num} className={vis("how-it-works") ? "animate-slide-up" : "hidden-init"} style={{ animationDelay: `${0.1 + i * 0.1}s`, textAlign: "center" }}>
                <div style={{ position: "relative", marginBottom: 24 }}>
                  <div className={`step-dot ${i <= activeStep ? "active" : "inactive"}`} style={{ 
                    margin: "0 auto",
                    background: i <= activeStep ? "linear-gradient(135deg, #C9A84C, #F2D280)" : t.surface3,
                    border: `1px solid ${i <= activeStep ? "transparent" : t.border}`,
                    color: i <= activeStep ? "#0a0a0a" : t.textMuted,
                    boxShadow: i <= activeStep ? "0 0 20px rgba(201,168,76,0.5)" : "none"
                  }}>
                    {i <= activeStep ? step.icon : step.num}
                  </div>
                  {i < 4 && (
                    <div style={{ position: "absolute", top: "50%", left: "calc(50% + 22px)", right: "calc(-50% + 22px)", height: 1, background: i < activeStep ? "#C9A84C" : "rgba(255,255,255,0.1)", transition: "background 0.4s ease" }} />
                  )}
                </div>
                <div className="font-headline" style={{ fontWeight: 700, fontSize: 14, marginBottom: 6, color: i <= activeStep ? t.text : t.textDim }}>{step.title}</div>
                <div style={{ fontSize: 12, color: t.textDim, lineHeight: 1.5 }}>{step.desc}</div>
              </div>
            ))}
          </div>

          {/* Photo strip */}
          <div style={{ marginTop: 64, display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 16, borderRadius: 24, overflow: "hidden" }}>
            <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=900&q=80" alt="Delivery process" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            </div>
            <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&q=80" alt="Rider in motion" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            </div>
            <div style={{ height: 280, position: "relative", overflow: "hidden" }}>
              <img src="https://images.unsplash.com/photo-1609429019995-8c40f49535a5?w=600&q=80" alt="Package delivery" style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")} />
            </div>
          </div>
        </div>
      </section>

      {/* ── PROOF OF DELIVERY ── */}
      <section id="proof" style={{ padding: "120px 32px", background: t.bg }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-responsive">
          <div className={vis("proof") ? "animate-slide-right" : "hidden-right"} style={{ animationDelay: "0.1s" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 20 }}>ZERO-DISPUTE PROTOCOL</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24, lineHeight: 1.05 }}>
              Every Delivery.<br /><span className="gold-text">Verified.</span>
            </h2>
            <p style={{ color: t.textSecondary, lineHeight: 1.8, marginBottom: 40, fontSize: 16, fontWeight: 300 }}>
              We close every delivery with tamper-proof digital verification. Secure PIN, biometric e-signature, and timestamped photo proof — all stored for 90 days.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { icon: "🔢", title: "Secure OTP", sub: "6-digit one-time PIN" },
                { icon: "✍️", title: "E-Signature", sub: "Biometric capture" },
                { icon: "📸", title: "Photo Proof", sub: "Timestamped & geo-tagged" },
                { icon: "📋", title: "Digital Receipt", sub: "Sent instantly to both" },
              ].map((p) => (
                <div key={p.title} style={{ padding: "20px", background: t.surface, borderRadius: 16, border: `1px solid ${t.border}` }}>
                  <div style={{ fontSize: 20, marginBottom: 10 }}>{p.icon}</div>
                  <div className="font-headline" style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.title}</div>
                  <div style={{ fontSize: 12, color: t.textDim }}>{p.sub}</div>
                </div>
              ))}
            </div>
          </div>

          <div className={vis("proof") ? "animate-slide-left" : "hidden-left"} style={{ animationDelay: "0.3s" }}>
            <div style={{ borderRadius: 28, overflow: "hidden", position: "relative", aspectRatio: "3/4" }}>
              <img src="https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80" alt="Delivery confirmation" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)" }} />
              <div style={{ position: "absolute", bottom: 28, left: 28, right: 28 }}>
                <div className="glass" style={{ padding: "20px 24px", borderRadius: 20, border: "1px solid rgba(74,222,128,0.3)" }}>
                  <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                    <div style={{ width: 40, height: 40, borderRadius: "50%", background: "rgba(74,222,128,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18 }}>✅</div>
                    <div>
                      <div className="font-headline" style={{ fontWeight: 800, color: "#4ade80" }}>DELIVERED</div>
                      <div style={{ fontSize: 12, color: "rgba(255,255,255,0.5)" }}>ID: MYR-992-447 · 14:32 GMT</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── USE CASES ── */}
      <section id="usecases" style={{ padding: "120px 32px", background: t.surface }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className={vis("usecases") ? "animate-slide-up" : "hidden-init"} style={{ marginBottom: 64, animationDelay: "0.1s" }}>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: 12 }}>
              Versatility <span className="gold-text">in Motion.</span>
            </h2>
            <p style={{ color: t.textMuted, fontSize: 16 }}>Whatever it is. Wherever it needs to go.</p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            {useCases.map((u, i) => (
              <div key={u.label} className={vis("usecases") ? "animate-slide-up" : "hidden-init"} style={{
                animationDelay: `${0.05 * i}s`, display: "flex", alignItems: "center", gap: 12,
                padding: "14px 24px", borderRadius: 100, background: t.surface3, border: `1px solid ${t.border}`,
                cursor: "pointer", transition: "all 0.3s ease",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)"; (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.08)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = t.border; (e.currentTarget as HTMLElement).style.background = t.surface3; }}
              >
                <span style={{ fontSize: 18 }}>{u.icon}</span>
                <span className="font-headline" style={{ fontWeight: 600, fontSize: 14 }}>{u.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      {/* <section id="stats" style={{ padding: "120px 32px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 2 }} className="stats-grid">
            {[
              { raw: count.rating, suffix: "/5", label: "Avg. Rating", sub: "1M+ deliveries" },
              { raw: count.time, suffix: "m", label: "Avg. Delivery", sub: "Request to door" },
              { raw: count.success, suffix: "%", label: "Success Rate", sub: "Zero lost packages" },
              { raw: count.riders > 1000 ? Math.round(count.riders / 1000) : count.riders, suffix: count.riders > 1000 ? "k+" : "+", label: "Active Riders", sub: "Background verified" },
            ].map((s, i) => (
              <div key={s.label} className={vis("stats") ? "animate-slide-up" : "hidden-init"} style={{
                animationDelay: `${0.1 + i * 0.1}s`, padding: "48px 40px",
                background: i === 1 ? "rgba(201,168,76,0.08)" : "var(--surface)",
                border: `1px solid ${i === 1 ? "rgba(201,168,76,0.2)" : "var(--border)"}`,
                borderRadius: i === 0 ? "20px 0 0 20px" : i === 3 ? "0 20px 20px 0" : 0,
                textAlign: "center",
              }}>
                <div className="font-headline gold-text" style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>
                  {s.raw}{s.suffix}
                </div>
                <div className="font-headline" style={{ fontWeight: 700, marginTop: 12, marginBottom: 4 }}>{s.label}</div>
                <div style={{ fontSize: 13, color: "rgba(255,255,255,0.4)" }}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── TESTIMONIALS ── */}
      <section id="testimonials" style={{ padding: "120px 32px", background: t.surface }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div className={vis("testimonials") ? "animate-slide-up" : "hidden-init"} style={{ marginBottom: 64, animationDelay: "0.1s" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 16 }}>TRUSTED BY THOUSANDS</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05 }}>
              Don't Take Our <span className="gold-text">Word for It.</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={t.name} className={`testimonial-card ${vis("testimonials") ? "animate-slide-up" : "hidden-init"}`} style={{ padding: "36px 32px", borderRadius: 24, animationDelay: `${0.1 + i * 0.1}s`,  border: `1px solid` }}>
                <div style={{ fontSize: 24, marginBottom: 8 }}>★★★★★</div>
                <p style={{  lineHeight: 1.8, fontSize: 15, marginBottom: 28, fontStyle: "italic", fontWeight: 300 }}>"{t.quote}"</p>
                <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                  <img src={t.avatar} alt={t.name} style={{ width: 44, height: 44, borderRadius: "50%", objectFit: "cover", border: "2px solid rgba(201,168,76,0.3)" }} />
                  <div>
                    <div className="font-headline" style={{ fontWeight: 700, fontSize: 14 }}>{t.name}</div>
                    <div style={{ fontSize: 12,  }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RIDER CTA ── */}
      <section id="rider" style={{ padding: "120px 32px", background: "#0a0a0a", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }} className="grid-responsive">
          <div className={vis("rider") ? "animate-slide-right" : "hidden-right"} style={{ animationDelay: "0.1s" }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", color: "#C9A84C", marginBottom: 20 }}>JOIN AS A RIDER</div>
            <h2 className="font-headline section-title" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.04em", marginBottom: 24, lineHeight: 1.05 }}>
              Ride on Your Terms.<br /><span className="gold-text">Earn More.</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: 40, fontSize: 16, fontWeight: 300 }}>
              Set your own hours. Keep 85% of earnings. Get paid weekly. Join 40,000+ verified riders already on the platform.
            </p>
            <div style={{ display: "flex", gap: 24, marginBottom: 40 }}>
              {[{ val: "85%", label: "You keep" }, { val: "Weekly", label: "Payouts" }, { val: "0", label: "Joining fee" }].map((s) => (
                <div key={s.label}>
                  <div className="font-headline gold-text" style={{ fontSize: 28, fontWeight: 800 }}>{s.val}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,0.4)" }}>{s.label}</div>
                </div>
              ))}
            </div>
            <button className="btn-gold" style={{ padding: "16px 40px", borderRadius: 100, fontSize: 16 }}>Apply to Ride →</button>
          </div>

          <div className={vis("rider") ? "animate-slide-left" : "hidden-left"} style={{ animationDelay: "0.3s", position: "relative" }}>
            <div style={{ borderRadius: 28, overflow: "hidden", aspectRatio: "3/4" }}>
              <img src="https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&q=80" alt="Rider" className="rider-photo" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 60%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section id="cta" style={{ padding: "140px 32px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img src="https://images.unsplash.com/photo-1519003300449-424ad0405076?w=1800&q=80" alt="City at night" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0.82)" }} />
          <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)" }} />
        </div>

        <div className={`${vis("cta") ? "animate-slide-up" : "hidden-init"}`} style={{ position: "relative", zIndex: 2, textAlign: "center", maxWidth: 680, margin: "0 auto", animationDelay: "0.1s" }}>
          <h2 className="font-headline" style={{ fontSize: "clamp(2.8rem, 6vw, 5rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, marginBottom: 24, color: 'white' }}>
            Ready for <span className="gold-text">precision</span> in motion?
          </h2>
          <p style={{ color: 'white', fontSize: 18, lineHeight: 1.7, marginBottom: 48, fontWeight: 300 }}>
            Join hundreds of thousands of senders who trust MyRider every day.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <button className="btn-gold" style={{ padding: "18px 48px", borderRadius: 100, fontSize: 18 }}>
              Start Sending Now
            </button>
            <button className="btn-outline" style={{ padding: "18px 48px", borderRadius: 100, fontSize: 18 }}>
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{ background: t.surface, borderTop: `1px solid ${t.border}`, padding: "80px 32px 40px" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 60, marginBottom: 60 }} className="footer-grid">
            <div>
              <div className="font-headline" style={{ fontSize: 26, fontWeight: 800, marginBottom: 16 }}>
                <span className="gold-text">My</span><span>Rider</span>
              </div>
              <p style={{ color: t.textDim, fontSize: 14, lineHeight: 1.8, maxWidth: 260 }}>
                Kinetic precision for the modern city. Fast, reliable, and intelligent last-mile logistics.
              </p>
              <div style={{ display: "flex", gap: 12, marginTop: 28 }}>
                {["🌐", "📤", "✉️"].map((icon, i) => (
                  <div key={i} style={{ width: 40, height: 40, borderRadius: "50%", border: `1px solid ${t.border}`, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", transition: "all 0.3s", fontSize: 16, background: "transparent" }}
                    onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "#C9A84C"; (e.currentTarget as HTMLElement).style.background = "rgba(201,168,76,0.1)"; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = t.border; (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >{icon}</div>
                ))}
              </div>
            </div>

            {[
              { title: "Company", links: ["About", "Careers", "Blog", "Press"] },
              { title: "Platform", links: ["Pricing", "API", "Enterprise", "Security"] },
              { title: "Legal", links: ["Privacy", "Terms", "Carrier Terms", "Cookies"] },
            ].map((col) => (
              <div key={col.title}>
                <div className="font-headline" style={{ fontWeight: 700, fontSize: 13, letterSpacing: "0.08em", color: t.textMuted, marginBottom: 24 }}>{col.title.toUpperCase()}</div>
                {col.links.map((link) => (
                  <div key={link} style={{ marginBottom: 14 }}>
                    <a href="#" style={{ color: t.textSecondary, textDecoration: "none", fontSize: 14, transition: "color 0.2s" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "#C9A84C")}
                      onMouseLeave={e => (e.currentTarget.style.color = t.textSecondary)}
                    >{link}</a>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div style={{ borderTop: `1px solid ${t.border}`, paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
            <p style={{ fontSize: 13, color: t.textDim }}>© 2026 MyRider Logistics. All rights reserved.</p>
            
          </div>
        </div>
      </footer>

      {/* Responsive CSS */}
      <style>{`
        @media (max-width: 900px) {
          .grid-responsive { grid-template-columns: 1fr !important; gap: 48px !important; }
          .steps-grid { grid-template-columns: repeat(3, 1fr) !important; }
          .stats-grid { grid-template-columns: repeat(2, 1fr) !important; gap: 2px !important; }
          .testimonials-grid { grid-template-columns: 1fr !important; }
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 40px !important; }
          .grid-responsive > div:first-child { order: 2 !important; }
          .grid-responsive > div:last-child { order: 1 !important; }
        }
        @media (max-width: 600px) {
          .steps-grid { grid-template-columns: 1fr 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

// Fix CSS variable reference in JSX
const var_surface = "var(--surface)";