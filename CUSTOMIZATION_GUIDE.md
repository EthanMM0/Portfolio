# Quick Customization Guide

This guide will help you personalize your portfolio website.

## Step 1: Update Personal Information

Open `/data/siteContent.ts` and update these fields:

```typescript
export const personalInfo = {
  name: "Ethan Micciola",           // Keep or change
  title: "Software Engineering Technology Student",
  tagline: "Cybersecurity & Full-Stack Development",
  email: "email@example.com",       // ⚠️ REPLACE with your real email
  github: "https://github.com/EthanMM0",
  linkedin: "https://linkedin.com/in/your-profile",  // ⚠️ REPLACE with your LinkedIn URL
  resume: "/resume.pdf",            // ⚠️ Add your resume file to /public/ folder
  location: "Ontario, Canada",
  // ... rest is already customized for you
};
```

## Step 2: Add Your Profile Photo

1. Add your headshot image to `/public/` folder (e.g., `/public/profile.jpg`)
2. Open `/app/about/page.tsx`
3. Find this section (around line 60):

```tsx
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-4 border-cyan-500/30">
  <div className="w-full h-full flex items-center justify-center">
    <User className="w-24 h-24 text-cyan-400/50" />
  </div>
  <div className="absolute inset-0 flex items-center justify-center">
    <p className="text-xs text-center text-cyan-400 px-4">
      Replace with<br />your headshot
    </p>
  </div>
</div>
```

4. Replace it with:

```tsx
<div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-cyan-500/30">
  <Image
    src="/profile.jpg"
    alt="Ethan Micciola"
    width={192}
    height={192}
    className="object-cover"
  />
</div>
```

## Step 3: Add Your Resume

1. Place your resume PDF in `/public/resume.pdf`
2. The download button in the About page will automatically work!

## Step 4: Update Social Links

In `/data/siteContent.ts`:

```typescript
export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/EthanMM0",  // Already correct!
    icon: "Github"
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://linkedin.com/in/your-profile",  // ⚠️ REPLACE
    icon: "Linkedin"
  }
};
```

## Step 5: Customize Projects (Optional)

If you want to add more projects or edit existing ones, update the `projects` array in `/data/siteContent.ts`:

```typescript
export const projects = [
  {
    id: "unique-id",
    slug: "url-friendly-slug",
    title: "Project Name",
    shortDescription: "Brief description for cards",
    fullDescription: "Longer description for detail page",
    github: "https://github.com/yourname/repo",
    featured: true,  // Shows on homepage
    technologies: ["Tech1", "Tech2", "Tech3"],
    features: [
      "Feature 1",
      "Feature 2"
    ],
    whatIBuilt: "What you built...",
    whatILearned: "What you learned...",
    image: "/projects/image.jpg"  // Optional
  }
];
```

## Step 6: Edit Skills

Update your tech stack in `/data/siteContent.ts`:

```typescript
export const skills = [
  "Python",
  "C#",
  // Add or remove as needed
];
```

## Step 7: Customize Services/Roles (Optional)

Edit the `services` array in `/data/siteContent.ts` to match the roles you're targeting.

## Step 8: Update Timeline (Optional)

Modify your journey timeline in `/data/siteContent.ts`:

```typescript
export const timeline = [
  {
    year: "2024-Present",
    title: "Your Current Role/Education",
    description: "What you're doing now"
  }
];
```

## Step 9: Test Your Changes

```bash
# Run development server
npm run dev

# Build for production
npm run build
```

## Step 10: Deploy

Deploy to Vercel (recommended):

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and connect to Vercel/Netlify through their web interface.

---

## Quick Color Customization

Want to change the color scheme? The site uses cyan/blue theme. To change:

1. Find all instances of `cyan-` and `blue-` in component files
2. Replace with your preferred Tailwind colors (e.g., `emerald-`, `violet-`, `rose-`)

Example: Change from cyan to green
- `text-cyan-400` → `text-emerald-400`
- `bg-cyan-500/10` → `bg-emerald-500/10`
- `border-cyan-500/30` → `border-emerald-500/30`

---

That's it! Your portfolio is ready to launch.
