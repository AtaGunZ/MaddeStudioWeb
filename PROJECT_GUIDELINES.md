# Project Implementation Guidelines

This guide documents the standard structure for adding new projects to the portfolio, established during the implementation of the "O3 Layer" and "Reeder Fancy" projects.

## 1. Core Philosophy: Visualization First
**Crucial:** Madde Studio is a **visualization studio**, not a product design firm.
- **Descriptions**: Always emphasize *visualizing*, *rendering*, or *digital presentation* of the subject.
- **Perspective**: We didn't design the product; we designed the *experience* of seeing it.
- **Language**: Use terms like "Industrial design visualization," "Digital presentation," "CGI," "Visual Identity."

## 2. Asset Organization
For each project, create a dedicated folder in `public/works/[project_id]/`.
**Required Assets:**
- **Hero Image** (`hero.png`): The main visual. Used for both the project card (list view) and the detailed hero header.
- **Client Logo** (`logo.png`): High-resolution logo with transparent background. Used in the project header metadata.
- **Gallery Assets**: Descriptive file names preferred (e.g., `video.mp4`, `1.png`, `detail-view.jpg`).

## 3. Data Structure (`constants.ts`)
Each project entry in the `PROJECTS` array must follow this schema:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  client: "Client Name",
  
  // -- VISUAL CONFIGURATION --
  image: '/works/[id]/hero.png', // Main project image
  heroFit: 'contain' | 'cover',   // 'contain' for logos/graphics, 'cover' for photos
  // hero_bg is optional; defaults to 'image'.
  
  clientLogo: '/works/[id]/logo.png', // REPLACES the client name text in the header
  
  // -- METADATA --
  year: "2024",
  services: ["Service 1", "Service 2"], // Use keys from SERVICE_TRANSLATIONS
  
  // -- CONTENT --
  // Focus on visualization and digital translation of the concept
  description: { [Language.EN]: "...", [Language.TR]: "..." },
  challenge: { [Language.EN]: "...", [Language.TR]: "..." },
  solution: { [Language.EN]: "...", [Language.TR]: "..." },
  
  // -- GALLERY STRUCTURE --
  // Standard Order:
  // 1. Video (Full Width)
  // 2. Main Hero/Detail Image (Full Width)
  // 3. Supporting Details (Grouped)
  gallery: [
    // 1. VIDEO
    { 
      type: 'video', 
      src: '/works/[id]/video.mp4', 
      autoPlay: true, 
      loop: true, 
      muted: true 
    },
    
    // 2. LARGE STANDALONE IMAGE
    { type: 'image', src: '/works/[id]/1.png' },

    // 3. GROUPED IMAGES (Side-by-side)
    {
      type: 'group',
      items: [
        { src: '/works/[id]/2.png' },
        { src: '/works/[id]/3.png' }
      ]
    }
  ]
}
```

## 4. Design Standards
### Project Detail Page
- **Spacing**: Tighter margins are the standard.
  - **Grid Gap**: `gap-4 md:gap-8` (16px base, 32px md). *Do not use larger gaps.*
  - **Section Margins**: `mb-4 md:mb-8` between Hero and Gallery to match grid gaps.
- **Atmospheric Header**: The `image` is used as a fixed, grayscale, low-opacity background.
- **Full Image Hero**: Placed between text content and gallery. 
  - If `heroFit: 'contain'`, use `bg-neutral-900` (Light Mode) and `bg-black` (Dark Mode). **Never use white.**
- **Layering**: Content must have `relative z-10` to sit above fixed backgrounds.

### Works List (Home & Works Page)
- **Backgrounds**:
  - `heroFit: 'contain'`: Use **`bg-neutral-900`** for Light Mode and **`bg-black`** for Dark Mode.
  - Allows "contain" images (like logos) to look consistent and premium in all themes.
- **Grayscale**:
  - All items are **grayscale** by default.
  - Color is revealed **only on hover**.
  - This applies to both `cover` and `contain` types.
