import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const groups = [
  {
    icon: "Cable", title: "Проводка",
    links: [
      { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/" },
      { label: "Монтаж проводки", href: "/services/montazh-elektroprovodki-izhevsk/" },
      { label: "Электрика в квартире", href: "/services/elektrika-v-kvartire-izhevsk/" },
      { label: "Электрика в доме", href: "/services/elektrika-v-dome-izhevsk/" },
    ],
  },
  {
    icon: "PlugZap", title: "Розетки и выключатели",
    links: [
      { label: "Установка розеток", href: "/services/ustanovka-rozetok-izhevsk/" },
      { label: "Перенос розеток", href: "/services/perenos-rozetok-izhevsk/" },
      { label: "Установка выключателей", href: "/services/ustanovka-vyklyuchatelej-izhevsk/" },
    ],
  },
  {
    icon: "Lightbulb", title: "Освещение",
    links: [
      { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/" },
      { label: "Установка люстры", href: "/services/ustanovka-lyustry-izhevsk/" },
      { label: "Монтаж светильников", href: "/services/montazh-svetilnikov-izhevsk/" },
    ],
  },
  {
    icon: "Server", title: "Электрощит",
    links: [
      { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/" },
      { label: "Замена автоматов", href: "/services/zamena-avtomatov-izhevsk/" },
      { label: "Установка УЗО", href: "/services/ustanovka-uzo-izhevsk/" },
    ],
  },
  {
    icon: "Wrench", title: "Ремонт электрики",
    links: [
      { label: "Ремонт электрики", href: "/services/remont-elektriki-izhevsk/" },
      { label: "Аварийный электрик", href: "/services/avarijnyj-elektrik-izhevsk/" },
    ],
  },
  {
    icon: "Zap", title: "Подключение техники",
    links: [
      { label: "Варочная панель", href: "/services/podklyuchenie-varochnoj-paneli-izhevsk/" },
      { label: "Духовой шкаф", href: "/services/podklyuchenie-dukhovki-izhevsk/" },
      { label: "Стиральная машина", href: "/services/podklyuchenie-stiralnoj-mashiny-izhevsk/" },
    ],
  },
  {
    icon: "KeyRound", title: "Под ключ",
    links: [
      { label: "Электрика под ключ", href: "/services/elektrika-pod-klyuch-izhevsk/" },
      { label: "В новостройке", href: "/services/elektrika-v-novostrojke-izhevsk/" },
      { label: "Электрик Ижевск", href: "/services/elektrik-izhevsk/" },
      { label: "Электромонтаж Ижевск", href: "/services/elektromontazh-izhevsk/" },
    ],
  },
];

const allServices = [
  { label: "Электрик в Ижевске", href: "/services/elektrik-izhevsk/" },
  { label: "Электромонтажные работы", href: "/services/elektromontazh-izhevsk/" },
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/" },
  { label: "Монтаж электропроводки", href: "/services/montazh-elektroprovodki-izhevsk/" },
  { label: "Установка розеток", href: "/services/ustanovka-rozetok-izhevsk/" },
  { label: "Перенос розеток", href: "/services/perenos-rozetok-izhevsk/" },
  { label: "Установка выключателей", href: "/services/ustanovka-vyklyuchatelej-izhevsk/" },
  { label: "Установка люстры", href: "/services/ustanovka-lyustry-izhevsk/" },
  { label: "Монтаж светильников", href: "/services/montazh-svetilnikov-izhevsk/" },
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/" },
  { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/" },
  { label: "Замена автоматов", href: "/services/zamena-avtomatov-izhevsk/" },
  { label: "Установка УЗО", href: "/services/ustanovka-uzo-izhevsk/" },
  { label: "Ремонт электрики", href: "/services/remont-elektriki-izhevsk/" },
  { label: "Аварийный электрик", href: "/services/avarijnyj-elektrik-izhevsk/" },
  { label: "Электрика в квартире", href: "/services/elektrika-v-kvartire-izhevsk/" },
  { label: "Электрика в доме", href: "/services/elektrika-v-dome-izhevsk/" },
  { label: "Электрика в новостройке", href: "/services/elektrika-v-novostrojke-izhevsk/" },
  { label: "Электрика под ключ", href: "/services/elektrika-pod-klyuch-izhevsk/" },
  { label: "Подключение варочной панели", href: "/services/podklyuchenie-varochnoj-paneli-izhevsk/" },
  { label: "Подключение духовки", href: "/services/podklyuchenie-dukhovki-izhevsk/" },
  { label: "Подключение стиральной машины", href: "/services/podklyuchenie-stiralnoj-mashiny-izhevsk/" },
];

export default function ServicesIndex() {
  useSEO({
    title: "Услуги электрика в Ижевске — полный перечень работ и цены",
    description: "Услуги электрика в Ижевске ☎ +7(912)465-80-50. Замена проводки, розетки, освещение, щит, ремонт и подключение техники. Работаем во всех районах.",
    canonical: "/services/",
  });

  return (
    <div style={{ ...font, backgroundColor: "#f8fafc", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#f1f5f9", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Услуги" }]} />
          </div>
        </div>

        {/* Hero */}
        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black mb-4" style={{ color: "#1e293b" }}>
              Услуги электрика в Ижевске
            </h1>
            <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "#334155" }}>
              Полный спектр электромонтажных работ в Ижевске и Завьялово. Выезд с 8:00 до 22:00, работаем без выходных.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+79124658050" className="flex items-center justify-center gap-2 px-8 py-3 rounded font-bold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1565C0" }}>
                <Icon name="Phone" size={18} />
                Позвонить
              </a>
              <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 px-8 py-3 rounded font-bold hover:opacity-80 transition-opacity" style={{ border: "2px solid #1E88E5", color: "#1E88E5" }}>
                <Icon name="Send" size={18} />
                Написать в Telegram
              </a>
            </div>
          </div>
        </section>

        {/* Groups */}
        <section style={{ backgroundColor: "#f8fafc", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black mb-10" style={{ color: "#1e293b" }}>Виды услуг</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {groups.map((g, i) => (
                <div key={i} style={{ backgroundColor: "#ffffff", border: "1px solid #e2e8f0", borderRadius: "8px", padding: "24px", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                  <div className="flex items-center gap-3 mb-4">
                    <div style={{ backgroundColor: "#1565C0", borderRadius: "8px" }} className="w-10 h-10 flex items-center justify-center">
                      <Icon name={g.icon} size={20} className="text-white" />
                    </div>
                    <span className="font-bold" style={{ color: "#1e293b" }}>{g.title}</span>
                  </div>
                  <ul className="space-y-2">
                    {g.links.map((l, li) => (
                      <li key={li}>
                        <Link to={l.href} className="flex items-center gap-2 text-sm py-1 transition-colors" style={{ color: "#64748b", textDecoration: "none" }}
                          onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1e293b"; }}
                          onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#64748b"; }}>
                          <Icon name="ChevronRight" size={14} style={{ color: "#1E88E5", flexShrink: 0 }} />
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All services list */}
        <section style={{ backgroundColor: "#f1f5f9", padding: "60px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-black mb-8" style={{ color: "#1e293b" }}>Полный перечень услуг</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
              {allServices.map((s, i) => (
                <Link key={i} to={s.href} className="flex items-center gap-3 px-4 py-3 transition-colors" style={{ borderBottom: "1px solid #e2e8f0", color: "#334155", textDecoration: "none" }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#1e293b"; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.color = "#334155"; }}>
                  <Icon name="ChevronRight" size={16} style={{ color: "#1E88E5", flexShrink: 0 }} />
                  {s.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#1565C0", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-black text-white mb-2">Вызвать электрика в Ижевске</h2>
              <p style={{ color: "rgba(255,255,255,0.8)" }}>Оставьте заявку — мастер перезвонит в течение 30 минут</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
