import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ContactBanner } from "@/components/sections/ContactBanner";
import { ContactForm } from "@/components/sections/ContactForm";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { News } from "@/components/sections/News";
import { Offers } from "@/components/sections/Offers";
import { Reviews } from "@/components/sections/Reviews";
import { Services } from "@/components/sections/Services";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Offers />
        <Services />
        <HowItWorks />
        <ContactBanner />
        <News />
        <Reviews />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
