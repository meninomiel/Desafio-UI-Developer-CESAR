# Desafio CESAR UI Developer

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Styled Components](https://img.shields.io/badge/Styled_Components-6.1-DB7093?logo=styled-components&logoColor=white)](https://styled-components.com/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> Sistema de cadastro de candidatos desenvolvido como desafio técnico para a vaga de **UI Developer Sênior** no CESAR.

## Sobre o Projeto

Este projeto implementa um sistema completo de registro de candidatos com foco em **experiência do usuário**, **acessibilidade** e **design system consistente**. A solução foi desenvolvida seguindo as especificações do desafio técnico e boas práticas de desenvolvimento front-end.

### ✨ Funcionalidades

✅ **Formulário de Registro Completo**
  - Campos de texto (nome, sobrenome, email)
  - Campo de telefone
  - Campo de endereço (opcional)
  - Upload de currículo (PDF, DOC, ODT)
  
✅ **Validação em Tempo Real**
  - Estados visuais (default, hover, focus, error, success)
  - Componentização dos campos e componentes presentes no Figma
  - Validação de tipos de arquivo

✅ **Design Responsivo**
  - Layout adaptável para mobile e desktop
  - Menu mobile com overlay
  - Componentes otimizados para touch

✅ **Acessibilidade (WCAG 2.1)**
  - Labels semânticos
  - ARIA attributes
  - Navegação por teclado
  - Foco visível

---

## 🚀 Tecnologias

### **Core**
- **React 18.3.1** - Biblioteca UI
- **TypeScript 5.6** - Tipagem estática
- **Vite 6.0** - Build tool e dev server

### **Styling & UI**
- **Styled Components 6.1** - CSS-in-JS
- **Design Tokens** - Sistema de design consistente para cores e espaçamentos
- **CSS Grid & Flexbox** - Layouts responsivos

### **Ferramentas**
- **ESLint** - Linting
- **Git** - Controle de versão

### **IA**
- **Github Copilot** - Para debuging e sugestões
- **Perplexity** - Pesquisa e tirar dúvidas técnicas

---

## 📦 Instalação

### Pré-requisitos

- Node.js >= 18.x
- npm >= 9.x ou yarn >= 1.22.x

### Passo a passo

1. **Clone o repositório**
```bash
git clone <url-do-repositorio>
cd cesar-ui-challenge
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Inicie o servidor de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Acesse o navegador**
```bash
http://localhost:5173
```

## 🏗️ Estrutura do Projeto

```text
src/
├── assets/           # Ícones e imagens
│   └── icons/
├── components/       # Componentes reutilizáveis
│   ├── button/
│   ├── file-upload/
│   ├── input/
│   ├── navigation/
│   └── ...
├── hooks/           # Custom hooks
│   └── useForm.ts
├── pages/           # Páginas da aplicação
│   ├── _layout/     # Header, Footer
│   └── register/    # Página de registro
├── styles/          # Theme e estilos globais
│   ├── theme.ts
│   └── GlobalStyle.ts
└── App.tsx          # Componente raiz

```

## 👨‍💻 Autor

### Edmiel Leandro
- LinkedIn: linkedin.com/in/edmiel-leandro
- Portfolio: meninomiel.com.br
- Email: contato@meninomiel.com.br