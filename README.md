# Portfolio Nurcahyo Akbar

Web portfolio pribadi dibuat dengan **Next.js 14**, **TypeScript**, dan **Tailwind CSS**. Dilengkapi dark/light mode toggle dan animasi scroll reveal.

## Fitur
- ✅ Dark mode & Light mode (toggle di navbar)
- ✅ Animasi typewriter di hero section
- ✅ Scroll reveal animation
- ✅ Skill bar animasi
- ✅ Responsive (mobile-friendly)
- ✅ SEO-ready dengan metadata

## Jalankan Lokal

```bash
# Install dependencies
npm install

# Development server
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000)

---

## Deploy ke Vercel (GRATIS)

### Cara 1 — Via GitHub (Direkomendasikan)

1. **Push ke GitHub:**
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/portfolio-nurcahyo.git
   git push -u origin main
   ```

2. **Buka [vercel.com](https://vercel.com)** → Login dengan GitHub

3. Klik **"Add New Project"** → Import repo portfolio kamu

4. Klik **Deploy** → Selesai! ✅

Vercel otomatis detect Next.js, tidak perlu konfigurasi apapun.

### Cara 2 — Via Vercel CLI

```bash
npm i -g vercel
vercel login
vercel
```

---

## Kustomisasi

Edit file ini sesuai kebutuhan:

| File | Isi |
|------|-----|
| `components/Hero.tsx` | Nama, bio, link GitHub |
| `components/Projects.tsx` | Daftar proyek & deskripsi |
| `components/Skills.tsx` | Skill dan persentase |
| `components/Experience.tsx` | Pengalaman kerja/magang |
| `components/Contact.tsx` | Email, WhatsApp, sosmed |
| `app/layout.tsx` | Title & meta description SEO |

## Domain Gratis dari Vercel

Setelah deploy, kamu dapat domain gratis: `namaproject.vercel.app`

Untuk custom domain sendiri, bisa beli di Niagahoster/Namecheap lalu connect di Settings Vercel.
