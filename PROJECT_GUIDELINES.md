# Project Implementation Guidelines

This guide documents the standard structure for adding new projects to the portfolio, established during the implementation of the "O3 Layer" project.

## 1. Asset Organization
For each project, create a dedicated folder in `public/works/[project_id]/`.
**Required Assets:**
- **Hero Image** (`hero.png` / `hero.jpg`): The main visual used for the project card and detail header.
- **Client Logo** (`logo.png`): High-resolution logo with transparent background. Used in the project header Metadata. 
- **Gallery Assets**: Numbered or descriptively named files (e.g., `1.jpg`, `app-flow.mp4`, `ui-dark.png`).

## 2. Data Structure (`constants.ts`)
Each project entry in the `PROJECTS` array must follow this schema:

```typescript
{
  id: 'unique-id',
  title: 'Project Title',
  client: "Client Name",
  
  // -- VISUAL CONFIGURATION --
  image: '/works/[id]/hero.png', // Main project image
  heroFit: 'contain' | 'cover',   // 'contain' for logos/graphics, 'cover' for photos
  // hero_bg is optional; defaults to 'image'. Use if you want a different background for the header.
  
  clientLogo: '/works/[id]/logo.png', // REPLACES the client name text in the header
  
  // -- METADATA --
  year: "2024",
  services: ["Service 1", "Service 2"],
  
  // -- CONTENT --
  description: { [Language.EN]: "...", [Language.TR]: "..." },
  challenge: { [Language.EN]: "...", [Language.TR]: "..." },
  solution: { [Language.EN]: "...", [Language.TR]: "..." },
  
  // -- GALLERY --
  gallery: [
    // 1. VIDEO (Autoplay loop)
    { 
      type: 'video', 
      src: '/works/[id]/video.mp4', 
      colSpan: 1 | 2, 
      autoPlay: true, 
      loop: true, 
      muted: true 
    },
    
    // 2. GROUPED IMAGES (Side-by-side, good for mobile screens or UI comparisons)
    {
      type: 'group',
      colSpan: 1, // Usually 1 column wide, containing 2 vertical images
      items: [
        { src: '/works/[id]/mobile-1.gif' },
        { src: '/works/[id]/mobile-2.gif' }
      ]
    },
    
    // 3. TEXT BLOCK (Narrative break)
    {
      type: 'text',
      colSpan: 1,
      content: { [Language.EN]: "...", [Language.TR]: "..." }
    },
    
    // 4. STANDARD IMAGE
    { type: 'image', src: '/works/[id]/photo.jpg', colSpan: 1 | 2 }
  ]
}
```

## 3. Design Standards
### Project Detail Page
- **Atmospheric Header**: The `image` is used as a fixed, grayscale, low-opacity background behind the title area. It fades out at the bottom using a gradient mask.
- **Centered Title**: The project title is massive (6xl+) and centered.
- **Logo Metadata**: The client name is replaced by the `clientLogo` in the metadata row to emphasize the brand identity.
- **Layering**: All content (`<h1 ...>`, `<p ...>`, gallery) must have `relative z-10` to sit strictly above the fixed background (`z-0`).
- **Footer**: The footer has `z-[100]` to ensure it covers the fixed background at the bottom of the page.

### Works List (Home & Works Page)
- **Hero Fit**: The project grid respects `heroFit`.
- **Contain**: Adds a white/black background and padding (`p-8` or `p-24`) to ensure logos fit perfectly.
- **Cover**: Standard full-bleed image for photos.
- **Hover**: On desktop, the hover background preview also respects `heroFit` to avoid blowing up logos.
