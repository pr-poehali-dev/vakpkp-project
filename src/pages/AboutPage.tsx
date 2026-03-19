import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const principles = [
  { icon: "DollarSign", title: "Честность в ценах", desc: "Называем стоимость до начала работ и не меняем её в процессе. Никаких скрытых платежей." },
  { icon: "Sparkles", title: "Аккуратность в работе", desc: "Работаем без лишнего мусора, защищаем мебель и покрытия, убираем за собой." },
  { icon: "Clock", title: "Точность сроков", desc: "Приезжаем в оговорённое время и завершаем работу в указанный срок." },
  { icon: "Shield", title: "Реальная гарантия", desc: "Даём письменную гарантию на все выполненные работы. При проблемах — приедем бесплатно." },
  { icon: "ShoppingCart", title: "Помощь с материалами", desc: "Поможем подобрать качественные материалы по разумным ценам, закупим за вас." },
  { icon: "Star", title: "Ответственность", desc: "Несём ответственность за качество и безопасность каждого выполненного объекта." },
];

const objectTypes = [
  { icon: "Home", title: "Квартиры", desc: "Новостройки и вторичное жильё, любые планировки и объёмы работ" },
  { icon: "Building2", title: "Частные дома", desc: "Ввод в дом, разводка по этажам, хозпостройки, гаражи, бани" },
  { icon: "Building", title: "Новостройки", desc: "Монтаж с нуля по дизайн-проекту или стандартной схеме" },
  { icon: "Briefcase", title: "Коммерческие объекты", desc: "Офисы, магазины, склады — любые нежилые помещения" },
];

export default function AboutPage() {
  useSEO({
    title: "О компании Электрик Ижевск — бригада электриков с опытом 10+ лет",
    description: "О компании Электрик Ижевск ☎ +7(912)465-80-50. Профессиональная бригада электриков в Ижевске. Опыт 10+ лет, 500+ объектов.",
    canonical: "/about/",
  });

  return (
    <div style={{ ...font, backgroundColor: "#0A0E1A", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#0D1220", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "О компании" }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">О компании</h1>
            <div className="space-y-4 text-gray-300 leading-relaxed mb-8">
              <p>Мы — профессиональная бригада электриков в Ижевске с опытом работы более 10 лет. За это время выполнено свыше 500 объектов: квартиры, частные дома, новостройки и коммерческие помещения по всему Ижевску и в Завьялово.</p>
              <p>Работаем с жилыми и нежилыми объектами любой сложности — от замены одной розетки до полного монтажа электрики в частном доме под ключ. Выезжаем с 8:00 до 22:00 без выходных, в день обращения.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+79124658050" className="flex items-center justify-center gap-2 px-8 py-3 rounded font-bold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1565C0" }}>
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
              <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 rounded font-bold hover:opacity-80 transition-opacity" style={{ border: "2px solid #1E88E5", color: "#1E88E5" }}>
                <Icon name="Send" size={18} />
                Telegram
              </a>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { num: "10+", label: "Лет опыта" },
                { num: "500+", label: "Объектов" },
                { num: "100%", label: "Гарантия" },
                { num: "60 мин", label: "Мин. время выезда" },
              ].map((s, i) => (
                <div key={i} className="text-center p-6 rounded-lg" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                  <div className="text-3xl font-black mb-1" style={{ color: "#1E88E5" }}>{s.num}</div>
                  <div className="text-gray-400 text-sm">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Principles */}
        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center">Наши принципы</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {principles.map((p, i) => (
                <div key={i} className="p-6 rounded-lg" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                  <div style={{ backgroundColor: "#1565C0", borderRadius: "8px" }} className="w-11 h-11 flex items-center justify-center mb-4">
                    <Icon name={p.icon} size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Object types */}
        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 text-center">С чем работаем</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
              {objectTypes.map((o, i) => (
                <div key={i} className="p-5 rounded-lg text-center" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                  <div style={{ backgroundColor: "#1E2940", borderRadius: "50%" }} className="w-12 h-12 flex items-center justify-center mx-auto mb-3">
                    <Icon name={o.icon} size={22} style={{ color: "#1E88E5" }} />
                  </div>
                  <h3 className="font-bold text-white mb-2">{o.title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed">{o.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Guarantees */}
        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black text-white mb-8 text-center">Наши гарантии</h2>
            <div className="space-y-4">
              {[
                { icon: "Shield", title: "2 года гарантии на работы", desc: "Даём письменную гарантию на все выполненные электромонтажные работы сроком 2 года." },
                { icon: "Car", title: "Бесплатный выезд по гарантийному случаю", desc: "Если в период гарантии возникнет проблема по нашей вине — приедем и устраним бесплатно." },
                { icon: "FileText", title: "Документ на руки", desc: "По завершению работ предоставляем договор или акт выполненных работ." },
              ].map((g, i) => (
                <div key={i} className="flex items-start gap-4 p-5 rounded-lg" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                  <div style={{ backgroundColor: "#1565C0", borderRadius: "8px" }} className="w-10 h-10 flex items-center justify-center flex-shrink-0">
                    <Icon name={g.icon} size={18} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">{g.title}</h3>
                    <p className="text-gray-400 text-sm">{g.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-2">Свяжитесь с нами</h2>
              <p className="text-gray-400">Ответим на вопросы и рассчитаем стоимость</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
