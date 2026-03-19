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
  { label: "Установка люстры" },
];

const SITUATIONS = [
  "Переезд в новую квартиру — нужно подключить люстры во всех комнатах",
  "Купили новую люстру — нужно снять старую и повесить новую",
  "Замена устаревшей советской люстры на современную",
  "Необычная тяжёлая люстра — нужно надёжное крепление",
  "Высокий потолок — нужны страховка и лестница",
  "Нет крюка на потолке — нужно установить кронштейн",
];

const INCLUDED = [
  { icon: "Trash2", text: "Снятие и утилизация старой люстры" },
  { icon: "Drill", text: "Установка крюка или монтажной планки" },
  { icon: "Cable", text: "Разборка и сборка люстры перед монтажом" },
  { icon: "Zap", text: "Подключение проводов по фазировке" },
  { icon: "Lightbulb", text: "Установка и проверка ламп" },
  { icon: "CheckCircle", text: "Финальная проверка работы всех режимов" },
];

const PRICES = [
  { name: "Установка на готовый крюк", price: "от 600 руб" },
  { name: "Установка на монтажный кронштейн", price: "от 800 руб" },
  { name: "Установка с прокладкой проводов", price: "от 1 200 руб" },
  { name: "Сборка и установка сложной люстры", price: "от 1 500 руб" },
  { name: "Люстра с пультом управления", price: "от 1 000 руб" },
  { name: "Снятие старой люстры (без установки)", price: "от 300 руб" },
];

const STEPS = [
  { num: "01", title: "Осмотр", desc: "Проверяем потолок и состояние проводки освещения." },
  { num: "02", title: "Крепление", desc: "Ставим крюк или кронштейн надёжно в перекрытие." },
  { num: "03", title: "Сборка", desc: "При необходимости собираем люстру из составных частей." },
  { num: "04", title: "Подключение", desc: "Подсоединяем провода, соблюдая полярность." },
  { num: "05", title: "Проверка", desc: "Включаем все режимы, проверяем надёжность крепления." },
];

const FAQS = [
  {
    q: "Справитесь с тяжёлой хрустальной или каскадной люстрой?",
    a: "Да, работаем с люстрами любого веса и сложности. Для тяжёлых люстр (более 5 кг) всегда усиливаем точку крепления: анкером в перекрытие или специальным кронштейном. Каскадные и составные люстры предварительно собираем, затем устанавливаем. Берём напарника для люстр свыше 15 кг.",
  },
  {
    q: "Что делать если нет крюка на потолке?",
    a: "Устанавливаем монтажную планку или крюк самостоятельно. В бетонных перекрытиях — анкер, в гипсокартоне — специальный крюк с распором или дюбель-бабочка. Для тяжёлых люстр монтируем анкер прямо в плиту перекрытия — это надёжно и навсегда.",
  },
  {
    q: "Нужно ли отключать всё электричество в квартире?",
    a: "Нет, достаточно отключить автомат именно группы освещения. Остальная электрика (холодильник, розетки) продолжает работать. Мастер всегда проверяет отсутствие напряжения тестером перед началом работ — это обязательный стандарт безопасности.",
  },
];

const RELATED = [
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/", icon: "Lightbulb" },
  { label: "Монтаж светильников", href: "/services/montazh-svetilnikov-izhevsk/", icon: "Lamp" },
  { label: "Установка выключателей", href: "/services/ustanovka-vyklyuchatelej-izhevsk/", icon: "ToggleRight" },
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/", icon: "Zap" },
];

