import { Shield, Lock, AlertTriangle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border/50">
      <div className="container">
        {/* Warning */}
        <div className="mb-8 p-4 rounded-xl bg-accent/10 border border-accent/30">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <strong className="text-foreground">Aviso:</strong> Não comercializamos o Mounjax no Mercado Livre.
              A venda só pode ser realizada através deste Site Oficial e não nos responsabilizamos por
              compras realizadas em outros sites. Evite falsificações e riscos a sua saúde.
            </p>
          </div>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span>Compra Segura</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Lock className="w-5 h-5 text-primary" />
            <span>Site Protegido SSL</span>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm">
          <a
            href="https://mounjax.com/politicas-de-privacidade/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Políticas de Privacidade
          </a>
          <a
            href="https://mounjax.com/termos-e-condicoes-de-uso/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            Termos e Condições de Uso
          </a>
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Mounjax. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
