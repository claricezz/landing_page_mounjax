import { Helmet } from "react-helmet-async";
import Hero from "@/components/landing/Hero";
import MarqueeBanner from "@/components/landing/MarqueeBanner";
import Results from "@/components/landing/Results";
import Benefits from "@/components/landing/Benefits";
import HowToUse from "@/components/landing/HowToUse";
import Pricing from "@/components/landing/Pricing";
import Guarantee from "@/components/landing/Guarantee";
import FAQ from "@/components/landing/FAQ";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Mounjax - Gotinhas que Auxiliam a Queima de Gordura | Emagreça de Forma Saudável</title>
        <meta
          name="description"
          content="Mounjax: fórmula 100% natural em gotas que auxilia a queima de gordura. Apenas 12 gotas ao dia para transformar seu corpo. Frete grátis e garantia de 30 dias."
        />
        <meta name="keywords" content="mounjax, emagrecimento, queima de gordura, suplemento natural, perda de peso" />
        <link rel="canonical" href="https://mounjax.com/" />
      </Helmet>

      <main className="overflow-hidden">
        <Hero />
        <MarqueeBanner />
        <Results />
        <Benefits />
        <HowToUse />
        <Pricing />
        <Guarantee />
        <FAQ />
        <Footer />
      </main>
    </>
  );
};

export default Index;
