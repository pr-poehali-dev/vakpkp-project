import React, { useState } from "react";
import Icon from "@/components/ui/icon";

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  className?: string;
}

type FormStatus = "idle" | "loading" | "success" | "error";

const ContactForm: React.FC<ContactFormProps> = ({
  title = "Оставить заявку",
  subtitle = "Перезвоним в течение 30 минут",
  className,
}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [phoneError, setPhoneError] = useState(false);

  const [nameFocused, setNameFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const [commentFocused, setCommentFocused] = useState(false);

  const font: React.CSSProperties = { fontFamily: "'Montserrat', sans-serif" };

  const wrapStyle: React.CSSProperties = {
    ...font,
    backgroundColor: "#111827",
    border: "1px solid #1E2940",
    borderRadius: 16,
    padding: "32px 28px",
  };

  const titleStyle: React.CSSProperties = {
    color: "#ffffff",
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 4,
    fontFamily: "'Montserrat', sans-serif",
  };

  const subtitleStyle: React.CSSProperties = {
    color: "#64748B",
    fontSize: 13,
    marginBottom: 24,
    fontFamily: "'Montserrat', sans-serif",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    color: "#94A3B8",
    fontSize: 12,
    fontWeight: 600,
    marginBottom: 6,
    letterSpacing: "0.04em",
    fontFamily: "'Montserrat', sans-serif",
  };

  const inputBase: React.CSSProperties = {
    width: "100%",
    backgroundColor: "#0A0E1A",
    border: "1px solid #1E2940",
    borderRadius: 8,
    padding: "11px 14px",
    color: "#ffffff",
    fontSize: 14,
    outline: "none",
    boxSizing: "border-box",
    fontFamily: "'Montserrat', sans-serif",
    transition: "border-color 0.2s",
  };

  const inputFocused: React.CSSProperties = {
    ...inputBase,
    borderColor: "#1565C0",
  };

  const inputError: React.CSSProperties = {
    ...inputBase,
    borderColor: "#EF4444",
  };

  const fieldStyle: React.CSSProperties = {
    marginBottom: 16,
  };

  const btnStyle: React.CSSProperties = {
    width: "100%",
    backgroundColor: status === "loading" ? "#1E2940" : "#1565C0",
    color: "#ffffff",
    fontSize: 14,
    fontWeight: 700,
    padding: "13px 20px",
    borderRadius: 8,
    border: "none",
    cursor: status === "loading" ? "not-allowed" : "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    marginTop: 8,
    fontFamily: "'Montserrat', sans-serif",
    transition: "background 0.2s",
  };

  const successStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: "#052E16",
    border: "1px solid #166534",
    borderRadius: 10,
    padding: "14px 16px",
    marginTop: 16,
  };

  const errorStyle: React.CSSProperties = {
    display: "flex",
    alignItems: "flex-start",
    gap: 12,
    backgroundColor: "#1C0A0A",
    border: "1px solid #7F1D1D",
    borderRadius: 10,
    padding: "14px 16px",
    marginTop: 16,
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!phone.trim()) {
      setPhoneError(true);
      return;
    }

    setPhoneError(false);
    setStatus("loading");

    try {
      // Имитация отправки запроса
      await new Promise<void>((resolve) => setTimeout(resolve, 1200));
      setStatus("success");
      setName("");
      setPhone("");
      setComment("");
    } catch {
      setStatus("error");
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (phoneError && e.target.value.trim()) setPhoneError(false);
  };

  const getInputStyle = (focused: boolean, hasError?: boolean): React.CSSProperties => {
    if (hasError) return inputError;
    if (focused) return inputFocused;
    return inputBase;
  };

  return (
    <div style={wrapStyle} className={className}>
      {title && <p style={titleStyle}>{title}</p>}
      {subtitle && <p style={subtitleStyle}>{subtitle}</p>}

      {status === "success" ? (
        <div style={successStyle}>
          <Icon name="CheckCircle" size={20} color="#22C55E" style={{ flexShrink: 0, marginTop: 1 }} />
          <div>
            <p
              style={{
                color: "#22C55E",
                fontSize: 14,
                fontWeight: 600,
                margin: "0 0 4px",
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Заявка принята!
            </p>
            <p
              style={{
                color: "#86EFAC",
                fontSize: 13,
                margin: 0,
                fontFamily: "'Montserrat', sans-serif",
              }}
            >
              Перезвоним в течение 30 минут.
            </p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          {/* Name */}
          <div style={fieldStyle}>
            <label style={labelStyle}>Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              placeholder="Ваше имя"
              style={getInputStyle(nameFocused)}
              autoComplete="name"
            />
          </div>

          {/* Phone */}
          <div style={fieldStyle}>
            <label style={labelStyle}>
              Телефон{" "}
              <span style={{ color: "#EF4444" }}>*</span>
            </label>
            <input
              type="tel"
              value={phone}
              onChange={handlePhoneChange}
              onFocus={() => setPhoneFocused(true)}
              onBlur={() => setPhoneFocused(false)}
              placeholder="+7 (___) ___-__-__"
              style={getInputStyle(phoneFocused, phoneError)}
              autoComplete="tel"
            />
            {phoneError && (
              <p
                style={{
                  color: "#EF4444",
                  fontSize: 12,
                  marginTop: 4,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Пожалуйста, укажите номер телефона
              </p>
            )}
          </div>

          {/* Comment */}
          <div style={fieldStyle}>
            <label style={labelStyle}>Комментарий</label>
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              onFocus={() => setCommentFocused(true)}
              onBlur={() => setCommentFocused(false)}
              placeholder="Опишите задачу..."
              rows={3}
              style={{
                ...getInputStyle(commentFocused),
                resize: "vertical",
                minHeight: 80,
              }}
            />
          </div>

          {status === "error" && (
            <div style={errorStyle}>
              <Icon name="AlertCircle" size={18} color="#EF4444" style={{ flexShrink: 0, marginTop: 1 }} />
              <p
                style={{
                  color: "#FCA5A5",
                  fontSize: 13,
                  margin: 0,
                  fontFamily: "'Montserrat', sans-serif",
                }}
              >
                Ошибка отправки. Позвоните нам:{" "}
                <a
                  href="tel:+79124658050"
                  style={{ color: "#1E88E5", textDecoration: "none" }}
                >
                  +7 (912) 465-80-50
                </a>
              </p>
            </div>
          )}

          <button
            type="submit"
            style={btnStyle}
            disabled={status === "loading"}
            onMouseEnter={(e) => {
              if (status !== "loading") {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1E88E5";
              }
            }}
            onMouseLeave={(e) => {
              if (status !== "loading") {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "#1565C0";
              }
            }}
          >
            {status === "loading" ? (
              <>
                <Icon name="Loader" size={16} />
                Отправляем...
              </>
            ) : (
              <>
                <Icon name="Send" size={16} />
                Отправить заявку
              </>
            )}
          </button>

          <p
            style={{
              color: "#475569",
              fontSize: 11,
              textAlign: "center",
              marginTop: 10,
              fontFamily: "'Montserrat', sans-serif",
            }}
          >
            Нажимая кнопку, вы соглашаетесь с{" "}
            <a
              href="/privacy/"
              style={{ color: "#64748B", textDecoration: "underline" }}
            >
              политикой конфиденциальности
            </a>
          </p>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
