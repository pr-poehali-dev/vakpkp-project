import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useSEO } from "@/hooks/useSEO";
import ContactForm from "@/components/common/ContactForm";
import Breadcrumbs from "@/components/common/Breadcrumbs";
import Icon from "@/components/ui/icon";

const font: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

const BREADCRUMBS = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services/" },
  { label: "Электрик в Ижевске" },
];

const SITUATIONS = [
  "Нужен электрик на дом — небольшая или большая задача",
  "Маленький ремонт: одна розетка, замена выключателя",
  "Большой проект: полная электрика в квартире или доме",
  "Аварийная ситуация — запах горелого, нет света",
  "Консультация специалиста по электрике перед ремонтом",
  "Диагностика — почему выбивает автомат или мигает свет",
];

const COMPETENCES = [
  { icon: "Zap", title: "Замена проводки", desc: "Полная замена алюминия на медь в квартирах и домах Ижевска" },
  { icon: "PlugZap", title: "Розетки и выключатели", desc: "Установка, замена и перенос точек в любом месте" },
  { icon: "Lightbulb", title: "Освещение", desc: "Люстры, точечные светильники, LED-ленты, уличный свет" },
  { icon: "Server", title: "Электрощиты", desc: "Сборка, замена, модернизация щитов с автоматами и УЗО" },
  { icon: "Wrench", title: "Ремонт электрики", desc: "Поиск и устранение неисправностей, диагностика" },
  { icon: "AlertTriangle", title: "Аварийный выезд", desc: "Срочный выезд при авариях с 8:00 до 22:00 ежедневно" },
];

const PRICES = [
  { name: "Установка розетки / выключателя", price: "от 300 руб" },
  { name: "Перенос розетки", price: "от 500 руб" },
  { name: "Установка люстры", price: "от 600 руб" },
  { name: "Замена проводки (1 точка)", price: "от 1 500 руб" },
  { name: "Сборка электрощита", price: "от 3 000 руб" },
  { name: "Аварийный выезд", price: "от 1 000 руб" },
];

