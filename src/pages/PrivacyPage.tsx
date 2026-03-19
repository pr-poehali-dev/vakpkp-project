import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useSEO } from '@/hooks/useSEO';
import Breadcrumbs from '@/components/common/Breadcrumbs';

const font = { fontFamily: "'Montserrat', sans-serif" };

export default function PrivacyPage() {
  useSEO({
    title: "Политика конфиденциальности — Электрик Ижевск",
    description: "Политика конфиденциальности сайта Электрик Ижевск.",
    canonical: "/privacy/",
  });

  return (
    <div style={{ ...font, backgroundColor: "#0A0E1A", minHeight: "100vh", paddingTop: "64px" }}>
      <Header />
      <main>
        <div style={{ backgroundColor: "#0D1220", padding: "8px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <Breadcrumbs items={[{ label: "Главная", href: "/" }, { label: "Политика конфиденциальности" }]} />
          </div>
        </div>

        <section style={{ backgroundColor: "#0A0E1A", padding: "60px 0" }}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-3xl md:text-4xl font-black text-white mb-8">Политика конфиденциальности</h1>

            <div className="space-y-8" style={{ fontFamily: "'Roboto', sans-serif", color: "#d1d5db", lineHeight: "1.7" }}>
              <div>
                <h2 className="text-xl font-bold text-white mb-3">1. Общие положения</h2>
                <p className="text-sm">Настоящая Политика конфиденциальности определяет порядок сбора, хранения и использования персональных данных пользователей сайта elektrik-izhevsk.ru (далее — Сайт). Используя Сайт и заполняя формы обратной связи, вы соглашаетесь с условиями настоящей Политики.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">2. Какие данные мы собираем</h2>
                <p className="text-sm mb-3">При заполнении форм на Сайте мы можем получить следующие данные:</p>
                <ul className="list-disc list-inside text-sm space-y-1 text-gray-400">
                  <li>Имя (необязательно)</li>
                  <li>Номер телефона (для обратной связи)</li>
                  <li>Текст сообщения или описание задачи</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">3. Цели использования данных</h2>
                <p className="text-sm">Полученные данные используются исключительно для связи с вами в целях ответа на ваш запрос, уточнения деталей задачи и предоставления информации об услугах. Мы не используем ваши данные в маркетинговых целях без вашего согласия.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">4. Передача данных третьим лицам</h2>
                <p className="text-sm">Ваши персональные данные не передаются третьим лицам, партнёрам или рекламным сетям. Исключение составляют случаи, предусмотренные законодательством Российской Федерации.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">5. Хранение данных</h2>
                <p className="text-sm">Данные хранятся в течение срока, необходимого для выполнения цели сбора, после чего удаляются. Мы принимаем меры для защиты данных от несанкционированного доступа.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">6. Права пользователя</h2>
                <p className="text-sm">Вы вправе в любое время запросить информацию о хранящихся данных, потребовать их исправления или удаления. Для этого свяжитесь с нами по телефону +7 (912) 465-80-50 или через Telegram @elektrik_izh.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">7. Cookies</h2>
                <p className="text-sm">Сайт может использовать файлы cookies для корректной работы аналитических систем. Вы можете отключить cookies в настройках браузера, однако это может повлиять на работу некоторых функций Сайта.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">8. Изменения политики</h2>
                <p className="text-sm">Мы оставляем за собой право вносить изменения в настоящую Политику. Актуальная версия всегда доступна на данной странице. Продолжение использования Сайта после изменений означает ваше согласие с обновлённой Политикой.</p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-white mb-3">9. Контакты</h2>
                <p className="text-sm">По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
                <p className="text-sm mt-2">Телефон: <a href="tel:+79124658050" style={{ color: "#1E88E5" }}>+7 (912) 465-80-50</a></p>
                <p className="text-sm">Telegram: <a href="https://t.me/elektrik_izh" target="_blank" rel="noreferrer" style={{ color: "#1E88E5" }}>@elektrik_izh</a></p>
              </div>

              <p className="text-xs text-gray-600">Дата последнего обновления: 1 января 2024 года</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
