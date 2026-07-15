"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Reveal from "./Reveal";

// Emails submitted through this form are delivered to this address via
// FormSubmit (https://formsubmit.co) — a free form-to-email relay that
// needs no backend server or API keys. See the README for one-time setup.
const CONTACT_EMAIL = "issaabuhadhoud@gmail.com";

// WhatsApp number in international format, digits only (no +, spaces, or dashes).
const WHATSAPP_NUMBER = "962798824513";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

const ContactForm = ({ dict }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const router = useRouter();

  const validate = () => {
    const next = {};
    if (!name.trim()) next.name = dict.errors.name;
    if (!email.trim()) next.email = dict.errors.email;
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = dict.errors.emailInvalid;
    if (!message.trim()) next.message = dict.errors.message;
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setServerError("");
    if (!validate()) return;

    setSending(true);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New portfolio message from ${name}`,
        }),
      });

      if (!res.ok) throw new Error("Request failed");
      setSent(true);
    } catch (err) {
      setServerError(dict.errors.server + CONTACT_EMAIL + ".");
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="contact-page">
      <Reveal type="scale">
        <div className="contact-card">
          {sent ? (
            <div style={{ textAlign: "center", padding: "2rem 0" }}>
              <p
                style={{
                  fontSize: "2.5rem",
                  marginBottom: "1rem",
                  color: "var(--neon)",
                  animation: "scaleIn 0.5s var(--ease) both",
                }}
              >
                ✓
              </p>
              <h3 style={{ color: "var(--neon)", marginBottom: "0.5rem" }}>{dict.sentTitle}</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                {dict.sentBody}
              </p>
              <button
                className="btn-ghost"
                onClick={() => {
                  setSent(false);
                  setName("");
                  setEmail("");
                  setMessage("");
                  setErrors({});
                }}
              >
                {dict.sendAnother}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "0.25rem" }}>
                <span className="section-label">{dict.label}</span>
              </div>
              <h3>{dict.title}</h3>
              <p className="sub">{dict.sub}</p>

              <label className="form-label-dark" htmlFor="name">
                {dict.nameLabel}
              </label>
              <input
                id="name"
                type="text"
                placeholder={dict.namePlaceholder}
                className={`input-dark${errors.name ? " input-error" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="form-error-text">{errors.name}</p>}

              <label className="form-label-dark" htmlFor="email">
                {dict.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                placeholder={dict.emailPlaceholder}
                className={`input-dark${errors.email ? " input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="form-error-text">{errors.email}</p>}

              <label className="form-label-dark" htmlFor="message">
                {dict.messageLabel}
              </label>
              <textarea
                id="message"
                className={`input-dark${errors.message ? " input-error" : ""}`}
                placeholder={dict.messagePlaceholder}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <p className="form-error-text">{errors.message}</p>}

              {serverError && <p className="form-error-text">{serverError}</p>}

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                <button className="btn-neon" type="submit" disabled={sending}>
                  {sending ? dict.sending : dict.send}
                </button>
                <button className="btn-ghost" type="button" onClick={() => router.back()}>
                  {dict.back}
                </button>
              </div>
            </form>
          )}
        </div>
      </Reveal>

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label={dict.whatsapp}
        title={dict.whatsapp}
      >
        <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
          <path d="M12.004 2.003c-5.514 0-9.997 4.483-9.997 9.997 0 1.762.462 3.485 1.34 5.003L2 22l5.117-1.342a9.96 9.96 0 0 0 4.887 1.246h.004c5.514 0 9.997-4.483 9.997-9.997 0-2.671-1.04-5.183-2.929-7.073a9.935 9.935 0 0 0-7.072-2.831zm0 18.166h-.003a8.29 8.29 0 0 1-4.226-1.157l-.303-.18-3.037.796.81-2.96-.198-.304a8.27 8.27 0 0 1-1.264-4.365c0-4.583 3.73-8.312 8.316-8.312a8.26 8.26 0 0 1 5.88 2.437 8.26 8.26 0 0 1 2.432 5.881c0 4.583-3.73 8.164-8.407 8.164z" />
        </svg>
      </a>
    </div>
  );
};

export default ContactForm;
