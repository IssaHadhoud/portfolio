"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";
import Logo from "./Logo";
import { getDictionary } from "../../dictionaries";

const Navbar = ({ locale }) => {
  const dict = getDictionary(locale);
  const pathname = usePathname();
  const otherLocale = locale === "ar" ? "en" : "ar";

  // Strip the current /en or /ar prefix, then rebuild it with the other locale.
  const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "") || "/";
  const switchHref = `/${otherLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`;

  const links = [
    { href: `/${locale}/project`, label: dict.nav.projects },
    { href: `/${locale}/training`, label: dict.nav.training },
    { href: `/${locale}/resume`, label: dict.nav.resume },
    { href: `/${locale}/about`, label: dict.nav.about },
    { href: `/${locale}/contact`, label: dict.nav.contact },
  ];

  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <div className="container-fluid">
        <Logo locale={locale} />
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto gap-1">
            {links.map((link) => (
              <li className="nav-item" key={link.href}>
                <Link
                  className={`nav-link${pathname === link.href ? " active" : ""}`}
                  href={link.href}
                  aria-current={pathname === link.href ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="nav-item d-flex align-items-center ms-lg-2">
              <Link
                href={switchHref}
                className="lang-switch"
                aria-label={otherLocale === "ar" ? "التبديل إلى العربية" : "Switch to English"}
                title={otherLocale === "ar" ? "العربية" : "English"}
              >
                {otherLocale === "ar" ? "العربية" : "EN"}
              </Link>
            </li>
            <li className="nav-item d-flex align-items-center ms-lg-2">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
