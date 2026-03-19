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
  { label: "Электромонтажные работы" },
];

const SITUATIONS = [
  "Ремонт в квартире или доме — нужна новая электросеть",
  "Новостройка с черновой отделкой — монтаж с нуля",
  "Частный дом — полная электрификация от ввода",
  "Аварийная ситуация — срочно нужен электрик",
  "Расширение сети — добавить розетки, группы, линии",
  "Подключение бытовой техники — варочная, стиралка, кондиционер",
];

const INCLUDED = [
  { icon: "Zap", text: "Замена и прокладка электрической проводки" },
  { icon: "PlugZap", text: "Монтаж розеток и выключателей" },
  { icon: "Lightbulb", text: "Установка светильников и освещения" },
  { icon: "Server", text: "Сборка и модернизация электрощита" },
  { icon: "Wrench", text: "Ремонт электрики и диагностика неисправностей" },
  { icon: "AlertTriangle", text: "Аварийный выезд при любых проблемах" },
];

const PRICES = [
  { name: "Установка розетки / выключателя", price: "от 300 руб" },
  { name: "Замена проводки (1 точка)", price: "от 1 500 руб" },
  { name: "Установка люстры / светильника", price: "от 800 руб" },
  { name: "Сборка электрощита", price: "от 3 000 руб" },
  { name: "Аварийный выезд", price: "от 1 000 руб" },
  { name: "Диагностика электрики", price: "от 500 руб" },
];

const STEPS = [
  { num: "01", title: "Звонок", desc: "Описываете задачу — консультируем бесплатно." },
  { num: "02", title: "Выезд", desc: "Приедем в день обращения в удобное время." },
  { num: "03", title: "Осмотр", desc: "Оцениваем объём работ, называем стоимость." },
  { num: "04", title: "Работа", desc: "Выполняем монтаж быстро и аккуратно." },
  { num: "05", title: "Сдача", desc: "Проверяем результат, даём гарантию, убираем." },
];

const FAQS = [
  {
    q: "Работаете ли в выходные?",
    a: "Да, работаем ежедневно без выходных с 8:00 до 22:00. Суббота и воскресенье — обычные рабочие дни. Аварийные вызовы принимаем в любое время — если ситуация критическая, выедем максимально быстро.",
  },
  {
    q: "Берётесь ли за маленькие задачи — одна розетка, одна лампочка?",
    a: "Конечно! Никаких минимальных заказов. Установить одну розетку, заменить автомат, подключить люстру — это наша обычная работа. Маленькие задачи выполняем быстро, часто в течение 1–2 часов от звонка.",
  },
  {
    q: "Есть ли скидки при большом объёме работ?",
    a: "Да, при полном монтаже электрики в квартире или доме предоставляем скидку на работы. Также действуют скидки для постоянных клиентов и при повторных обращениях. Конкретные условия обсуждаем при составлении сметы.",
  },
];

