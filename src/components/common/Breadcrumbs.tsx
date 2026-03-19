import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Icon from "@/components/ui/icon";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const BASE_URL = "https://elektrik-izhevsk.ru";
const SCHEMA_SCRIPT_ID = "breadcrumb-jsonld";

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  useEffect(() => {
    const schemaItems = items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: `${BASE_URL}${item.href}` } : {}),
    }));

    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: schemaItems,
    };

    let script = document.getElementById(SCHEMA_SCRIPT_ID) as HTMLScriptElement | null;

    if (!script) {
      script = document.createElement("script");
      script.id = SCHEMA_SCRIPT_ID;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(schema);

    return () => {
      const existing = document.getElementById(SCHEMA_SCRIPT_ID);
      if (existing) existing.remove();
    };
  }, [items]);

  const font: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

  const wrapStyle: React.CSSProperties = {
    ...font,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
    gap: 2,
    padding: "8px 0",
  };

  const linkStyle: React.CSSProperties = {
    color: "#64748B",
    fontSize: 13,
    fontWeight: 500,
    textDecoration: "none",
    padding: "2px 4px",
    borderRadius: 4,
    transition: "color 0.15s",
    fontFamily: "'Montserrat', sans-serif",
    whiteSpace: "nowrap",
  };

  const currentStyle: React.CSSProperties = {
    color: "#94A3B8",
    fontSize: 13,
    fontWeight: 600,
    padding: "2px 4px",
    fontFamily: "'Montserrat', sans-serif",
    whiteSpace: "nowrap",
  };

  const separatorStyle: React.CSSProperties = {
    color: "#1E2940",
    display: "flex",
    alignItems: "center",
    flexShrink: 0,
  };

  return (
    <nav aria-label="Хлебные крошки" style={wrapStyle}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;

        return (
          <React.Fragment key={`${item.label}-${index}`}>
            {isLast ? (
              <span style={currentStyle} aria-current="page">
                {item.label}
              </span>
            ) : (
              item.href ? (
                <Link
                  to={item.href}
                  style={linkStyle}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#1E88E5";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color = "#64748B";
                  }}
                >
                  {item.label}
                </Link>
              ) : (
                <span style={linkStyle}>{item.label}</span>
              )
            )}

            {!isLast && (
              <span style={separatorStyle} aria-hidden="true">
                <Icon name="ChevronRight" size={14} />
              </span>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumbs;