const UstanovkaLyustry: React.FC = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Установка люстры в Ижевске — от 600 руб, мастер приедет в день обращения",
    description:
      "Установка люстры в Ижевске ☎ +7(912)465-80-50. Навесные, потолочные, на штанге, с пультом. Аккуратный монтаж, без мусора. Гарантия.",
    canonical: "/services/ustanovka-lyustry-izhevsk/",
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
                  <Icon name="Lightbulb" size={14} color="#1E88E5" />
                  <span style={{ ...font, color: "#1E88E5", fontSize: 12, fontWeight: 600 }}>Любые люстры и светильники</span>
                </div>
                <h1 style={{ ...font, color: "#ffffff", fontSize: "clamp(28px, 4.5vw, 48px)", fontWeight: 800, lineHeight: 1.15, margin: "0 0 12px", letterSpacing: "-0.02em" }}>
                  Установка люстры<br /><span style={{ color: "#1E88E5" }}>в Ижевске</span>
                </h1>
                <p style={{ ...font, color: "#64748B", fontSize: 15, lineHeight: 1.7, margin: "0 0 28px", maxWidth: 520 }}>
                  Установка люстр любой сложности: простые потолочные, тяжёлые хрустальные, каскадные, с пультом управления. Приедем, соберём и подключим аккуратно и надёжно.
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
                  {[{ icon: "BadgeCheck", text: "Гарантия на монтаж" }, { icon: "Clock", text: "Выезд в день обращения" }, { icon: "Wallet", text: "от 600 руб" }].map(b => (
                    <div key={b.text} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <Icon name={b.icon} size={15} color="#1E88E5" />
                      <span style={{ ...font, color: "#94A3B8", fontSize: 13, fontWeight: 500 }}>{b.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 16, padding: "28px" }} className="hidden lg:block">
                <p style={{ ...font, color: "#64748B", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, margin: "0 0 16px" }}>Стоимость работ</p>
                {PRICES.slice(0, 4).map((p, i) => (
                  <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "11px 0", borderBottom: i < 3 ? "1px solid #1E2940" : "none", gap: 12 }}>
                    <span style={{ ...font, color: "#CBD5E1", fontSize: 13 }}>{p.name}</span>
                    <span style={{ ...font, color: "#1E88E5", fontSize: 13, fontWeight: 700, whiteSpace: "nowrap" as const, flexShrink: 0 }}>{p.price}</span>
                  </div>
                ))}
                <div style={{ marginTop: 16, paddingTop: 16, borderTop: "1px solid #1E2940" }}>
                  <a href="tel:+79124658050" style={{ ...font, display: "flex", alignItems: "center", justifyContent: "center", gap: 6, backgroundColor: "#1565C0", color: "#ffffff", fontSize: 13, fontWeight: 700, padding: "11px", borderRadius: 8, textDecoration: "none" }}>
                    <Icon name="Phone" size={14} />Узнать цену
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ситуации */}
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Ситуации</span>
            <h2 style={h2}>Когда нужна установка люстры</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Работаем с любыми люстрами — от простой потолочной до сложной каскадной со множеством плафонов.
            </p>
            <div style={{ display: "grid", gap: 12 }} className="grid grid-cols-1 sm:grid-cols-2">
              {SITUATIONS.map((s, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12, backgroundColor: "#111827", border: "1px solid #1E2940", borderRadius: 10, padding: "16px 18px" }}>
                  <div style={{ width: 28, height: 28, backgroundColor: "rgba(21,101,192,0.15)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <Icon name="Lightbulb" size={14} color="#1E88E5" />
                  </div>
                  <span style={{ ...font, color: "#CBD5E1", fontSize: 14, lineHeight: 1.5 }}>{s}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Что входит */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Состав работ</span>
            <h2 style={h2}>Что входит в установку люстры</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Полный монтаж под ключ: снимем старую, соберём новую, подключим и проверим.
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
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>Прайс</span>
            <h2 style={h2}>Цены на установку люстры в Ижевске</h2>
            <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 36px", maxWidth: 600 }}>
              Стоимость зависит от типа крепления и сложности люстры. Называем цену до начала работ.
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
            <p style={{ ...font, color: "#475569", fontSize: 12, marginTop: 12 }}>* Стоимость работы. Лампочки и сама люстра не включены.</p>
          </div>
        </section>

        {/* Этапы */}
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Этапы</span>
            <h2 style={h2}>Как проходит установка люстры</h2>
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
        <section style={{ ...sectionPad, backgroundColor: "#060912" }}>
          <div style={container}>
            <span style={sectionLabel}>FAQ</span>
            <h2 style={h2}>Частые вопросы об установке люстры</h2>
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
        <section style={{ ...sectionPad, backgroundColor: "#0A0E1A" }}>
          <div style={container}>
            <span style={sectionLabel}>Смотрите также</span>
            <h2 style={h2}>Связанные услуги</h2>
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
        <section style={{ ...sectionPad, backgroundColor: "#060912", borderTop: "1px solid #1E2940" }}>
          <div style={container}>
            <div style={{ display: "grid", gap: 48, alignItems: "start" }} className="grid grid-cols-1 lg:grid-cols-2">
              <div>
                <span style={sectionLabel}>Заявка</span>
                <h2 style={h2}>Вызвать мастера для установки люстры</h2>
                <p style={{ ...font, color: "#64748B", fontSize: 14, lineHeight: 1.7, margin: "0 0 28px" }}>
                  Приедем сегодня, соберём и повесим люстру аккуратно и надёжно. Подберём правильное крепление под любой тип потолка.
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
                </div>
              </div>
              <ContactForm title="Оставить заявку на установку люстры" subtitle="Перезвоним в течение 30 минут" />
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default UstanovkaLyustry;
