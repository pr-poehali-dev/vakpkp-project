import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const priceCategories = [
  {
    title: "Розетки и выключатели", icon: "PlugZap",
    items: [
      { name: "Установка розетки", price: "от 300 руб" },
      { name: "Перенос розетки", price: "от 500 руб" },
      { name: "Блок розеток", price: "от 600 руб" },
      { name: "Установка выключателя", price: "от 200 руб" },
      { name: "Установка диммера", price: "от 400 руб" },
    ],
  },
  {
    title: "Освещение", icon: "Lightbulb",
    items: [
      { name: "Установка люстры", price: "от 600 руб" },
      { name: "Точечный светильник", price: "от 300 руб" },
      { name: "LED-лента (1 м)", price: "от 200 руб" },
      { name: "Настенный бра", price: "от 500 руб" },
      { name: "Уличный светильник", price: "от 800 руб" },
    ],
  },
  {
    title: "Проводка", icon: "Cable",
    items: [
      { name: "Скрытая проводка (1 точка)", price: "от 1 500 руб" },
      { name: "Открытая проводка (кабель-канал)", price: "от 800 руб" },
      { name: "Штробление стены (1 м)", price: "от 300 руб" },
      { name: "Заделка штробы (1 м)", price: "от 150 руб" },
    ],
  },
  {
    title: "Электрощит", icon: "Server",
    items: [
      { name: "Замена автомата", price: "от 500 руб" },
      { name: "Установка УЗО", price: "от 800 руб" },
      { name: "Установка дифавтомата", price: "от 1 000 руб" },
      { name: "Сборка щита до 6 групп", price: "от 3 000 руб" },
      { name: "Добавление группы в щит", price: "от 1 500 руб" },
    ],
  },
  {
    title: "Квартиры и дома под ключ", icon: "Home",
    items: [
      { name: "Студия / 1-комн. квартира", price: "от 25 000 руб" },
      { name: "2-комн. квартира", price: "от 40 000 руб" },
      { name: "3-комн. квартира", price: "от 55 000 руб" },
      { name: "Новостройка-студия", price: "от 15 000 руб" },
    ],
  },
  {
    title: "Подключение техники", icon: "Zap",
    items: [
      { name: "Варочная панель", price: "от 1 500 руб" },
      { name: "Духовой шкаф", price: "от 800 руб" },
      { name: "Стиральная машина", price: "от 500 руб" },
    ],
  },
];

const faqs = [
  { q: "Входят ли материалы в стоимость?", a: "Нет, цены указаны за работу без материалов. Мы можем помочь с подбором и закупкой качественных материалов по хорошим ценам — просто скажите об этом при заказе." },
  { q: "Дадите смету заранее?", a: "Да. После звонка и описания задачи мы называем ориентировочную стоимость. После осмотра объекта — точную смету, которую согласуем до начала работ." },
  { q: "Бывают ли скидки?", a: "Да. При большом объёме работ — замена проводки во всей квартире, электрика в доме — предоставляем скидку. Обсудите при звонке." },
];

export default function PricesPage() {
  useSEO({
    title: "Цены на услуги электрика в Ижевске — прайс-лист 2024",
    description: "Цены на услуги электрика в Ижевске ☎ +7(912)465-80-50. Честный прайс без скрытых платежей. Замена проводки, розетки, освещение, щит.",
    canonical: "/prices/",
  });

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div style={{ ...font, backgroundColor: "#f8fafc", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#f1f5f9", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Цены" }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1e293b" }}>
              Цены на услуги электрика в Ижевске
            </h1>
            <p className="text-lg mb-6" style={{ color: "#334155" }}>
              Честные цены без скрытых платежей. Стоимость озвучиваем до начала работ.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a href="tel:+79124658050" className="flex items-center justify-center gap-2 px-8 py-3 rounded font-bold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1565C0" }}>
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
              <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 rounded font-bold hover:opacity-80 transition-opacity" style={{ border: "2px solid #1E88E5", color: "#1E88E5" }}>
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {["Смета до начала работ", "Без скрытых платежей", "Гарантия на все работы"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#eff6ff", color: "#1565C0" }}>
                  <Icon name="Check" size={14} />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Price tables */}
        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {priceCategories.map((cat, ci) => (
                <div key={ci}>
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ backgroundColor: "#1565C0", borderRadius: "8px" }} className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                      <Icon name={cat.icon} size={20} className="text-white" />
                    </div>
                    <h2 className="text-lg font-bold" style={{ color: "#1e293b" }}>{cat.title}</h2>
                  </div>
                  <div style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                    {cat.items.map((item, ii) => (
                      <div key={ii} className="flex items-center justify-between px-4 py-3" style={{
                        backgroundColor: ii % 2 === 0 ? "#ffffff" : "#f8fafc",
                        borderBottom: ii < cat.items.length - 1 ? "1px solid #e2e8f0" : "none",
                      }}>
                        <span className="text-sm" style={{ color: "#334155" }}>{item.name}</span>
                        <span className="font-bold text-sm" style={{ color: "#1E88E5", whiteSpace: "nowrap" as const }}>{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What's included */}
        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black mb-8 text-center" style={{ color: "#1e293b" }}>Что входит в стоимость</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { icon: "Car", title: "Выезд мастера", desc: "Входит в стоимость работ при заказе от 1 000 руб" },
                { icon: "MessageCircle", title: "Консультация", desc: "Бесплатно — подберём решение и назовём цену" },
                { icon: "Shield", title: "Гарантия", desc: "На все выполненные работы письменная гарантия" },
                { icon: "Sparkles", title: "Уборка", desc: "Убираем рабочее место после завершения работ" },
              ].map((item, i) => (
                <div key={i} className="p-5 rounded-lg text-center" style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                  <div style={{ backgroundColor: "#1565C0", borderRadius: "50%" }} className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Icon name={item.icon} size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#1e293b" }}>{item.title}</h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748b" }}>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black mb-8 text-center" style={{ color: "#1e293b" }}>Вопросы о ценах</h2>
            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: "#ffffff", textAlign: "left" as const }}
                  >
                    <span className="font-semibold pr-4" style={{ color: "#1e293b" }}>{faq.q}</span>
                    <Icon name={openFaq === i ? "Minus" : "Plus"} size={18} style={{ color: "#1E88E5", flexShrink: 0 }} />
                  </button>
                  {openFaq === i && (
                    <div className="px-5 pb-5 pt-3" style={{ backgroundColor: "#f8fafc" }}>
                      <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{faq.a}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#1565C0", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Узнать точную стоимость</h2>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>Опишите задачу — рассчитаем стоимость бесплатно</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
