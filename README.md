# Carla Guerreiro Marques — Site Premium
## Next.js 15 + TypeScript + Tailwind + Framer Motion

---

## 🚀 Início Rápido

```bash
# Instalar dependências
npm install

# Desenvolvimento
npm run dev
# → http://localhost:3000

# Build de produção
npm run build
npm start
```

---

## 📁 Estrutura

```
src/
├── app/
│   ├── layout.tsx          ← SEO completo + JSON-LD + fonts
│   ├── page.tsx            ← Página principal com locale
│   ├── sitemap.ts          ← Sitemap automático
│   └── robots.ts           ← Robots.txt
│
├── components/
│   ├── animations/
│   │   └── LoadingScreen.tsx    ← Balança da justiça animada CSS
│   ├── ui/
│   │   └── Navigation.tsx       ← Nav fixo + toggle PT/EN + mobile menu
│   └── sections/
│       ├── HeroSection.tsx      ← Hero com background geométrico animado
│       ├── AreasSection.tsx     ← 4 cards + painel de detalhe
│       ├── InsolvencyServices.tsx ← Grid 3x2 serviços insolvência
│       ├── AboutSection.tsx     ← Foto Carla + bio + fotos escritório
│       ├── FAQSection.tsx       ← Accordion animado
│       └── Footer.tsx           ← Contacto + Maps + WhatsApp + mobile bar
│
├── lib/
│   └── content.ts          ← Todos os textos PT + EN
│
└── styles/
    └── globals.css         ← Design system + animações CSS

public/
└── images/
    ├── carla-marques.webp  ← Foto da Dra. Carla (enviada)
    ├── office-desk.jpg     ← Escritório - mesa (enviada)
    ├── office-corridor.jpg ← Escritório - corredor (enviada)
    └── office-door.jpg     ← Escritório - porta (enviada)
```

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--night` | `#0B0F1A` | Fundo principal |
| `--night-2` | `#111520` | Fundo secundário |
| `--glacier` | `#F5F0EB` | Texto principal |
| `--wine` | `#5B1E2D` | Destaque, CTAs |

**Fontes:** Cormorant Garamond (títulos) + DM Sans (texto)

---

## ⚖ Loading Screen

- Balança da justiça SVG com animação CSS pura
- Agulhas oscilam com `swingLeft` / `swingRight`
- Barra de progresso `loadBar`
- Só aparece na 1ª visita da sessão (`sessionStorage`)
- Respeita `prefers-reduced-motion`

---

## 🌍 Multilíngue PT / EN

Toggle no nav — sem reload de página, estado React.
Para adicionar routing real por URL instalar `next-intl`.

---

## 🔍 SEO

- ✅ Title + meta description otimizados
- ✅ Keywords locais Setúbal
- ✅ JSON-LD: `LegalService` + `LocalBusiness` + `FAQPage`
- ✅ Open Graph + Twitter Card
- ✅ `hreflang` PT/EN + `x-default`
- ✅ Canonical URL
- ✅ Sitemap.xml automático
- ✅ Robots.txt

---

## 🚢 Deploy

### Vercel (recomendado)
```bash
npx vercel deploy --prod
```

### Outros
```bash
npm run build
# Fazer upload de .next/ + public/ para o servidor
# Usar PM2: pm2 start "npm start" --name carla
```

### Variáveis de ambiente (opcional)
```env
NEXT_PUBLIC_SITE_URL=https://www.carlaguerreiromarques.pt
```

---

## ✅ Conformidade Ordem dos Advogados

- Sem promessa de resultados em nenhum texto
- Disclaimers em cada secção de serviços
- Aviso legal + nota deontológica no footer
- Referência explícita ao Estatuto OA e Código Deontológico
