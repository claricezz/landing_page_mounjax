import { motion } from "framer-motion";
import { Flame, Leaf, Heart, Zap, Moon, Shield } from "lucide-react";

const Benefits = () => {
  const mainBenefits = [
    {
      icon: Flame,
      title: "Ignição Metabólica",
      description: "Café Verde e Dihidrocapsiato auxiliam a queima de gordura, mesmo em repouso.",
      color: "text-accent",
    },
    {
      icon: Leaf,
      title: "Limpeza Interna",
      description: "Cúrcuma, Colina e Inulina contribuem para saúde do fígado e intestino.",
      color: "text-primary",
    },
    {
      icon: Heart,
      title: "Controle de Desejos",
      description: "Feno-grego, Cromo, D3 e B12 controlam a saciedade e estabilizam a glicose.",
      color: "text-pink-400",
    },
  ];

  const additionalBenefits = [
    { icon: Zap, text: "Mais energia no dia a dia" },
    { icon: Moon, text: "Melhora do sono" },
    { icon: Shield, text: "100% Natural e Seguro" },
  ];

  return (
    <section className="py-20 relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-primary text-sm font-semibold mb-4">
            Por que funciona?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-gradient-green">3 Chaves</span> essenciais da fórmula
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seu corpo não é o problema, ele só precisa de um empurrão. Mounjax é uma fórmula 100% natural.
          </p>
        </motion.div>

        {/* Main Benefits */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-full p-8 rounded-3xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/10">
                <div className={`w-16 h-16 rounded-2xl bg-secondary flex items-center justify-center mb-6 ${benefit.color} group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3 text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4"
        >
          {additionalBenefits.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/50 border border-border/50"
            >
              <item.icon className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Benefits;
