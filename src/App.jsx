import { useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Dumbbell,
  ExternalLink,
  Gift,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Trophy,
  WalletCards,
} from "lucide-react";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// ë¤ì´ë²í¼ ë§í¬
// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
const NAVER_FORM_URL = "https://naver.me/xYNbjjGC";

const images = {
  hero: assetUrl("/assets/hero-gym.jpg"),
  weightZone: assetUrl("/assets/weight-zone.jpg"),
  cardioZone: assetUrl("/assets/cardio-zone.jpg"),
  ptScene: assetUrl("/assets/pt-scene.jpg"),
  oldgym: assetUrl("/assets/oldgym-facility.jpg"),
  musclefactory: assetUrl("/assets/musclefactory-facility.jpg"),
  urbangym: assetUrl("/assets/urbangym-facility.jpg"),
  gallery1: assetUrl("/assets/04_open_gym_floor_view.png"),
  gallery2: assetUrl("/assets/02_cardio_stairmaster_zone.png"),
  gallery3: assetUrl("/assets/01_weight_zone_machine_area.png"),
};

// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
// UI ì½ì ì´ë¯¸ì§ (íí ì¹´ë ë°°ê²½ / ì¹ì ë°°ê²½)
// ââââââââââââââââââââââââââââââââââââââââââââââââââââââââââ
const uiImages = {
  healthMonthly: assetUrl("/assets/benefit-card-health-monthly-399000.png"),
  branchPrice: assetUrl("/assets/benefit-card-branch-price-different.png"),
  anniversaryBenefit: assetUrl("/assets/anniversary-benefit-section-bg.png"),
};

// ê°¤ë¬ë¦¬ ì¹ì í ê¸ â ì¤ì  ì§ì  ì¬ì§ì´ ìì¼ë¯ë¡ íì±í
const SHOW_GALLERY = true;

const branchGroups = [
  {
    id: "oldgym",
    brand: "ì¬ëì§",
    title: "ì§ì£¼Â·ì¬ì²Â·ê±°ì  ì¬ëì§",
    description: "ì¬ëì§ ì°¸ì¬ ì§ì  íí íì¸",
    priceText: "í¬ì¤ ì 3ë§ìë",
    note: "ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ììµëë¤.",
    image: images.oldgym,
    branches: ["íê±°ì ", "íëì ", "ì¬ì²ì ", "ìëì ", "ìì£¼ì ", "ììì "],
  },
  {
    id: "musclefactory24",
    brand: "ë¨¸ì¬í©í ë¦¬24",
    title: "ì§ì£¼Â·ì¬ì²Â·ì¼ì²í¬Â·ê³ ì± ë¨¸ì¬í©í ë¦¬24",
    description: "ë¨¸ì¬í©í ë¦¬24 ì°¸ì¬ ì§ì  íí íì¸",
    priceText: "í¬ì¤ ì 3ë§ìë",
    note: "ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ììµëë¤.",
    image: images.musclefactory,
    branches: [
      "ë³´ê±´ëì ", "í¸íì ", "ì ì§ì£¼ì ", "íëì ", "ì ì´ì ",
      "ì¬ì²ë³¸ì ", "ì¼ì²í¬ë²ë¦¬ì ", "ì¬ì²í°ë¯¸ëì ", "ê³ ì±ì ",
    ],
  },
  {
    id: "urbangym",
    brand: "ì´ë°ì§",
    title: "ì§ì£¼ ì´ë°ì§",
    description: "ì´ë°ì§ ì°¸ì¬ ì§ì  íí íì¸",
    priceText: "í¬ì¤ ì 3ë§ìë",
    note: "ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ììµëë¤.",
    image: images.urbangym,
    branches: ["ì§ì£¼íê±°ì "],
  },
];

