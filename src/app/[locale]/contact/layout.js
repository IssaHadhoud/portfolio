import { getDictionary } from "../../../dictionaries";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  const m = dict.meta.contact;
  const path = `/${locale}/contact`;
  return {
    title: m.title,
    description: m.description,
    alternates: { canonical: path, languages: { en: "/en/contact", ar: "/ar/contact" } },
    openGraph: { title: `${m.title} — ${dict.locale === "ar" ? "عيسى أبوهدهود" : "Issa AbuHadhoud"}`, description: m.description, url: path },
  };
}

export default function ContactLayout({ children }) {
  return children;
}
