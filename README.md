# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

# Lyden Portfolio - Modern Frontend Developer Portfolio

A stunning, responsive portfolio website built with modern web technologies to showcase frontend development skills and projects.

## ✨ Features

- **Modern Design**: Clean, professional design with smooth animations and gradient effects
- **Responsive Layout**: Optimized for all devices from mobile to desktop
- **Interactive Elements**: Framer Motion animations and hover effects
- **Project Showcase**: Featured and regular project sections with live demo links
- **Contact Form**: Functional contact form with validation
- **Performance Optimized**: Built with Vite for fast loading and development
- **Accessible**: WCAG compliant with semantic HTML and proper navigation

## 🚀 Tech Stack

- **React 19** - Latest React with modern hooks and features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Framer Motion** - Professional animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **Vite** - Lightning-fast build tool and development server

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd lyden-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── About.tsx          # About section with skills and services
│   ├── Contact.tsx        # Contact form and information
│   ├── Footer.tsx         # Footer with links and social media
│   ├── Hero.tsx           # Landing hero section
│   ├── Navbar.tsx         # Navigation with smooth scrolling
│   └── Projects.tsx       # Project showcase with filtering
├── App.tsx                # Main app component
├── index.css              # Global styles with Tailwind
└── main.tsx               # React app entry point
```

## 🎨 Customization

### Personal Information
Update the following files to personalize the portfolio:

- `src/components/Hero.tsx` - Name, title, and introduction
- `src/components/About.tsx` - Professional story, skills, and services
- `src/components/Projects.tsx` - Project details, images, and links
- `src/components/Contact.tsx` - Contact information and social links

### Styling
- Modify `tailwind.config.js` for custom themes and animations
- Update gradient colors and brand colors in component files
- Customize fonts and typography in `src/index.css`

### Projects
Add your projects to the `projects` array in `src/components/Projects.tsx`:

```typescript
{
  id: 1,
  title: 'Your Project Title',
  description: 'Project description...',
  image: 'project-image-url',
  technologies: ['React', 'TypeScript', 'etc'],
  demoUrl: 'https://your-demo.com',
  githubUrl: 'https://github.com/username/repo',
  featured: true, // Set to true for featured projects
}
```

## 🌟 Key Sections

### Hero Section
- Animated introduction with floating particles
- Professional avatar/logo
- Call-to-action buttons
- Social media links

### About Section
- Personal story and background
- Animated skill bars showing proficiency levels
- Service offerings with icons
- Professional experience highlights

### Projects Section
- Featured projects with detailed descriptions
- Regular project grid with quick previews
- Technology tags and filtering
- Live demo and GitHub links

### Contact Section
- Working contact form with validation
- Professional contact information
- Social media integration
- Glass-morphism design effects

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

## 🚀 Deployment

Deploy easily to platforms like:
- **Vercel**: `npm run build` then deploy the `dist` folder
- **Netlify**: Connect your Git repository for automatic deploys
- **GitHub Pages**: Use GitHub Actions for automated deployment

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](issues) for open issues.

## 📞 Contact

For questions about this portfolio template or to hire me for your project:

- Email: lyden@example.com
- LinkedIn: [Your LinkedIn]
- GitHub: [Your GitHub]

---

**Built with ❤️ by Lyden** - Frontend Developer passionate about creating exceptional digital experiences.