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

const benefits = [
  {
    icon: WalletCards,
    title: "헬스 월 3만원대",
    description: "14주년 기념 단 2주간 특별 혜택",
    image: null,
    bgImage: uiImages.healthMonthly,
  },
  {
    icon: BadgeCheck,
    title: "지점별 가격 상이",
    description: "지점별 문의 필수",
    image: null,
    bgImage: uiImages.branchPrice,
  },
  {
    icon: Gift,
    title: "리뷰 작성 시 SPT(서비스 PT) 2회 제공",
    description: "서비스 PT 혜택",
    image: images.ptScene,
  },
  {
    icon: MapPin,
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
      <h2 className="keep-words text-3xl font-black leading-tight text-white md:text-5xl">{title}</h2>
      {description && (
        <p className="keep-words mt-4 text-base leading-7 text-zinc-300 md:text-lg">{description}</p>
      )}
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
    <header className="relative min-h-[92vh] overflow-hidden bg-dark-radial pb-24 pt-6 md:min-h-[760px] md:pb-28">
      {/* 배경 glow */}
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl md:h-[32rem] md:w-[32rem]" />
      {/* 골드 "14" 장식 */}
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

      <div className="section-shell relative z-10 grid gap-10 pt-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-24">
        {/* 왼쪽: 핵심 카피 */}
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-4 py-2 text-sm font-bold text-pearl shadow-gold-soft">
            <Trophy className="h-4 w-4 text-softgold" />
            리턴라이프컴퍼니 14주년 고객감사제
          </div>
          <h1 className="keep-words text-4xl font-black leading-[1.08] text-white sm:text-5xl md:text-6xl xl:text-7xl">
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
            <a
              href={NAVER_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-2 rounded-2xl border border-champagne/45 px-6 py-3 text-base font-extrabold text-champagne transition duration-300 hover:bg-champagne hover:text-black sm:w-auto"
            >
              빠른 상담 신청
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-300 sm:justify-start">
              <ShieldCheck className="h-4 w-4 text-champagne" />
              지점별 가격 및 혜택은 상이할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 오른쪽: 실제 헬스장 사진 카드 */}
        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute inset-6 rounded-full bg-champagne/20 blur-3xl" />
          <ImageCard
            src={uiImages.anniversaryBenefit}
            alt="리턴라이프컴퍼니 14주년 고객감사제 혜택"
            loading="eager"
            className="h-[560px] rounded-[28px] shadow-gold"
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
                <p className="keep-words text-xl font-black text-zinc-100 md:text-2xl">
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
        </div>
      </div>
    </header>
  );
}

