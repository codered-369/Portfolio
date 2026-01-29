# Portfolio Website - Vishwanath Gouda

A modern, production-ready portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features dark/light theme toggle, smooth animations, SEO optimization, and WCAG 2.1 AA accessibility compliance.

## 🚀 Features

- ✨ **Modern Design**: Clean, professional UI with smooth animations and micro-interactions
- 🌓 **Dark/Light Theme**: System preference detection with localStorage persistence
- 📱 **Fully Responsive**: Mobile-first design that works on all devices
- ⚡ **Performance Optimized**: Lighthouse scores 90+ across all metrics
- ♿ **Accessible**: WCAG 2.1 AA compliant with proper ARIA labels and keyboard navigation
- 🔍 **SEO Optimized**: Meta tags, Open Graph, Twitter Cards, and structured data (schema.org)
- 🎯 **Scroll Spy Navigation**: Active section highlighting based on scroll position
- 📧 **Contact Form**: Functional contact form with validation
- 🎨 **Customizable**: Easy content management via JSON file

## 📋 Sections

1. **Hero** - Introduction with CTA buttons and social links
2. **About** - Personal information and key highlights
3. **Skills** - Categorized technical skills and technologies
4. **Experience** - Work history with achievements
5. **Projects** - Featured projects and open source contributions
6. **Education & Certifications** - Academic background and professional certifications
7. **Testimonials** - Client testimonials carousel
8. **Contact** - Contact form and information

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Theme**: next-themes
- **Animations**: Framer Motion (optional)

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/codered-369/portfolio.git
cd portfolio-vishwanath
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Customization

### Update Content

Edit the `data/content.json` file to update your personal information, projects, experience, skills, etc.

### Update Styles

- **Colors**: Modify `app/globals.css` and `tailwind.config.ts`
- **Fonts**: Update Google Fonts import in `app/globals.css`
- **Theme**: Adjust CSS variables in `app/globals.css`

### Add Resume

Place your resume PDF in `public/resume/` and update the path in `data/content.json`.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Netlify

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

### Cloudflare Pages

1. Push your code to GitHub
2. Connect your repository on [Cloudflare Pages](https://pages.cloudflare.com)
3. Build command: `npm run build`
4. Build output directory: `.next`

## 📊 Performance

Target Lighthouse Scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 🧪 Testing

Run ESLint:
```bash
npm run lint
```

Build for production:
```bash
npm run build
```

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Vishwanath Gouda**
- GitHub: [@codered-369](https://github.com/codered-369)
- LinkedIn: [vishwanath-narayan](https://linkedin.com/in/vishwanath-narayan)
- Email: vishwa9483500835@gmail.com

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Built with ❤️ using Next.js & Tailwind CSS
