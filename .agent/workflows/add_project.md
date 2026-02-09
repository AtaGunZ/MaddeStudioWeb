---
description: How to add a new Work project to the website
---

# Workflow: Adding a New Project

This guide explains how to add a new project to the "Works" section of the Madde Studio website.

## 1. Prepare Assets
1. Navigate to `public/works/`.
2. Create a new folder with a unique name matching your project ID or slug (e.g., `my-new-project`).
3. Place all your image assets in this folder.
   - Recommended naming: `main.jpg` (or png), `logo.png`, `gallery-1.jpg`, etc.

## 2. Update Content Data
1. Open `constants.ts` in your code editor.
2. Scroll to the `PROJECTS` constant definition.
3. Copy the template below and paste it into the `PROJECTS` array.
4. Fill in the details:
   - **id**: A unique string ID.
   - **image**: Path to your main image (e.g., `/works/my-new-project/main.jpg`).
   - **clientLogo**: Path to the client's logo (optional).
   - **gallery**: An array of `GalleryItem` objects.

### Project Data Template
```typescript
{
  id: 'unique-project-id', // Ensure this is unique
  title: 'Project Title',
  description: {
    [Language.EN]: "Short overview description.",
    [Language.TR]: "Kısa genel bakış açıklaması."
  },
  image: '/works/your-folder/main.jpg',
  client: "Client Name",
  clientLogo: "/works/your-folder/logo.png", // Optional
  year: "2024",
  services: ["Service 1", "Service 2"],
  challenge: {
    [Language.EN]: "Describe the challenge...",
    [Language.TR]: "Zorluğu açıklayın..."
  },
  solution: {
    [Language.EN]: "Describe the solution...",
    [Language.TR]: "Çözümü açıklayın..."
  },
  gallery: [
    // Regular Image (default width)
    { type: 'image', src: '/works/your-folder/gallery-1.jpg' },
    
    // Full Width Image
    { type: 'image', src: '/works/your-folder/gallery-2.jpg', colSpan: 2 },
    
    // Text Block (Interspersed text)
    { 
      type: 'text', 
      content: { 
          [Language.EN]: "Extra context or explanation...",
          [Language.TR]: "Ekstra bağlam veya açıklama..."
      },
      // title: { [Language.EN]: "Optional Title", ... } 
    }
  ]
},
```

## 3. Review
- Save the file.
- Check the website locally (`npm run dev`) to ensure the new project appears correctly in the Works list and detail page.
