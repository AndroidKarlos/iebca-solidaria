# 🤝 IEBCA Solidária - Plataforma de Doações

> Projeto de Atividade Extensionista - Análise e Desenvolvimento de Sistemas
> Igreja Batista Evangélica de Casa Amarela - Recife, PE

## 📋 Sobre o Projeto

A **IEBCA Solidária** é uma plataforma web moderna desenvolvida para facilitar o processo de doações de alimentos, roupas e itens de higiene para famílias em situação de vulnerabilidade da comunidade de Casa Amarela, Recife-PE.

O projeto foi desenvolvido como parte das **Atividades Extensionistas II**, alinhado aos Objetivos de Desenvolvimento Sustentável (ODS) da ONU:

- **ODS 1**: Erradicação da pobreza
- **ODS 10**: Redução das desigualdades
- **ODS 12**: Consumo e produção responsáveis

## 🚀 Tecnologias Utilizadas

Este projeto utiliza tecnologias modernas e profissionais do mercado:

- **[Next.js 14](https://nextjs.org/)** - Framework React com App Router
- **[React 18](https://react.dev/)** - Biblioteca JavaScript para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Superset JavaScript com tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Zod](https://zod.dev/)** - Validação de schemas TypeScript-first
- **[React Hook Form](https://react-hook-form.com/)** - Gerenciamento de formulários performático
- **[Google Sheets API](https://developers.google.com/sheets/api)** - Armazenamento de dados via Apps Script

## ✨ Funcionalidades

- ✅ Formulário de cadastro de doações com validação em tempo real
- ✅ Máscara automática para telefone brasileiro
- ✅ Validação de campos com feedback visual
- ✅ Integração com Google Sheets para armazenamento
- ✅ Interface responsiva (mobile-first)
- ✅ Design moderno e acessível
- ✅ SEO otimizado
- ✅ Performance otimizada com Server-Side Rendering

## 🏗️ Arquitetura do Projeto

```
IEBCA-solidaria/
├── app/
│   ├── api/
│   │   └── donations/
│   │       └── route.ts          # API Route para processar doações
│   ├── layout.tsx                 # Layout principal com metadados
│   ├── page.tsx                   # Página inicial
│   └── globals.css                # Estilos globais
├── components/
│   ├── Header.tsx                 # Cabeçalho
│   ├── Hero.tsx                   # Seção hero
│   ├── DonationTypes.tsx          # Tipos de doação
│   ├── DonationForm.tsx           # Formulário principal
│   ├── HowItWorks.tsx             # Como funciona
│   └── Footer.tsx                 # Rodapé
├── types/
│   └── donation.ts                # Schemas e tipos TypeScript
├── lib/                           # Utilitários e helpers
├── google-apps-script.js          # Script para Google Sheets
├── .env.example                   # Exemplo de variáveis de ambiente
└── README.md                      # Documentação
```

## 🔧 Instalação e Configuração

### Pré-requisitos

- Node.js 18+ instalado
- npm ou yarn
- Conta Google (para integração com Sheets)

### 1. Clone o repositório

```bash
git clone <url-do-repositorio>
cd IEBCA-solidaria
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env.local
```

Edite o arquivo `.env.local` e adicione sua URL do Google Apps Script (veja próxima seção).

### 4. Rode o servidor de desenvolvimento

```bash
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## 📊 Configuração do Google Sheets

### 1. Criar a Planilha

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha chamada "IEBCA Solidária - Doações"
3. Na primeira linha (A1:G1), adicione os cabeçalhos:
   ```
   Data/Hora | Nome | Telefone | Tipo de Doação | Quantidade | Endereço | Observações
   ```

### 2. Configurar o Apps Script

1. Na planilha, vá em **Extensions > Apps Script**
2. Copie o conteúdo do arquivo `google-apps-script.js` deste projeto
3. Cole no editor do Apps Script
4. Clique em **Deploy > New deployment**
5. Configurações:
   - Type: **Web app**
   - Execute as: **Me**
   - Who has access: **Anyone**
6. Clique em **Deploy**
7. Copie a URL gerada

### 3. Adicionar URL ao Projeto

Cole a URL no arquivo `.env.local`:

```env
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/SEU_SCRIPT_ID/exec
```

## 🧪 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar build de produção
npm start

# Linting
npm run lint
```

## 📱 Responsividade

O projeto foi desenvolvido com abordagem **mobile-first**, garantindo perfeita visualização em:

- 📱 Smartphones (320px+)
- 📱 Tablets (768px+)
- 💻 Desktops (1024px+)
- 🖥️ Telas grandes (1440px+)

## 🎨 Design System

### Cores Principais

- **Verde Principal**: `#4CAF50` - Representa esperança e solidariedade
- **Verde Escuro**: `#2E7D32` - Acentos e hover states
- **Cinza**: `#F5F5F5` - Backgrounds neutros

### Tipografia

- **Fonte**: Poppins (Google Fonts)
- **Pesos**: 300 (Light), 400 (Regular), 600 (SemiBold), 700 (Bold)

## 🔐 Validações

O formulário implementa validações robustas:

- **Nome**: Mínimo 3 caracteres
- **Telefone**: Formato (XX) XXXXX-XXXX
- **Tipo de Doação**: Seleção obrigatória
- **Quantidade**: Campo obrigatório
- **Endereço**: Mínimo 10 caracteres

## 🌐 Deploy

### Vercel (Recomendado)

1. Faça push do código para GitHub
2. Acesse [vercel.com](https://vercel.com)
3. Importe o repositório
4. Adicione a variável de ambiente `GOOGLE_SCRIPT_URL`
5. Deploy!

### Outras Plataformas

O projeto é compatível com:

- Netlify
- AWS Amplify
- Google Cloud Run
- Railway
- Render

## 📚 Aprendizados e Justificativas Técnicas

### Por que Next.js?

- **SEO otimizado**: Renderização do lado do servidor melhora indexação
- **Performance**: Code splitting automático e otimizações built-in
- **Escalabilidade**: Fácil adicionar novas funcionalidades (dashboard admin, etc)
- **Mercado**: Tecnologia amplamente utilizada por empresas

### Por que TypeScript?

- **Segurança**: Detecção de erros em tempo de desenvolvimento
- **Manutenibilidade**: Código auto-documentado com tipos
- **Produtividade**: Autocomplete e IntelliSense robustos

### Por que Tailwind CSS?

- **Velocidade**: Desenvolvimento rápido com classes utilitárias
- **Consistência**: Design system coeso
- **Performance**: CSS otimizado e purificado em produção

### Por que Zod + React Hook Form?

- **Validação type-safe**: Schema unificado para front e back
- **Performance**: Renderizações otimizadas
- **UX**: Feedback imediato ao usuário

## 👥 Equipe

Projeto desenvolvido como Atividade Extensionista por estudantes de ADS - Uninter.

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos e sociais.

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📞 Contato

**Igreja Batista Evangélica de Casa Amarela**
📍 Bairro de Casa Amarela - Recife, PE

---

**Desenvolvido com ❤️ e tecnologia para transformar vidas**
