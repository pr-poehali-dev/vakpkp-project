import { useState } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/67033018-a1a1-4925-bb7b-d31c4e59f20d/files/becb3867-db9d-4052-b658-3018c572b13f.jpg";
const WORK_IMAGE = "https://cdn.poehali.dev/projects/67033018-a1a1-4925-bb7b-d31c4e59f20d/files/a512a4d0-1ac9-4cad-8dfb-0c8a17907816.jpg";

const PHONE = "tel:+73412000000";
const TG = "https://t.me/elektrik_izhevsk";

const services = [
  { icon: "Zap", title: "Замена проводки", desc: "Полная и частичная замена проводки в квартире и доме" },
  { icon: "PlugZap", title: "Установка розеток", desc: "Монтаж и перенос розеток с аккуратной прокладкой" },
  { icon: "Lightbulb", title: "Монтаж освещения", desc: "Люстры, светильники, точечное освещение" },
  { icon: "Server", title: "Сборка электрощита", desc: "Автоматы, УЗО, защита сети" },
  { icon: "Wrench", title: "Ремонт электрики", desc: "Устраняем неисправности и короткие замыкания" },
  { icon: "AlertTriangle", title: "Аварийный электрик", desc: "Срочный выезд при отключении света" },
];

const advantages = [
  "Работаем по всему Ижевску и Завьялово",
  "Опытные электрики с практикой от 10 лет",
  "Приезжаем в день обращения",
  "Работаем аккуратно без грязи",
  "Даём гарантию на все работы",
  "Помогаем с подбором материалов",
];

const prices = [
  { name: "Установка розетки", price: "от 300 руб" },
  { name: "Перенос розетки", price: "от 500 руб" },
  { name: "Установка люстры", price: "от 800 руб" },
  { name: "Замена автомата", price: "от 500 руб" },
  { name: "Диагностика электрики", price: "от 500 руб" },
  { name: "Замена проводки", price: "от 1 500 руб/точка" },
];

const steps = [
  { num: "01", title: "Вы оставляете заявку", desc: "Звонок или сообщение в Telegram" },
  { num: "02", title: "Уточняем задачу", desc: "Обсуждаем объём и стоимость работ" },
  { num: "03", title: "Мастер приезжает", desc: "В удобное для вас время" },
  { num: "04", title: "Выполняем работу", desc: "Быстро, аккуратно, по нормам" },
  { num: "05", title: "Проверяем и сдаём", desc: "Гарантия на все выполненные работы" },
];

const cases = [
  { title: "Замена проводки в квартире", time: "2 дня", price: "25 000 руб", icon: "Cable" },
  { title: "Монтаж освещения в новостройке", time: "1 день", price: "8 000 руб", icon: "Lightbulb" },
  { title: "Сборка электрощита", time: "1 день", price: "6 000 руб", icon: "Server" },
];

const reviews = [
  { name: "Иван", city: "Ижевск", text: "Сделали замену проводки быстро и аккуратно. Всё объяснили, цены адекватные. Рекомендую!", stars: 5 },
  { name: "Алексей", city: "Завьялово", text: "Приехали в день обращения, устранили проблему за несколько часов. Всё чисто и аккуратно.", stars: 5 },
  { name: "Мария", city: "Ижевск", text: "Устанавливали розетки и освещение в новой квартире. Всё сделали аккуратно, без лишнего мусора.", stars: 5 },
];

