import { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const faqCategories = [
  {
    title: "О работе", icon: "Wrench",
    items: [
      { q: "Как быстро приедет мастер?", a: "В день обращения, обычно в течение 1–2 часов от звонка. При аварийных ситуациях — приоритетный выезд." },
      { q: "В каких районах Ижевска работаете?", a: "Все районы Ижевска: Индустриальный, Октябрьский, Ленинский, Первомайский, Устиновский, Металлург, Буммаш, Строитель, Машиностроитель, Старый аэропорт, а также Завьялово." },
      { q: "Работаете ли в выходные и праздники?", a: "Да, работаем без выходных с 8:00 до 22:00. В праздничные дни — тоже." },
      { q: "Берётесь за маленькие задачи типа замены одной розетки?", a: "Да, берёмся за любые задачи без минимальной суммы заказа. Замена розетки, выключателя, люстры — приедем." },
      { q: "Есть ли аварийный выезд?", a: "Да. При отключении света, коротком замыкании или других экстренных ситуациях — выезжаем в приоритетном порядке." },
    ],
  },
  {
    title: "О ценах и оплате", icon: "DollarSign",
    items: [
      { q: "Входят ли материалы в стоимость?", a: "Цены на сайте указаны за работу без учёта материалов. Можем помочь с подбором и закупкой качественных материалов по хорошим ценам — просто скажите об этом при заказе." },
      { q: "Дадите смету заранее?", a: "Да. После звонка и описания задачи называем ориентировочную стоимость. После осмотра объекта — точную смету, которую согласуем до начала работ." },
      { q: "Как оплатить?", a: "Наличными или переводом на карту после завершения работ. Оплата только по факту выполненной работы." },
      { q: "Бывают ли скидки?", a: "Да, при большом объёме работ — замена проводки во всей квартире, электрика в частном доме — предоставляем скидку. Уточняйте при звонке." },
    ],
  },
  {
    title: "О качестве и гарантии", icon: "Shield",
    items: [
      { q: "Какую гарантию даёте?", a: "2 года на все выполненные работы. При гарантийном случае выезжаем бесплатно и устраняем проблему." },
      { q: "Какие кабели используете?", a: "ВВГнг-LS и NYM от проверенных производителей. Это кабели с нулевым газовыделением при горении, соответствуют нормам ПУЭ. По желанию заказчика можем использовать другие марки." },
      { q: "Делаете ли скрытую проводку или только открытую?", a: "И скрытую в штробах (под штукатурку), и открытую в кабель-канале. Выбор зависит от ситуации — обсудим при выезде." },
      { q: "Нужно ли согласование с управляющей компанией?", a: "Для замены и монтажа проводки внутри квартиры — нет. Для подключения от общего стояка или внешних работ — уточняем ситуацию отдельно." },
      { q: "Убираете ли после работы?", a: "Да, всегда убираем рабочее место: пыль после штробления, упаковки от материалов, строительный мусор." },
      { q: "Помогаете ли с закупкой материалов?", a: "Да, подбираем и помогаем купить качественные материалы (розетки, кабель, светильники, щиты) по нормальным ценам. Можем привезти с собой." },
    ],
  },
];

export default function FaqPage() {
  useSEO({
    title: "FAQ — частые вопросы об электрике в Ижевске",
    description: "Ответы на частые вопросы об услугах электрика в Ижевске. Стоимость, сроки, гарантия, материалы, районы выезда.",
    canonical: "/faq/",
  });

  const [openItem, setOpenItem] = useState<string | null>(null);

  return (
    <div style={{ ...font, backgroundColor: "#f8fafc", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#f1f5f9", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "FAQ" }]} />
          </div>
        </div>

        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1e293b" }}>Частые вопросы</h1>
            <p className="text-lg" style={{ color: "#334155" }}>Ответы на самые распространённые вопросы о наших услугах</p>
          </div>
        </section>

        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-12">
            {faqCategories.map((cat, ci) => (
              <div key={ci}>
                <div className="flex items-center gap-3 mb-6">
                  <div style={{ backgroundColor: "#1565C0", borderRadius: "8px" }} className="w-10 h-10 flex items-center justify-center">
                    <Icon name={cat.icon} size={18} className="text-white" />
                  </div>
                  <h2 className="text-xl font-bold" style={{ color: "#1e293b" }}>{cat.title}</h2>
                </div>
                <div className="space-y-3">
                  {cat.items.map((item, ii) => {
                    const key = `${ci}-${ii}`;
                    const isOpen = openItem === key;
                    return (
                      <div key={ii} style={{ border: "1px solid #e2e8f0", borderRadius: "8px", overflow: "hidden", boxShadow: "0 2px 8px rgba(0,0,0,0.06)" }}>
                        <button
                          onClick={() => setOpenItem(isOpen ? null : key)}
                          className="w-full flex items-center justify-between p-5 text-left hover:opacity-90 transition-opacity"
                          style={{ backgroundColor: "#ffffff", textAlign: "left" as const }}
                        >
                          <span className="font-semibold pr-4 text-sm" style={{ color: "#1e293b" }}>{item.q}</span>
                          <Icon name={isOpen ? "Minus" : "Plus"} size={16} style={{ color: "#1E88E5", flexShrink: 0 }} />
                        </button>
                        {isOpen && (
                          <div className="px-5 pb-5 pt-3" style={{ backgroundColor: "#f8fafc" }}>
                            <p className="text-sm leading-relaxed" style={{ color: "#334155" }}>{item.a}</p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ backgroundColor: "#1565C0", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-2">Остались вопросы?</h2>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>Задайте их — ответим и рассчитаем стоимость</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