function BrandSection() {
  return (
    <section className="relative py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Return Life Company"
          title="리턴라이프컴퍼니"
          description="올드짐, 어반짐, 머슬팩토리24는 리턴라이프컴퍼니가 운영합니다."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {brandCards.map((brand) => (
            <article
              key={brand.english}
              className="glass-card group overflow-hidden rounded-[24px] p-4 transition duration-300 hover:-translate-y-1 hover:border-softgold/60"
            >
              {/* 실제 헬스장 사진 썸네일 */}
              <BrandThumbnail
                src={brand.image}
                alt={`${brand.korean} 시설 사진`}
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
    <section className="bg-graphite/50 py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Special Benefits"
          title="14주년 고객감사제 혜택"
          description="진주·사천·거제·삼천포·고성 참여 지점 혜택을 가까운 브랜드에서 확인하세요."
        />
        {/* 완성형 포스터 카드 2장 — 2열 그리드 */}
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

        {/* 일반 혜택 카드 (SPT 제공 / 참여 지점) */}
        <div className="mt-5 grid gap-4 sm:grid-cols-2">
          {benefits.filter((b) => !b.bgImage).map((benefit) => {
            const Icon = benefit.icon;
            return (
              <article
                key={benefit.title}
                className="glass-card group overflow-hidden rounded-[24px] transition duration-300 hover:-translate-y-1 hover:border-champagne/60"
              >
                {benefit.image ? (
                  <div className="relative h-[130px] overflow-hidden">
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
          지점별 가격 및 혜택은 상이할 수 있습니다.
          <span className="mt-2 block">정확한 가격과 혜택은 상담 시 안내됩니다.</span>
        </p>
        <div className="mt-6 text-center">
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 text-base font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft"
          >
            혜택 받고 상담 신청하기
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function GallerySection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Premium Space"
          title="리턴라이프컴퍼니가 운영하는 피트니스 공간"
          description="실제 공간 사진으로 참여 지점의 운동 환경을 확인해보세요."
        />
        {/* 모바일: 1열, PC: 3열 */}
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
    <section id="branches" className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Branches"
          title="참여 브랜드 / 지점 선택"
          description="브랜드 카드를 눌러 이번 14주년 고객감사제 참여 지점을 확인해보세요."
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
                {/* 실제 사진 썸네일 */}
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
                  <Building2 className="h-6 w-6 shrink-0 text-champagne" />
                </div>
                <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <span className="rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-sm font-bold text-pearl">
                    {group.priceText}
                  </span>
                  {/* 네이버폼 상담 신청 */}
                  <a
                    href={NAVER_FORM_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1 rounded-full border border-champagne/45 px-4 py-2 text-sm font-extrabold text-champagne transition hover:bg-champagne hover:text-black"
                  >
                    상담하기 <ChevronRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>

        {/* 세부 지점 목록 */}
        <div className="glass-card mt-5 rounded-[24px] p-5 md:p-6">
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
                <CheckCircle2 className="h-4 w-4 shrink-0 text-champagne" />
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-center text-sm font-semibold text-zinc-400">
          지점별 가격 및 혜택은 상이할 수 있습니다.
          <span className="mt-2 block">정확한 가격과 혜택은 상담 시 안내됩니다.</span>
        </p>
        <div className="mt-6 text-center">
          <a
            href={NAVER_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-2xl bg-gold-gradient px-8 py-4 text-base font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft"
          >
            상담 신청하기
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading kicker="FAQ" title="자주 묻는 질문" />
        <div className="mx-auto grid max-w-4xl gap-4">
          {faqs.map((faq) => (
            <article key={faq.question} className="glass-card rounded-[22px] p-5">
              <h3 className="flex items-start gap-3 text-lg font-black text-white">
                <MessageCircle className="mt-1 h-5 w-5 shrink-0 text-champagne" />
                {faq.question}
              </h3>
              <p className="mt-3 pl-8 text-base leading-7 text-zinc-300">{faq.answer}</p>
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
            이벤트 바로 신청
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
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
    <section id="consult" className="bg-graphite/50 pb-32 pt-20 md:pb-40 md:pt-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Consultation"
          title="14주년 혜택 상담 신청하기"
          description="이름, 연락처, 희망 지점만 남기면 가까운 지점의 14주년 고객감사제 혜택을 안내해드립니다."
        />

        <div className="mx-auto max-w-2xl">
          {/* 혜택 요약 카드 3종 */}
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

          {/* 메인 CTA 카드 */}
          <div className="glass-card relative overflow-hidden rounded-[28px] p-8 md:p-10">
            {/* 배경 glow */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-champagne/[0.06] to-transparent" />
            <div className="pointer-events-none absolute right-4 top-2 select-none text-[12rem] font-black leading-none text-champagne/[0.04]">
              14
            </div>

            <div className="relative z-10">
              {/* 강조 배지 */}
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-champagne/35 bg-champagne/10 px-4 py-2 text-sm font-bold text-pearl">
                <Trophy className="h-4 w-4 text-softgold" />
                리턴라이프컴퍼니 14주년 고객감사제
              </div>

              {/* 핵심 강조 문구 */}
              <p className="keep-words text-3xl font-black text-white md:text-4xl">
                1년에 딱 한 번,{" "}
                <span className="gold-text">단 2주간</span>
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
                <a
                  href={NAVER_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"

                  className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gold-gradient px-6 py-5 text-lg font-extrabold text-black shadow-gold transition duration-300 hover:-translate-y-0.5 hover:shadow-gold-soft sm:w-auto sm:px-10"
                >
                  <ExternalLink className="h-5 w-5" />
                  네이버폼으로 상담 신청하기
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>

              {/* 보조 안내 */}
              <div className="mt-5 flex flex-col gap-1.5">
                <p className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                  <ExternalLink className="h-3.5 w-3.5 shrink-0 text-champagne/70" />
                  클릭 시 네이버 상담 신청폼으로 이동합니다.
                </p>
                <p className="flex items-center gap-2 text-sm font-semibold text-zinc-400">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-champagne/70" />
                  입력하신 정보는 상담 목적 외 사용되지 않습니다.
                </p>
                <p className="flex items-center gap-2 text-xs text-zinc-500">
                  지점별 가격 및 혜택은 상이할 수 있으며, 정확한 내용은 상담 시 안내됩니다.
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
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-champagne/25 bg-black/85 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="keep-words text-sm font-black leading-tight text-white">14주년 혜택 상담</p>
          <p className="keep-words text-xs font-semibold text-zinc-400">네이버폼으로 빠르게 신청하기</p>
        </div>
        <a
          href={NAVER_FORM_URL}
          target="_blank"
          rel="noopener noreferrer"

          className="shrink-0 rounded-full bg-gold-gradient px-4 py-3 text-sm font-black text-black shadow-gold-soft"
        >
          상담 신청
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
