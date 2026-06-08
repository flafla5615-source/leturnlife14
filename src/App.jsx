import { useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Dumbbell,
  Gift,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  WalletCards,
} from "lucide-react";

const branchGroups = [
  {
    id: "oldgym",
    brand: "올드짐",
    title: "진주·사천·거제 올드짐",
    description: "올드짐 참여 지점 혜택 확인",
    priceText: "헬스 월 3만원대",
    note: "지점별 가격 및 혜택은 상이할 수 있습니다.",
    branches: ["평거점", "하대점", "사천점", "상동점", "아주점", "수월점"],
  },
  {
    id: "musclefactory24",
    brand: "머슬팩토리24",
    name: "진주 머슬팩토리24",
    title: "진주·사천·삼천포·고성 머슬팩토리24",
    description: "머슬팩토리24 참여 지점 혜택 확인",
    priceText: "헬스 월 3만원대",
    note: "지점별 가격 및 혜택은 상이할 수 있습니다.",
    branches: [
      "보건대점",
      "호탄점",
      "신진주점",
      "하대점",
      "정촌점",
      "사천본점",
      "삼천포벌리점",
      "사천터미널점",
      "고성점",
    ],
  },
  {
    id: "urbangym",
    brand: "어반짐",
    title: "진주 어반짐",
    description: "어반짐 참여 지점 혜택 확인",
    priceText: "헬스 월 3만원대",
    note: "지점별 가격 및 혜택은 상이할 수 있습니다.",
    branches: ["진주평거점"],
  },
];

const benefits = [
  {
    icon: WalletCards,
    title: "헬스 월 3만원대",
    description: "합리적인 가격 혜택",
  },
  {
    icon: BadgeCheck,
    title: "지점별 가격 상이",
    description: "지점별 문의 필수",
  },
  {
    icon: Gift,
    title: "리뷰 작성 시 SPT(서비스 PT) 2회 제공",
    description: "서비스 PT 혜택",
  },
  {
    icon: MapPin,
    title: "참여 지점 확대",
    description: "진주·사천·거제·삼천포·고성",
  },
];

