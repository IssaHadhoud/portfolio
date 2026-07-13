"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Reveal from "../component/Reveal";

// Emails submitted through this form are delivered to this address via
// FormSubmit (https://formsubmit.co) — a free form-to-email relay that
// needs no backend server or API keys. See the README for one-time setup.
const CONTACT_EMAIL = "issaabuhadhoud@gmail.com";

const ContactPage = () => {
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
    if (!name.trim()) next.name = "Please enter your name.";
    if (!email.trim()) next.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(email)) next.email = "Enter a valid email.";
    if (!message.trim()) next.message = "Please write a message.";
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
      setServerError(
        "Something went wrong sending your message. Please try again, or email me directly at " +
          CONTACT_EMAIL +
          "."
      );
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
              <h3 style={{ color: "var(--neon)", marginBottom: "0.5rem" }}>Message Sent!</h3>
              <p style={{ color: "var(--muted)", fontSize: "0.9rem", marginBottom: "1.5rem" }}>
                I&apos;ll get back to you as soon as possible.
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
                Send Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "0.25rem" }}>
                <span className="section-label">Let&apos;s Talk</span>
              </div>
              <h3>Get in Touch</h3>
              <p className="sub">Drop me a message and I&apos;ll respond shortly.</p>

              <label className="form-label-dark" htmlFor="name">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Jane Doe"
                className={`input-dark${errors.name ? " input-error" : ""}`}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && <p className="form-error-text">{errors.name}</p>}

              <label className="form-label-dark" htmlFor="email">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                className={`input-dark${errors.email ? " input-error" : ""}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              {errors.email && <p className="form-error-text">{errors.email}</p>}

              <label className="form-label-dark" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className={`input-dark${errors.message ? " input-error" : ""}`}
                placeholder="What's on your mind?"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              {errors.message && <p className="form-error-text">{errors.message}</p>}

              {serverError && <p className="form-error-text">{serverError}</p>}

              <div style={{ display: "flex", gap: "0.75rem", marginTop: "1rem" }}>
                <button className="btn-neon" type="submit" disabled={sending}>
                  {sending ? "Sending…" : "Send Message →"}
                </button>
                <button className="btn-ghost" type="button" onClick={() => router.back()}>
                  Back
                </button>
              </div>
            </form>
          )}
        </div>
      </Reveal>
    </div>
  );
};

export default ContactPage;
