# Edwin Kim - Portfolio

This is a personal portfolio website built with **Next.js** and **Tailwind CSS**, designed to mimic the GitHub profile aesthetic.

## 🚀 Getting Started

### 1. How to Edit Content (For Non-Coders)
You don't need to touch any complex code to update your bio, skills, or projects.

**Everything is located in one file:**
`src/data/portfolio.ts`

Open that file in any text editor. You will see a list of data that looks like this:

```typescript
export const portfolioData = {
  about: {
    firstName: "Edwin",
    // ...
    description: "I'm a Computer Science student...",
  },
  // ...
}
```

- **To update text:** Just change the text inside the quotes.
- **To add a skill:** Copy one of the existing skill lines (e.g., `{ name: "New Skill", level: 3 },`) and paste it into the list.
- **To add a project:** Copy an entire project block and paste it into the `projects` list.

### 2. Running the Website
To preview your changes on your computer:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🛠️ Tech Stack
- **Framework:** Next.js 16 (App Router)
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Deployment:** Vercel (Recommended)

## 📂 Project Structure
- `src/data/`: **<-- EDIT THIS** (Content)
- `src/components/`: **<-- DON'T TOUCH** (Code logic)
- `src/app/`: **<-- DON'T TOUCH** (Page routing)

---
*Created by Antigravity*
