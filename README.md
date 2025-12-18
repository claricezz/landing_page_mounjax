# Monjaux

🌐 **Site do projeto:** https://mounjax.vercel.app/

Monjaux é um projeto front-end desenvolvido com **React**, **TypeScript** e **Vite**, com foco em uma arquitetura organizada, componentes reutilizáveis e uma interface moderna e responsiva utilizando **Tailwind CSS**.

O projeto foi estruturado para facilitar a manutenção, escalabilidade e reutilização de componentes, seguindo boas práticas de desenvolvimento front-end.

---

## 🧩 Tecnologias Utilizadas

- **React** – Biblioteca para construção de interfaces
- **TypeScript** – Tipagem estática para maior segurança e organização
- **Vite** – Build tool rápida e moderna
- **Tailwind CSS** – Estilização utilitária e responsiva
- **PostCSS** – Processamento de CSS
- **ESLint** – Padronização e qualidade de código

---

## 📁 Estrutura do Projeto

```text
Monjaux/
├── public/                 # Arquivos públicos
├── src/
│   ├── assets/             # Imagens, ícones e recursos visuais
│   ├── components/         # Componentes reutilizáveis
│   │   ├── landing/        # Componentes específicos da landing page
│   │   └── ui/             # Componentes de UI genéricos
│   │       └── NavLink.tsx
│   ├── hooks/              # Hooks customizados
│   ├── lib/                # Funções utilitárias e helpers
│   ├── pages/              # Páginas da aplicação
│   ├── App.tsx             # Componente raiz
│   ├── main.tsx            # Ponto de entrada da aplicação
│   ├── index.css           # Estilos globais
│   └── vite-env.d.ts       # Tipagens do Vite
├── index.html              # Template HTML principal
├── tailwind.config.ts      # Configuração do Tailwind
├── tsconfig.json           # Configuração do TypeScript
├── package.json            # Dependências e scripts
└── README.md               # Documentação do projeto