const ALL_SERVICES = [
  { label: "Электрика в квартире", href: "/services/elektrika-v-kvartire-izhevsk/", icon: "Home" },
  { label: "Электрика в новостройке", href: "/services/elektrika-v-novostrojke-izhevsk/", icon: "Building2" },
  { label: "Электрика в доме", href: "/services/elektrika-v-dome-izhevsk/", icon: "House" },
  { label: "Электрика под ключ", href: "/services/elektrika-pod-klyuch-izhevsk/", icon: "KeyRound" },
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/", icon: "Zap" },
  { label: "Установка розеток", href: "/services/ustanovka-rozetok-izhevsk/", icon: "PlugZap" },
  { label: "Перенос розеток", href: "/services/perenos-rozetok-izhevsk/", icon: "MoveRight" },
  { label: "Установка выключателей", href: "/services/ustanovka-vyklyuchatelej-izhevsk/", icon: "ToggleRight" },
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/", icon: "Lightbulb" },
  { label: "Установка люстры", href: "/services/ustanovka-lyustry-izhevsk/", icon: "Lamp" },
  { label: "Монтаж светильников", href: "/services/montazh-svetilnikov-izhevsk/", icon: "Lamp" },
  { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/", icon: "Server" },
  { label: "Замена автоматов", href: "/services/zamena-avtomatov-izhevsk/", icon: "Cpu" },
  { label: "Установка УЗО", href: "/services/ustanovka-uzo-izhevsk/", icon: "ShieldCheck" },
  { label: "Ремонт электрики", href: "/services/remont-elektriki-izhevsk/", icon: "Wrench" },
  { label: "Аварийный электрик", href: "/services/avarijnyj-elektrik-izhevsk/", icon: "AlertTriangle" },
  { label: "Монтаж электропроводки", href: "/services/montazh-elektroprovodki-izhevsk/", icon: "Cable" },
  { label: "Подключение варочной панели", href: "/services/podklyuchenie-varochnoj-paneli-izhevsk/", icon: "Flame" },
];

const STEPS = [
  { num: "01", title: "Позвоните", desc: "Описываете задачу по телефону или в Telegram." },
  { num: "02", title: "Договоримся", desc: "Согласовываем время выезда, удобное для вас." },
  { num: "03", title: "Приедем", desc: "Мастер приезжает в день обращения." },
  { num: "04", title: "Сделаем", desc: "Выполняем работу быстро и аккуратно." },
  { num: "05", title: "Гарантия", desc: "Сдаём работу и даём гарантию на результат." },
];

const FAQS = [
  {
    q: "Откуда вы работаете? Куда выезжаете?",
    a: "Работаем по всему Ижевску — во всех районах: Индустриальный, Октябрьский, Ленинский, Первомайский, Устиновский и другие. Также выезжаем в Завьялово и пригородные посёлки в радиусе 30 км. Стоимость выезда включена в стоимость работ.",
  },
  {
    q: "Можно ли вызвать электрика в выходные?",
    a: "Да, работаем ежедневно с 8:00 до 22:00 без выходных и праздников. Суббота и воскресенье — обычные рабочие дни. При аварийных ситуациях стараемся приехать максимально быстро — в течение 1–3 часов.",
  },
  {
    q: "Как быстро приедет мастер?",
    a: "В большинстве случаев мастер приезжает в день обращения в согласованное время. При аварийных вызовах — в течение 1–3 часов. Если у вас несрочная задача — планируем выезд на удобное вам время, в том числе на следующий день или выходные.",
  },
];

const DISTRICTS = [
  "Индустриальный", "Октябрьский", "Ленинский", "Первомайский", "Устиновский",
  "Завьялово", "Металлург", "Буммаш", "Строитель", "Машиностроитель",
];

const ElektrikIzhevsk: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Электрик в Ижевске — вызов мастера на дом, работаем с 8:00 до 22:00",
    description:
      "Электрик в Ижевске ☎ +7(912)465-80-50. Вызов мастера на дом. Замена проводки, розетки, освещение, ремонт. Работаем во всех районах Ижевска.",
    canonical: "/services/elektrik-izhevsk/",
  });

  const container: React.CSSProperties = { maxWidth: 1280, margin: "0 auto", padding: "0 24px" };
  const sectionPad: React.CSSProperties = { padding: "64px 0" };
  const h2: React.CSSProperties = { ...font, color: "#ffffff", fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 800, margin: "0 0 12px" };
  const sectionLabel: React.CSSProperties = { ...font, display: "inline-block", backgroundColor: "#0F172A", border: "1px solid #1E2940", borderRadius: 20, padding: "4px 14px", color: "#1E88E5", fontSize: 12, fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase" as const, marginBottom: 12 };

  return (
    <div style={{ backgroundColor: "#0A0E1A", minHeight: "100vh" }}>
      <Header />
      <main style={{ paddingTop: 64, ...font }}>

        <div style={{ backgroundColor: "#060912", borderBottom: "1px solid #1E2940" }}>
          <div style={container}><Breadcrumbs items={BREADCRUMBS} /></div>
        </div>

        {/* Hero */}
        <section style={{ background: "linear-gradient(135deg, #0A0E1A 0%, #0F1829 60%, #111827 100%)", padding: "56px 0", borderBottom: "1px solid #1E2940" }}>
          <div style={container}>
            <div style={{ display: "grid", gap: 48, alignItems: "center" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <div style={{ display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "rgba(21,101,192,0.15)", border: "1px solid rgba(30,136,229,0.3)", borderRadius: 20, padding: "4px 14px", marginBottom: 20 }}>
                  <span style={{ width: 8, height: 8, backgroundColor: "#22C55E", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #22C55E" }} />
                  <span style={{ ...font, color: "#1E88E5", fontSize: 12, fontWeight: 600 }}>Свободны — приедем сегодня</span>
                </div>
                <h1 style={{ ...font, color: "#ffffff", fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                  Электрик<br /><span style={{ color: "#1E88E5" }}>в Ижевске</span>
                </h1>
                <p style={{ ...font, color: "#64748B", fontSize: 15, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 520 }}>
                  Профессиональная бригада электриков с опытом 10+ лет. Берёмся за любые задачи — от одной розетки до полного монтажа электрики в доме. Работаем ежедневно с 8:00 до 22:00.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 32 }}>
                  <a href="tel:+79124658050" style={{ ...font, display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "#1565C0", color: "#ffffff", fontSize: 14, fontWeight: 700, padding: "12px 24px", borderRadius: 10, textDecoration: "none", transition: "background 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E88E5"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0"; }}>
                    <Icon name="Phone" size={16} />Позвонить
                  </a>
                  <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" style={{ ...font, display: "inline-flex", alignItems: "center", gap: 8, backgroundColor: "transparent", color: "#CBD5E1", fontSize: 14, fontWeight: 600, padding: "12px 24px", borderRadius: 10, textDecoration: "none", border: "1px solid #1E2940", transition: "border-color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E88E5"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E2940"; }}>
                    <Icon name="Send" size={16} />Telegram
                  </a>
                </div>
                <div style={{ display: "flex", gap: 20, flexWrap: "wrap" }}>
                  {[
                    { icon: "BadgeCheck", text: "Гарантия на все работы" },
                    { icon: "Calendar", text: "Без выходных, 8:00–22:00" },
                    { icon: "MapPin", text: "Весь Ижевск и Завьялово" },
                    { icon: "Award", text: "Опыт 10+ лет" },
                  ].map(b => (
                    <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon name={b.icon} size={15} color="#1E88E5" />
                      <span style={{ ...font, color: "#94A3B8", fontSize: 13, fontWeight: 500 }}>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 16, padding: "28px" }} className="hidden lg:block">
                <p style={{ ...font, color: "#64748B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Краткий прайс</p>
                {PRICES.map((p, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "10px 0", borderBottom: i < PRICES.length - 1 ? "1px solid #1E2940" : "none", gap: 12 }}>
                    <span style={{ ...font, color: "#CBD5E1", fontSize: 12 }}>{p.name}</span>
                    <span style={{ ...font, color: "#1E88E5", fontSize: 12, fontWeight: 700, whiteSpace: "nowrap" as const, flexShrink: 0 }}>{p.price}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #1E2940" }}>
                  <a href="tel:+79124658050" style={{ ...font, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: "#1565C0", color: "#ffffff", fontSize: 13, fontWeight: 700, padding: "11px", borderRadius: 8, textDecoration: "none" }}>
                    <Icon name="Phone" size={14} />Позвонить сейчас
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Компетенции бригады */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Наши компетенции</span>
            <h2 style={h2}>Что умеет наша бригада</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Мы не специализируемся на чём-то одном — мы делаем всё и делаем хорошо. Опыт 10+ лет в Ижевске.
            </p>
            <div style={{ display: "grid", gap: 16 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {COMPETENCES.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "20px" }}>
                  <div style={{ width: 40, height: 40, backgroundColor: "#0F172A", border: "1px solid #1E2940", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={item.icon} size={18} color="#1E88E5" />
                  </div>
                  <div>
                    <p style={{ ...font, color: "#ffffff", fontSize: 14, fontWeight: 700, margin: "0 0 4px" }}>{item.title}</p>
                    <p style={{ ...font, color: "#64748B", fontSize: 13, lineHeight: 1.5, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Все услуги */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Все услуги</span>
            <h2 style={h2}>Полный список услуг электрика</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Нажмите на нужную услугу, чтобы узнать подробности и цены.
            </p>
            <div style={{ display: "grid", gap: 8 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SERVICES.map((s) => (
                <Link key={s.href} to={s.href} style={{ ...font, display: "flex", alignItems: "center", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 10, padding: "14px 16px", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0"; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F172A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E2940"; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#111827"; }}>
                  <div style={{ width: 32, height: 32, backgroundColor: "#0F172A", border: "1px solid #1E2940", borderRadius: 7, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={s.icon} size={15} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 13, fontWeight: 500, flex: 1 }}>{s.label}</span>
                  <Icon name="ChevronRight" size={14} color="#475569" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ситуации */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Обращайтесь</span>
            <h2 style={h2}>По любому поводу</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Нет задачи слишком маленькой или слишком сложной. Мы берёмся за всё.
            </p>
            <div style={{ display: "grid", gap: 12 }} className="grid grid-cols-1 sm:grid-cols-2">
              {SITUATIONS.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ width: 28, height: 28, backgroundColor: "rgba(21,101,192,0.15)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Check" size={14} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 14, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Цены */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Прайс</span>
            <h2 style={h2}>Цены на услуги электрика в Ижевске</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Краткий прайс на самые частые работы. Полный список — на{" "}
              <Link to="/prices/" style={{ color: "#1E88E5", textDecoration: "none" }}>странице Цены</Link>.
            </p>
            <div style={{ maxWidth: 680, border: "1px solid #1E2940", borderRadius: 14, overflow: "hidden" }}>
              {PRICES.map((row, i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "15px 24px", backgroundColor: i % 2 === 0 ? "#111827" : "#0D1424", borderBottom: i < PRICES.length - 1 ? "1px solid #1E2940" : "none", gap: 16 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <Icon name="ChevronRight" size={13} color="#1565C0" style={{ flexShrink: 0 }} />
                    <span style={{ ...font, color: "#CBD5E1", fontSize: 14 }}>{row.name}</span>
                  </div>
                  <span style={{ ...font, color: "#1E88E5", fontSize: 14, fontWeight: 700, whiteSpace: "nowrap" as const, flexShrink: 0 }}>{row.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Этапы */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Как мы работаем</span>
            <h2 style={h2}>Процесс от звонка до гарантии</h2>
            <div style={{ display: "grid", gap: 16, marginTop: 32 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((step, i) => (
                <div key={i} style={{ backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "22px 18px" }}>
                  <div style={{ backgroundColor: "rgba(21,101,192,0.12)", border: "1px solid rgba(30,136,229,0.25)", borderRadius: 8, display: "inline-block", padding: "3px 10px", marginBottom: 12 }}>
                    <span style={{ ...font, color: "#1E88E5", fontSize: 12, fontWeight: 800 }}>{step.num}</span>
                  </div>
                  <p style={{ ...font, color: "#ffffff", fontSize: 14, fontWeight: 700, margin: "0 0 6px" }}>{step.title}</p>
                  <p style={{ ...font, color: "#64748B", fontSize: 12, lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Районы */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>География</span>
            <h2 style={h2}>Работаем во всех районах Ижевска</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 600 }}>
              Выезд по всему Ижевску и Завьялово. Стоимость выезда включена в стоимость работ.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {DISTRICTS.map((d) => (
                <span key={d} style={{ ...font, display: "inline-flex", alignItems: "center", gap: 6, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 20, padding: "7px 14px", color: "#CBD5E1", fontSize: 13, fontWeight: 500 }}>
                  <Icon name="MapPin" size={12} color="#1565C0" />
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>FAQ</span>
            <h2 style={h2}>Частые вопросы</h2>
            <div style={{ maxWidth: 760, marginTop: 32, display: "flex", flexDirection: "column", gap: 8 }}>
              {FAQS.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} style={{ backgroundColor: "#111827", border: isOpen ? "1px solid #1565C0" : "1px solid #1E2940", borderRadius: 12, overflow: "hidden", transition: "border-color 0.2s" }}>
                    <button onClick={() => setOpenFaq(isOpen ? null : i)} style={{ ...font, width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "18px 20px", backgroundColor: "transparent", border: "none", cursor: "pointer", textAlign: "left" as const }}>
                      <span style={{ ...font, color: isOpen ? "#1E88E5" : "#ffffff", fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{faq.q}</span>
                      <div style={{ width: 28, height: 28, backgroundColor: isOpen ? "#1565C0" : "#1E2940", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "background 0.2s" }}>
                        <Icon name={isOpen ? "Minus" : "Plus"} size={14} color="#ffffff" />
                      </div>
                    </button>
                    {isOpen && (
                      <div style={{ padding: "0 20px 18px", borderTop: "1px solid #1E2940" }}>
                        <p style={{ ...font, color: "#94A3B8", fontSize: 14, lineHeight: 1.7, margin: "14px 0 0" }}>{faq.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A", borderTop: "1px solid #1E2940" }}>
          <div style={container}>
            <div style={{ display: "grid", gap: 48, alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <span style={sectionLabel}>Заявка</span>
                <h2 style={h2}>Вызвать электрика в Ижевске</h2>
                <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 28px" }}>
                  Любая задача — от одной розетки до полного монтажа. Приедем сегодня. Звоните или пишите.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="tel:+79124658050" style={{ ...font, display: "flex", alignItems: "center", gap: 12, backgroundColor: "#1565C0", border: "1px solid #1565C0", borderRadius: 12, padding: "16px 20px", textDecoration: "none", transition: "background 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E88E5"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E88E5"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0"; (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0"; }}>
                    <div style={{ width: 44, height: 44, backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name="Phone" size={20} color="#ffffff" />
                    </div>
                    <div>
                      <p style={{ ...font, color: "rgba(255,255,255,0.7)", fontSize: 11, fontWeight: 600, margin: "0 0 2px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Телефон</p>
                      <p style={{ ...font, color: "#ffffff", fontSize: 20, fontWeight: 800, margin: 0 }}>+7 (912) 465-80-50</p>
                    </div>
                  </a>
                  <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" style={{ ...font, display: "flex", alignItems: "center", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "14px 18px", textDecoration: "none", transition: "border-color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E88E5"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E2940"; }}>
                    <div style={{ width: 40, height: 40, backgroundColor: "#0F2A4A", border: "1px solid rgba(30,136,229,0.3)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name="Send" size={18} color="#1E88E5" />
                    </div>
                    <div>
                      <p style={{ ...font, color: "#64748B", fontSize: 11, fontWeight: 600, margin: "0 0 2px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Telegram</p>
                      <p style={{ ...font, color: "#1E88E5", fontSize: 16, fontWeight: 800, margin: 0 }}>@elektrik_izh</p>
                    </div>
                  </a>
                  <div style={{ backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "14px 18px", display: "flex", alignItems: "center", gap: 12 }}>
                    <Icon name="Clock" size={18} color="#1E88E5" style={{ flexShrink: 0 }} />
                    <div>
                      <p style={{ ...font, color: "#ffffff", fontSize: 14, fontWeight: 600, margin: "0 0 2px" }}>Режим работы: 8:00 – 22:00</p>
                      <p style={{ ...font, color: "#64748B", fontSize: 12, margin: 0 }}>Ежедневно, без выходных · Весь Ижевск</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm title="Вызвать электрика в Ижевске" subtitle="Перезвоним в течение 30 минут" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ElektrikIzhevsk;
