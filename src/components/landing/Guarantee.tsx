import { motion } from "framer-motion";
import { Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Guarantee = () => {
  const scrollToKits = () => {
    document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative p-8 sm:p-12 rounded-3xl bg-card border border-primary/30 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            
            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="w-16 h-16 text-primary" />
                </div>
              </div>

              {/* Content */}
              <div className="text-center lg:text-left">
                <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                  Super Garantia de{" "}
                  <span className="text-gradient-green">Satisfação</span>
                </h2>
                <h3 className="text-xl font-semibold text-accent mb-4">
                  30 Dias de Risco Zero!
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Acreditamos tanto na qualidade e eficácia do nosso produto que oferecemos uma{" "}
                  <strong className="text-foreground">Garantia Incondicional de 30 Dias</strong>.
                  Você faz o pedido, utiliza o produto e, se por qualquer motivo achar que ele
                  não atendeu às suas expectativas, devolvemos{" "}
                  <strong className="text-foreground">100% do seu dinheiro</strong>. Sem perguntas, sem burocracia.
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-6">
                  {["Devolução garantida", "Sem burocracia", "100% do valor"].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-primary">
                      <CheckCircle className="w-4 h-4" />
                      {item}
                    </span>
                  ))}
                </div>

                <Button variant="hero" size="lg" onClick={scrollToKits}>
                  Quero Começar Agora
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Guarantee;
