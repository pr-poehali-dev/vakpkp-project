import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const reviews = [
  { name: "Иван", district: "Металлург", service: "Замена проводки", text: "Заменили всю проводку в квартире за 3 дня. Работали аккуратно, убрали за собой. Цена соответствует озвученной до начала работ. Всё чётко." },
  { name: "Елена", district: "Строитель", service: "Монтаж освещения", text: "Установили 18 точечных светильников и 2 люстры. Ни одного скола на натяжном потолке. Профессионально и чисто, рекомендую!" },
  { name: "Алексей", district: "Завьялово", service: "Сборка электрощита", text: "Собрали новый щит на 12 групп, всё промаркировали. Объяснили что за что отвечает. Чувствуется профессионализм." },
  { name: "Мария", district: "Буммаш", service: "Электрика в квартире", text: "Сделали электрику в новостройке под ключ. Пришли по плану, работали чисто, вопросов не возникло. Советую!" },
  { name: "Дмитрий", district: "Октябрьский р-н", service: "Аварийный выезд", text: "Приехали через 40 минут после звонка. Нашли и устранили КЗ за 2 часа. Настоящие профессионалы, выручили в трудный момент!" },
  { name: "Ольга", district: "Ленинский р-н", service: "Установка розеток", text: "Перенесли 6 розеток после ремонта. Всё быстро, аккуратно. Штробы заделали — не отличишь от стены." },
  { name: "Сергей", district: "Индустриальный р-н", service: "Замена автоматов", text: "Заменили советские пробки на нормальный щит. Объяснили как пользоваться. Теперь всё надёжно, без опасений." },
  { name: "Наталья", district: "Первомайский р-н", service: "Подключение техники", text: "Подключили варочную Bosch и духовку. Проложили отдельную линию. Всё работает отлично уже полгода — никаких проблем." },
  { name: "Андрей", district: "Завьялово", service: "Электрика в доме", text: "Сделали электрику в частном доме с нуля. Качественно, без нареканий, по разумной цене. Обращусь ещё." },
  { name: "Анна", district: "Устиновский р-н", service: "Монтаж освещения", text: "Посоветовали хорошие светильники, помогли с закупкой. Установили освещение в 4 комнатах быстро и аккуратно." },
  { name: "Виктор", district: "Машиностроитель", service: "Ремонт электрики", text: "Искали неисправность 2 часа, нашли обрыв в стене без вскрытия. Потом вскрыли точечно и починили. Профессионалы." },
  { name: "Татьяна", district: "Старый аэропорт", service: "Установка УЗО", text: "Поставили УЗО для ванной и стиральной машины. Всё объяснили, показали как работает. Теперь спокойно за семью." },
];

export default function ReviewsPage() {
  useSEO({
    title: "Отзывы об электрике в Ижевске — реальные отзывы клиентов",
    description: "Отзывы клиентов электрика в Ижевске ☎ +7(912)465-80-50. Реальные отзывы о замене проводки, монтаже освещения, сборке щита.",
    canonical: "/reviews/",
  });

  return (
    <div style={{ ...font, backgroundColor: "#f8fafc", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#f1f5f9", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Отзывы" }]} />
          </div>
        </div>

        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1e293b" }}>Отзывы клиентов</h1>
            <p className="text-lg" style={{ color: "#334155" }}>Реальные отзывы от жителей Ижевска и Завьялово</p>
          </div>
        </section>

        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {reviews.map((r, i) => (
                <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Icon key={si} name="Star" size={15} style={{ color: "#F59E0B", fill: "#F59E0B" }} />
                    ))}
                  </div>
                  <p className="text-sm leading-relaxed mb-5" style={{ color: "#334155" }}>"{r.text}"</p>
                  <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: "14px" }} className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div style={{ backgroundColor: "#1565C0", borderRadius: "50%" }} className="w-9 h-9 flex items-center justify-center font-bold text-white text-sm">
                        {r.name[0]}
                      </div>
                      <div>
                        <div className="font-bold text-sm" style={{ color: "#1e293b" }}>{r.name}</div>
                        <div className="text-xs" style={{ color: "#64748b" }}>{r.district}</div>
                      </div>
                    </div>
                    <span className="text-xs px-2 py-1 rounded-full" style={{ backgroundColor: "#eff6ff", color: "#1E88E5" }}>{r.service}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#1565C0", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-black text-white mb-3">Оставить отзыв</h2>
            <p className="mb-6" style={{ color: "rgba(255,255,255,0.8)" }}>Если вы уже воспользовались нашими услугами, будем рады вашему отзыву</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <span className="flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff" }}>
                <Icon name="MapPin" size={16} />
                Яндекс Карты
              </span>
              <span className="flex items-center justify-center gap-2 px-6 py-3 rounded font-semibold" style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.4)", color: "#ffffff" }}>
                <Icon name="MapPin" size={16} />
                2ГИС
              </span>
            </div>
            <ContactForm title="Остались вопросы?" subtitle="Ответим и поможем с задачей" />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
