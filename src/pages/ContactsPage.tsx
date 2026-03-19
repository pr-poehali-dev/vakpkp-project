import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import ContactForm from '@/components/common/ContactForm';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Icon from '@/components/ui/icon';

const font = { fontFamily: "'Montserrat', sans-serif" };

const districts = [
  "Индустриальный р-н", "Октябрьский р-н", "Ленинский р-н",
  "Первомайский р-н", "Устиновский р-н", "Металлург",
  "Буммаш", "Строитель", "Машиностроитель", "Старый аэропорт", "Завьялово",
];

export default function ContactsPage() {
  useSEO({
    title: "Контакты электрика в Ижевске — позвонить или написать в Telegram",
    description: "Контакты электрика в Ижевске ☎ +7(912)465-80-50. Звоните или пишите в Telegram @elektrik_izh. Работаем с 8:00 до 22:00 без выходных.",
    canonical: "/contacts/",
  });

  return (
    <div style={{ ...font, backgroundColor: "#0A0E1A", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#0D1220", padding: "8px 0" }}>
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Контакты" }]} />
          </div>
        </div>

        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4">Контакты</h1>
            <p className="text-gray-300 text-lg">Позвоните или напишите — ответим быстро и рассчитаем стоимость</p>
          </div>
        </section>

        {/* Contact cards */}
        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              {/* Phone */}
              <div className="p-8 rounded-xl" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                <div style={{ backgroundColor: "#1565C0", borderRadius: "50%" }} className="w-14 h-14 flex items-center justify-center mb-5">
                  <Icon name="Phone" size={26} className="text-white" />
                </div>
                <h2 className="text-lg font-bold text-white mb-1">Телефон</h2>
                <a href="tel:+79124658050" className="text-2xl font-black hover:opacity-80 transition-opacity block mb-4" style={{ color: "#1E88E5" }}>
                  +7 (912) 465-80-50
                </a>
                <p className="text-gray-400 text-sm mb-5">Работаем с 8:00 до 22:00 без выходных</p>
                <a href="tel:+79124658050" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold text-white hover:opacity-90 transition-opacity" style={{ backgroundColor: "#1565C0" }}>
                  <Icon name="Phone" size={18} />
                  Позвонить
                </a>
              </div>

              {/* Telegram */}
              <div className="p-8 rounded-xl" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
                <div style={{ backgroundColor: "#1565C0", borderRadius: "50%" }} className="w-14 h-14 flex items-center justify-center mb-5">
                  <Icon name="Send" size={26} className="text-white" />
                </div>
                <h2 className="text-lg font-bold text-white mb-1">Telegram</h2>
                <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" className="text-2xl font-black hover:opacity-80 transition-opacity block mb-4" style={{ color: "#1E88E5" }}>
                  @elektrik_izh
                </a>
                <p className="text-gray-400 text-sm mb-5">Напишите — ответим в течение нескольких минут</p>
                <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-3 rounded font-bold hover:opacity-80 transition-opacity" style={{ border: "2px solid #1E88E5", color: "#1E88E5" }}>
                  <Icon name="Send" size={18} />
                  Написать в Telegram
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="p-6 rounded-xl mb-6" style={{ backgroundColor: "#111827", border: "1px solid #1E2940" }}>
              <h2 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Icon name="Clock" size={20} style={{ color: "#1E88E5" }} />
                Режим работы
              </h2>
              <div style={{ border: "1px solid #1E2940", borderRadius: "8px", overflow: "hidden" }}>
                {[
                  { day: "Понедельник – Воскресенье", hours: "8:00 – 22:00" },
                  { day: "Аварийный выезд", hours: "Круглосуточно" },
                ].map((row, i) => (
                  <div key={i} className="flex items-center justify-between px-5 py-3" style={{ backgroundColor: i % 2 === 0 ? "#0A0E1A" : "#0D1220", borderBottom: i === 0 ? "1px solid #1E2940" : "none" }}>
                    <span className="text-gray-300 text-sm">{row.day}</span>
                    <span className="font-bold text-sm" style={{ color: "#1E88E5" }}>{row.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Districts */}
        <section style={{ backgroundColor: "#0D1220", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-black text-white mb-4">Районы выезда</h2>
            <p className="text-gray-400 mb-6">Выезжаем по всему Ижевску и в Завьялово без доплат за выезд.</p>
            <div className="flex flex-wrap gap-3">
              {districts.map((d, i) => (
                <span key={i} className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium" style={{ backgroundColor: "#111827", border: "1px solid #1E2940", color: "#d1d5db" }}>
                  <Icon name="MapPin" size={13} style={{ color: "#1E88E5" }} />
                  {d}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-black text-white mb-2">Оставить заявку</h2>
              <p className="text-gray-400">Опишите задачу — перезвоним в течение 30 минут</p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
