import React, { useState } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface ServiceCardProps {
  icon: string;
  title: string;
  desc: string;
  price?: string;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, price, href }) => {
  const [hovered, setHovered] = useState(false);

  const font: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

  const cardStyle: React.CSSProperties = {
    ...font,
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#111827",
    border: hovered ? "1px solid #1565C0" : "1px solid #1E2940",
    borderRadius: 14,
    padding: "24px 20px",
    textDecoration: "none",
    transition: "border-color 0.25s, box-shadow 0.25s, transform 0.25s",
    transform: hovered ? "scale(1.03)" : "scale(1)",
    boxShadow: hovered
      ? "0 8px 32px rgba(21, 101, 192, 0.18), 0 0 0 1px #1565C0"
      : "0 2px 12px rgba(0,0,0,0.25)",
    cursor: "pointer",
    height: "100%",
    boxSizing: "border-box",
  };

  const iconBoxStyle: React.CSSProperties = {
    width: 48,
    height: 48,
    backgroundColor: hovered ? "#1565C0" : "#0F172A",
    border: "1px solid #1E2940",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
    flexShrink: 0,
    transition: "background 0.25s",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: 700,
    marginBottom: 8,
    lineHeight: 1.4,
    fontFamily: "'Montserrat', sans-serif",
  };

  const descStyle: React.CSSProperties = {
    color: "#64748B",
    fontSize: 13,
    lineHeight: 1.6,
    flex: 1,
    fontFamily: "'Montserrat', sans-serif",
  };

  const priceStyle: React.CSSProperties = {
    color: "#1E88E5",
    fontSize: 13,
    fontWeight: 700,
    marginTop: 12,
    fontFamily: "'Montserrat', sans-serif",
  };

  const footerStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 16,
    paddingTop: 14,
    borderTop: "1px solid #1E2940",
  };

  const arrowStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    backgroundColor: hovered ? "#1565C0" : "#1E2940",
    borderRadius: 8,
    transition: "background 0.25s, transform 0.25s",
    transform: hovered ? "translateX(3px)" : "translateX(0)",
    flexShrink: 0,
  };

  const moreLabelStyle: React.CSSProperties = {
    color: hovered ? "#1E88E5" : "#475569",
    fontSize: 12,
    fontWeight: 600,
    fontFamily: "'Montserrat', sans-serif",
    transition: "color 0.25s",
  };

  return (
    <Link
      to={href}
      style={cardStyle}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={iconBoxStyle}>
        <Icon name={icon} size={22} color={hovered ? "#ffffff" : "#1E88E5"} />
      </div>

      <p style={titleStyle}>{title}</p>
      <p style={descStyle}>{desc}</p>

      {price && <p style={priceStyle}>от {price} руб.</p>}

      <div style={footerStyle}>
        <span style={moreLabelStyle}>Подробнее</span>
        <div style={arrowStyle}>
          <Icon name="ArrowRight" size={16} color="#ffffff" />
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
