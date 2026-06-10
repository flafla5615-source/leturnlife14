import { useEffect, useRef, useState } from "react";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

// ──────────────────────────────────────────────────────────
// 네이버폼 링크
// ──────────────────────────────────────────────────────────
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

// ──────────────────────────────────────────────────────────
// UI 삽입 이미지 (혜택 카드 배경 / 섹션 배경)
// ──────────────────────────────────────────────────────────
const uiImages = {
  healthMonthly: assetUrl("/assets/benefit-card-health-monthly-399000.png"),
  branchPrice: assetUrl("/assets/benefit-card-branch-price-different.png"),
  anniversaryBenefit: assetUrl("/assets/anniversary-benefit-section-bg.png"),
};

// 갤러리 섹션 토글 — 실제 지점 사진이 있으므로 활성화
const SHOW_GALLERY = true;

const branchGroups = [
  {
    id: "oldgym",
    brand: "올드짐",
    title: "진주·사천·거제 올드짐",
    description: "올드짐 참여 지점 혜택 확인",
    priceText: "헬스 월 3만원대",
    note: "지점별 가격 및 혜택은 상이할 수 있습니다.",
    image: images.oldgym,
    branches: ["평거점", "하대점", "사천점", "상동점", "아주점", "수월점"],
  },
  {
    id: "musclefactory24",
    brand: "머슬팩토리24",
    title: "진주·사천·삼천포·고성 머슬팩토리24",
    description: "머슬팩토리24 참여 지점 혜택 확인",
    priceText: "헬스 월 3만원대",
    note: "지점별 가격 및 혜택은 상이할 수 있습니다.",
    image: images.musclefactory,
    branches: [
      "보건대점", "호탄점", "신진주점", "하대점", "정촌점",
      "사천본점", "삼천포벌리점", "사천터미널점", "고성점",
    ],
  },
  {
    id: "urbangym",
    brand: "어반짐",
    title: "진주 어반짐",
    description: "어반짐 참여 지점 혜택 확인",
    priceText: "헬스 월 3만원대",
    note: "지점별 가격 및 혜택은 상이할 수 있습니다.",
    image: images.urbangym,
    branches: ["진주평거점"],
  },
];

const totalBranchCount = branchGroups.reduce((sum, g) => sum + g.branches.length, 0);

const heroStats = [
  { value: "3", unit: "개", label: "운영 브랜드" },
  { value: String(totalBranchCount), unit: "곳", label: "참여 지점" },
  { value: "14", unit: "년", label: "운영 노하우" },
  { value: "2", unit: "주", label: "한정 기간" },
];

const benefits = [
  {
    icon: "solar:wallet-money-linear",
    title: "헬스 월 3만원대",
    description: "14주년 기념 단 2주간 특별 혜택",
    image: null,
    bgImage: uiImages.healthMonthly,
  },
  {
    icon: "solar:verified-check-bold",
    title: "지점별 가격 상이",
    description: "지점별 문의 필수",
    image: null,
    bgImage: uiImages.branchPrice,
  },
  {
    icon: "solar:gift-linear",
    title: "리뷰 작성 시 SPT(서비스 PT) 2회 제공",
    description: "서비스 PT 혜택",
    image: assetUrl("/assets/spt-benefit-card-replacement.png"),
  },
  {
    icon: "solar:map-point-linear",
    title: "참여 지점 혜택",
    description: "진주·사천·거제·삼천포·고성",
    image: images.cardioZone,
  },
];

const brandCards = [
  {
    english: "OLD GYM",
    korean: "올드짐",
    line: "클래식한 트레이닝 감도",
    image: images.oldgym,
  },
  {
    english: "URBAN GYM",
    korean: "어반짐",
    line: "도심형 프리미엄 피트니스",
    image: images.urbangym,
  },
  {
    english: "MUSCLE FACTORY 24",
    korean: "머슬팩토리24",
    line: "24시간 운동 루틴",
    image: images.musclefactory,
  },
];

