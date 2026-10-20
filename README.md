# Amam

Landing page de **Amam** · 11 residencias exclusivas en San Ramón Norte, Mérida, Yucatán. Un desarrollo de MID OBRAS.

## Stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS con la paleta del brochure: salvia `#DFE3C2`, menta `#D3ECE8`, verde profundo `#1C2B2C`, bosque `#2F5E2E`
- Sin backend: el formulario abre WhatsApp con los datos prellenados

## Variables de entorno

| Variable | Uso |
|---|---|
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Número de WhatsApp de ventas con lada de país. Opcional: si no está definido se usa `529991910648`. Se lee en build. |

## Desarrollo local

```bash
npm install
npm run dev
```

## Deploy

Railway (proyecto `amam-dedication`, entorno `production`) despliega automáticamente cada push a `main`.