const benefits = [
  {
    icon: WalletCards,
    title: "í¬ì¤ ì 3ë§ìë",
    description: "14ì£¼ë ê¸°ë ë¨ 2ì£¼ê° í¹ë³ íí",
    image: null,
    bgImage: uiImages.healthMonthly,
  },
  {
    icon: BadgeCheck,
    title: "ì§ì ë³ ê°ê²© ìì´",
    description: "ì§ì ë³ ë¬¸ì íì",
    image: null,
    bgImage: uiImages.branchPrice,
  },
  {
    icon: Gift,
    title: "ë¦¬ë·° ìì± ì SPT(ìë¹ì¤ PT) 2í ì ê³µ",
    description: "ìë¹ì¤ PT íí",
    image: assetUrl("/assets/spt-benefit-card-replacement.png"),
  },
  {
    icon: MapPin,
    title: "ì°¸ì¬ ì§ì  íí",
    description: "ì§ì£¼Â·ì¬ì²Â·ê±°ì Â·ì¼ì²í¬Â·ê³ ì±",
    image: images.cardioZone,
  },
];

const brandCards = [
  {
    english: "OLD GYM",
    korean: "ì¬ëì§",
    line: "í´ëìí í¸ë ì´ë ê°ë",
    image: images.oldgym,
  },
  {
    english: "URBAN GYM",
    korean: "ì´ë°ì§",
    line: "ëì¬í íë¦¬ë¯¸ì í¼í¸ëì¤",
    image: images.urbangym,
  },
  {
    english: "MUSCLE FACTORY 24",
    korean: "ë¨¸ì¬í©í ë¦¬24",
    line: "24ìê° ì´ë ë£¨í´",
    image: images.musclefactory,
  },
];

const galleryItems = [
  { src: images.gallery1, title: "ëê³  ê¹ëí ì´ë íê²½", caption: "ì¤ì  ê³µê°" },
  { src: images.gallery2, title: "ì¾ì í ì ì°ìì¡´", caption: "Cardio Zone" },
  { src: images.gallery3, title: "íë¦¬ë¯¸ì ì¨ì´í¸ì¡´", caption: "Weight Zone" },
];

const faqs = [
  {
    question: "ëª¨ë  ì§ì  ê°ê²©ì´ ëì¼íê°ì?",
    answer: "ì§ì ë³ ì´ì ìí©ì ë°ë¼ ê°ê²©ì ìì´í  ì ììµëë¤.",
  },
  {
    question: "SPTë ë¬´ìì¸ê°ì?",
    answer: "SPTë ìë¹ì¤ PTë¡, ë¦¬ë·° ìì± ê³ ê°ìê² 2í ì ê³µë©ëë¤.",
  },
  {
    question: "ì´ë ì§ì ì´ ì°¸ì¬íëì?",
    answer:
      "ì§ì£¼Â·ì¬ì²Â·ê±°ì  ì¬ëì§, ì§ì£¼Â·ì¬ì²Â·ì¼ì²í¬Â·ê³ ì± ë¨¸ì¬í©í ë¦¬24, ì§ì£¼ ì´ë°ì§ ì°¸ì¬ ì§ì ì´ í¨ê»í©ëë¤.",
  },
];

function scrollToBranches() {
  document.getElementById("branches")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToConsult() {
  document.getElementById("consult")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">{kicker}</p>
      <h2 className="keep-words text-[36px] font-black leading-[1.07] tracking-[-0.03em] text-white sm:text-5xl md:text-6xl xl:text-7xl">{title}</h2>
      {description && (
        <p className="keep-words mt-4 text-base leading-7 text-zinc-300 md:text-lg">{description}</p>
      )}
    </div>
  );
}

/**
 * ImageCard â ì¤ì  ì¬ì§ì dark overlay + gold border ì¹´ëë¡ ê°ì.
 */
