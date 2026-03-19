import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const SERVICES = [
  { label: "Электромонтажные работы", href: "/services/elektromontazh-izhevsk/" },
  { label: "Замена проводки", href: "/services/zamena-provodki-izhevsk/" },
  { label: "Розетки и выключатели", href: "/services/ustanovka-rozetok-izhevsk/" },
  { label: "Монтаж освещения", href: "/services/montazh-osveshcheniya-izhevsk/" },
  { label: "Сборка электрощита", href: "/services/sborka-elektroschita-izhevsk/" },
  { label: "Ремонт электрики", href: "/services/remont-elektriki-izhevsk/" },
  { label: "Аварийный электрик", href: "/services/avarijnyj-elektrik-izhevsk/" },
];

const NAV_LINKS = [
  { label: "Главная", href: "/" },
  { label: "Услуги", href: "/services/", hasMega: true },
  { label: "Цены", href: "/prices/" },
  { label: "Кейсы", href: "/portfolio/" },
  { label: "Отзывы", href: "/reviews/" },
  { label: "Блог", href: "/blog/" },
  { label: "Контакты", href: "/contacts/" },
];

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const megaTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    };
  }, []);

  const handleMegaEnter = () => {
    if (megaTimerRef.current) clearTimeout(megaTimerRef.current);
    setMegaOpen(true);
  };

  const handleMegaLeave = () => {
    megaTimerRef.current = setTimeout(() => setMegaOpen(false), 150);
  };

  const fontStyle: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

  const headerStyle: React.CSSProperties = {
    ...fontStyle,
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    height: 64,
    backgroundColor: "#0A0E1A",
    borderBottom: "1px solid #1E2940",
    display: "flex",
    alignItems: "center",
  };

  const containerStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: 1280,
    margin: "0 auto",
    padding: "0 24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 16,
  };

  const logoStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    cursor: "pointer",
    textDecoration: "none",
    flexShrink: 0,
  };

  const logoIconBoxStyle: React.CSSProperties = {
    width: 36,
    height: 36,
    backgroundColor: "#1565C0",
    borderRadius: 8,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
  };

  const logoTextStyle: React.CSSProperties = {
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: "0.08em",
    color: "#ffffff",
    lineHeight: 1,
  };

  const navStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 4,
    flex: 1,
    justifyContent: "center",
  };

  const navLinkStyle: React.CSSProperties = {
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: 500,
    padding: "6px 10px",
    borderRadius: 6,
    textDecoration: "none",
    transition: "color 0.2s, background 0.2s",
    whiteSpace: "nowrap",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 4,
    background: "transparent",
    border: "none",
    fontFamily: "'Montserrat', sans-serif",
  };

  const callBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#1565C0",
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 600,
    padding: "8px 16px",
    borderRadius: 8,
    textDecoration: "none",
    border: "none",
    cursor: "pointer",
    whiteSpace: "nowrap",
    flexShrink: 0,
    fontFamily: "'Montserrat', sans-serif",
    transition: "background 0.2s",
  };

  const megaMenuStyle: React.CSSProperties = {
    position: "absolute",
    top: 64,
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#111827",
    border: "1px solid #1E2940",
    borderRadius: 12,
    padding: "24px 28px",
    minWidth: 480,
    boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
    zIndex: 100,
  };

  const megaItemStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 10,
    color: "#CBD5E1",
    fontSize: 13,
    fontWeight: 500,
    textDecoration: "none",
    padding: "9px 10px",
    borderRadius: 8,
    transition: "background 0.15s, color 0.15s",
    fontFamily: "'Montserrat', sans-serif",
  };

  const burgerBtnStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    background: "transparent",
    border: "none",
    cursor: "pointer",
    padding: 6,
    flexShrink: 0,
  };

  const burgerLineStyle: React.CSSProperties = {
    width: 24,
    height: 2,
    backgroundColor: "#ffffff",
    borderRadius: 2,
    transition: "all 0.2s",
  };

  const mobileMenuStyle: React.CSSProperties = {
    ...fontStyle,
    position: "fixed",
    top: 64,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#0A0E1A",
    borderTop: "1px solid #1E2940",
    zIndex: 49,
    overflowY: "auto",
    padding: "16px 24px 32px",
  };

  const mobileLinkStyle: React.CSSProperties = {
    display: "block",
    color: "#CBD5E1",
    fontSize: 15,
    fontWeight: 500,
    padding: "12px 0",
    textDecoration: "none",
    borderBottom: "1px solid #1E2940",
    fontFamily: "'Montserrat', sans-serif",
  };

  const mobileAccordionHeaderStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#CBD5E1",
    fontSize: 15,
    fontWeight: 500,
    padding: "12px 0",
    borderBottom: "1px solid #1E2940",
    cursor: "pointer",
    background: "transparent",
    border: "none",
    borderBottomColor: "#1E2940",
    borderBottomWidth: 1,
    borderBottomStyle: "solid",
    width: "100%",
    textAlign: "left",
    fontFamily: "'Montserrat', sans-serif",
  };

  const mobileServiceLinkStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    gap: 8,
    color: "#94A3B8",
    fontSize: 13,
    fontWeight: 500,
    padding: "9px 12px",
    textDecoration: "none",
    borderBottom: "1px solid #1E2940",
    fontFamily: "'Montserrat', sans-serif",
  };

  const mobileBtnRowStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    marginTop: 24,
  };

  const mobileTgBtnStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    backgroundColor: "transparent",
    border: "1px solid #1565C0",
    color: "#1E88E5",
    fontSize: 14,
    fontWeight: 600,
    padding: "12px 16px",
    borderRadius: 8,
    textDecoration: "none",
    fontFamily: "'Montserrat', sans-serif",
  };

  return (
    <>
      <header style={headerStyle}>
        <div style={containerStyle}>
          {/* Logo */}
          <div
            style={logoStyle}
            onClick={() => navigate("/")}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && navigate("/")}
          >
            <div style={logoIconBoxStyle}>
              <Icon name="Zap" size={20} color="#ffffff" />
            </div>
            <span style={logoTextStyle}>
              ЭЛЕКТРИК<span style={{ color: "#1E88E5" }}>УДМ</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav style={navStyle} className="hidden lg:flex">
            {NAV_LINKS.map((link) =>
              link.hasMega ? (
                <div
                  key={link.href}
                  style={{ position: "relative" }}
                  ref={megaRef}
                  onMouseEnter={handleMegaEnter}
                  onMouseLeave={handleMegaLeave}
                >
                  <Link
                    to={link.href}
                    style={navLinkStyle}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#1E88E5";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F172A";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1";
                      (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                    }}
                  >
                    {link.label}
                    <Icon
                      name="ChevronDown"
                      size={14}
                      style={{
                        transition: "transform 0.2s",
                        transform: megaOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    />
                  </Link>

                  {megaOpen && (
                    <div style={megaMenuStyle}>
                      <p
                        style={{
                          color: "#64748B",
                          fontSize: 11,
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                          textTransform: "uppercase",
                          marginBottom: 12,
                          fontFamily: "'Montserrat', sans-serif",
                        }}
                      >
                        Все услуги
                      </p>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "1fr 1fr",
                          gap: 4,
                        }}
                      >
                        {SERVICES.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            style={megaItemStyle}
                            onClick={() => setMegaOpen(false)}
                            onMouseEnter={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E2940";
                              (e.currentTarget as HTMLAnchorElement).style.color = "#1E88E5";
                            }}
                            onMouseLeave={(e) => {
                              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                              (e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1";
                            }}
                          >
                            <Icon name="ChevronRight" size={14} color="#1565C0" />
                            {s.label}
                          </Link>
                        ))}
                      </div>
                      <div
                        style={{
                          marginTop: 16,
                          paddingTop: 16,
                          borderTop: "1px solid #1E2940",
                        }}
                      >
                        <Link
                          to="/services/"
                          style={{
                            ...megaItemStyle,
                            color: "#1E88E5",
                            fontWeight: 600,
                          }}
                          onClick={() => setMegaOpen(false)}
                          onMouseEnter={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E2940";
                          }}
                          onMouseLeave={(e) => {
                            (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                          }}
                        >
                          <Icon name="ArrowRight" size={14} color="#1E88E5" />
                          Все услуги →
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.href}
                  to={link.href}
                  style={navLinkStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#1E88E5";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#0F172A";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#CBD5E1";
                    (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "transparent";
                  }}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop Call Button */}
          <a
            href="tel:+79124658050"
            style={callBtnStyle}
            className="hidden lg:flex"
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1E88E5";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.backgroundColor = "#1565C0";
            }}
          >
            <Icon name="Phone" size={15} />
            Позвонить
          </a>

          {/* Mobile Burger */}
          <button
            style={burgerBtnStyle}
            className="flex lg:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Меню"
          >
            <span
              style={{
                ...burgerLineStyle,
                transform: mobileOpen ? "rotate(45deg) translate(5px, 7px)" : "none",
              }}
            />
            <span
              style={{
                ...burgerLineStyle,
                opacity: mobileOpen ? 0 : 1,
              }}
            />
            <span
              style={{
                ...burgerLineStyle,
                transform: mobileOpen ? "rotate(-45deg) translate(5px, -7px)" : "none",
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div style={mobileMenuStyle}>
          {NAV_LINKS.map((link) =>
            link.hasMega ? (
              <div key={link.href}>
                <button
                  style={mobileAccordionHeaderStyle}
                  onClick={() => setMobileServicesOpen((v) => !v)}
                >
                  <span>{link.label}</span>
                  <Icon
                    name="ChevronDown"
                    size={16}
                    style={{
                      transition: "transform 0.2s",
                      transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                      color: "#64748B",
                    }}
                  />
                </button>
                {mobileServicesOpen && (
                  <div style={{ backgroundColor: "#060912", borderRadius: 8, marginBottom: 4 }}>
                    {SERVICES.map((s) => (
                      <Link
                        key={s.href}
                        to={s.href}
                        style={mobileServiceLinkStyle}
                        onClick={() => setMobileOpen(false)}
                      >
                        <Icon name="ChevronRight" size={13} color="#1565C0" />
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                to={link.href}
                style={mobileLinkStyle}
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            )
          )}

          <div style={mobileBtnRowStyle}>
            <a
              href="tel:+79124658050"
              style={{
                ...callBtnStyle,
                justifyContent: "center",
                fontSize: 15,
                padding: "14px 16px",
              }}
              onClick={() => setMobileOpen(false)}
            >
              <Icon name="Phone" size={16} />
              Позвонить: +7 (912) 465-80-50
            </a>
            <a
              href="https://t.me/elektrik_izh"
              target="_blank"
              rel="noopener noreferrer"
              style={mobileTgBtnStyle}
              onClick={() => setMobileOpen(false)}
            >
              <Icon name="Send" size={16} />
              Telegram: @elektrik_izh
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
