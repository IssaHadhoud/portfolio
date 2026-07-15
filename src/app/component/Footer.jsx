import Link from "next/link";
import { getDictionary } from "../../dictionaries";

const Footer = ({ locale }) => {
  const dict = getDictionary(locale);
  return (
    <footer className="site-footer">
      <p>
        © {new Date().getFullYear()} {dict.footer.rights}
      </p>
      <div style={{ display: "flex", gap: "1.75rem", flexWrap: "wrap" }}>
        <Link href={`/${locale}/project`}>{dict.nav.projects}</Link>
        <Link href={`/${locale}/training`}>{dict.nav.training}</Link>
        <Link href={`/${locale}/resume`}>{dict.nav.resume}</Link>
        <Link href={`/${locale}/about`}>{dict.nav.about}</Link>
        <Link href={`/${locale}/contact`}>{dict.nav.contact}</Link>
      </div>
    </footer>
  );
};

export default Footer;
