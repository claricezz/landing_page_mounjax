import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Shield, CreditCard, Lock } from "lucide-react";
import productImage from "@/assets/3frascos1.webp";

const Hero = () => {
  const scrollToKits = () => {
    document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-8 pb-16">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-[hsl(270_35%_12%)] to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-semibold mb-6"
            >
              🔥 Fórmula 100% Natural
            </motion.span>

            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-foreground">Gotinhas que auxiliam a </span>
              <span className="text-gradient">queima de gordura</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-xl mx-auto lg:mx-0">
              <strong className="text-foreground">Chega de evitar fotos ou se esconder em roupas largas.</strong>{" "}
              Com Mounjax, emagreça de forma saudável e recupere a alegria de viver!
            </p>

            <p className="text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Apenas <span className="text-primary font-semibold">12 gotas ao dia</span> para transformar seu corpo e sua confiança.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button 
                variant="hero" 
                size="xl" 
                onClick={scrollToKits}
                className="group"
              >
                <ShoppingCart className="mr-2 group-hover:animate-bounce" />
                Comprar Agora
              </Button>
            </motion.div>

            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <div className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-primary" />
                <span>Dados Protegidos</span>
              </div>
              <div className="flex items-center gap-2">
                <CreditCard className="w-4 h-4 text-primary" />
                <span>Todos os Cartões</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-primary" />
                <span>Compra Segura</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent blur-2xl scale-110" />
              
              <motion.img
                src={productImage}
                alt="Mounjax - Suplemento para queima de gordura"
                className="relative z-10 w-full max-w-md mx-auto drop-shadow-2xl rounded-2xl"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
