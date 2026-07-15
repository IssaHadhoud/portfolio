import { getDictionary } from "../../../dictionaries";
import ContactForm from "../../component/ContactForm";

export default async function ContactPage({ params }) {
  const { locale } = await params;
  const dict = getDictionary(locale);
  return <ContactForm dict={dict.contact} />;
}
