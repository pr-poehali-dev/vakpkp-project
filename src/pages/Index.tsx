import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import ContactForm from "@/components/common/ContactForm";
import Icon from "@/components/ui/icon";

const HERO_IMAGE =
  "https://cdn.poehali.dev/projects/67033018-a1a1-4925-bb7b-d31c4e59f20d/files/becb3867-db9d-4052-b658-3018c572b13f.jpg";
const WORK_IMAGE =
  "https://cdn.poehali.dev/projects/67033018-a1a1-4925-bb7b-d31c4e59f20d/files/a512a4d0-1ac9-4cad-8dfb-0c8a17907816.jpg";

const font: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

// ─── DATA ────────────────────────────────────────────────────────────────────

const SERVICES = [
  {
    icon: "Zap",
    title: "Замена проводки",
    desc: "Полная или частичная замена электрической проводки в квартире, доме, офисе. Используем кабель ВВГнг-LS.",
    price: "1 500 руб/точка",
    href: "/services/zamena-provodki-izhevsk/",
  },
  {
    icon: "PlugZap",
    title: "Установка розеток",
    desc: "Монтаж, перенос и замена розеток и выключателей любых марок. Быстро, аккуратно, с заделкой штробы.",
    price: "300 руб",
    href: "/services/ustanovka-rozetok-izhevsk/",
  },
  {
    icon: "Lightbulb",
    title: "Монтаж освещения",
    desc: "Установка люстр, точечных светильников, LED-лент, бра. Подключение умного света.",
    price: "800 руб",
    href: "/services/montazh-osveshcheniya-izhevsk/",
  },
  {
    icon: "Server",
    title: "Сборка электрощита",
    desc: "Сборка, замена и модернизация электрических щитов. Установка автоматов, УЗО, дифавтоматов.",
    price: "3 000 руб",
    href: "/services/sborka-elektroschita-izhevsk/",
  },
  {
    icon: "Wrench",
    title: "Ремонт электрики",
    desc: "Устранение неисправностей: выбивает автомат, нет света в комнате, мигает лампа, искрит розетка.",
    price: "500 руб",
    href: "/services/remont-elektriki-izhevsk/",
  },
  {
    icon: "AlertTriangle",
    title: "Аварийный электрик",
    desc: "Срочный выезд при аварийных ситуациях. Работаем ежедневно с 8:00 до 22:00 по всему Ижевску.",
    price: "1 000 руб",
    href: "/services/avarijnyj-elektrik-izhevsk/",
  },
];

const ADVANTAGES = [
  "Работаем по всему Ижевску и Завьялово",
  "Опытные электрики с практикой от 10 лет",
  "Приезжаем в день обращения, без ожидания",
  "Работаем аккуратно, убираем за собой",
  "Даём гарантию на все выполненные работы",
  "Помогаем с подбором и закупкой материалов",
];

const PRICES = [
  { name: "Установка розетки/выключателя", price: "от 300 руб" },
  { name: "Перенос розетки/выключателя", price: "от 500 руб" },
  { name: "Установка люстры / светильника", price: "от 800 руб" },
  { name: "Замена автоматического выключателя", price: "от 500 руб" },
  { name: "Диагностика электрики", price: "от 500 руб" },
  { name: "Замена проводки (цена за точку)", price: "от 1 500 руб" },
  { name: "Сборка / модернизация щита", price: "от 3 000 руб" },
  { name: "Аварийный выезд", price: "от 1 000 руб" },
];

const STEPS = [
  { num: "01", title: "Звонок или заявка", desc: "Оставьте заявку на сайте или позвоните — ответим сразу." },
  { num: "02", title: "Выезд мастера", desc: "Приедем в удобное для вас время в день обращения." },
  { num: "03", title: "Оценка и смета", desc: "Осмотрим объект, дадим точную стоимость без скрытых доплат." },
  { num: "04", title: "Выполнение работ", desc: "Делаем быстро и аккуратно, убираем мусор за собой." },
  { num: "05", title: "Сдача и гарантия", desc: "Проверяем результат вместе с вами, оформляем гарантию." },
];

const CASES = [
  {
    title: "Замена проводки в квартире на ул. Ленина",
    tags: ["Замена проводки", "Ижевск"],
    cost: "25 000 руб",
    duration: "2 дня",
    desc: "Полная замена алюминиевой проводки на медную в 3-комнатной квартире. Новый щит, 18 точек, заделка штроб.",
  },
  {
    title: "Монтаж освещения в новостройке",
    tags: ["Монтаж освещения", "Ижевск"],
    cost: "8 000 руб",
    duration: "1 день",
    desc: "Установка 24 точечных светильников, 4 люстры, подключение LED-подсветки кухонного гарнитура.",
  },
  {
    title: "Сборка электрощита в частном доме",
    tags: ["Электрощит", "Завьялово"],
    cost: "6 000 руб",
    duration: "4 часа",
    desc: "Сборка щита на 16 групп: автоматы, дифавтоматы, УЗО, маркировка кабелей. Ввод 380В.",
  },
];

