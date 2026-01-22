<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Aq3s2gVEZBVljDiuslcEALDJuMlkdFVJ

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

## CI/CD (GitHub Pages)

This repo includes a GitHub Actions workflow that builds the Vite app and deploys it to GitHub Pages on every push to `main`.

### Enable Pages

1. Go to **Settings → Pages** in your GitHub repo.
2. Under **Source**, select **GitHub Actions**.

### Optional: Base path control

By default the workflow sets `VITE_BASE_PATH` to `/<repo-name>/` so the site works on GitHub Pages.
If you want a different base path, set a repository variable:

- **Repo → Settings → Secrets and variables → Actions → Variables**
- Add `VITE_BASE_PATH` with a value like `/` (for custom domain) or `/your-path/`.

## Custom Domain

To connect a custom domain:

1. Create a file named `CNAME` inside `public/` with your domain name (example: `www.yourdomain.com`).
2. In **Settings → Pages**, set **Custom domain** to the same domain.
3. Add DNS records with your registrar:
   - For an apex domain (example.com): add **A records** pointing to GitHub Pages IPs.
   - For a subdomain (www.example.com): add a **CNAME** to `<username>.github.io`.

GitHub Pages IPs are listed in their docs and can change over time.
