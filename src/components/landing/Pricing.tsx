import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Star, Truck,  } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "1 Frasco",
      duration: "30 dias",
      originalPrice: "R$187",
      price: "R$147",
      installment: "12x de R$14,76",
      link: "https://app.monetizze.com.br/r/ANR25657360?u=c&pl=QH336826",
      popular: false,
      bottles: 1,
    },
    {
      name: "Leve 3 Pague 2",
      duration: "90 dias",
      originalPrice: "R$392",
      price: "R$197",
      installment: "12x de R$19,78",
      link: "https://app.monetizze.com.br/r/ANR25657360?u=c&pl=AJ338770",
      popular: true,
      bottles: 3,
      savings: "Economia de R$195",
    },
    {
      name: "Leve 5 Pague 3",
      duration: "150 dias",
      originalPrice: "R$467",
      price: "R$247",
      installment: "12x de R$24,80",
      link: "https://app.monetizze.com.br/r/ANR25657360?u=c&pl=MU338771",
      popular: false,
      bottles: 5,
      savings: "Economia de R$220",
    },
    {
      name: "Leve 8 Pague 5",
      duration: "240 dias",
      originalPrice: "R$597",
      price: "R$377",
      installment: "12x de R$37,85",
      link: "https://app.monetizze.com.br/r/ANR25657360?u=c&pl=UX338772",
      popular: false,
      bottles: 8,
      savings: "Maior economia",
    },
  ];

  /*const features = [
    "Frete Grátis",
    "E-book de Receitas",
    "App de Acompanhamento",
    "Garantia de 30 dias",
  ];*/


    const trackBuyClick = (plan: {
        name: string;
        duration: string;
        price: string;
        bottles: number;
    }) => {
        if (typeof window !== "undefined" && "gtag" in window) {
            window.gtag("event", "click_comprar_agora", {
                event_category: "ecommerce_cta",
                event_label: plan.name,
                plano: plan.duration,
                preco: plan.price,
                frascos: plan.bottles,
            });
        }
    };

    return (
    <section id="kits" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/20 text-accent text-sm font-semibold mb-4">
            ⏰ Oferta Por Tempo Limitado
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Escolha seu{" "}
            <span className="text-gradient">tratamento</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-2">
            Transforme seu corpo com apenas 12 gotas ao dia
          </p>
          <p className="text-primary font-semibold flex items-center justify-center gap-2">
            <Truck className="w-5 h-5" />
            Frete Grátis para todo Brasil
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative ${plan.popular ? "lg:-mt-4 lg:mb-4" : ""}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="flex items-center gap-1 px-4 py-1 bg-accent text-accent-foreground rounded-full text-sm font-bold shadow-lg">
                    <Star className="w-4 h-4 fill-current" />
                    Mais Vendido
                  </span>
                </div>
              )}
              
              <div
                className={`h-full flex flex-col p-6 rounded-3xl border transition-all duration-300 hover:scale-[1.02] ${
                  plan.popular
                    ? "bg-gradient-to-b from-primary/20 to-card border-primary shadow-lg shadow-primary/20"
                    : "bg-card border-border/50 hover:border-primary/30"
                }`}
              >
                {/* Header */}
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground mb-1">Tratamento para</p>
                  <h3 className="font-heading text-2xl font-bold text-foreground mb-1">
                    {plan.duration}
                  </h3>
                  <p className="text-sm font-semibold text-primary">{plan.name}</p>
                  {plan.savings && (
                    <span className="inline-block mt-2 px-3 py-1 bg-primary/20 text-primary rounded-full text-xs font-semibold">
                      {plan.savings}
                    </span>
                  )}
                </div>

                {/* Price */}
                <div className="text-center mb-6">
                  <p className="text-sm text-muted-foreground line-through">
                    {plan.originalPrice}
                  </p>
                  <p className="text-sm text-muted-foreground">por apenas</p>
                  <p className="font-heading text-4xl font-bold text-foreground my-2">
                    {plan.price}
                  </p>
                  <p className="text-sm text-primary font-medium">
                    ou {plan.installment}
                  </p>
                </div>

                {/* Features */}
               {/* <ul className="space-y-3 mb-6 flex-grow">
                  {features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                  <li className="flex items-center gap-2 text-sm text-accent font-medium">
                    <Gift className="w-4 h-4 flex-shrink-0" />
                    + Bônus Exclusivos
                  </li>
                </ul>*/}

                {/* CTA */}
                  <Button
                      variant={plan.popular ? "hero" : "success"}
                      size="lg"
                      className="w-full"
                      onClick={() => {
                          trackBuyClick(plan);
                          window.open(plan.link, "_blank");
                      }}
                  >
                      Comprar Agora
                  </Button>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Payment Methods */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-4">Formas de pagamento aceitas:</p>
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {["Visa", "Mastercard", "Elo", "Amex", "PIX", "Boleto"].map((method) => (
              <span
                key={method}
                className="px-4 py-2 bg-secondary/50 rounded-lg text-sm text-muted-foreground border border-border/50"
              >
                {method}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
