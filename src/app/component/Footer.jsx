import Link from "next/link";

const Footer = () => {
  return (
    <footer className="site-footer">
      <p>&copy; {new Date().getFullYear()} — Issa AbuHadhoud. Built with Next.js.</p>
      <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
        <Link href="/project">Projects</Link>
        <Link href="/training">Training</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </footer>
  );
};

export default Footer;