const galleryItems = [
  { src: images.gallery1, title: "넓고 깔끔한 운동 환경", caption: "실제 공간" },
  { src: images.gallery2, title: "쾌적한 유산소존", caption: "Cardio Zone" },
  { src: images.gallery3, title: "프리미엄 웨이트존", caption: "Weight Zone" },
];

const faqs = [
  {
    question: "모든 지점 가격이 동일한가요?",
    answer: "지점별 운영 상황에 따라 가격은 상이할 수 있습니다.",
  },
  {
    question: "SPT는 무엇인가요?",
    answer: "SPT는 서비스 PT로, 리뷰 작성 고객에게 2회 제공됩니다.",
  },
  {
    question: "어느 지점이 참여하나요?",
    answer:
      "진주·사천·거제 올드짐, 진주·사천·삼천포·고성 머슬팩토리24, 진주 어반짐 참여 지점이 함께합니다.",
  },
];

const marqueeItems = branchGroups.flatMap((group) =>
  group.branches.map((branch) => `${group.brand} ${branch}`),
);

function scrollToBranches() {
  document.getElementById("branches")?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/**
 * Reveal — IntersectionObserver 기반 스크롤 진입 애니메이션 래퍼.
 * delay(ms)로 형제 요소 간 스태거 캐스케이드를 만든다.
 */
function Reveal({ children, className = "", delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={`reveal ${visible ? "reveal-visible" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function Eyebrow({ children }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-champagne/10 px-3 py-1 font-display text-[11px] font-bold uppercase tracking-[0.18em] text-champagne">
      {children}
    </span>
  );
}

function SectionHeading({ kicker, title, description, align = "center" }) {
  const isLeft = align === "left";
  return (
    <div
      className={`mb-10 max-w-2xl md:mb-14 ${isLeft ? "text-left" : "mx-auto text-center"}`}
    >
      <div className="mb-4">
        <Eyebrow>{kicker}</Eyebrow>
      </div>
      <h2 className="keep-words text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
        {title}
      </h2>
      {description && (
        <p className="keep-words mt-4 text-base leading-relaxed text-zinc-300 md:text-lg">
          {description}
        </p>
      )}
    </div>
  );
}

/**
 * BezelCard — Double-Bezel 카드. 외곽 트레이(p-1.5) + 내부 코어 구조.
 */
function BezelCard({ children, className = "", coreClassName = "", active = false, ...rest }) {
  return (
    <div className={`bezel ${active ? "bezel-active" : ""} ${className}`} {...rest}>
      <div className={`bezel-core ${coreClassName}`}>{children}</div>
    </div>
  );
}

/**
 * ImageCard — 실제 사진을 dark overlay + gold border 카드로 감쌈.
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
          decoding="async"
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
 * BrandThumbnail — 카드 상단 썸네일. hover 시 살짝 scale.
 */
function BrandThumbnail({ src, alt, label, subLabel, height = "h-[180px]" }) {
  return (
    <div className={`relative ${height} overflow-hidden rounded-[18px] border border-[#D6B46A]/20 bg-zinc-950`}>
      {src && (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 ease-spring group-hover:scale-[1.04]"
          onError={(e) => { e.currentTarget.style.display = "none"; }}
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-black/10" />
      <div className="absolute inset-0 flex items-end justify-between p-4">
        {label && (
          <p className="font-display text-sm font-black tracking-[0.18em] text-champagne drop-shadow">
            {label}
          </p>
        )}
        {subLabel && (
          <span className="tabular rounded-full border border-[#D6B46A]/30 bg-black/60 px-3 py-1 text-xs font-bold text-pearl">
            {subLabel}
          </span>
        )}
      </div>
    </div>
  );
}

/**
 * GoldButton — pill 형태 + 원형 래퍼에 중첩된 화살표 아이콘 + 스프링 물리 hover.
 */
function GoldButton({ children, className = "", onClick, href }) {
  const baseClass = `group inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-gold-gradient py-2 pl-8 pr-2 text-base font-extrabold text-black shadow-gold transition-all duration-500 ease-spring hover:scale-[1.02] hover:shadow-gold-glow active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-softgold focus:ring-offset-2 focus:ring-offset-ink ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-black/10 transition-transform duration-500 ease-spring group-hover:translate-x-1">
        <iconify-icon icon="solar:arrow-right-linear" className="text-lg" aria-hidden="true"></iconify-icon>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {inner}
    </button>
  );
}

function GhostButton({ children, className = "", onClick, href }) {
  const baseClass = `group inline-flex min-h-14 items-center justify-center gap-3 rounded-full border border-champagne/45 py-2 pl-8 pr-2 text-base font-extrabold text-champagne transition-all duration-500 ease-spring hover:scale-[1.02] hover:bg-champagne hover:text-black active:scale-[0.98] ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-champagne/10 transition-all duration-500 ease-spring group-hover:translate-x-1 group-hover:bg-black/10">
        <iconify-icon icon="solar:arrow-right-linear" className="text-lg" aria-hidden="true"></iconify-icon>
      </span>
    </>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={baseClass}>
        {inner}
      </a>
    );
  }
  return (
    <button type="button" onClick={onClick} className={baseClass}>
      {inner}
    </button>
  );
}

/**
 * FloatingNav — 상단에서 분리된 플로팅 글래스 pill 네비게이션.
 */
function FloatingNav() {
  return (
    <div className="fixed inset-x-0 top-0 z-40 flex justify-center px-4">
      <nav className="mt-4 flex w-full max-w-3xl items-center justify-between gap-4 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-full border border-champagne/50 bg-white/[0.04] font-display text-xs font-black text-champagne">
            RL
          </div>
          <div>
            <p className="font-display text-xs font-black tracking-[0.2em] text-white">RETURN LIFE</p>
            <p className="font-display text-[9px] font-bold tracking-[0.28em] text-champagne/80">COMPANY</p>
          </div>
        </div>
        <div className="hidden items-center gap-2 text-sm font-semibold text-pearl sm:flex">
          <iconify-icon icon="solar:stars-minimalistic-linear" className="text-champagne" aria-hidden="true"></iconify-icon>
          <span className="font-display tracking-wide">14th Anniversary</span>
        </div>
        <a
          href={NAVER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-gold-gradient px-5 py-2.5 text-sm font-black text-black transition-all duration-500 ease-spring hover:scale-[1.03] hover:shadow-gold-glow active:scale-[0.97]"
        >
          상담 신청
        </a>
      </nav>
    </div>
  );
}

function HeroSection() {
  return (
    <header className="relative overflow-hidden bg-dark-radial pb-20 pt-28 md:min-h-[100dvh] md:pb-32 md:pt-40">
      {/* 배경 glow 오브 — 무한 플로팅 */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 animate-float-slow rounded-full bg-champagne/10 blur-3xl md:h-[32rem] md:w-[32rem]" />
      <div className="absolute -left-24 bottom-10 h-64 w-64 animate-float rounded-full bg-champagne/[0.06] blur-3xl" />
      {/* 골드 "14" 장식 */}
      <div className="absolute right-[-7rem] top-28 hidden select-none font-display text-[25rem] font-black leading-none text-champagne/[0.07] md:block">
        14
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />

      <div className="section-shell relative z-10 grid gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
        {/* 왼쪽: 핵심 카피 */}
        <Reveal>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-4 py-2 text-sm font-bold text-pearl shadow-gold-soft">
            <iconify-icon icon="solar:cup-star-bold" className="text-softgold" aria-hidden="true"></iconify-icon>
            리턴라이프컴퍼니 14주년 고객감사제
          </div>
          <h1 className="keep-words text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            1년에 딱 한 번, 단 2주간
            <span className="mt-2 block gold-text">헬스 월 3만원대 이벤트</span>
          </h1>
          <p className="keep-words mt-6 max-w-xl text-lg leading-8 text-zinc-300 md:text-xl">
            올드짐 · 머슬팩토리24 · 어반짐 참여 지점 혜택.
            진주 · 사천 · 거제 · 삼천포 · 고성 혜택 적용.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
            <GoldButton onClick={scrollToBranches} className="w-full sm:w-auto">
              가까운 지점 혜택 확인하기
            </GoldButton>
            <GhostButton href={NAVER_FORM_URL} className="w-full sm:w-auto">
              빠른 상담 신청
            </GhostButton>
          </div>
          <p className="mt-5 flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <iconify-icon icon="solar:shield-check-linear" className="text-champagne" aria-hidden="true"></iconify-icon>
            지점별 가격 및 혜택은 상이할 수 있습니다.
          </p>

          {/* 실제 수치 기반 메트릭 바 */}
          <div className="mt-10 grid max-w-xl grid-cols-2 gap-3 sm:grid-cols-4">
            {heroStats.map((stat, index) => (
              <Reveal key={stat.label} delay={index * 80}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
                  <p className="tabular font-display text-2xl font-black text-white">
                    {stat.value}
                    <span className="ml-0.5 text-sm font-bold text-champagne">{stat.unit}</span>
                  </p>
                  <p className="mt-1 text-xs font-semibold text-zinc-400">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* 오른쪽: 실제 헬스장 사진 카드 — Double-Bezel */}
        <Reveal delay={150}>
          <div className="relative mx-auto w-full max-w-[430px]">
            <div className="absolute inset-6 animate-float-slow rounded-full bg-champagne/20 blur-3xl" />
            <BezelCard className="relative">
              <ImageCard
                src={uiImages.anniversaryBenefit}
                alt="리턴라이프컴퍼니 14주년 고객감사제 혜택"
                loading="eager"
                className="h-[280px] rounded-[calc(2rem-0.375rem)] border-0 sm:h-[420px] md:h-[560px]"
                overlayClassName="bg-black/40"
              >
                <div className="flex h-full flex-col justify-between p-6 md:p-8">
                  <div>
                    <p className="font-display text-sm font-bold tracking-[0.22em] text-champagne">
                      ANNIVERSARY BENEFIT
                    </p>
                    <div className="absolute right-4 top-2 select-none font-display text-[9rem] font-black leading-none text-champagne/[0.07]">
                      14
                    </div>
                  </div>
                  <div>
                    <p className="keep-words text-2xl font-black text-white md:text-3xl lg:text-4xl">
                      1년에 딱 한 번, 단 2주간
                    </p>
                    <p className="mt-3 gold-text text-6xl font-black tracking-normal md:text-7xl">
                      <span className="block text-4xl md:text-5xl">헬스 월</span>
                      <span className="block">3만원대</span>
                    </p>
                    <p className="mt-4 text-base leading-7 text-zinc-300">
                      리뷰 작성 고객에게 SPT(서비스 PT) 2회 제공
                    </p>
                    <div className="mt-6 grid grid-cols-2 gap-2">
                      {["올드짐", "머슬팩토리24", "어반짐", "참여 지점 혜택"].map((item) => (
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
            </BezelCard>
          </div>
        </Reveal>
      </div>
    </header>
  );
}

/**
 * BranchMarquee — 실제 참여 지점명을 무한 스크롤 마퀴로 노출하는 신뢰 스트립.
 */
function BranchMarquee() {
  const doubled = [...marqueeItems, ...marqueeItems];
  return (
    <section className="relative overflow-hidden border-y border-white/[0.06] bg-black/40 py-5">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-ink to-transparent" />
      <div className="flex w-max animate-marquee gap-10">
        {doubled.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex shrink-0 items-center gap-3 text-sm font-bold tracking-wide text-zinc-400"
          >
            <span className="h-1 w-1 rounded-full bg-champagne/60" />
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}

function BrandSection() {
  const [first, ...rest] = brandCards;
  return (
    <section className="relative py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker="Return Life Company"
          title="리턴라이프컴퍼니"
          description="올드짐, 어반짐, 머슬팩토리24는 리턴라이프컴퍼니가 운영합니다."
          align="left"
        />
        {/* 비대칭 그리드: 좌측 대형 카드 + 우측 2단 스택 */}
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal>
            <BezelCard className="group h-full">
              <article className="flex h-full flex-col p-4">
                <BrandThumbnail
                  src={first.image}
                  alt={`${first.korean} 시설 사진`}
                  label={first.english}
                  height="h-[220px] md:h-[380px]"
                />
                <div className="mb-4 mt-6 flex items-center justify-between">
                  <div className="h-px w-14 bg-gradient-to-r from-champagne to-transparent" />
                  <iconify-icon icon="solar:dumbbell-large-minimalistic-linear" className="text-xl text-champagne opacity-80" aria-hidden="true"></iconify-icon>
                </div>
                <p className="font-display text-3xl font-black tracking-[0.08em] text-white">{first.english}</p>
                <p className="mt-1 text-lg font-bold text-champagne">{first.korean}</p>
                <p className="mt-4 text-sm leading-6 text-zinc-400">{first.line}</p>
              </article>
            </BezelCard>
          </Reveal>
          <div className="grid gap-4">
            {rest.map((brand, index) => (
              <Reveal key={brand.english} delay={(index + 1) * 100}>
                <BezelCard className="group h-full transition-transform duration-500 ease-spring hover:-translate-y-1">
                  <article className="flex h-full flex-col p-4">
                    <BrandThumbnail
                      src={brand.image}
                      alt={`${brand.korean} 시설 사진`}
                      label={brand.english}
                      height="h-[140px]"
                    />
                    <div className="mt-4 flex items-end justify-between gap-4">
                      <div>
                        <p className="font-display text-xl font-black tracking-[0.08em] text-white">{brand.english}</p>
                        <p className="mt-0.5 text-base font-bold text-champagne">{brand.korean}</p>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{brand.line}</p>
                      </div>
                      <iconify-icon icon="solar:dumbbell-large-minimalistic-linear" className="mb-1 shrink-0 text-xl text-champagne opacity-80" aria-hidden="true"></iconify-icon>
                    </div>
                  </article>
                </BezelCard>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const posterBenefits = benefits.filter((b) => b.bgImage);
  const infoBenefits = benefits.filter((b) => !b.bgImage);

  return (
    <section className="bg-graphite/50 py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker="Special Benefits"
          title="14주년 고객감사제 혜택"
          description="진주·사천·거제·삼천포·고성 참여 지점 혜택을 가까운 브랜드에서 확인하세요."
        />
        {/* 비대칭 Bento 그리드: 7/5 → 5/7 교차 */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <BezelCard className="group h-full transition-transform duration-500 ease-spring hover:-translate-y-1">
              <article className="h-full overflow-hidden">
                <img
                  src={posterBenefits[0].bgImage}
                  alt={posterBenefits[0].title}
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-[360px] w-full object-cover object-center transition-transform duration-700 ease-spring group-hover:scale-[1.02] sm:min-h-[440px]"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </article>
            </BezelCard>
          </Reveal>
          <Reveal className="md:col-span-5" delay={100}>
            <BezelCard className="group h-full transition-transform duration-500 ease-spring hover:-translate-y-1">
              <article className="h-full overflow-hidden">
                <img
                  src={posterBenefits[1].bgImage}
                  alt={posterBenefits[1].title}
                  loading="lazy"
                  decoding="async"
                  className="h-full min-h-[360px] w-full object-cover object-center transition-transform duration-700 ease-spring group-hover:scale-[1.02] sm:min-h-[440px]"
                  onError={(e) => { e.currentTarget.style.display = "none"; }}
                />
              </article>
            </BezelCard>
          </Reveal>

          {infoBenefits.map((benefit, index) => (
            <Reveal
              key={benefit.title}
              className={index === 0 ? "md:col-span-5" : "md:col-span-7"}
              delay={index * 100}
            >
              <BezelCard className="group h-full transition-transform duration-500 ease-spring hover:-translate-y-1">
                <article className="flex h-full flex-col">
                  {benefit.image && (
                    <div className="relative h-40 shrink-0 overflow-hidden md:h-52">
                      <img
                        src={benefit.image}
                        alt={benefit.title}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover object-center transition-transform duration-700 ease-spring group-hover:scale-[1.03]"
                        onError={(e) => { e.currentTarget.style.display = "none"; }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                    </div>
                  )}
                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-champagne/10 text-champagne">
                      <iconify-icon icon={benefit.icon} className="text-2xl" aria-hidden="true"></iconify-icon>
                    </div>
                    <h3 className="keep-words text-xl font-black leading-tight text-white">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-zinc-400">{benefit.description}</p>
                  </div>
                </article>
              </BezelCard>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm font-semibold text-zinc-400">
          지점별 가격 및 혜택은 상이할 수 있습니다.
          <span className="mt-2 block">정확한 가격과 혜택은 상담 시 안내됩니다.</span>
        </p>
        <Reveal className="mt-8 text-center">
          <GoldButton href={NAVER_FORM_URL}>혜택 받고 상담 신청하기</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker="Premium Space"
          title="리턴라이프컴퍼니가 운영하는 피트니스 공간"
          description="실제 공간 사진으로 참여 지점의 운동 환경을 확인해보세요."
          align="left"
        />
        {/* 가운데 카드를 아래로 오프셋해 비대칭 리듬 부여 */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal
              key={item.title}
              delay={index * 100}
              className={index === 1 ? "lg:translate-y-10" : ""}
            >
              <ImageCard
                src={item.src}
                alt={item.title}
                className="aspect-[4/5] rounded-[24px] transition-all duration-500 ease-spring hover:-translate-y-1 hover:border-softgold/60"
                overlayClassName="bg-gradient-to-t from-black/75 via-black/25 to-transparent"
              >
                <div className="flex h-full flex-col justify-end p-5">
                  <span className="mb-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-champagne/80">
                    {item.caption}
                  </span>
                  <p className="keep-words text-xl font-black text-white">{item.title}</p>
                </div>
              </ImageCard>
            </Reveal>
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
    <section id="branches" className="py-24 md:py-32">
      <div className="section-shell">
        <SectionHeading
          kicker="Branches"
          title="참여 브랜드 / 지점 선택"
          description="브랜드 카드를 눌러 이번 14주년 고객감사제 참여 지점을 확인해보세요."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branchGroups.map((group, index) => {
            const isActive = activeGroup === group.id;
            return (
              <Reveal key={group.id} delay={index * 100}>
                <BezelCard
                  active={isActive}
                  className="group h-full cursor-pointer transition-transform duration-500 ease-spring hover:-translate-y-1"
                  role="button"
                  tabIndex={0}
                  onClick={() => setActiveGroup(group.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveGroup(group.id); }
                  }}
                >
                  <article className="flex h-full min-h-[240px] flex-col p-4 text-left">
                    <BrandThumbnail
                      src={group.image}
                      alt={group.title}
                      subLabel={`${group.branches.length}개 지점`}
                      height="h-[110px]"
                    />
                    <div className="mb-6 mt-5 flex items-start justify-between gap-4">
                      <div>
                        <p className="text-sm font-bold text-champagne">{group.brand}</p>
                        <h3 className="keep-words mt-2 text-xl font-black text-white">{group.title}</h3>
                        <p className="mt-2 text-sm font-semibold leading-6 text-zinc-400">{group.description}</p>
                      </div>
                      <iconify-icon icon="solar:buildings-2-linear" className="shrink-0 text-2xl text-champagne" aria-hidden="true"></iconify-icon>
                    </div>
                    <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      <span className="rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-sm font-bold text-pearl">
                        {group.priceText}
                      </span>
                      <a
                        href={NAVER_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 rounded-full border border-champagne/45 px-4 py-2 text-sm font-extrabold text-champagne transition-all duration-500 ease-spring hover:bg-champagne hover:text-black active:scale-[0.98]"
                      >
                        상담하기
                        <iconify-icon icon="solar:alt-arrow-right-linear" aria-hidden="true"></iconify-icon>
                      </a>
                    </div>
                  </article>
                </BezelCard>
              </Reveal>
            );
          })}
        </div>

        {/* 세부 지점 목록 */}
        <Reveal className="mt-5">
          <BezelCard>
            <div className="p-6 md:p-8">
              <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-sm font-bold text-champagne">참여 지점</p>
                  <h3 className="keep-words mt-2 text-2xl font-black text-white">{selectedGroup.title}</h3>
                  <p className="mt-2 text-sm font-semibold leading-6 text-zinc-400">
                    아래 지점들이 이번 14주년 고객감사제에 참여합니다.
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
                    <iconify-icon icon="solar:check-circle-bold" className="shrink-0 text-champagne" aria-hidden="true"></iconify-icon>
                    <span>{name}</span>
                  </div>
                ))}
              </div>
            </div>
          </BezelCard>
        </Reveal>
        <p className="mt-8 text-center text-sm font-semibold text-zinc-400">
          지점별 가격 및 혜택은 상이할 수 있습니다.
          <span className="mt-2 block">정확한 가격과 혜택은 상담 시 안내됩니다.</span>
        </p>
        <Reveal className="mt-8 text-center">
          <GoldButton href={NAVER_FORM_URL}>상담 신청하기</GoldButton>
        </Reveal>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-24 md:py-32">
      <div className="section-shell">
        {/* 좌측 헤딩 + 우측 리스트 분할 레이아웃 */}
        <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:gap-14">
          <div>
            <SectionHeading kicker="FAQ" title="자주 묻는 질문" align="left" />
            <Reveal className="hidden md:block">
              <GhostButton href={NAVER_FORM_URL}>이벤트 바로 신청</GhostButton>
            </Reveal>
          </div>
          <div className="grid gap-3">
            {faqs.map((faq, index) => (
              <Reveal key={faq.question} delay={index * 80}>
                <article className="glass-card rounded-[20px] p-5 md:p-6">
                  <h3 className="flex items-start gap-3 text-base font-bold text-white md:text-lg md:font-black">
                    <iconify-icon icon="solar:chat-round-line-linear" className="mt-1 shrink-0 text-xl text-champagne" aria-hidden="true"></iconify-icon>
                    {faq.question}
                  </h3>
                  <p className="mt-2 pl-8 text-sm leading-relaxed text-white/65 md:text-base md:leading-7">
                    {faq.answer}
                  </p>
                </article>
              </Reveal>
            ))}
            <Reveal className="mt-4 text-center md:hidden">
              <GoldButton href={NAVER_FORM_URL} className="w-full">
                이벤트 바로 신청
              </GoldButton>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * ConsultSection — 네이버폼 연결 상담 신청 CTA 섹션
 * 자체 폼 없이 네이버폼으로 유도하는 전환 중심 구조
 */
function ConsultSection() {
  const highlights = [
    { label: "헬스 월 3만원대", sub: "14주년 한정 특별가" },
    { label: "리뷰 작성 시 SPT 2회", sub: "서비스 PT 무료 제공" },
    { label: "참여 지점 혜택 안내", sub: "지점별 정확한 혜택 상담" },
  ];

  return (
    <section id="consult" className="bg-graphite/50 pb-32 pt-24 md:pb-40 md:pt-32">
      <div className="section-shell">
        <SectionHeading
          kicker="Consultation"
          title="14주년 혜택 상담 신청하기"
          description="이름, 연락처, 희망 지점만 남기면 가까운 지점의 14주년 고객감사제 혜택을 안내해드립니다."
        />

        <div className="mx-auto max-w-2xl">
          {/* 혜택 요약 카드 3종 */}
          <div className="mb-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((h, index) => (
              <Reveal key={h.label} delay={index * 80}>
                <div className="glass-card rounded-[20px] p-4 text-center">
                  <p className="gold-text text-lg font-black leading-tight">{h.label}</p>
                  <p className="mt-1 text-xs font-semibold text-zinc-400">{h.sub}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* 메인 CTA 카드 — Double-Bezel */}
          <Reveal delay={150}>
            <BezelCard>
              <div className="relative overflow-hidden p-6 md:p-10">
                {/* 배경 glow */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne/[0.06] to-transparent" />
                <div className="pointer-events-none absolute right-4 top-2 select-none font-display text-[12rem] font-black leading-none text-champagne/[0.04]">
                  14
                </div>

                <div className="relative z-10">
                  {/* 강조 배지 */}
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-4 py-2 text-sm font-bold text-pearl">
                    <iconify-icon icon="solar:cup-star-bold" className="text-softgold" aria-hidden="true"></iconify-icon>
                    리턴라이프컴퍼니 14주년 고객감사제
                  </div>

                  {/* 핵심 강조 문구 */}
                  <p className="keep-words text-3xl font-black text-white md:text-4xl">
                    1년에 딱 한 번, <span className="gold-text">단 2주간</span>
                  </p>
                  <p className="keep-words mt-2 text-5xl font-black md:text-6xl">
                    <span className="gold-text">헬스 월 3만원대</span>
                  </p>

                  {/* 안내 문구 */}
                  <p className="mt-5 text-base leading-7 text-zinc-300">
                    네이버폼에서 이름, 연락처, 상담 희망 지점을 남겨주시면{" "}
                    <br className="hidden sm:block" />
                    가까운 지점 담당자가 빠르게 안내해드립니다.
                  </p>

                  {/* CTA 버튼 */}
                  <div className="mt-8">
                    <GoldButton href={NAVER_FORM_URL} className="w-full text-lg sm:w-auto sm:pl-10">
                      네이버폼으로 상담 신청하기
                    </GoldButton>
                  </div>

                  {/* 보조 안내 */}
                  <div className="mt-6 flex flex-col gap-1.5">
                    <p className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                      <iconify-icon icon="solar:square-top-down-linear" className="shrink-0 text-champagne/70" aria-hidden="true"></iconify-icon>
                      클릭 시 네이버 상담 신청폼으로 이동합니다.
                    </p>
                    <p className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                      <iconify-icon icon="solar:shield-check-linear" className="shrink-0 text-champagne/70" aria-hidden="true"></iconify-icon>
                      입력하신 정보는 상담 목적 외 사용되지 않습니다.
                    </p>
                    <p className="flex items-center gap-2 text-xs text-zinc-500">
                      지점별 가격 및 혜택은 상이할 수 있으며, 정확한 내용은 상담 시 안내됩니다.
                    </p>
                  </div>
                </div>
              </div>
            </BezelCard>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/[0.06] pb-28 pt-12 md:pb-14">
      <div className="section-shell flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-champagne/50 bg-white/[0.04] font-display text-sm font-black text-champagne">
            RL
          </div>
          <div>
            <p className="font-display text-sm font-black tracking-[0.2em] text-white">RETURN LIFE COMPANY</p>
            <p className="mt-0.5 text-xs font-semibold text-zinc-500">
              올드짐 · 머슬팩토리24 · 어반짐
            </p>
          </div>
        </div>
        <div className="text-sm font-semibold text-zinc-500">
          <p>진주 · 사천 · 거제 · 삼천포 · 고성</p>
          <p className="mt-1 text-xs text-zinc-600">
            © 2026 Return Life Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function StickyCTA() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-champagne/25 bg-black/90 px-4 py-3.5 backdrop-blur-xl md:hidden"
      style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="keep-words text-sm font-black leading-tight text-white">14주년 혜택 상담</p>
          <p className="keep-words text-xs font-semibold text-zinc-400">네이버폼으로 빠르게 신청하기</p>
        </div>
        <a
          href={NAVER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 rounded-full bg-gold-gradient px-5 py-3 text-sm font-black text-black shadow-gold-soft transition-all duration-500 ease-spring hover:scale-[1.03] active:scale-[0.97]"
        >
          상담 신청
        </a>
      </div>
    </div>
  );
}

function App() {
  return (
    <main className="min-h-[100dvh] bg-ink text-white">
      <div className="noise-overlay" aria-hidden="true" />
      <FloatingNav />
      <HeroSection />
      <BranchMarquee />
      <BrandSection />
      <BenefitsSection />
      {SHOW_GALLERY && <GallerySection />}
      <BranchSection />
      <FAQSection />
      <ConsultSection />
      <Footer />
      <StickyCTA />
    </main>
  );
}

export default App;
