"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Reveal from "./Reveal";
import WhatsAppButton from "./WhatsAppButton";

// Emails submitted through this form are delivered to this address via
// FormSubmit (https://formsubmit.co) — a free form-to-email relay that
// needs no backend server or API keys. See the README for one-time setup.
const CONTACT_EMAIL = "issaabuhadhoud@gmail.com";

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

              <div className="contact-card-actions">
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

      <WhatsAppButton label={dict.whatsappCta} />
    </div>
  );
};

export default ContactForm;