const REVIEWS = [
  {
    name: "Иван С.",
    city: "Ижевск",
    stars: 5,
    date: "Март 2024",
    text: "Отличный мастер! Вызвал для замены проводки в квартире — приехал в день обращения, сделал всё аккуратно, убрал за собой. Цена соответствует заявленной, без накруток. Рекомендую!",
  },
  {
    name: "Алексей М.",
    city: "Завьялово",
    stars: 5,
    date: "Февраль 2024",
    text: "Помогли собрать новый щит в частном доме. Объяснили что и зачем, показали как работает каждый автомат. Теперь всё по уму, никаких проблем с электрикой.",
  },
  {
    name: "Мария К.",
    city: "Ижевск",
    stars: 5,
    date: "Январь 2024",
    text: "Обращалась для установки люстр и точечных светильников в новостройке. Быстро, красиво, все лампочки горят ровно. Очень довольна результатом, спасибо!",
  },
];

const FAQS = [
  {
    q: "Сколько стоит вызов электрика в Ижевске?",
    a: "Выезд мастера по Ижевску бесплатный при выполнении работ. Стоимость самих работ зависит от вида и объёма — минимальная цена от 300 рублей за установку розетки или выключателя. Точную стоимость назовём после осмотра.",
  },
  {
    q: "Как быстро приедет мастер?",
    a: "Работаем ежедневно с 8:00 до 22:00. В большинстве случаев мастер приезжает в день обращения, в удобное для вас время. При аварийных ситуациях стараемся приехать максимально быстро.",
  },
  {
    q: "Даёте ли гарантию на работы?",
    a: "Да, на все выполненные работы предоставляем гарантию. На замену проводки — до 2 лет, на монтаж освещения и установку розеток — 1 год. При возникновении проблем в гарантийный период устраняем их бесплатно.",
  },
  {
    q: "Нужно ли покупать материалы заранее?",
    a: "Нет, это необязательно. Мы можем помочь с подбором и закупкой качественных материалов по оптовым ценам. Если у вас уже есть материалы — работаем с ними. Всё обсуждается при выезде мастера.",
  },
];

const DISTRICTS = [
  "Индустриальный",
  "Октябрьский",
  "Ленинский",
  "Первомайский",
  "Устиновский",
  "Завьялово",
  "Металлург",
  "Буммаш",
  "Строитель",
  "Машиностроитель",
  "Старый аэропорт",
];

// ─── COMPONENT ───────────────────────────────────────────────────────────────

