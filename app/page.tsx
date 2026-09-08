import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { FormationsSection } from "@/components/home/formations";
import { FeaturesSection } from "@/components/home/features";
import { StatsSection } from "@/components/home/stats";
import { PartenairesSection } from "@/components/home/partenaires";
import { TemoignagesSection } from "@/components/home/temoignages";
import { CtaSection } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-screen pt-20">
        <Hero />
        <FormationsSection />
        <FeaturesSection />
        <StatsSection />
        <PartenairesSection />
        <TemoignagesSection />
        <CtaSection />
      </main>
      <Footer />
    </>
  );
}