const brandCards = [
  { english: "OLD GYM", korean: "올드짐", line: "클래식한 트레이닝 감도" },
  { english: "URBAN GYM", korean: "어반짐", line: "도심형 프리미엄 피트니스" },
  { english: "MUSCLE FACTORY 24", korean: "머슬팩토리24", line: "24시간 운동 루틴" },
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

const initialFormState = {
  name: "",
  phone: "",
  branch: "",
  message: "",
};

function scrollToLeadForm() {
  document.getElementById("lead-form")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

function SectionHeading({ kicker, title, description }) {
  return (
    <div className="mx-auto mb-8 max-w-2xl text-center md:mb-12">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
        {kicker}
      </p>
      <h2 className="keep-words text-3xl font-black leading-tight text-white md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="keep-words mt-4 text-base leading-7 text-zinc-300 md:text-lg">
          {description}
        </p>
      ) : null}
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
      <div className="absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-champagne/10 blur-3xl md:h-[32rem] md:w-[32rem]" />
      <div className="absolute right-[-7rem] top-28 hidden text-[25rem] font-black leading-none text-white/[0.035] md:block">
        14
      </div>
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-champagne/50 to-transparent" />

      <nav className="section-shell relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-full border border-champagne/50 bg-white/[0.04] text-sm font-black text-champagne">
            RL
          </div>
          <div>
            <p className="text-sm font-black tracking-[0.2em] text-white">
              RETURN LIFE
            </p>
            <p className="text-[10px] font-semibold tracking-[0.28em] text-champagne/80">
              COMPANY
            </p>
          </div>
        </div>
        <div className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-semibold text-pearl md:flex">
          <Sparkles className="h-4 w-4 text-champagne" />
          14th Anniversary
        </div>
      </nav>

      <div className="section-shell relative z-10 grid gap-10 pt-16 md:grid-cols-[1.08fr_0.92fr] md:items-center md:pt-24">
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

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <GoldButton onClick={scrollToLeadForm} className="w-full sm:w-auto">
              가까운 지점 혜택 확인하기
            </GoldButton>
            <p className="flex items-center justify-center gap-2 text-sm font-semibold text-zinc-300 sm:justify-start">
              <ShieldCheck className="h-4 w-4 text-champagne" />
              지점별 가격 및 혜택은 상이할 수 있습니다.
            </p>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[430px]">
          <div className="absolute inset-6 rounded-full bg-champagne/20 blur-3xl" />
          <div className="glass-card relative overflow-hidden rounded-[28px] p-6 md:p-8">
            <div className="absolute right-4 top-2 text-[9rem] font-black leading-none text-white/[0.04]">
              14
            </div>
            <p className="text-sm font-bold tracking-[0.22em] text-champagne">
              ANNIVERSARY BENEFIT
            </p>
            <div className="mt-10">
              <p className="keep-words text-xl font-black text-zinc-100 md:text-2xl">
                1년에 딱 한 번, 단 2주간
              </p>
              <p className="mt-3 text-6xl font-black tracking-normal gold-text md:text-7xl">
                <span className="block text-4xl md:text-5xl">헬스 월</span>
                <span className="block">3만원대</span>
              </p>
              <p className="mt-4 text-base leading-7 text-zinc-300">
                리뷰 작성 고객에게 SPT(서비스 PT) 2회 제공
              </p>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3">
              {["올드짐", "머슬팩토리24", "어반짐", "참여 지점 혜택"].map(
                (item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-black/30 px-3 py-3 text-center text-sm font-bold text-pearl"
                  >
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
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
              className="glass-card group rounded-[24px] p-6 transition duration-300 hover:-translate-y-1 hover:border-softgold/60 hover:bg-white/[0.07]"
            >
              <div className="mb-7 flex items-center justify-between">
                <div className="h-px w-14 bg-gradient-to-r from-champagne to-transparent" />
                <Dumbbell className="h-5 w-5 text-champagne opacity-80" />
              </div>
              <p className="text-2xl font-black tracking-[0.08em] text-white">
                {brand.english}
              </p>
              <p className="mt-2 text-lg font-bold text-champagne">{brand.korean}</p>
              <p className="mt-5 text-sm leading-6 text-zinc-400">{brand.line}</p>
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

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;

            return (
              <article
                key={benefit.title}
                className="glass-card rounded-[24px] p-5 transition duration-300 hover:-translate-y-1 hover:border-champagne/60"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl bg-champagne/10 text-champagne">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="keep-words min-h-16 text-2xl font-black leading-tight text-white">
                  {benefit.title}
                </h3>
                <p className="mt-3 text-sm font-semibold text-zinc-400">
                  {benefit.description}
                </p>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm font-semibold text-zinc-400">
          지점별 가격 및 혜택은 상이할 수 있습니다.
          <span className="mt-2 block">정확한 가격과 혜택은 상담 시 안내됩니다.</span>
        </p>
      </div>
    </section>
  );
}

function BranchSection({ onInquiry }) {
  const [activeGroup, setActiveGroup] = useState(branchGroups[0].id);
  const selectedGroup =
    branchGroups.find((group) => group.id === activeGroup) ?? branchGroups[0];

  return (
    <section className="py-20 md:py-28">
      <div className="section-shell">
        <SectionHeading
          kicker="Branches"
          title="참여 브랜드 / 지점 선택"
          description="브랜드 카드를 눌러 이번 14주년 고객감사제 참여 지점을 확인해보세요."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {branchGroups.map((group) => {
            const isActive = activeGroup === group.id;
            const firstBranch = `${group.brand} ${group.branches[0]}`;

            return (
            <article
              key={group.id}
              role="button"
              tabIndex={0}
              onClick={() => setActiveGroup(group.id)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveGroup(group.id);
                }
              }}
              className={`glass-card flex min-h-[240px] flex-col rounded-[24px] p-5 text-left transition duration-300 hover:-translate-y-1 ${
                isActive ? "branch-card-active" : ""
              }`}
            >
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-bold text-champagne">{group.brand}</p>
                  <h3 className="keep-words mt-2 text-2xl font-black text-white">
                    {group.title}
                  </h3>
                  <p className="mt-3 text-sm font-semibold leading-6 text-zinc-400">
                    {group.description}
                  </p>
                </div>
                <Building2 className="h-6 w-6 shrink-0 text-champagne" />
              </div>

              <div className="mt-auto flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="rounded-full border border-champagne/30 bg-champagne/10 px-3 py-1 text-sm font-bold text-pearl">
                  {group.priceText}
                </span>
                <button
                  type="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    onInquiry(firstBranch);
                  }}
                  className="inline-flex items-center gap-1 rounded-full border border-champagne/45 px-4 py-2 text-sm font-extrabold text-champagne transition hover:bg-champagne hover:text-black"
                >
                  문의하기
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </article>
            );
          })}
        </div>

        <div className="glass-card mt-5 rounded-[24px] p-5 md:p-6">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold text-champagne">참여 지점</p>
              <h3 className="keep-words mt-2 text-2xl font-black text-white">
                {selectedGroup.title}
              </h3>
              <p className="mt-3 text-sm font-semibold leading-6 text-zinc-400">
                아래 지점들이 이번 14주년 고객감사제에 참여합니다.
              </p>
            </div>
            <p className="text-sm font-bold text-pearl">{selectedGroup.note}</p>
          </div>

          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
            {selectedGroup.branches.map((branchName) => (
              <div
                key={`${selectedGroup.id}-${branchName}`}
                className="flex min-h-11 items-center gap-2 rounded-2xl border border-white/10 bg-black/35 px-3 py-2 text-sm font-bold text-pearl"
              >
                <CheckCircle2 className="h-4 w-4 shrink-0 text-champagne" />
                <span>{branchName}</span>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-6 text-center text-sm font-semibold text-zinc-400">
          지점별 가격 및 혜택은 상이할 수 있습니다.
          <span className="mt-2 block">정확한 가격과 혜택은 상담 시 안내됩니다.</span>
        </p>
      </div>
    </section>
  );
}

function LeadFormSection({ selectedBranch }) {
  const [form, setForm] = useState(initialFormState);
  const [errors, setErrors] = useState({});

  const branchOptions = useMemo(
    () =>
      branchGroups.flatMap((group) =>
        group.branches.map((branchName) => `${group.brand} ${branchName}`)
      ),
    []
  );

  useEffect(() => {
    if (!selectedBranch) return;

    setForm((current) => ({ ...current, branch: selectedBranch }));
    setErrors((current) => ({ ...current, branch: "" }));
  }, [selectedBranch]);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: "" }));
  }

  function validateForm() {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "이름을 입력해주세요.";
    if (!form.phone.trim()) nextErrors.phone = "연락처를 입력해주세요.";
    if (!form.branch) nextErrors.branch = "관심 지점을 선택해주세요.";

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) return;

    const payload = {
      ...form,
      submittedAt: new Date().toISOString(),
      campaign: "returnlife-14th-anniversary",
    };

    console.log("상담 신청 데이터", payload);
    alert("상담 신청이 접수되었습니다. 입력하신 내용을 확인했습니다.");
    setForm(initialFormState);
  }

  return (
    <section id="lead-form" className="scroll-mt-8 bg-graphite/60 py-20 md:py-28">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-champagne">
            Consultation
          </p>
          <h2 className="keep-words text-3xl font-black leading-tight text-white md:text-5xl">
            상담 신청하고
            <span className="block gold-text">혜택 받기</span>
          </h2>
          <p className="mt-5 text-base leading-7 text-zinc-300 md:text-lg">
            간단한 정보 입력 후 가까운 지점의 14주년 혜택을 안내받아보세요.
          </p>

          <div className="mt-8 space-y-4">
            {[
              ["1년에 딱 한 번, 단 2주간", Trophy],
              ["헬스 월 3만원대 이벤트", WalletCards],
              ["리뷰 작성 시 SPT(서비스 PT) 2회 제공", Gift],
            ].map(([text, Icon]) => (
              <div key={text} className="flex items-center gap-3 text-pearl">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-champagne/10">
                  <Icon className="h-4 w-4 text-champagne" />
                </span>
                <span className="font-bold">{text}</span>
              </div>
            ))}
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glass-card rounded-[28px] p-5 md:p-7"
          noValidate
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField label="이름" error={errors.name}>
              <input
                name="name"
                value={form.name}
                onChange={updateField}
                placeholder="홍길동"
                className="form-input"
              />
            </FormField>

            <FormField label="연락처" error={errors.phone}>
              <input
                name="phone"
                value={form.phone}
                onChange={updateField}
                placeholder="010-0000-0000"
                className="form-input"
              />
            </FormField>

            <FormField label="관심 지점 선택" error={errors.branch} className="sm:col-span-2">
              <select
                name="branch"
                value={form.branch}
                onChange={updateField}
                className="form-input"
              >
                <option value="">관심 지점을 선택해주세요</option>
                {branchOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </FormField>

            <FormField label="문의 내용 또는 희망 상담 시간" className="sm:col-span-2">
              <textarea
                name="message"
                value={form.message}
                onChange={updateField}
                placeholder="예: 평일 저녁 상담 희망 / 가장 가까운 지점 안내 요청"
                rows="4"
                className="form-input resize-none"
              />
            </FormField>
          </div>

          <GoldButton type="submit" className="mt-6 w-full">
            혜택 받고 상담 신청하기
          </GoldButton>

          <p className="mt-4 flex items-start gap-2 text-sm leading-6 text-zinc-400">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
            입력하신 정보는 상담 목적 외 사용되지 않습니다.
          </p>
        </form>
      </div>
    </section>
  );
}

