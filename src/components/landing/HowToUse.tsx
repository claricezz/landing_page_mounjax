import { motion } from "framer-motion";
import { Droplets, Clock, CalendarCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const HowToUse = () => {
  const scrollToKits = () => {
    document.getElementById("kits")?.scrollIntoView({ behavior: "smooth" });
  };

  const steps = [
    {
      icon: Droplets,
      step: "1",
      title: "12 Gotas",
      description: "Pingue 12 gotas debaixo da língua",
    },
    {
      icon: Clock,
      step: "2",
      title: "Mesmo Horário",
      description: "Tome preferencialmente no mesmo horário",
    },
    {
      icon: CalendarCheck,
      step: "3",
      title: "Todos os Dias",
      description: "Mantenha a consistência para melhores resultados",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Transforme seu corpo com{" "}
            <span className="text-gradient-green">apenas 12 gotas ao dia</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Simples, prático e eficaz. Incorpore Mounjax na sua rotina e veja a transformação acontecer.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="text-center"
            >
              <div className="relative inline-flex items-center justify-center mb-6">
                <div className="w-20 h-20 rounded-2xl bg-secondary flex items-center justify-center">
                  <step.icon className="w-10 h-10 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold text-sm">
                  {step.step}
                </span>
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-lg text-foreground mb-6">
            Mais do que perder peso, é recuperar{" "}
            <span className="text-primary font-semibold">confiança, saúde e felicidade</span>
          </p>
          <Button variant="hero" size="xl" onClick={scrollToKits}>
            Começar Minha Transformação
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToUse;
