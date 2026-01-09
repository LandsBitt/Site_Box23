# Box23 - React + Vite + Tailwind

Migração do site estático para React com Vite e Tailwind CSS, mantendo navegação, formulário e integrações do Netlify.

## Como rodar
- Instalar dependências: `npm install`
- Ambiente local: `npm run dev`
- Build de produção: `npm run build`
- Preview da build: `npm run preview`

## Estrutura principal
- `src/components`: componentes reutilizáveis (Header, Hero, Services, Contact, FloatingWhatsApp, Footer)
- `src/App.jsx`: composição das seções
- `src/index.css`: estilos globais e base do Tailwind
- `public/imagens`: imagens estáticas usadas nas seções
- `public/robots.txt` e `public/sitemap.xml`: SEO básico
- `netlify`: funções existentes mantidas

## Formulário (Netlify)
- Mantido `fetch` para `/.netlify/functions/sendTelegram`
- Campos obrigatórios: nome, e-mail e mensagem
- Telefone é opcional

## Decisões de layout/UX
- CTA principal no Hero para reduzir fricção e levar direto ao WhatsApp.
- Cards de serviços com título e descrição sempre visíveis para melhorar leitura em mobile.
- Botão flutuante do WhatsApp some quando o menu mobile está aberto para evitar conflito visual.
- Labels visíveis no formulário para acessibilidade e contraste.
- Gradientes e espaçamentos ampliados para dar mais respiro nas seções.

## Ajustes necessários do domínio
Os arquivos `index.html`, `public/robots.txt` e `public/sitemap.xml` usam `https://box23oficina.com.br` como URL base.
Se o domínio real for outro, atualize as URLs em:
- `index.html` (OG tags e JSON-LD)
- `public/robots.txt`
- `public/sitemap.xml`

## Observações de performance
- Todas as imagens usam `loading="lazy"`.
- Para gerar versões `.webp` ou comprimir imagens em `public/imagens`, use uma ferramenta local de otimização (ex: Squoosh, ImageMagick).