function FormField({ label, error, children, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-2 block text-sm font-bold text-pearl">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm text-softgold">{error}</span> : null}
    </label>
  );
}

function FAQSection() {
  return (
    <section className="pb-28 pt-20 md:pb-32 md:pt-28">
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
      </div>
    </section>
  );
}

function StickyCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-champagne/25 bg-black/85 px-4 py-3 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-md items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="keep-words text-sm font-black leading-tight text-white">
            헬스 월 3만원대!
          </p>
          <p className="keep-words text-xs font-semibold text-zinc-400">
            진주·사천·거제·삼천포·고성 혜택
          </p>
        </div>
        <button
          type="button"
          onClick={scrollToLeadForm}
          className="shrink-0 rounded-full bg-gold-gradient px-4 py-3 text-sm font-black text-black shadow-gold-soft"
        >
          지금 혜택 확인
        </button>
      </div>
    </div>
  );
}

function App() {
  const [selectedBranch, setSelectedBranch] = useState("");

  function handleBranchInquiry(branchName = "") {
    setSelectedBranch(branchName);
    scrollToLeadForm();
  }

  return (
    <main className="min-h-screen bg-ink text-white">
      <HeroSection />
      <BrandSection />
      <BenefitsSection />
      <BranchSection onInquiry={handleBranchInquiry} />
      <LeadFormSection selectedBranch={selectedBranch} />
      <FAQSection />
      <StickyCTA />
    </main>
  );
}

export default App;
