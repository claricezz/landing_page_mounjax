import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "O Mounjax é aprovado pela ANVISA?",
      answer:
        "Mounjax está alinhado com as normas da ANVISA para comercialização e sem nenhuma restrição pelo órgão. Por se tratar de um Suplemento alimentar seguro para consumo, Mounjax é um produto dispensado da obrigatoriedade de registro.",
    },
    {
      question: "O Mounjax tem contraindicação?",
      answer:
        "Mounjax é feito com ingredientes 100% naturais e é seguro para a maioria das pessoas. No entanto, se você tem condições médicas preexistentes graves, está grávida ou amamentando um bebê com menos de 6 meses, recomendamos consultar seu médico antes de iniciar o uso. Menores de idade e alérgicos a crustáceos não podem fazer o uso.",
    },
    {
      question: "Como devo tomar Mounjax?",
      answer:
        "Recomendamos tomar 12 gotas sublingual de Mounjax antes do café da manhã. Para melhores resultados, mantenha uma alimentação equilibrada e hidrate-se adequadamente.",
    },
    {
      question: "Quanto tempo leva para ver os resultados?",
      answer:
        "Os resultados podem variar de pessoa para pessoa, mas muitos usuários começam a ver mudanças notáveis em seu peso e bem-estar geral dentro das primeiras quatro semanas de uso consistente de Mounjax.",
    },
    {
      question: "Mounjax tem efeitos colaterais?",
      answer:
        "Mounjax é formulado para ser gentil e eficaz, sem causar efeitos colaterais significativos. No entanto, como com qualquer suplemento, algumas pessoas podem experienciar desconforto digestivo inicial que geralmente se resolve com o uso continuado.",
    },
    {
      question: "Posso tomar Mounjax com outros medicamentos?",
      answer:
        "Embora Mounjax seja um suplemento seguro, é sempre importante consultar um médico antes de começar qualquer novo suplemento, especialmente se você já está tomando medicamentos prescritos, para evitar qualquer interação.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Tem alguma dúvida?{" "}
            <span className="text-gradient">Hora de esclarecer.</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
