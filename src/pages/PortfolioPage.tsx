import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const cases = [
  { icon: "Cable", title: "Замена проводки в 2-комн. квартире", district: "Октябрьский р-н", time: "3 дня", price: "40 000 руб", desc: "Замена алюминиевой проводки на медную NYM. Установлено 28 точек, новый щит на 12 групп с УЗО." },
  { icon: "Lightbulb", title: "Монтаж освещения в новостройке", district: "Металлург", time: "1 день", price: "12 000 руб", desc: "22 точечных светильника, 2 люстры, подсветка в ванной. Ни единого скола натяжного потолка." },
  { icon: "Server", title: "Сборка электрощита в частном доме", district: "Завьялово", time: "4 часа", price: "8 000 руб", desc: "Щит на 12 групп с УЗО, маркировка всех линий. Заменили советские пробки на современные автоматы." },
  { icon: "Flame", title: "Подключение варочной панели и духовки", district: "Буммаш", time: "2 часа", price: "3 500 руб", desc: "Siemens, отдельная линия 6 мм². Проложили кабель от щита, установили розетку 380В." },
  { icon: "Home", title: "Электрика с нуля в студии", district: "Строитель", time: "2 дня", price: "18 000 руб", desc: "Новостройка черновая. Разводка под дизайн-проект, 12 точек освещения, 8 розеток, щит 6 групп." },
  { icon: "AlertTriangle", title: "Аварийный ремонт КЗ в стене", district: "Октябрьский р-н", time: "3 часа", price: "4 500 руб", desc: "Нашли и устранили короткое замыкание в кабеле. Восстановили питание, заделали вскрытое место." },
  { icon: "PlugZap", title: "Перенос 8 розеток после перепланировки", district: "Ленинский р-н", time: "1 день", price: "6 000 руб", desc: "Перенесли 8 розеток под новую расстановку мебели, заделали штробы — не отличишь от стены." },
  { icon: "Lamp", title: "35 точечных светильников в 3-комн. квартире", district: "Устиновский р-н", time: "1 день", price: "8 500 руб", desc: "Разводка проводки по потолку, монтаж 35 спотов в натяжной потолок. Быстро и аккуратно." },
  { icon: "Zap", title: "Электрика в гараже и бане", district: "Завьялово", time: "2 дня", price: "15 000 руб", desc: "Ввод от дома, два щита, освещение, розетки 220В и 380В, контур заземления под баню." },
  { icon: "Cpu", title: "Замена пробок на автоматы", district: "Ленинский р-н", time: "2 часа", price: "2 000 руб", desc: "Заменили советские пробки на современные автоматы IEK, промаркировали все группы." },
];

export default function PortfolioPage() {
  useSEO({
    title: "Портфолио электрика в Ижевске — примеры выполненных работ",
    description: "Примеры работ электрика в Ижевске ☎ +7(912)465-80-50. Реальные кейсы с ценами и сроками.",
    canonical: "/portfolio/",
  });

  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div style={{ ...font, backgroundColor: "#f8fafc", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#f1f5f9", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Портфолио" }]} />
          </div>
        </div>

        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1e293b" }}>Выполненные работы</h1>
            <p className="text-lg mb-6" style={{ color: "#334155" }}>Реальные кейсы с ценами и сроками. Работаем в Ижевске и Завьялово.</p>
            <div className="flex flex-wrap justify-center gap-6">
              {[{ n: "500+", l: "Объектов" }, { n: "10+", l: "Лет опыта" }, { n: "100%", l: "Гарантия" }].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl font-black" style={{ color: "#1E88E5" }}>{s.n}</div>
                  <div className="text-sm" style={{ color: "#64748b" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {cases.map((c, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    backgroundColor: "#ffffff",
                    border: hovered === i ? "1px solid #1565C0" : "1px solid #e2e8f0",
                    borderRadius: "8px",
                    padding: "24px",
                    transition: "all 0.2s",
                    transform: hovered === i ? "translateY(-3px)" : "none",
                    boxShadow: hovered === i ? "0 8px 24px rgba(0,0,0,0.12)" : "0 2px 12px rgba(0,0,0,0.08)",
                  }}
                >
                  <div style={{ backgroundColor: "#1565C0", borderRadius: "8px" }} className="w-11 h-11 flex items-center justify-center mb-4">
                    <Icon name={c.icon} size={22} className="text-white" />
                  </div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs px-2 py-1 rounded-full font-medium" style={{ backgroundColor: "#eff6ff", color: "#1E88E5" }}>{c.district}</span>
                  </div>
                  <h3 className="font-bold mb-3 leading-snug" style={{ color: "#1e293b" }}>{c.title}</h3>
                  <p className="text-sm mb-4 leading-relaxed" style={{ color: "#64748b" }}>{c.desc}</p>
                  <div className="flex items-center justify-between text-sm pt-3" style={{ borderTop: "1px solid #e2e8f0" }}>
                    <span className="flex items-center gap-1" style={{ color: "#64748b" }}>
                      <Icon name="Clock" size={13} /> {c.time}
                    </span>
                    <span className="font-bold" style={{ color: "#1E88E5" }}>{c.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#1565C0", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Нужен электрик в Ижевске?</h2>
            <p className="mb-8" style={{ color: "rgba(255,255,255,0.8)" }}>Обсудим задачу и назовём стоимость бесплатно</p>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
