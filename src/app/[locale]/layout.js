import Script from "next/script";
import "bootstrap/dist/css/bootstrap.min.css";
import "../globals.css";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import SplashScreen from "../component/SplashScreen";
import { getDictionary, locales, defaultLocale } from "../../dictionaries";

export const viewport = {
  themeColor: "#0a0d13",
};

const SITE_URL = "https://www.issaabuhadhoud.duckdns.org";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const path = `/${locale}`;
  const siteName = locale === "ar" ? "عيسى أبوهدهود — الموقع الشخصي" : "Issa AbuHadhoud — Portfolio";
  const titleDefault =
    locale === "ar" ? "عيسى أبوهدهود | مطوّر ويب متكامل" : "Issa AbuHadhoud | Full-Stack Developer";
  const titleTemplate = locale === "ar" ? "%s | عيسى أبوهدهود" : "%s | Issa AbuHadhoud";

  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: titleDefault,
      template: titleTemplate,
    },
    description: dict.meta.home.description,
    keywords:
      locale === "ar"
        ? [
            "عيسى أبوهدهود",
            "مطور ويب متكامل",
            "Node.js",
            "مطور .NET",
            "مطور React الأردن",
            "مطور Node.js",
            "مطور ASP.NET Core",
            "معرض أعمال مطور ويب",
          ]
        : [
            "Issa AbuHadhoud",
            "Full-Stack Developer",
            "Node.js Developer",
            ".NET Developer",
            "React Developer Jordan",
            "Node.js Developer",
            "ASP.NET Core Developer",
            "Web Developer Portfolio",
          ],
    authors: [{ name: "Issa AbuHadhoud", url: SITE_URL }],
    applicationName: siteName,
    creator: "Issa AbuHadhoud",
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    alternates: {
      canonical: path,
      languages: {
        en: `${SITE_URL}/en`,
        ar: `${SITE_URL}/ar`,
        "x-default": `${SITE_URL}/${defaultLocale}`,
      },
    },
    openGraph: {
      type: "website",
      locale: locale === "ar" ? "ar_JO" : "en_US",
      url: `${SITE_URL}${path}`,
      siteName,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: dict.meta.home.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      images: ["/og-image.png"],
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "any" },
        { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
        { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
    verification: {
      google: "googlea62d35c768ce3e4b",
    },
  };
}

// Inline, render-blocking script: reads the saved theme before paint so
// there is no flash of the wrong theme on load.
const themeInitScript = `
(function () {
  try {
    var stored = localStorage.getItem('theme');
    var theme = stored || (window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
    document.documentElement.setAttribute('data-theme', theme);
  } catch (e) {}
})();
`;

export default async function RootLayout({ children, params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const dir = dict.dir;
  const siteName = locale === "ar" ? "عيسى أبوهدهود — الموقع الشخصي" : "Issa AbuHadhoud — Portfolio";

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Issa AbuHadhoud",
    jobTitle: dict.home.role,
    description: dict.meta.home.description,
    url: `${SITE_URL}/${locale}`,
    knowsAbout: [
      "React.js",
      "Node.js",
      "Next.js",
      "ASP.NET Core",
      "MongoDB",
      "SQL Server",
      "REST APIs",
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: `${SITE_URL}/${locale}`,
    description: dict.meta.home.description,
    inLanguage: locale,
  };

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="person-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className={locale === "ar" ? "font-arabic" : ""}>
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: themeInitScript }}
        />
        <SplashScreen locale={locale} />
        <Navbar locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </body>
    </html>
  );
}
