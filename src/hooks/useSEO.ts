import { useEffect } from "react";

const BASE_URL = "https://elektrik-izhevsk.ru";
const DEFAULT_OG_IMAGE = "/og-image.jpg";
const SCHEMA_SCRIPT_ID = "page-jsonld";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  schema?: object;
}

function setMeta(name: string, content: string, useProperty = false) {
  const attr = useProperty ? "property" : "name";
  let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function setSchema(schema: object) {
  let script = document.getElementById(SCHEMA_SCRIPT_ID) as HTMLScriptElement | null;
  if (!script) {
    script = document.createElement("script");
    script.id = SCHEMA_SCRIPT_ID;
    script.type = "application/ld+json";
    document.head.appendChild(script);
  }
  script.textContent = JSON.stringify(schema);
}

export function useSEO({ title, description, canonical, ogImage, schema }: SEOProps) {
  useEffect(() => {
    // Page title
    document.title = title;

    // Meta description
    setMeta("description", description);

    // Canonical URL
    const canonicalHref = canonical
      ? canonical.startsWith("http")
        ? canonical
        : `${BASE_URL}${canonical}`
      : BASE_URL;
    setCanonical(canonicalHref);

    // Open Graph
    setMeta("og:type", "website", true);
    setMeta("og:title", title, true);
    setMeta("og:description", description, true);
    setMeta("og:url", canonicalHref, true);
    setMeta(
      "og:image",
      ogImage
        ? ogImage.startsWith("http")
          ? ogImage
          : `${BASE_URL}${ogImage}`
        : `${BASE_URL}${DEFAULT_OG_IMAGE}`,
      true
    );
    setMeta("og:site_name", "Электрик Ижевск", true);
    setMeta("og:locale", "ru_RU", true);

    // Twitter Card
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", title);
    setMeta("twitter:description", description);
    setMeta(
      "twitter:image",
      ogImage
        ? ogImage.startsWith("http")
          ? ogImage
          : `${BASE_URL}${ogImage}`
        : `${BASE_URL}${DEFAULT_OG_IMAGE}`
    );

    // JSON-LD Schema
    if (schema) {
      setSchema(schema);
    } else {
      const existing = document.getElementById(SCHEMA_SCRIPT_ID);
      if (existing) existing.remove();
    }

    return () => {
      // Cleanup schema on unmount to avoid stale data on navigation
      const existing = document.getElementById(SCHEMA_SCRIPT_ID);
      if (existing) existing.remove();
    };
  }, [title, description, canonical, ogImage, schema]);
}