const Index: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);

  useSEO({
    title: "Электрик в Ижевске — вызов мастера от 300 руб, выезд в день обращения",
    description:
      "Электрик в Ижевске ☎ +7(912)465-80-50. Замена проводки, установка розеток, монтаж освещения. Выезд с 8:00 до 22:00. Работаем во всех районах Ижевска и Завьялово.",
    canonical: "/",
  });

  // ── shared style helpers ──────────────────────────────────────────────────

  const sectionPad: React.CSSProperties = { padding: "72px 0" };

  const container: React.CSSProperties = {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
  };

  const sectionLabel: React.CSSProperties = {
    ...font,
    display: "inline-block",
    backgroundColor: "#eff6ff",
    border: "1px solid rgba(21,101,192,0.2)",
    borderRadius: 20,
    padding: "4px 14px",
    color: "#1565C0",
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 12,
  };

  const h2Style: React.CSSProperties = {
    ...font,
    color: "#1e293b",
    fontSize: "clamp(24px, 4vw, 36px)",
    fontWeight: 800,
    lineHeight: 1.25,
    margin: "0 0 12px",
  };

  const subStyle: React.CSSProperties = {
    ...font,
    color: "#64748b",
    fontSize: 15,
    lineHeight: 1.7,
    margin: "0 0 48px",
  };

  // ── HERO ─────────────────────────────────────────────────────────────────

  const heroSection: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f8fafc",
    overflow: "hidden",
  };

  const heroBg: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage: `url(${HERO_IMAGE})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    opacity: 0.12,
  };

  const heroGradient: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    background:
      "linear-gradient(135deg, rgba(248,250,252,0.92) 0%, rgba(248,250,252,0.75) 50%, rgba(21,101,192,0.08) 100%)",
  };

  const gridDecor: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    backgroundImage:
      "linear-gradient(rgba(148,163,184,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.3) 1px, transparent 1px)",
    backgroundSize: "60px 60px",
    opacity: 0.05,
  };

  const heroContent: React.CSSProperties = {
    position: "relative",
    zIndex: 2,
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "80px 24px",
  };

  return (
    <div style={{ backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <Header />
      <main style={{ paddingTop: 64 }}>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 1 — HERO
        ══════════════════════════════════════════════════════════════ */}
        <section style={heroSection} aria-label="Главный баннер">
          <div style={heroBg} />
          <div style={heroGradient} />
          <div style={gridDecor} />

          <div style={heroContent}>
            <div
              className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 items-center"
            >
              {/* Left */}
              <div style={{ maxWidth: 680 }}>
                {/* Badge */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    backgroundColor: "rgba(21,101,192,0.08)",
                    border: "1px solid rgba(21,101,192,0.25)",
                    borderRadius: 20,
                    padding: "5px 14px",
                    marginBottom: 24,
                  }}
                >
                  <span
                    style={{
                      width: 8,
                      height: 8,
                      backgroundColor: "#22C55E",
                      borderRadius: "50%",
                      display: "inline-block",
                      boxShadow: "0 0 8px #22C55E",
                    }}
                  />
                  <span style={{ ...font, color: "#64748b", fontSize: 13, fontWeight: 500 }}>
                    Свободны — выезд сегодня
                  </span>
                </div>

                {/* H1 */}
                <h1
                  style={{
                    ...font,
                    color: "#1e293b",
                    fontSize: "clamp(32px, 5vw, 60px)",
                    fontWeight: 800,
                    lineHeight: 1.1,
                    margin: "0 0 8px",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Электрик
                  <br />
                  <span style={{ color: "#1565C0" }}>в Ижевске</span>
                </h1>
                <p
                  style={{
                    ...font,
                    color: "#374151",
                    fontSize: "clamp(16px, 2.5vw, 22px)",
                    fontWeight: 600,
                    margin: "0 0 16px",
                  }}
                >
                  Электромонтажные работы под ключ
                </p>
                <p
                  style={{
                    ...font,
                    color: "#64748b",
                    fontSize: 15,
                    lineHeight: 1.7,
                    margin: "0 0 36px",
                    maxWidth: 520,
                  }}
                >
                  Выезд мастеров с 8:00 до 22:00 · Все районы Ижевска и Завьялово
                </p>

                {/* CTA buttons */}
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
                  <a
                    href="tel:+79124658050"
                    style={{
                      ...font,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "#1565C0",
                      color: "#ffffff",
                      fontSize: 15,
                      fontWeight: 700,
                      padding: "14px 28px",
                      borderRadius: 10,
                      textDecoration: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1e40af";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0";
                    }}
                  >
                    <Icon name="Phone" size={17} />
                    Позвонить
                  </a>
                  <a
                    href="https://t.me/elektrik_izh"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      ...font,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      color: "#374151",
                      fontSize: 15,
                      fontWeight: 600,
                      padding: "14px 28px",
                      borderRadius: 10,
                      textDecoration: "none",
                      border: "1px solid #e2e8f0",
                      cursor: "pointer",
                      transition: "border-color 0.2s, color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1565C0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                      (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                    }}
                  >
                    <Icon name="Send" size={17} />
                    Написать в Telegram
                  </a>
                </div>

                {/* Trust row */}
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  {[
                    { icon: "Award", text: "Опыт 10+ лет" },
                    { icon: "Clock", text: "Выезд в день обращения" },
                    { icon: "ShieldCheck", text: "Гарантия на работы" },
                  ].map((item) => (
                    <div
                      key={item.text}
                      style={{ display: "flex", alignItems: "center", gap: 8 }}
                    >
                      <Icon name={item.icon} size={16} color="#1565C0" />
                      <span style={{ ...font, color: "#64748b", fontSize: 13, fontWeight: 500 }}>
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right — stats */}
              <div
                className="hidden lg:flex"
                style={{ flexDirection: "column", gap: 12, minWidth: 200 }}
              >
                {[
                  { value: "500+", label: "Объектов сдано" },
                  { value: "10+", label: "Лет опыта" },
                  { value: "100%", label: "Гарантия качества" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    style={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      border: "1px solid #e2e8f0",
                      borderRadius: 12,
                      padding: "20px 24px",
                      backdropFilter: "blur(8px)",
                      textAlign: "center",
                    }}
                  >
                    <p
                      style={{
                        ...font,
                        color: "#1565C0",
                        fontSize: 34,
                        fontWeight: 800,
                        margin: 0,
                        lineHeight: 1,
                      }}
                    >
                      {stat.value}
                    </p>
                    <p
                      style={{
                        ...font,
                        color: "#64748b",
                        fontSize: 12,
                        fontWeight: 500,
                        margin: "6px 0 0",
                      }}
                    >
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 2 — УСЛУГИ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f1f5f9" }} aria-label="Услуги">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={sectionLabel}>Чем занимаемся</span>
              <h2 style={h2Style}>Услуги электрика в Ижевске</h2>
              <p style={{ ...subStyle, maxWidth: 540, margin: "0 auto 0" }}>
                Выполняем весь спектр электромонтажных работ в квартирах, домах и коммерческих
                помещениях. Работаем быстро и по фиксированным ценам.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {SERVICES.map((svc, i) => {
                const hovered = hoveredService === i;
                return (
                  <Link
                    key={svc.href}
                    to={svc.href}
                    style={{
                      ...font,
                      display: "flex",
                      flexDirection: "column",
                      backgroundColor: "#ffffff",
                      border: hovered ? "1px solid #1565C0" : "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: "24px 20px",
                      textDecoration: "none",
                      transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
                      transform: hovered ? "scale(1.02)" : "scale(1)",
                      boxShadow: hovered
                        ? "0 8px 32px rgba(21,101,192,0.18)"
                        : "0 2px 12px rgba(0,0,0,0.06)",
                      cursor: "pointer",
                    }}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div
                      style={{
                        width: 48,
                        height: 48,
                        backgroundColor: hovered ? "#1565C0" : "#eff6ff",
                        border: "1px solid #e2e8f0",
                        borderRadius: 12,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: 16,
                        transition: "background 0.25s",
                        flexShrink: 0,
                      }}
                    >
                      <Icon name={svc.icon} size={22} color={hovered ? "#ffffff" : "#1565C0"} />
                    </div>
                    <p
                      style={{
                        ...font,
                        color: "#1e293b",
                        fontSize: 15,
                        fontWeight: 700,
                        margin: "0 0 8px",
                      }}
                    >
                      {svc.title}
                    </p>
                    <p
                      style={{
                        ...font,
                        color: "#64748b",
                        fontSize: 13,
                        lineHeight: 1.6,
                        flex: 1,
                        margin: 0,
                      }}
                    >
                      {svc.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginTop: 16,
                        paddingTop: 14,
                        borderTop: "1px solid #e2e8f0",
                      }}
                    >
                      <span style={{ ...font, color: "#1565C0", fontSize: 13, fontWeight: 700 }}>
                        от {svc.price}
                      </span>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 32,
                          height: 32,
                          backgroundColor: hovered ? "#1565C0" : "#e2e8f0",
                          borderRadius: 8,
                          transition: "background 0.25s, transform 0.25s",
                          transform: hovered ? "translateX(3px)" : "translateX(0)",
                        }}
                      >
                        <Icon name="ArrowRight" size={16} color="#ffffff" />
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link
                to="/services/"
                style={{
                  ...font,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#1565C0",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "10px 20px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                }}
              >
                Все услуги
                <Icon name="ArrowRight" size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 3 — ПРЕИМУЩЕСТВА
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f8fafc" }} aria-label="Преимущества">
          <div style={container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              {/* Left */}
              <div>
                <span style={sectionLabel}>Наши плюсы</span>
                <h2 style={{ ...h2Style, marginBottom: 8 }}>Почему выбирают нас</h2>
                <p style={{ ...subStyle, marginBottom: 36 }}>
                  За 10 лет работы мы выработали подход, при котором клиенты остаются довольны и
                  возвращаются снова.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
                  {ADVANTAGES.map((adv) => (
                    <li key={adv} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                      <div
                        style={{
                          width: 24,
                          height: 24,
                          backgroundColor: "rgba(21,101,192,0.08)",
                          border: "1px solid rgba(21,101,192,0.25)",
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: 1,
                        }}
                      >
                        <Icon name="Check" size={13} color="#1565C0" />
                      </div>
                      <span style={{ ...font, color: "#374151", fontSize: 14, lineHeight: 1.5 }}>
                        {adv}
                      </span>
                    </li>
                  ))}
                </ul>

                <div style={{ marginTop: 36 }}>
                  <a
                    href="tel:+79124658050"
                    style={{
                      ...font,
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 8,
                      backgroundColor: "#1565C0",
                      color: "#ffffff",
                      fontSize: 14,
                      fontWeight: 700,
                      padding: "12px 24px",
                      borderRadius: 10,
                      textDecoration: "none",
                      transition: "background 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1e40af";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0";
                    }}
                  >
                    <Icon name="Phone" size={16} />
                    Позвонить сейчас
                  </a>
                </div>
              </div>

              {/* Right — photo */}
              <div
                style={{ position: "relative", borderRadius: 16, overflow: "hidden", height: 480 }}
                className="hidden lg:block"
              >
                <img
                  src={WORK_IMAGE}
                  alt="Электрик за работой в Ижевске"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(248,250,252,0.9) 0%, transparent 50%)",
                  }}
                />
                {/* Mini stats */}
                <div
                  style={{
                    position: "absolute",
                    bottom: 24,
                    left: 0,
                    right: 0,
                    display: "flex",
                    justifyContent: "center",
                    gap: 12,
                    padding: "0 20px",
                  }}
                >
                  {[
                    { val: "500+", lbl: "Объектов" },
                    { val: "10+", lbl: "Лет опыта" },
                    { val: "2 года", lbl: "Гарантия" },
                  ].map((s) => (
                    <div
                      key={s.lbl}
                      style={{
                        backgroundColor: "rgba(255,255,255,0.9)",
                        border: "1px solid #e2e8f0",
                        borderRadius: 10,
                        padding: "12px 16px",
                        textAlign: "center",
                        backdropFilter: "blur(8px)",
                        flex: 1,
                      }}
                    >
                      <p style={{ ...font, color: "#1565C0", fontSize: 20, fontWeight: 800, margin: 0 }}>
                        {s.val}
                      </p>
                      <p style={{ ...font, color: "#64748b", fontSize: 11, margin: "4px 0 0" }}>
                        {s.lbl}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 4 — ЦЕНЫ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f1f5f9" }} aria-label="Цены">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={sectionLabel}>Прозрачно</span>
              <h2 style={h2Style}>Цены на услуги электрика в Ижевске</h2>
              <p style={{ ...subStyle, maxWidth: 480, margin: "0 auto 0" }}>
                Фиксированные расценки — никаких скрытых доплат. Точная стоимость после выезда и осмотра.
              </p>
            </div>

            <div
              style={{
                maxWidth: 720,
                margin: "0 auto",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                overflow: "hidden",
              }}
            >
              {PRICES.map((row, i) => (
                <div
                  key={row.name}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "16px 24px",
                    backgroundColor: i % 2 === 0 ? "#ffffff" : "#f8fafc",
                    borderBottom: i < PRICES.length - 1 ? "1px solid #e2e8f0" : "none",
                    gap: 16,
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <Icon name="ChevronRight" size={14} color="#1565C0" style={{ flexShrink: 0 }} />
                    <span style={{ ...font, color: "#374151", fontSize: 14, fontWeight: 500 }}>
                      {row.name}
                    </span>
                  </div>
                  <span
                    style={{
                      ...font,
                      color: "#1565C0",
                      fontSize: 14,
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                    }}
                  >
                    {row.price}
                  </span>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 32 }}>
              <Link
                to="/prices/"
                style={{
                  ...font,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#1565C0",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "12px 24px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1e40af";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0";
                }}
              >
                <Icon name="FileText" size={16} />
                Полный прайс-лист
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 5 — КАК МЫ РАБОТАЕМ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f8fafc" }} aria-label="Как мы работаем">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={sectionLabel}>Процесс</span>
              <h2 style={h2Style}>Как мы работаем</h2>
              <p style={{ ...subStyle, maxWidth: 480, margin: "0 auto 0" }}>
                Простой и понятный процесс — от звонка до сдачи объекта с гарантией.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {STEPS.map((step, i) => (
                <div
                  key={step.num}
                  style={{
                    position: "relative",
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 14,
                    padding: "24px 20px",
                  }}
                >
                  {/* Connector line */}
                  {i < STEPS.length - 1 && (
                    <div
                      className="hidden lg:block"
                      style={{
                        position: "absolute",
                        top: 36,
                        right: -10,
                        width: 20,
                        height: 1,
                        backgroundColor: "#e2e8f0",
                        zIndex: 1,
                      }}
                    />
                  )}
                  <div
                    style={{
                      backgroundColor: "rgba(21,101,192,0.08)",
                      border: "1px solid rgba(21,101,192,0.25)",
                      borderRadius: 8,
                      display: "inline-block",
                      padding: "4px 10px",
                      marginBottom: 14,
                    }}
                  >
                    <span
                      style={{
                        ...font,
                        color: "#1565C0",
                        fontSize: 13,
                        fontWeight: 800,
                        letterSpacing: "0.06em",
                      }}
                    >
                      {step.num}
                    </span>
                  </div>
                  <p style={{ ...font, color: "#1e293b", fontSize: 14, fontWeight: 700, margin: "0 0 8px" }}>
                    {step.title}
                  </p>
                  <p style={{ ...font, color: "#64748b", fontSize: 12, lineHeight: 1.6, margin: 0 }}>
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 6 — КЕЙСЫ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f1f5f9" }} aria-label="Выполненные работы">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={sectionLabel}>Портфолио</span>
              <h2 style={h2Style}>Выполненные работы в Ижевске</h2>
              <p style={{ ...subStyle, maxWidth: 500, margin: "0 auto 0" }}>
                Реальные проекты с реальными ценами — посмотрите, что мы уже сделали для клиентов в Ижевске.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {CASES.map((c, i) => {
                const hovered = hoveredCase === i;
                return (
                  <div
                    key={c.title}
                    style={{
                      backgroundColor: "#ffffff",
                      border: hovered ? "1px solid #1565C0" : "1px solid #e2e8f0",
                      borderRadius: 14,
                      padding: "24px",
                      transition: "border-color 0.2s, box-shadow 0.2s",
                      boxShadow: hovered ? "0 8px 32px rgba(21,101,192,0.12)" : "none",
                      cursor: "default",
                    }}
                    onMouseEnter={() => setHoveredCase(i)}
                    onMouseLeave={() => setHoveredCase(null)}
                  >
                    {/* Tags */}
                    <div style={{ display: "flex", gap: 6, marginBottom: 14, flexWrap: "wrap" }}>
                      {c.tags.map((tag) => (
                        <span
                          key={tag}
                          style={{
                            ...font,
                            backgroundColor: "rgba(21,101,192,0.08)",
                            border: "1px solid rgba(21,101,192,0.25)",
                            borderRadius: 12,
                            padding: "2px 10px",
                            color: "#1565C0",
                            fontSize: 11,
                            fontWeight: 600,
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p
                      style={{
                        ...font,
                        color: "#1e293b",
                        fontSize: 15,
                        fontWeight: 700,
                        margin: "0 0 10px",
                        lineHeight: 1.4,
                      }}
                    >
                      {c.title}
                    </p>
                    <p
                      style={{
                        ...font,
                        color: "#64748b",
                        fontSize: 13,
                        lineHeight: 1.6,
                        margin: "0 0 20px",
                      }}
                    >
                      {c.desc}
                    </p>
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        paddingTop: 16,
                        borderTop: "1px solid #e2e8f0",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Icon name="Banknote" size={14} color="#1565C0" />
                        <span style={{ ...font, color: "#64748b", fontSize: 13, fontWeight: 600 }}>
                          {c.cost}
                        </span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
                        <Icon name="Clock" size={14} color="#1565C0" />
                        <span style={{ ...font, color: "#64748b", fontSize: 13, fontWeight: 600 }}>
                          {c.duration}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link
                to="/portfolio/"
                style={{
                  ...font,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#1565C0",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "10px 20px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                }}
              >
                Все кейсы
                <Icon name="ArrowRight" size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 7 — ОТЗЫВЫ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f8fafc" }} aria-label="Отзывы клиентов">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={sectionLabel}>Мнения клиентов</span>
              <h2 style={h2Style}>Отзывы клиентов</h2>
              <p style={{ ...subStyle, maxWidth: 460, margin: "0 auto 0" }}>
                Работаем так, чтобы клиенты оставляли только положительные отзывы и обращались снова.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {REVIEWS.map((rev) => (
                <div
                  key={rev.name}
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 14,
                    padding: "24px",
                  }}
                >
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 3, marginBottom: 14 }}>
                    {Array.from({ length: rev.stars }).map((_, si) => (
                      <Icon key={si} name="Star" size={15} color="#F59E0B" />
                    ))}
                  </div>
                  <p
                    style={{
                      ...font,
                      color: "#374151",
                      fontSize: 13,
                      lineHeight: 1.7,
                      margin: "0 0 20px",
                      fontStyle: "italic",
                    }}
                  >
                    "{rev.text}"
                  </p>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      paddingTop: 16,
                      borderTop: "1px solid #e2e8f0",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          backgroundColor: "#1565C0",
                          borderRadius: "50%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Icon name="User" size={16} color="#ffffff" />
                      </div>
                      <div>
                        <p style={{ ...font, color: "#1e293b", fontSize: 13, fontWeight: 700, margin: 0 }}>
                          {rev.name}
                        </p>
                        <p style={{ ...font, color: "#64748b", fontSize: 11, margin: "2px 0 0" }}>
                          {rev.city}
                        </p>
                      </div>
                    </div>
                    <span style={{ ...font, color: "#64748b", fontSize: 11 }}>{rev.date}</span>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", marginTop: 36 }}>
              <Link
                to="/reviews/"
                style={{
                  ...font,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  color: "#1565C0",
                  fontSize: 14,
                  fontWeight: 600,
                  textDecoration: "none",
                  border: "1px solid #e2e8f0",
                  borderRadius: 8,
                  padding: "10px 20px",
                  transition: "border-color 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                }}
              >
                Все отзывы
                <Icon name="ArrowRight" size={15} />
              </Link>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 8 — FAQ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f1f5f9" }} aria-label="Частые вопросы">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <span style={sectionLabel}>FAQ</span>
              <h2 style={h2Style}>Часто задаваемые вопросы</h2>
              <p style={{ ...subStyle, maxWidth: 460, margin: "0 auto 0" }}>
                Отвечаем на самые популярные вопросы об услугах электрика в Ижевске.
              </p>
            </div>

            <div
              style={{ maxWidth: 760, margin: "0 auto", display: "flex", flexDirection: "column", gap: 8 }}
            >
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "#ffffff",
                      border: isOpen ? "1px solid #1565C0" : "1px solid #e2e8f0",
                      borderRadius: 12,
                      overflow: "hidden",
                      transition: "border-color 0.2s",
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      style={{
                        ...font,
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: 16,
                        padding: "18px 20px",
                        backgroundColor: "transparent",
                        border: "none",
                        cursor: "pointer",
                        textAlign: "left",
                      }}
                    >
                      <span
                        style={{
                          ...font,
                          color: isOpen ? "#1565C0" : "#1e293b",
                          fontSize: 15,
                          fontWeight: 600,
                          lineHeight: 1.4,
                          transition: "color 0.2s",
                        }}
                      >
                        {faq.q}
                      </span>
                      <div
                        style={{
                          width: 28,
                          height: 28,
                          backgroundColor: isOpen ? "#1565C0" : "#e2e8f0",
                          borderRadius: 6,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "background 0.2s",
                        }}
                      >
                        <Icon
                          name={isOpen ? "Minus" : "Plus"}
                          size={14}
                          color="#ffffff"
                        />
                      </div>
                    </button>
                    {isOpen && (
                      <div
                        style={{
                          padding: "0 20px 18px",
                          borderTop: "1px solid #e2e8f0",
                        }}
                      >
                        <p
                          style={{
                            ...font,
                            color: "#64748b",
                            fontSize: 14,
                            lineHeight: 1.7,
                            margin: "14px 0 0",
                          }}
                        >
                          {faq.a}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 9 — РАЙОНЫ
        ══════════════════════════════════════════════════════════════ */}
        <section style={{ ...sectionPad, backgroundColor: "#f8fafc" }} aria-label="Районы выезда">
          <div style={container}>
            <div style={{ textAlign: "center", marginBottom: 40 }}>
              <span style={sectionLabel}>География</span>
              <h2 style={h2Style}>Выезжаем по всему Ижевску</h2>
              <p style={{ ...subStyle, maxWidth: 520, margin: "0 auto 0" }}>
                Работаем во всех районах Ижевска, а также в посёлке Завьялово. Стоимость выезда включена в
                стоимость работ.
              </p>
            </div>

            <div
              style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}
            >
              {DISTRICTS.map((d) => (
                <span
                  key={d}
                  style={{
                    ...font,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 20,
                    padding: "8px 16px",
                    color: "#374151",
                    fontSize: 13,
                    fontWeight: 500,
                    transition: "border-color 0.2s, color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = "#1565C0";
                    (e.currentTarget as HTMLSpanElement).style.color = "#1565C0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLSpanElement).style.borderColor = "#e2e8f0";
                    (e.currentTarget as HTMLSpanElement).style.color = "#374151";
                  }}
                >
                  <Icon name="MapPin" size={13} color="#1565C0" />
                  {d}
                </span>
              ))}
            </div>

            <div
              style={{
                marginTop: 40,
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 14,
                padding: "24px 28px",
                display: "flex",
                alignItems: "center",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <div
                style={{
                  width: 44,
                  height: 44,
                  backgroundColor: "rgba(21,101,192,0.08)",
                  border: "1px solid rgba(21,101,192,0.25)",
                  borderRadius: 10,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name="Car" size={20} color="#1565C0" />
              </div>
              <div style={{ flex: 1, minWidth: 200 }}>
                <p style={{ ...font, color: "#1e293b", fontSize: 15, fontWeight: 700, margin: "0 0 4px" }}>
                  Бесплатный выезд при выполнении работ
                </p>
                <p style={{ ...font, color: "#64748b", fontSize: 13, margin: 0 }}>
                  Стоимость выезда включена в стоимость работ по всему Ижевску и Завьялово
                </p>
              </div>
              <a
                href="tel:+79124658050"
                style={{
                  ...font,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#1565C0",
                  color: "#ffffff",
                  fontSize: 14,
                  fontWeight: 700,
                  padding: "11px 20px",
                  borderRadius: 8,
                  textDecoration: "none",
                  flexShrink: 0,
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1e40af";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0";
                }}
              >
                <Icon name="Phone" size={15} />
                Вызвать мастера
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 10 — SEO-ТЕКСТ
        ══════════════════════════════════════════════════════════════ */}
        <section
          style={{ ...sectionPad, backgroundColor: "#f1f5f9" }}
          aria-label="Об услугах электрика"
        >
          <div style={{ ...container, maxWidth: 860 }}>
            <span style={sectionLabel}>Полезно знать</span>
            <h2 style={{ ...h2Style, marginBottom: 24 }}>Услуги электрика в Ижевске</h2>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                "Наша бригада профессиональных электриков работает в Ижевске и Завьялово более 10 лет. За это время мы выполнили свыше 500 объектов: от замены одной розетки до полного электромонтажа в частном доме под ключ. Мы специализируемся на жилых квартирах, частных домах, коттеджах и небольших коммерческих объектах. Каждый наш мастер имеет профильное образование, допуск к работам и практический стаж от 10 лет.",
                "Чаще всего к нам обращаются жители Ижевска для замены старой алюминиевой проводки на медную, установки розеток и выключателей, монтажа освещения в новостройках, а также при аварийных ситуациях — когда выбивает автоматы, не работает свет или искрит розетка. Мы приезжаем в день обращения, оцениваем фронт работ, называем точную стоимость и приступаем сразу после вашего согласия. Работаем аккуратно, без лишнего мусора и с уважением к вашей квартире.",
                "Цены на услуги электрика в Ижевске у нас фиксированные и понятные — вы заранее знаете, сколько будет стоить каждая работа. На все выполненные работы выдаём гарантию: на замену проводки — до 2 лет, на прочие электромонтажные работы — 1 год. Если в гарантийный период возникнут проблемы — устраним бесплатно. Позвоните нам по номеру +7 (912) 465-80-50 или напишите в Telegram @elektrik_izh — и мы организуем выезд мастера в удобное для вас время.",
              ].map((text, i) => (
                <p
                  key={i}
                  style={{
                    ...font,
                    color: "#64748b",
                    fontSize: 14,
                    lineHeight: 1.85,
                    margin: 0,
                  }}
                >
                  {text}
                </p>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════════
            БЛОК 11 — ФИНАЛЬНЫЙ CTA
        ══════════════════════════════════════════════════════════════ */}
        <section
          style={{
            ...sectionPad,
            backgroundColor: "#f8fafc",
            borderTop: "1px solid #e2e8f0",
          }}
          aria-label="Вызвать электрика"
        >
          <div style={container}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
              {/* Left */}
              <div>
                <span style={sectionLabel}>Свяжитесь с нами</span>
                <h2 style={{ ...h2Style, marginBottom: 8 }}>
                  Вызвать электрика
                  <br />
                  <span style={{ color: "#1565C0" }}>в Ижевске</span>
                </h2>
                <p style={{ ...subStyle, marginBottom: 36 }}>
                  Ответим на звонок с 8:00 до 22:00. Мастер приедет в день обращения — без ожидания
                  и лишних вопросов.
                </p>

                <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 36 }}>
                  {/* Phone */}
                  <a
                    href="tel:+79124658050"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 12,
                      padding: "16px 20px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        backgroundColor: "#1565C0",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="Phone" size={20} color="#ffffff" />
                    </div>
                    <div>
                      <p style={{ ...font, color: "#64748b", fontSize: 11, fontWeight: 600, margin: "0 0 2px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Телефон
                      </p>
                      <p style={{ ...font, color: "#1e293b", fontSize: 18, fontWeight: 800, margin: 0 }}>
                        +7 (912) 465-80-50
                      </p>
                    </div>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/elektrik_izh"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      backgroundColor: "#ffffff",
                      border: "1px solid #e2e8f0",
                      borderRadius: 12,
                      padding: "16px 20px",
                      textDecoration: "none",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
                    }}
                  >
                    <div
                      style={{
                        width: 44,
                        height: 44,
                        backgroundColor: "#dbeafe",
                        border: "1px solid rgba(21,101,192,0.25)",
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon name="Send" size={20} color="#1565C0" />
                    </div>
                    <div>
                      <p style={{ ...font, color: "#64748b", fontSize: 11, fontWeight: 600, margin: "0 0 2px", letterSpacing: "0.06em", textTransform: "uppercase" }}>
                        Telegram
                      </p>
                      <p style={{ ...font, color: "#1565C0", fontSize: 18, fontWeight: 800, margin: 0 }}>
                        @elektrik_izh
                      </p>
                    </div>
                  </a>
                </div>

                {/* Working hours */}
                <div
                  style={{
                    backgroundColor: "#ffffff",
                    border: "1px solid #e2e8f0",
                    borderRadius: 12,
                    padding: "16px 20px",
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                  }}
                >
                  <Icon name="Clock" size={18} color="#1565C0" style={{ flexShrink: 0 }} />
                  <div>
                    <p style={{ ...font, color: "#1e293b", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>
                      Режим работы: ежедневно 8:00 – 22:00
                    </p>
                    <p style={{ ...font, color: "#64748b", fontSize: 12, margin: 0 }}>
                      Без выходных · Ижевск и Завьялово
                    </p>
                  </div>
                </div>
              </div>

              {/* Right — ContactForm */}
              <div>
                <ContactForm
                  title="Оставить заявку"
                  subtitle="Перезвоним в течение 30 минут"
                />
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Index;