function ImageCard({
  src,
  alt,
  children,
  className = "",
  overlayClassName = "bg-gradient-to-t from-black/80 via-black/35 to-black/10",
  loading = "lazy",
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-[24px] border border-[#D6B46A]/30 bg-zinc-950 ${className}`}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          className="absolute inset-0 h-full w-full object-cover object-center"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      )}
      <div className={`absolute inset-0 ${overlayClassName}`} />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}

/**
 * BrandThumbnail â ì¹´ë ìë¨ ì¸ë¤ì¼. hover ì ì´ì§ scale.
 */
function BrandThumbnail({ src, alt, label, subLabel, height = "h-[180px]" }) {
  return (
    <div className={`relative ${height} overflow-hidden rounded-[18px] border border-[#D6B46A]/20 bg-zinc-950`}>
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
      <div className="absolute inset-0 flex items-end justify-between p-4">
        {label && <p className="text-sm font-black tracking-[0.18em] text-champagne drop-shadow">{label}</p>}
        {subLabel && (
          <span className="rounded-full border border-[#D6B46A]/30 bg-black/60 px-3 py-1 text-xs font-bold text-pearl">
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
}

function GoldButton({ children, className = "", onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`group inline-flex min-h-14 items-center justify-center gap-2 rounded-2xl bg-gold-gradient px-6 py-3 text-base font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft focus:outline-none focus:ring-2 focus:ring-softgold focus:ring-offset-2 focus:ring-offset-ink ${className}`}
    >
      {children}
      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
    </button>
  );
}

function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-dark-radial pb-16 pt-6 md:min-h-[760px] md:pb-28">
      {/* ë°°ê²½ glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl md:h-[32rem] md:w-[32rem]" />
      {/* ê³¨ë "14" ì¥ì */}
      <div className="absolute right-[-7rem] top-28 hidden select-none text-[25rem] font-black leading-none text-champagne/[0.07] md:block">
        14
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />

      <nav className="section-shell relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-champagne/50 bg-white/[0.04] text-sm font-black text-champagne">
            RL
          </div>
          <div>
            <p className="text-sm font-black tracking-[0.2em] text-white">RETURN LIFE</p>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-champagne/80">COMPANY</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-pearl md:flex">
          <Sparkles className="h-4 w-4 text-champagne" />
          14th Anniversary
        </div>
      </nav>

      <div className="section-shell relative z-10 grid gap-10 pt-10 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-24">
        {/* ì¼ìª½: íµì¬ ì¹´í¼ */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-4 py-2 text-sm font-bold text-pearl shadow-gold-soft">
            <Trophy className="h-4 w-4 text-softgold" />
            ë¦¬í´ë¼ì´íì»´í¼ë 14ì£¼ë ê³ ê°ê°ì¬ì 
          </div>
          <h1 className="keep-words text-4xl font-black leading-[1.08] text-white sm:text-5xl md:text-6xl xl:text-7xl">
            1ëì ë± í ë², ë¨ 2ì£¼ê°
            <span className="mt-2 block gold-text">í¬ì¤ ì 3ë§ìë ì´ë²¤í¸</span>
          </h1>
          <p className="keep-words mt-6 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl">
            ì¬ëì§ Â· ë¨¸ì¬í©í ë¦¬24 Â· ì´ë°ì§ ì°¸ì¬ ì§ì  íí.
            ì§ì£¼ Â· ì¬ì² Â· ê±°ì  Â· ì¼ì²í¬ Â· ê³ ì± íí ì ì©.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <GoldButton onClick={scrollToBranches} className="w-full sm:w-auto">
              ê°ê¹ì´ ì§ì  íí íì¸íê¸°
            </GoldButton>
            <a
              href={NAVER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-champagne/45 px-6 py-3 text-base font-extrabold text-champagne transition duration-300 hover:bg-champagne hover:text-black sm:w-auto"
            >
              ë¹ ë¥¸ ìë´ ì ì²­
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-300 sm:justify-start">
              <ShieldCheck className="h-4 w-4 text-champagne" />
              ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ììµëë¤.
            </p>
          </div>
        </div>

        {/* ì¤ë¥¸ìª½: ì¤ì  í¬ì¤ì¥ ì¬ì§ ì¹´ë */}
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute inset-6 rounded-full bg-champagne/20 blur-3xl" />
          <ImageCard
            src={uiImages.anniversaryBenefit}
            alt="ë¦¬í´ë¼ì´íì»´í¼ë 14ì£¼ë ê³ ê°ê°ì¬ì  íí"
            loading="eager"
            className="h-[280px] rounded-[24px] shadow-gold sm:h-[420px] md:h-[560px] md:rounded-[28px]"
            overlayClassName="bg-black/40"
          >
            <div className="flex h-full flex-col justify-between p-6 md:p-8">
              <div>
                <p className="text-sm font-bold tracking-[0.22em] text-champagne">
                  ANNIVERSARY BENEFIT
                </p>
                <div className="absolute right-4 top-2 select-none text-[9rem] font-black leading-none text-champagne/[0.07]">
                  14
                </div>
              </div>
              <div>
                <p className="keep-words text-2xl font-black text-white md:text-3xl lg:text-4xl">
                  1ëì ë± í ë², ë¨ 2ì£¼ê°
                </p>
                <p className="mt-3 gold-text text-6xl font-black tracking-normal md:text-7xl">
                  <span className="block text-4xl md:text-5xl">í¬ì¤ ì</span>
                  <span className="block">3ë§ìë</span>
                </p>
                <p className="mt-4 text-base leading-7 text-zinc-300">
                  ë¦¬ë·° ìì± ê³ ê°ìê² SPT(ìë¹ì¤ PT) 2í ì ê³µ
                </p>
                <div className="mt-6 grid grid-cols-2 gap-2">
                  {["ì¬ëì§", "ë¨¸ì¬í©í ë¦¬24", "ì´ë°ì§", "ì°¸ì¬ ì§ì  íí"].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-black/40 px-3 py-3 text-center text-sm font-bold text-pearl"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ImageCard>
        </div>
      </div>
    </header>
  );
}

function BrandSection() {
  return (
    <section className="relative py-14 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Return Life Company"
          title="ë¦¬í´ë¼ì´íì»´í¼ë"
          description="ì¬ëì§, ì´ë°ì§, ë¨¸ì¬í©í ë¦¬24ë ë¦¬í´ë¼ì´íì»´í¼ëê° ì´ìí©ëë¤."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {brandCards.map((brand) => (
            <article
              key={brand.english}
              className="glass-card group overflow-hidden rounded-[24px] p-4 transition duration-300 hover:-translate-y-1 hover:border-softgold/60"
            >
              {/* ì¤ì  í¬ì¤ì¥ ì¬ì§ ì¸ë¤ì¼ */}
              <BrandThumbnail
                src={brand.image}
                alt={`${brand.korean} ìì¤ ì¬ì§`}
                label={brand.english}
                height="h-[180px]"
              />
              <div className="mb-4 mt-5 flex items-center justify-between">
                <div className="h-px w-14 bg-gradient-to-r from-champagne to-transparent" />
                <Dumbbell className="h-5 w-5 text-champagne opacity-80" />
              </div>
              <p className="text-2xl font-black tracking-[0.08em] text-white">{brand.english}</p>
              <p className="mt-1 text-lg font-bold text-champagne">{brand.korean}</p>
              <p className="mt-4 text-sm leading-6 text-zinc-400">{brand.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  return (
    <section className="bg-graphite/50 py-14 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Special Benefits"
          title="14ì£¼ë ê³ ê°ê°ì¬ì  íí"
          description="ì§ì£¼Â·ì¬ì²Â·ê±°ì Â·ì¼ì²í¬Â·ê³ ì± ì°¸ì¬ ì§ì  ííì ê°ê¹ì´ ë¸ëëìì íì¸íì¸ì."
        />
        {/* ìì±í í¬ì¤í° ì¹´ë 2ì¥ â 2ì´ ê·¸ë¦¬ë */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {benefits.filter((b) => b.bgImage).map((benefit) => (
            <article
              key={benefit.title}
              className="group overflow-hidden rounded-[32px] border border-champagne/35 bg-black transition duration-300 hover:-translate-y-1 hover:border-champagne/60 hover:shadow-gold-soft"
            >
              <img
                src={benefit.bgImage}
                alt={benefit.title}
                loading="lazy"
                className="h-full min-h-[360px] w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.02] sm:min-h-[420px]"
                onError={(e) => { e.currentTarget.style.display = "none"; }}
              />
            </article>
          ))}
        </div>

        {/* ì¼ë° íí ì¹´ë (SPT ì ê³µ / ì°¸ì¬ ì§ì ) */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {benefits.filter((b) => !b.bgImage).map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="glass-card group overflow-hidden rounded-[24px] transition duration-300 hover:-translate-y-1 hover:border-champagne/60"
              >
                {benefit.image ? (
                  <div className="relative h-36 overflow-hidden md:h-52">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.03]"
                      onError={(e) => { e.currentTarget.style.display = "none"; }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                  </div>
                ) : null}
                <div className="p-5">
                  <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-champagne/10 text-champagne">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="keep-words min-h-14 text-xl font-black leading-tight text-white">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm font-semibold text-zinc-400">{benefit.description}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-zinc-400">
          ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ììµëë¤.
          <span className="mt-2 block">ì íí ê°ê²©ê³¼ ííì ìë´ ì ìë´ë©ëë¤.</span>
        </p>
        <div className="mt-6 text-center">
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 text-base font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft"
          >
            íí ë°ê³  ìë´ ì ì²­íê¸°
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-14 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Premium Space"
          title="ë¦¬í´ë¼ì´íì»´í¼ëê° ì´ìíë í¼í¸ëì¤ ê³µê°"
          description="ì¤ì  ê³µê° ì¬ì§ì¼ë¡ ì°¸ì¬ ì§ì ì ì´ë íê²½ì íì¸í´ë³´ì¸ì."
        />
        {/* ëª¨ë°ì¼: 1ì´, PC: 3ì´ */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item) => (
            <ImageCard
              key={item.title}
              src={item.src}
              alt={item.title}
              className="aspect-[4/5] rounded-[24px] transition duration-300 hover:-translate-y-1 hover:border-softgold/60"
              overlayClassName="bg-gradient-to-t from-black/75 via-black/25 to-transparent"
            >
              <div className="flex h-full flex-col justify-end p-5">
                <span className="mb-2 text-xs font-bold tracking-[0.18em] uppercase text-champagne/80">
                  {item.caption}
                </span>
                <p className="keep-words text-xl font-black text-white">{item.title}</p>
              </div>
            </ImageCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchSection() {
  const [activeGroup, setActiveGroup] = useState(branchGroups[0].id);
  const selectedGroup = branchGroups.find((g) => g.id === activeGroup) ?? branchGroups[0];

  return (
    <section id="branches" className="py-14 md:py-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Branches"
          title="ì°¸ì¬ ë¸ëë / ì§ì  ì í"
          description="ë¸ëë ì¹´ëë¥¼ ëë¬ ì´ë² 14ì£¼ë ê³ ê°ê°ì¬ì  ì°¸ì¬ ì§ì ì íì¸í´ë³´ì¸ì."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branchGroups.map((group) => {
            const isActive = activeGroup === group.id;
            return (
              <article
                key={group.id}
                role="button"
                tabIndex={0}
                onClick={() => setActiveGroup(group.id)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveGroup(group.id); }
                }}
                className={`glass-card group flex min-h-[240px] flex-col rounded-[24px] p-5 text-left transition duration-300 hover:-translate-y-1 ${isActive ? "branch-card-active" : ""}`}
              >
                {/* ì¤ì  ì¬ì§ ì¸ë¤ì¼ */}
                <BrandThumbnail
                  src={group.image}
                  alt={group.title}
                  subLabel={`${group.branches.length}ê° ì§ì `}
                  height="h-[110px]"
                />
                <div className="mb-6 mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-champagne">{group.brand}</p>
                    <h3 className="keep-words mt-2 text-xl font-black text-white">{group.title}</h3>
                    <p className="mt-2 text-sm font-semibold leading-6 text-zinc-400">{group.description}</p>
                  </div>
                  <Building2 className="h-6 w-6 shrink-0 text-champagne" />
                </div>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-sm font-bold text-pearl">
                    {group.priceText}
                  </span>
                  {/* ë¤ì´ë²í¼ ìë´ ì ì²­ */}
                  <a
                    href={NAVER_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 rounded-full border border-champagne/45 px-4 py-2 text-sm font-extrabold text-champagne transition hover:bg-champagne hover:text-black"
                  >
                    ìë´íê¸° <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* ì¸ë¶ ì§ì  ëª©ë¡ */}
        <div className="glass-card mt-5 rounded-[24px] p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold text-champagne">ì°¸ì¬ ì§ì </p>
              <h3 className="keep-words mt-2 text-2xl font-black text-white">{selectedGroup.title}</h3>
              <p className="mt-2 text-sm font-semibold leading-6 text-zinc-400">
                ìë ì§ì ë¤ì´ ì´ë² 14ì£¼ë ê³ ê°ê°ì¬ì ì ì°¸ì¬í©ëë¤.
              </p>
            </div>
            <p className="text-sm font-bold text-pearl">{selectedGroup.note}</p>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {selectedGroup.branches.map((name) => (
              <div
                key={`${selectedGroup.id}-${name}`}
                className="flex min-h-11 items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-sm font-bold text-pearl"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-champagne" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-zinc-400">
          ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ììµëë¤.
          <span className="mt-2 block">ì íí ê°ê²©ê³¼ ííì ìë´ ì ìë´ë©ëë¤.</span>
        </p>
        <div className="mt-6 text-center">
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 text-base font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft"
          >
            ìë´ ì ì²­íê¸°
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-14 md:py-24">
      <div className="section-shell">
        <SectionHeading kicker="FAQ" title="ìì£¼ ë¬»ë ì§ë¬¸" />
        <div className="mx-auto grid max-w-4xl gap-3">
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card rounded-[20px] p-4 md:p-5">
              <h3 className="flex items-start gap-3 text-base font-bold text-white md:text-lg md:font-black">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-champagne" />
                {faq.question}
              </h3>
              <p className="mt-2 pl-8 text-sm leading-relaxed text-white/65 md:text-base md:leading-7">{faq.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 text-base font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft"
          >
            ì´ë²¤í¸ ë°ë¡ ì ì²­
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

/**
 * ConsultSection â ë¤ì´ë²í¼ ì°ê²° ìë´ ì ì²­ CTA ì¹ì
 * ìì²´ í¼ ìì´ ë¤ì´ë²í¼ì¼ë¡ ì ëíë ì í ì¤ì¬ êµ¬ì¡°
 */
function ConsultSection() {
  const highlights = [
    { label: "í¬ì¤ ì 3ë§ìë", sub: "14ì£¼ë íì  í¹ë³ê°" },
    { label: "ë¦¬ë·° ìì± ì SPT 2í", sub: "ìë¹ì¤ PT ë¬´ë£ ì ê³µ" },
    { label: "ì°¸ì¬ ì§ì  íí ìë´", sub: "ì§ì ë³ ì íí íí ìë´" },
  ];

  return (
    <section id="consult" className="bg-graphite/50 pb-28 pt-14 md:pb-36 md:pt-24">
      <div className="section-shell">
        <SectionHeading
          kicker="Consultation"
          title="14ì£¼ë íí ìë´ ì ì²­íê¸°"
          description="ì´ë¦, ì°ë½ì², í¬ë§ ì§ì ë§ ë¨ê¸°ë©´ ê°ê¹ì´ ì§ì ì 14ì£¼ë ê³ ê°ê°ì¬ì  ííì ìë´í´ëë¦½ëë¤."
        />

        <div className="mx-auto max-w-2xl">
          {/* íí ìì½ ì¹´ë 3ì¢ */}
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="glass-card rounded-[20px] p-4 text-center"
              >
                <p className="gold-text text-lg font-black leading-tight">{h.label}</p>
                <p className="mt-1 text-xs font-semibold text-zinc-400">{h.sub}</p>
              </div>
            ))}
          </div>

          {/* ë©ì¸ CTA ì¹´ë */}
          <div className="glass-card relative overflow-hidden rounded-[24px] p-6 md:rounded-[28px] md:p-10">
            {/* ë°°ê²½ glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne/[0.06] to-transparent" />
            <div className="pointer-events-none absolute right-4 top-2 select-none text-[12rem] font-black leading-none text-champagne/[0.04]">
              14
            </div>

            <div className="relative z-10">
              {/* ê°ì¡° ë°°ì§ */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-4 py-2 text-sm font-bold text-pearl">
                <Trophy className="h-4 w-4 text-softgold" />
                ë¦¬í´ë¼ì´íì»´í¼ë 14ì£¼ë ê³ ê°ê°ì¬ì 
              </div>

              {/* íµì¬ ê°ì¡° ë¬¸êµ¬ */}
              <p className="keep-words text-3xl font-black text-white md:text-4xl">
                1ëì ë± í ë²,{" "}
                <span className="gold-text">ë¨ 2ì£¼ê°</span>
              </p>
              <p className="keep-words mt-2 text-5xl font-black md:text-6xl">
                <span className="gold-text">í¬ì¤ ì 3ë§ìë</span>
              </p>

              {/* ìë´ ë¬¸êµ¬ */}
              <p className="mt-5 text-base leading-7 text-zinc-300">
                ë¤ì´ë²í¼ìì ì´ë¦, ì°ë½ì², ìë´ í¬ë§ ì§ì ì ë¨ê²¨ì£¼ìë©´{" "}
                <br className="hidden sm:block" />
                ê°ê¹ì´ ì§ì  ë´ë¹ìê° ë¹ ë¥´ê² ìë´í´ëë¦½ëë¤.
              </p>

              {/* CTA ë²í¼ */}
              <div className="mt-8">
                <a
                  href={NAVER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gold-gradient px-6 py-5 text-lg font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft sm:w-auto sm:px-10"
                >
                  <ExternalLink className="h-5 w-5" />
                  ë¤ì´ë²í¼ì¼ë¡ ìë´ ì ì²­íê¸°
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* ë³´ì¡° ìë´ */}
              <div className="mt-5 flex flex-col gap-1.5">
                <p className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-champagne/70" />
                  í´ë¦­ ì ë¤ì´ë² ìë´ ì ì²­í¼ì¼ë¡ ì´ëí©ëë¤.
                </p>
                <p className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-champagne/70" />
                  ìë ¥íì  ì ë³´ë ìë´ ëª©ì  ì¸ ì¬ì©ëì§ ììµëë¤.
                </p>
                <p className="flex items-center gap-2 text-xs text-zinc-500">
                  ì§ì ë³ ê°ê²© ë° ííì ìì´í  ì ìì¼ë©°, ì íí ë´ì©ì ìë´ ì ìë´ë©ëë¤.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-champagne/25 bg-black/90 px-4 py-3.5 backdrop-blur-xl md:hidden"
        style={{paddingBottom: 'calc(0.875rem + env(safe-area-inset-bottom))'}}>
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="keep-words text-sm font-black leading-tight text-white">14ì£¼ë íí ìë´</p>
          <p className="keep-words text-xs font-semibold text-zinc-400">ë¤ì´ë²í¼ì¼ë¡ ë¹ ë¥´ê² ì ì²­íê¸°</p>
        </div>
        <a
          href={NAVER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"

          className="shrink-0 rounded-full bg-gold-gradient px-5 py-3 text-sm font-black text-black shadow-gold-soft"
        >
          ìë´ ì ì²­
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-screen bg-ink text-white">
      <HeroSection />
      <BrandSection />
      <BenefitsSection />
      {SHOW_GALLERY && <GallerySection />}
      <BranchSection />
      <FAQSection />
      <ConsultSection />
      <StickyCTA />
    </main>
  );
}

export default App;
