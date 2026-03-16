
  # Personal Portfolio and CV

  A modern single-page portfolio built with React and Vite.

  This project showcases:
  - About profile section with social links
  - Skills and technology stack
  - Project cards with full-screen image gallery and per-image titles
  - Education timeline
  - Certificates section with full-screen certificate viewer

  Design source reference:
  https://www.figma.com/design/Ozf0K7KO2LsYshqZJt0vYz/Personal-Portfolio-and-CV

  ## Tech Stack

  - React
  - TypeScript
  - Vite
  - Tailwind CSS
  - Lucide React icons

  ## Getting Started

  ### 1. Install dependencies

  npm install

  ### 2. Start development server

  npm run dev

  Vite will print the local URL in your terminal, typically:
  http://localhost:5173

  ### 3. Build for production

  npm run build

  ## Available Scripts

  - npm run dev: Starts the Vite development server
  - npm run start: Alias for Vite dev server
  - npm run build: Creates an optimized production build

  ## Project Structure

  - src/main.tsx: App bootstrap
  - src/app/App.tsx: Main page composition and section navigation
  - src/app/components/navbar.tsx: Sticky top navigation
  - src/app/components/about-section.tsx: Hero/about content and social links
  - src/app/components/skills-section.tsx: Skills cards and technology icons
  - src/app/components/projects-section.tsx: Project cards and full-screen gallery
  - src/app/components/education-section.tsx: Education timeline
  - src/app/components/certificates-section.tsx: Certificates cards and full-screen viewer
  - src/app/components/tech-icons.tsx: Custom SVG technology icons
  - src/assets: Local images and media used across sections

  ## Customization Guide

  ### Personal details

  Update text content in:
  - src/app/components/about-section.tsx
  - src/app/components/education-section.tsx

  ### Projects

  Edit the projects array in:
  - src/app/components/projects-section.tsx

  Each project supports:
  - title
  - description
  - image (thumbnail/cover)
  - gallery (array of objects with src and title)
  - githubUrl
  - tags

  ### Certificates

  Edit the certificates array in:
  - src/app/components/certificates-section.tsx

  ### Skills

  Edit categories and skill items in:
  - src/app/components/skills-section.tsx

  ### Images

  Place your images in:
  - src/assets

  Then reference them like:
  - src/assets/your-image-name.jpg

  ## Notes

  - The project currently uses a package name generated from an import bundle template.
  - If you publish to npm (not required for portfolio hosting), consider renaming the package in package.json.

  ## Deployment

  You can deploy this project on platforms like Vercel, Netlify, or GitHub Pages.

  Basic deployment flow:
  1. Run npm run build
  2. Deploy the generated dist folder

  ## License

  This project is for personal portfolio use by Luigi Renzo Geralde.
  