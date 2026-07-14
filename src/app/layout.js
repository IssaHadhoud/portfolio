import { Geist, Geist_Mono } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.css";
import Navbar from "./component/Navbar";
import BootstrapClient from "./component/BootstrapClient";
import Footer from "./component/Footer";
import SplashScreen from "./component/SplashScreen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.issaabuhadhoud.duckdns.org";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Issa AbuHadhoud — Full-Stack Developer (MERN & .NET)",
    template: "%s — Issa AbuHadhoud",
  },
  description:
    "Portfolio of Issa AbuHadhoud, a Full-Stack Developer specializing in the MERN stack and ASP.NET Core, showcasing projects, skills, and training.",
  keywords: [
    "Issa AbuHadhoud",
    "Full-Stack Developer",
    "MERN Stack Developer",
    ".NET Developer",
    "React Developer Jordan",
    "Node.js Developer",
    "ASP.NET Core Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Issa AbuHadhoud", url: SITE_URL }],
  creator: "Issa AbuHadhoud",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Issa AbuHadhoud — Portfolio",
    title: "Issa AbuHadhoud — Full-Stack Developer (MERN & .NET)",
    description:
      "Full-Stack Developer specializing in the MERN stack and ASP.NET Core. Explore projects, skills, and training.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Issa AbuHadhoud — Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Issa AbuHadhoud — Full-Stack Developer (MERN & .NET)",
    description:
      "Full-Stack Developer specializing in the MERN stack and ASP.NET Core. Explore projects, skills, and training.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "googlea62d35c768ce3e4b",
  },
};

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

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Issa AbuHadhoud",
  jobTitle: "Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in the MERN stack and ASP.NET Core.",
  url: SITE_URL,
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

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body>
        <SplashScreen />
        <Navbar />
        <main>{children}</main>
        <BootstrapClient />
        <Footer />
      </body>
    </html>
  );
}
