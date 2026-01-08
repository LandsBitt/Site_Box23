# Box23 - React + Vite + Tailwind

Migração do site estático para React com Vite e Tailwind CSS, mantendo as funcionalidades de navegação e envio do formulário para a Function do Netlify.

## Como rodar
- Instalar dependências: `npm i`
- Ambiente local: `npm run dev`
- Build de produção: `npm run build`
- Preview da build: `npm run preview`

## Estrutura principal
- `src/components`: componentes reutilizáveis (Header, Hero, Services, Contact, Footer)
- `src/App.jsx`: composição das seções
- `src/index.css`: estilos globais e base do Tailwind
- `public/imagens`: imagens estáticas usadas nas seções
- `netlify`: funções existentes mantidas

## Decisões de arquitetura
- SPA de seção única com âncoras e scroll suave (sem react-router-dom).
- Tailwind configurado com tema simples (`ember`, `charcoal`, `mist`) para manter consistência visual.
- Formulário mantém o `fetch` para `/.netlify/functions/sendTelegram`, com feedback inline e estados de envio.

## Checklist de migração
- Header/Navegação: `src/components/Header.jsx`
- Hero (resumo da empresa): `src/components/Hero.jsx`
- Serviços (cards com overlay): `src/components/Services.jsx`
- Contato (info, mapa e formulário): `src/components/Contact.jsx`
- Footer: `src/components/Footer.jsx`

## Observações
- Imagens agora vivem em `public/imagens` e são referenciadas por caminho absoluto (`/imagens/...`).
- O CSS anterior foi substituído por Tailwind. Ajustes adicionais podem ser feitos diretamente nos componentes.
