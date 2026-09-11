# Personal Portfolio Website

A modern, responsive personal portfolio website built with Next.js and Tailwind CSS.

## Features

- **Tech Stack**
  - Next.js 15 (React Framework)
  - Tailwind CSS for styling
  - TypeScript for type safety
  - GitHub Pages deployment

- **Design Elements**
  - Responsive design for all devices (desktop + mobile)
  - Gradient backgrounds
  - Cat-themed decorative elements and animated paw prints
  - Smooth animations and transitions
  - Dark mode for accessibility 

- **Sections**
  - Contact information
  - About Me with profile image
  - Skills showcase (Languages, Technologies, Computer Science and Mathematics Coursework)
  - Work Experience timeline
  - Projects portfolio
  - Resume download
  - Social media links (LinkedIn, GitHub, Discord)

## Website

The website is live at https://www.emilyliangyr.com/



## Content updates

The downloadable resume is `public/resume.pdf`. Experience, projects, and skills are maintained in `src/data/profile.ts`; the introduction and about section are in `src/app/page.tsx`. Keep these in sync when replacing the resume.

Run `npm run build` to validate and export the site to `out/`. The existing GitHub Pages workflow builds this same static export.
