# Răzvan Borca portfolio (Next.js + Tailwind)

## Run it
    npm install
    npm run dev      # http://localhost:3000

## Add your files
- `public/avatar/avatar.png`: your transparent PNG avatar (square, about 800x800). Until it exists the circle shows "RB".
- `public/Razvan-Borca-CV.pdf`: your CV (used by Resume / Download CV).

## Edit content
All text lives in `app/page.tsx` (data arrays at the top). Colors are in `tailwind.config.ts`.

## Avatar layers
`components/HeroAvatar.tsx` has a LAYERS array. Add `body.png`, `head.png`, `pupils.png` with increasing `depth` for a deeper cursor effect.

## Deploy
Push to GitHub, import the repo on vercel.com.