const RELATED = [
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/", icon: "Zap" },
  { label: "Установка розеток", href: "/services/ustanovka-rozetok-izhevsk/", icon: "PlugZap" },
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/", icon: "Lightbulb" },
  { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/", icon: "Server" },
];

const ALL_SERVICES = [
  { label: "Электрика в квартире", href: "/services/elektrika-v-kvartire-izhevsk/", icon: "Home" },
  { label: "Электрика в новостройке", href: "/services/elektrika-v-novostrojke-izhevsk/", icon: "Building2" },
  { label: "Электрика в доме", href: "/services/elektrika-v-dome-izhevsk/", icon: "House" },
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/", icon: "Zap" },
  { label: "Установка розеток", href: "/services/ustanovka-rozetok-izhevsk/", icon: "PlugZap" },
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/", icon: "Lightbulb" },
  { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/", icon: "Server" },
  { label: "Ремонт электрики", href: "/services/remont-elektriki-izhevsk/", icon: "Wrench" },
  { label: "Аварийный электрик", href: "/services/avarijnyj-elektrik-izhevsk/", icon: "AlertTriangle" },
];

const ElektromontazhIzhevsk: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Электромонтажные работы в Ижевске — полный спектр услуг, цены от 300 руб",
    description:
      "Электромонтажные работы в Ижевске ☎ +7(912)465-80-50. Замена проводки, монтаж розеток и освещения, сборка щита. Выезд в день обращения.",
    canonical: "/services/elektromontazh-izhevsk/",
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
                  <Icon name="Zap" size={14} color="#1E88E5" />
                  <span style={{ ...font, color: "#1E88E5", fontSize: 12, fontWeight: 600 }}>Полный спектр услуг</span>
                </div>
                <h1 style={{ ...font, color: "#ffffff", fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                  Электромонтажные работы<br /><span style={{ color: "#1E88E5" }}>в Ижевске</span>
                </h1>
                <p style={{ ...font, color: "#64748B", fontSize: 15, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 520 }}>
                  Все виды электромонтажных работ в Ижевске: от замены одной розетки до полного монтажа электрики под ключ в квартире, доме или коммерческом помещении. Выезд в день обращения.
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
                <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
                  {[{ icon: "BadgeCheck", text: "Гарантия на работы" }, { icon: "Clock", text: "Выезд в день обращения" }, { icon: "Wallet", text: "от 300 руб" }].map(b => (
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
                    <Icon name="Phone" size={14} />Позвонить
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Все виды услуг */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Все услуги</span>
            <h2 style={h2}>Наши электромонтажные услуги</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Выполняем любые электромонтажные работы в Ижевске — от мелкого ремонта до монтажа под ключ. Нажмите на нужную услугу, чтобы узнать подробнее.
            </p>
            <div style={{ display: "grid", gap: 10 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {ALL_SERVICES.map((s) => (
                <Link key={s.href} to={s.href} style={{ ...font, display: "flex", alignItems: "center", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "16px 18px", textDecoration: "none", transition: "border-color 0.2s, background 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0"; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F172A"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E2940"; (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#111827"; }}>
                  <div style={{ width: 36, height: 36, backgroundColor: "#0F172A", border: "1px solid #1E2940", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={s.icon} size={16} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 14, fontWeight: 600, flex: 1 }}>{s.label}</span>
                  <Icon name="ChevronRight" size={15} color="#475569" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ситуации */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Ситуации</span>
            <h2 style={h2}>Когда нужны электромонтажные работы</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Берёмся за любые задачи — одна розетка или полный монтаж. Маленький объём не проблема.
            </p>
            <div style={{ display: "grid", gap: 12 }} className="grid grid-cols-1 sm:grid-cols-2">
              {SITUATIONS.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ width: 28, height: 28, backgroundColor: "rgba(21,101,192,0.15)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Zap" size={14} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 14, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Что входит */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Что делаем</span>
            <h2 style={h2}>Виды электромонтажных работ</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Полный спектр — от диагностики и мелкого ремонта до масштабного монтажа под ключ.
            </p>
            <div style={{ display: "grid", gap: 16 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {INCLUDED.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 14, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "20px" }}>
                  <div style={{ width: 40, height: 40, backgroundColor: "#0F172A", border: "1px solid #1E2940", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={item.icon} size={18} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 14, lineHeight: 1.5 }}>{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Цены */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Прайс</span>
            <h2 style={h2}>Цены на электромонтаж в Ижевске</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Краткий прайс на популярные услуги. Полный прайс-лист — на странице{" "}
              <Link to="/prices/" style={{ color: "#1E88E5", textDecoration: "none" }}>Цены</Link>.
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
            <p style={{ ...font, color: "#475569", fontSize: 12, marginTop: 12 }}>* Полный прайс-лист со всеми работами — на странице <Link to="/prices/" style={{ color: "#64748B" }}>Цены</Link></p>
          </div>
        </section>

        {/* Этапы */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Как работаем</span>
            <h2 style={h2}>Наш процесс работы</h2>
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

        {/* FAQ */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>FAQ</span>
            <h2 style={h2}>Частые вопросы об электромонтаже</h2>
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

        {/* Связанные */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Популярные услуги</span>
            <h2 style={h2}>Популярные направления</h2>
            <div style={{ display: "grid", gap: 12, marginTop: 28 }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              {RELATED.map((r) => (
                <Link key={r.href} to={r.href} style={{ ...font, display: "flex", alignItems: "center", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "16px 18px", textDecoration: "none", transition: "border-color 0.2s" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E2940"; }}>
                  <div style={{ width: 36, height: 36, backgroundColor: "#0F172A", border: "1px solid #1E2940", borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name={r.icon} size={16} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 14, fontWeight: 600 }}>{r.label}</span>
                </Link>
              ))}
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
                  Позвоните или оставьте заявку — мастер приедет в день обращения. Любой объём работ, любой район Ижевска и Завьялово.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <a href="tel:+79124658050" style={{ ...font, display: "flex", alignItems: "center", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 12, padding: "14px 18px", textDecoration: "none", transition: "border-color 0.2s" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1E2940"; }}>
                    <div style={{ width: 40, height: 40, backgroundColor: "#1565C0", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon name="Phone" size={18} color="#ffffff" />
                    </div>
                    <div>
                      <p style={{ ...font, color: "#64748B", fontSize: 11, fontWeight: 600, margin: "0 0 2px", textTransform: "uppercase" as const, letterSpacing: "0.06em" }}>Телефон</p>
                      <p style={{ ...font, color: "#ffffff", fontSize: 16, fontWeight: 800, margin: 0 }}>+7 (912) 465-80-50</p>
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
                      <p style={{ ...font, color: "#64748B", fontSize: 12, margin: 0 }}>Ежедневно, без выходных · Ижевск и Завьялово</p>
                    </div>
                  </div>
                </div>
              </div>
              <ContactForm title="Оставить заявку на электромонтаж" subtitle="Перезвоним в течение 30 минут" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default ElektromontazhIzhevsk;