const faqs = [
  { q: "Сколько стоит вызов электрика?", a: "Выезд и консультация обсуждаются индивидуально в зависимости от объёма работ." },
  { q: "Работаете ли срочно?", a: "Да, выезжаем в день обращения. Аварийный выезд возможен в любое время." },
  { q: "Даёте ли гарантию?", a: "Да, мы даём гарантию на все выполненные работы." },
  { q: "Можно ли купить материалы через вас?", a: "Да, помогаем с подбором и закупкой качественных материалов по хорошим ценам." },
];

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Montserrat', sans-serif", backgroundColor: "#0A0E1A", color: "#fff" }}>

      {/* NAVBAR */}
      <header style={{ backgroundColor: "#0A0E1A", borderBottom: "1px solid #1E2940" }} className="fixed top-0 left-0 right-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div style={{ backgroundColor: "#1565C0" }} className="w-8 h-8 rounded flex items-center justify-center">
              <Icon name="Zap" size={18} className="text-white" />
            </div>
            <span className="font-bold text-white text-lg tracking-wide">ЭЛЕКТРИК<span style={{ color: "#1E88E5" }}>УДМ</span></span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#services" className="hover:text-white transition-colors">Услуги</a>
            <a href="#prices" className="hover:text-white transition-colors">Цены</a>
            <a href="#works" className="hover:text-white transition-colors">Работы</a>
            <a href="#reviews" className="hover:text-white transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-white transition-colors">Контакты</a>
          </nav>

          <a href={PHONE} style={{ backgroundColor: "#1565C0" }} className="hidden md:flex items-center gap-2 px-4 py-2 rounded text-white text-sm font-semibold hover:opacity-90 transition-opacity">
            <Icon name="Phone" size={14} />
            Позвонить
          </a>

          <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div style={{ backgroundColor: "#111827", borderTop: "1px solid #1E2940" }} className="md:hidden px-4 py-4 flex flex-col gap-4">
            {(["#services", "#prices", "#works", "#reviews", "#contacts"] as const).map((href, i) => (
              <a key={i} href={href} onClick={() => setMenuOpen(false)} className="text-gray-300 hover:text-white text-sm font-medium">
                {["Услуги", "Цены", "Работы", "Отзывы", "Контакты"][i]}
              </a>
            ))}
            <a href={PHONE} style={{ backgroundColor: "#1565C0" }} className="flex items-center justify-center gap-2 px-4 py-3 rounded text-white font-semibold">
              <Icon name="Phone" size={16} />
              Позвонить
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16" style={{ backgroundColor: "#0A0E1A" }}>
        <div className="absolute inset-0 overflow-hidden">
          <img src={HERO_IMAGE} alt="Электрик" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, rgba(10,14,26,0.95) 0%, rgba(21,101,192,0.3) 50%, rgba(10,14,26,0.9) 100%)" }} />
        </div>
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: "linear-gradient(#1E88E5 1px, transparent 1px), linear-gradient(90deg, #1E88E5 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }} />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 md:py-32">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div style={{ backgroundColor: "#1E88E5", width: "3px", height: "24px" }} className="rounded" />
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "#1E88E5" }}>Ижевск и Завьялово</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black leading-tight mb-4 text-white">
              Электрик<br />
              <span style={{ color: "#1E88E5" }}>в Ижевске</span>
            </h1>
            <p className="text-xl md:text-2xl font-semibold text-gray-300 mb-3">
              Электромонтажные работы под ключ
            </p>
            <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
              Выезд мастеров с 8:00 до 22:00<br />
              Работаем во всех районах Ижевска и Завьялово
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a href={PHONE} style={{ backgroundColor: "#1565C0" }} className="flex items-center justify-center gap-3 px-8 py-4 rounded text-white font-bold text-lg hover:opacity-90 transition-all hover:scale-105">
                <Icon name="Phone" size={20} />
                Позвонить
              </a>
              <a href={TG} target="_blank" rel="noreferrer" style={{ border: "2px solid #1E88E5" }} className="flex items-center justify-center gap-3 px-8 py-4 rounded text-white font-bold text-lg hover:opacity-90 transition-all hover:scale-105">
                <Icon name="Send" size={20} />
                Написать в Telegram
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {["Опыт более 10 лет", "Выезд в день обращения", "Честные цены"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div style={{ backgroundColor: "#1E88E5" }} className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-gray-400 tracking-widest uppercase">Прокрутите</span>
          <Icon name="ChevronDown" size={20} className="text-gray-400 animate-bounce" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" style={{ backgroundColor: "#0D1220" }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
              Наши услуги
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Услуги электрика в Ижевске</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <div key={i} className="group relative p-6 rounded-lg hover:scale-105 transition-all duration-300 cursor-default" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(135deg, rgba(21,101,192,0.1) 0%, transparent 100%)" }} />
                <div style={{ backgroundColor: "#1565C0" }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={s.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">⚡ {s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <a href="#contacts" style={{ border: "2px solid #1565C0", color: "#1E88E5" }} className="inline-flex items-center gap-2 px-8 py-3 rounded font-bold hover:opacity-80 transition-opacity">
              Смотреть все услуги
              <Icon name="ArrowRight" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* ADVANTAGES */}
      <section style={{ backgroundColor: "#111827" }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
                Наши преимущества
              </div>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8">Почему выбирают нас</h2>
              <div className="space-y-4">
                {advantages.map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-lg" style={{ backgroundColor: "#0A0E1A", border: "1px solid #1E2940" }}>
                    <div style={{ backgroundColor: "#1565C0" }} className="w-7 h-7 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon name="Check" size={16} className="text-white" />
                    </div>
                    <p className="text-gray-200 font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img src={WORK_IMAGE} alt="Работа электрика" className="w-full h-80 md:h-96 object-cover rounded-lg" />
              <div className="absolute inset-0 rounded-lg" style={{ background: "linear-gradient(to top, rgba(10,14,26,0.7) 0%, transparent 50%)" }} />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="flex gap-4">
                  {[{ num: "10+", label: "Лет опыта" }, { num: "500+", label: "Объектов" }, { num: "100%", label: "Гарантия" }].map((stat, i) => (
                    <div key={i} className="flex-1 text-center p-3 rounded" style={{ backgroundColor: "rgba(10,14,26,0.9)", border: "1px solid #1E2940" }}>
                      <div className="text-2xl font-black" style={{ color: "#1E88E5" }}>{stat.num}</div>
                      <div className="text-xs text-gray-400 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" style={{ backgroundColor: "#0D1220" }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
              Стоимость
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Цены на услуги электрика</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="rounded-lg overflow-hidden" style={{ border: "1px solid #1E2940" }}>
              {prices.map((p, i) => (
                <div key={i} className="flex items-center justify-between px-6 py-4" style={{
                  backgroundColor: i % 2 === 0 ? "#111827" : "#0A0E1A",
                  borderBottom: i < prices.length - 1 ? "1px solid #1E2940" : "none"
                }}>
                  <span className="text-gray-200 font-medium">{p.name}</span>
                  <span className="font-bold text-lg" style={{ color: "#1E88E5" }}>{p.price}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-8">
              <a href={PHONE} style={{ backgroundColor: "#1565C0" }} className="inline-flex items-center gap-3 px-8 py-4 rounded text-white font-bold hover:opacity-90 transition-opacity">
                <Icon name="Phone" size={18} />
                Узнать точную стоимость
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section style={{ backgroundColor: "#111827" }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
              Процесс работы
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Как проходит работа</h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-px" style={{ backgroundColor: "#1E2940", margin: "0 10%" }} />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="relative flex flex-col items-center text-center">
                  <div className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-4 font-black text-lg" style={{ backgroundColor: "#1565C0", color: "#fff", border: "3px solid #111827" }}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-white text-sm mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="works" style={{ backgroundColor: "#0D1220" }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
              Портфолио
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Выполненные работы</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cases.map((c, i) => (
              <div key={i} className="p-6 rounded-lg hover:scale-105 transition-all duration-300" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                <div style={{ backgroundColor: "#1E2940" }} className="w-12 h-12 rounded-lg flex items-center justify-center mb-5">
                  <Icon name={c.icon} size={24} style={{ color: "#1E88E5" }} />
                </div>
                <h3 className="font-bold text-white text-lg mb-4">{c.title}</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Icon name="Clock" size={14} />
                      Срок
                    </span>
                    <span className="text-gray-200 font-medium">{c.time}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400 flex items-center gap-2">
                      <Icon name="Banknote" size={14} />
                      Стоимость
                    </span>
                    <span className="font-bold" style={{ color: "#1E88E5" }}>{c.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ backgroundColor: "#111827" }} className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
              Отзывы
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Отзывы клиентов</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((r, i) => (
              <div key={i} className="p-6 rounded-lg" style={{ backgroundColor: "#0A0E1A", border: "1px solid #1E2940" }}>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: r.stars }).map((_, si) => (
                    <Icon key={si} name="Star" size={16} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                  ))}
                </div>
                <p className="text-gray-300 text-sm leading-relaxed mb-5">"{r.text}"</p>
                <div className="flex items-center gap-3">
                  <div style={{ backgroundColor: "#1565C0" }} className="w-9 h-9 rounded-full flex items-center justify-center font-bold text-white text-sm">
                    {r.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-white text-sm">{r.name}</div>
                    <div className="text-gray-400 text-xs">{r.city}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ backgroundColor: "#0D1220" }} className="py-20 md:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 rounded-full text-xs font-bold tracking-widest uppercase" style={{ backgroundColor: "#1E2940", color: "#1E88E5" }}>
              FAQ
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">Частые вопросы</h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-lg overflow-hidden" style={{ border: "1px solid #1E2940" }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: "#111827" }}
                >
                  <span className="font-semibold text-white pr-4">{faq.q}</span>
                  <Icon name={openFaq === i ? "ChevronUp" : "ChevronDown"} size={20} style={{ color: "#1E88E5", flexShrink: 0 }} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 pt-3" style={{ backgroundColor: "#0A0E1A" }}>
                    <p className="text-gray-300 text-sm leading-relaxed">{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO TEXT */}
      <section style={{ backgroundColor: "#111827", borderTop: "1px solid #1E2940" }} className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold text-white mb-6">Услуги электрика в Ижевске</h2>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed" style={{ fontFamily: "'Roboto', sans-serif" }}>
            <p>Если вам нужен электрик в Ижевске для ремонта, монтажа или замены электропроводки, наша команда выполнит работы быстро и качественно. Мы оказываем услуги электромонтажа в квартирах, частных домах и коммерческих помещениях.</p>
            <p>Выполняем замену проводки, установку розеток и выключателей, монтаж освещения, сборку электрощитов и устранение неисправностей. Работаем во всех районах Ижевска и в Завьялово.</p>
            <p>Обеспечиваем безопасное подключение электросетей с соблюдением всех норм. Используем качественные материалы и проверенные решения. Вы можете вызвать электрика на дом в удобное время — мастер приедет, оценит объём работ и предложит оптимальное решение.</p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section id="contacts" style={{ backgroundColor: "#0A0E1A" }} className="py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="relative p-10 md:p-16 rounded-2xl overflow-hidden" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
            <div className="absolute inset-0 opacity-20" style={{ background: "linear-gradient(135deg, #1565C0 0%, transparent 60%)" }} />
            <div className="relative">
              <div style={{ backgroundColor: "#1565C0" }} className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="Zap" size={32} className="text-white" />
              </div>
              <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
                Нужен электрик<br />
                <span style={{ color: "#1E88E5" }}>в Ижевске?</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Оставьте заявку или позвоните — мастер приедет и решит задачу
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href={PHONE} style={{ backgroundColor: "#1565C0" }} className="flex items-center justify-center gap-3 px-10 py-4 rounded text-white font-bold text-lg hover:opacity-90 transition-all hover:scale-105">
                  <Icon name="Phone" size={20} />
                  Позвонить
                </a>
                <a href={TG} target="_blank" rel="noreferrer" style={{ border: "2px solid #1E88E5", color: "#1E88E5" }} className="flex items-center justify-center gap-3 px-10 py-4 rounded font-bold text-lg hover:opacity-80 transition-all hover:scale-105">
                  <Icon name="Send" size={20} />
                  Написать в Telegram
                </a>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
                <span className="flex items-center gap-2">
                  <Icon name="Clock" size={16} />
                  Работаем с 8:00 до 22:00
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                <span className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  Ижевск и Завьялово
                </span>
                <span className="hidden sm:block w-1 h-1 rounded-full bg-gray-600" />
                <span className="flex items-center gap-2">
                  <Icon name="Shield" size={16} />
                  Гарантия на работы
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: "#060912", borderTop: "1px solid #1E2940" }} className="py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div style={{ backgroundColor: "#1565C0" }} className="w-7 h-7 rounded flex items-center justify-center">
              <Icon name="Zap" size={14} className="text-white" />
            </div>
            <span className="font-bold text-white text-sm">ЭЛЕКТРИКУДМ</span>
          </div>
          <p className="text-gray-500 text-sm text-center">© 2024 Электрик в Ижевске. Электромонтажные работы.</p>
          <div className="flex items-center gap-4">
            <a href={PHONE} className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1">
              <Icon name="Phone" size={14} />
              Звонок
            </a>
            <a href={TG} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors text-sm flex items-center gap-1">
              <Icon name="Send" size={14} />
              Telegram
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}