# Ethan Micciola - Portfolio Website

A modern, space-themed personal portfolio website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Space-themed design**: Dark cosmic gradients, animated starfield background, glowing accents
- **Fully responsive**: Optimized for all device sizes
- **Smooth animations**: Framer Motion animations and transitions throughout
- **Accessible**: Semantic HTML and ARIA labels
- **Performance optimized**: Fast loading with lazy-loaded images and optimized components

## Tech Stack

- **Next.js 13** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React** (Icons)

## Pages

1. **Home** (`/`) - Hero section, skills showcase, and featured projects
2. **Projects** (`/projects`) - Grid of all projects with detail pages
3. **Services** (`/services`) - Role descriptions and skill highlights
4. **About** (`/about`) - Personal profile, timeline, and competencies
5. **Contact** (`/contact`) - Contact form with validation

## Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Development

```bash
# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build

```bash
# Create production build
npm run build

# Preview the static build locally (served from ./out)
npm start
```

## Customization

All content is centralized in `/data/siteContent.ts` for easy editing:

1. **Personal Information**: Update `personalInfo` object with your details
2. **Skills**: Modify the `skills` array
3. **Projects**: Edit the `projects` array with your project details
4. **Services**: Update the `services` array to reflect your offerings
5. **Timeline**: Customize your journey in the `timeline` array
6. **Social Links**: Update GitHub and LinkedIn URLs in `socialLinks`

### Important Placeholders to Update

- Replace `email@example.com` with your actual email
- Update LinkedIn URL in `data/siteContent.ts`
- Add your resume file and update the path
- Replace the profile picture placeholder in the About page

## Project Structure

```
├── app/
│   ├── page.tsx                    # Home page
│   ├── projects/
│   │   ├── page.tsx                # Projects index
│   │   └── [slug]/page.tsx         # Project detail pages
│   ├── services/page.tsx           # Services page
│   ├── about/page.tsx              # About page
│   ├── contact/page.tsx            # Contact page
│   ├── layout.tsx                  # Root layout with navigation
│   └── globals.css                 # Global styles
├── components/
│   ├── Navbar.tsx                  # Navigation component
│   ├── Footer.tsx                  # Footer component
│   ├── Starfield.tsx               # Animated starfield background
│   ├── BackToTop.tsx               # Scroll to top button
│   ├── Badge.tsx                   # Skill badge component
│   ├── CTAButton.tsx               # Call-to-action button
│   ├── SectionHeader.tsx           # Section heading component
│   ├── ProjectCard.tsx             # Project card component
│   ├── ServiceCard.tsx             # Service card component
│   └── Timeline.tsx                # Timeline component
├── data/
│   └── siteContent.ts              # All site content (EDIT THIS!)
└── lib/
    └── utils.ts                    # Utility functions
```

## SEO

The site includes:
- Meta tags for title, description, and keywords
- Open Graph tags for social media sharing
- Twitter Card tags
- Semantic HTML structure

Update metadata in `/app/layout.tsx` for site-wide changes, or in individual page files for page-specific SEO.

## Deployment

This site can be deployed to:
- **Vercel** (recommended for Next.js)
- **Netlify**
- **AWS Amplify**
- Any platform supporting Next.js

### Deploy to GitHub Pages

This project is configured for GitHub Pages via a GitHub Actions workflow.

1) Push the repository to GitHub (default branch: `main`)
2) In your GitHub repo: **Settings → Pages**
   - **Build and deployment** → Source: **GitHub Actions**
3) Push to `main` and the workflow will build + deploy automatically

Notes:
- The site is exported as static files into `./out`.
- Asset paths are automatically prefixed for project pages (e.g., `https://<user>.github.io/<repo>/`).

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## License

This project is open source and available for personal and commercial use.

## Contact

For questions or collaboration opportunities:
- GitHub: [@EthanMM0](https://github.com/EthanMM0)
- Email: [Your Email Here]

---

Built with passion for clean code and beautiful design.
