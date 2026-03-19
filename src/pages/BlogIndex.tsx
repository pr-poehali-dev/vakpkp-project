import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const articles = [
  { href: "/blog/kak-vybrat-elektrika-v-izhevske/", title: "Как выбрать электрика в Ижевске", cat: "Советы", date: "15 января 2024", read: "5 мин", desc: "На что обратить внимание при поиске мастера: опыт, отзывы, гарантия и прозрачность цен. Практический чеклист." },
  { href: "/blog/skolko-stoit-zamena-provodki/", title: "Сколько стоит замена проводки в квартире", cat: "Цены", date: "20 января 2024", read: "7 мин", desc: "Разбираем из чего складывается стоимость: материалы, объём работ, тип проводки. Реальные цифры по Ижевску." },
  { href: "/blog/kogda-nuzhno-menyat-provodku/", title: "Когда нужно менять старую проводку", cat: "Советы", date: "1 февраля 2024", read: "6 мин", desc: "Признаки того, что электропроводка в квартире устарела и её пора менять. Как проверить состояние сети." },
  { href: "/blog/pochemu-vybivaet-avtomat/", title: "Почему выбивает автоматический выключатель", cat: "Ремонт", date: "10 февраля 2024", read: "5 мин", desc: "Причины срабатывания автомата и что с этим делать: перегрузка, короткое замыкание или неисправный сам автомат." },
  { href: "/blog/skolko-rozetok-v-kvartire/", title: "Сколько розеток нужно в квартире", cat: "Советы", date: "18 февраля 2024", read: "4 мин", desc: "Рассчитываем оптимальное количество розеток для каждой комнаты. Нормы и здравый смысл." },
  { href: "/blog/razvodka-elektriki-kvartira/", title: "Как правильно сделать разводку электрики в квартире", cat: "Монтаж", date: "1 марта 2024", read: "8 мин", desc: "Принципы правильной разводки: группы, сечение кабеля, распределение нагрузок. Ошибки и как их избежать." },
  { href: "/blog/kak-vybrat-avtomat/", title: "Как выбрать автомат для квартиры", cat: "Оборудование", date: "12 марта 2024", read: "6 мин", desc: "Номиналы, типы и производители автоматических выключателей. Что ставить в квартиру в 2024 году." },
  { href: "/blog/elektrika-novostrojka/", title: "Электрика в новостройке: что нужно знать", cat: "Советы", date: "20 марта 2024", read: "7 мин", desc: "Особенности монтажа электрики в квартирах с черновой отделкой. Когда делать и как не переделывать." },
  { href: "/blog/kak-proverit-provodku/", title: "Как проверить проводку в квартире самостоятельно", cat: "Советы", date: "5 апреля 2024", read: "5 мин", desc: "Безопасные способы проверить состояние электропроводки без специального оборудования. Когда звать мастера." },
  { href: "/blog/oshibki-montazha-elektriki/", title: "Частые ошибки при монтаже электрики", cat: "Ремонт", date: "15 апреля 2024", read: "6 мин", desc: "Типичные ошибки самостоятельного монтажа и их последствия. Учимся на чужих промахах." },
];

const catColors: Record<string, string> = {
  "Советы": "#1565C0",
  "Цены": "#7C3AED",
  "Ремонт": "#DC2626",
  "Монтаж": "#059669",
  "Оборудование": "#D97706",
};

export default function BlogIndex() {
  useSEO({
    title: "Блог об электрике в Ижевске — советы и статьи от электриков",
    description: "Полезные статьи об электрике от мастеров в Ижевске. Советы по проводке, розеткам, освещению, безопасности и выбору оборудования.",
    canonical: "/blog/",
  });

  return (
    <div style={{ ...font, backgroundColor: "#0A0E1A", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#0D1220", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Блог" }]} />
          </div>
        </div>

        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Блог об электрике</h1>
            <p className="text-gray-300 text-lg">Полезные статьи и советы от практикующих электриков Ижевска</p>
          </div>
        </section>

        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((a, i) => (
                <Link
                  key={i}
                  to={a.href}
                  className="block rounded-lg hover:scale-105 transition-all duration-200"
                  style={{ backgroundColor: "#111827", border: "1px solid #1E2940", padding: "24px", textDecoration: "none" }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs px-2 py-1 rounded-full font-bold text-white" style={{ backgroundColor: catColors[a.cat] || "#1565C0" }}>{a.cat}</span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Icon name="Calendar" size={12} /> {a.date}
                    </span>
                    <span className="text-gray-500 text-xs flex items-center gap-1">
                      <Icon name="Clock" size={12} /> {a.read}
                    </span>
                  </div>
                  <h2 className="font-bold text-white text-lg mb-2 leading-snug">{a.title}</h2>
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">{a.desc}</p>
                  <span className="flex items-center gap-1 text-sm font-semibold" style={{ color: "#1E88E5" }}>
                    Читать <Icon name="ArrowRight" size={14} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <h2 className="text-2xl font-black text-white mb-2">Нужна помощь электрика?</h2>
            <p className="text-gray-400 mb-6">Звоните или пишите — выезд в день обращения</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </main>
      <Footer />
    </div>
  );
}
