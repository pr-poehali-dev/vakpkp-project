import React from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

const FOOTER_SERVICES = [
  { label: "Электромонтажные работы", href: "/services/elektromontazh-izhevsk/" },
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/" },
  { label: "Розетки и выключатели", href: "/services/ustanovka-rozetok-izhevsk/" },
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/" },
  { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/" },
  { label: "Ремонт электрики", href: "/services/remont-elektriki-izhevsk/" },
  { label: "Аварийный электрик", href: "/services/avarijnyj-elektrik-izhevsk/" },
  { label: "Все услуги", href: "/services/" },
];

const FOOTER_NAV = [
  { label: "Главная", href: "/" },
  { label: "Цены", href: "/prices/" },
  { label: "Кейсы", href: "/portfolio/" },
  { label: "Отзывы", href: "/reviews/" },
  { label: "Блог", href: "/blog/" },
  { label: "О компании", href: "/about/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Контакты", href: "/contacts/" },
];

const Footer: React.FC = () => {
  const fontStyle: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

  const footerStyle: React.CSSProperties = {
    ...fontStyle,
    backgroundColor: "#f1f5f9",
    borderTop: "1px solid #e2e8f0",
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "56px 24px 40px",
  };

  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 40,
  };

  const colTitleStyle: React.CSSProperties = {
    color: "#1e293b",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 20,
    fontFamily: "'Montserrat', sans-serif",
  };

  const footerLinkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#64748b",
    fontSize: 13,
    fontWeight: 500,
    textDecoration: "none",
    padding: "4px 0",
    transition: "color 0.2s",
    fontFamily: "'Montserrat', sans-serif",
  };

  const logoIconBoxStyle: React.CSSProperties = {
    width: 40,
    height: 40,
    backgroundColor: "#1565C0",
    borderRadius: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: 20,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#1e293b",
    lineHeight: 1,
    fontFamily: "'Montserrat', sans-serif",
  };

  const descStyle: React.CSSProperties = {
    color: "#64748b",
    fontSize: 13,
    lineHeight: 1.7,
    marginTop: 16,
    marginBottom: 20,
    fontFamily: "'Montserrat', sans-serif",
  };

  const contactChipStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#ffffff",
    border: "1px solid #e2e8f0",
    borderRadius: 8,
    padding: "10px 14px",
    marginBottom: 8,
    textDecoration: "none",
    transition: "border-color 0.2s",
  };

  const contactChipTextStyle: React.CSSProperties = {
    color: "#374151",
    fontSize: 13,
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif",
  };

  const dividerStyle: React.CSSProperties = {
    borderTop: "1px solid #e2e8f0",
    marginTop: 48,
    paddingTop: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexWrap: "wrap",
    gap: 12,
  };

  const copyrightStyle: React.CSSProperties = {
    color: "#94a3b8",
    fontSize: 12,
    fontFamily: "'Montserrat', sans-serif",
  };

  const infoRowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    marginBottom: 8,
  };

  const infoLabelStyle: React.CSSProperties = {
    color: "#94a3b8",
    fontSize: 12,
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
  };

  const infoValueStyle: React.CSSProperties = {
    color: "#374151",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "'Montserrat', sans-serif",
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/* Grid */}
        <div style={gridStyle} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {/* Col 1 — Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div style={logoIconBoxStyle}>
                <Icon name="Zap" size={22} color="#ffffff" />
              </div>
              <span style={logoTextStyle}>
                ЭЛЕКТРИК<span style={{ color: "#1565C0" }}>УДМ</span>
              </span>
            </div>
            <p style={descStyle}>
              Профессиональная бригада электриков в Ижевске. Работаем с 8:00 до 22:00.
            </p>

            {/* Phone */}
            <a
              href="tel:+79124658050"
              style={contactChipStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#1565C0",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name="Phone" size={14} color="#ffffff" />
              </div>
              <span style={contactChipTextStyle}>+7 (912) 465-80-50</span>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/elektrik_izh"
              target="_blank"
              rel="noopener noreferrer"
              style={contactChipStyle}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#1565C0";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#e2e8f0";
              }}
            >
              <div
                style={{
                  width: 30,
                  height: 30,
                  backgroundColor: "#dbeafe",
                  borderRadius: 6,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <Icon name="Send" size={14} color="#1565C0" />
              </div>
              <span style={{ ...contactChipTextStyle, color: "#1565C0" }}>@elektrik_izh</span>
            </a>
          </div>

          {/* Col 2 — Services */}
          <div>
            <p style={colTitleStyle}>Услуги</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOOTER_SERVICES.map((s) => (
                <li key={s.href}>
                  <Link
                    to={s.href}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1565C0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                    }}
                  >
                    <Icon name="ChevronRight" size={13} color="#1565C0" style={{ flexShrink: 0 }} />
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Navigation */}
          <div>
            <p style={colTitleStyle}>Навигация</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {FOOTER_NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    to={n.href}
                    style={footerLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1565C0";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#64748b";
                    }}
                  >
                    <Icon name="ChevronRight" size={13} color="#1565C0" style={{ flexShrink: 0 }} />
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contacts */}
          <div>
            <p style={colTitleStyle}>Контакты</p>

            <div style={{ marginBottom: 20 }}>
              {/* Phone */}
              <div style={infoRowStyle}>
                <Icon name="Phone" size={14} color="#1565C0" style={{ flexShrink: 0 }} />
                <a
                  href="tel:+79124658050"
                  style={{
                    ...infoValueStyle,
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#1565C0";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#374151";
                  }}
                >
                  +7 (912) 465-80-50
                </a>
              </div>

              {/* Telegram */}
              <div style={infoRowStyle}>
                <Icon name="Send" size={14} color="#1565C0" style={{ flexShrink: 0 }} />
                <a
                  href="https://t.me/elektrik_izh"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    ...infoValueStyle,
                    textDecoration: "none",
                    color: "#1565C0",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#1e40af";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#1565C0";
                  }}
                >
                  @elektrik_izh
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "14px 16px",
                marginBottom: 12,
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Icon name="Clock" size={14} color="#1565C0" />
                <span style={{ ...infoLabelStyle, fontWeight: 600, fontSize: 13 }}>
                  Режим работы
                </span>
              </div>
              <p style={{ ...infoValueStyle, margin: 0, marginBottom: 2 }}>
                Пн–Вс: 8:00 – 22:00
              </p>
              <p style={{ ...infoLabelStyle, margin: 0, fontSize: 11 }}>Без выходных</p>
            </div>

            {/* Area */}
            <div
              style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e2e8f0",
                borderRadius: 10,
                padding: "14px 16px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 8 }}>
                <Icon name="MapPin" size={14} color="#1565C0" />
                <span style={{ ...infoLabelStyle, fontWeight: 600, fontSize: 13 }}>
                  Районы работы
                </span>
              </div>
              <p style={{ ...infoValueStyle, margin: 0, marginBottom: 2 }}>Ижевск</p>
              <p style={{ ...infoLabelStyle, margin: 0, fontSize: 12 }}>и Завьялово</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={dividerStyle}>
          <span style={copyrightStyle}>
            © 2024 Электрик Ижевск. Все права защищены.
          </span>
          <Link
            to="/privacy/"
            style={{
              color: "#94a3b8",
              fontSize: 12,
              textDecoration: "none",
              fontFamily: "'Montserrat', sans-serif",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#1565C0";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color = "#94a3b8";
            }}
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
