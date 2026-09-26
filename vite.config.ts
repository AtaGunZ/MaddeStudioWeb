import fs from 'fs';
import path from 'path';
import { defineConfig, loadEnv, Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { FRAGMENTS, PROJECTS } from './constants';
import { Language } from './types';

const SITE = 'https://' + fs.readFileSync(path.resolve(__dirname, 'public/CNAME'), 'utf8').trim();

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

// Link previews (WhatsApp, LinkedIn, Slack…) don't run JavaScript, and on GitHub Pages
// a deep link like /works/<id> is otherwise a 404 that redirects to the SPA. So each
// project and fragment gets its own HTML copy with page-specific title, description
// and image; GitHub Pages serves works/<id>.html for /works/<id>.
function socialPreviews(): Plugin {
  let outDir = 'dist';
  return {
    name: 'social-previews',
    apply: 'build',
    configResolved(config) {
      outDir = path.resolve(config.root, config.build.outDir);
    },
    closeBundle() {
      const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');
      const ogImage = (kind: string, id: string, fallback: string) =>
        fs.existsSync(path.resolve(__dirname, `public/og/${kind}/${id}.jpg`)) ? `${SITE}/og/${kind}/${id}.jpg` : SITE + fallback;

      const pages = [
        ...PROJECTS.map(p => ({
          route: `works/${p.id}`,
          title: `${p.title} | Madde Studio`,
          description: p.description[Language.EN],
          image: ogImage('works', p.id, p.image),
        })),
        ...FRAGMENTS.map(f => ({
          route: `fragments/${f.id}`,
          title: `${f.title[Language.EN]} | Madde Studio`,
          description: f.type[Language.EN],
          image: ogImage('fragments', f.id, f.image),
        })),
      ];

      for (const page of pages) {
        const title = escapeAttr(page.title);
        const description = escapeAttr(page.description);
        const social = [
          '<meta property="og:site_name" content="Madde Studio" />',
          '<meta property="og:type" content="article" />',
          `<meta property="og:url" content="${SITE}/${page.route}" />`,
          `<meta property="og:title" content="${title}" />`,
          `<meta property="og:description" content="${description}" />`,
          `<meta property="og:image" content="${page.image}" />`,
          '<meta property="og:image:width" content="1200" />',
          '<meta property="og:image:height" content="630" />',
          '<meta name="twitter:card" content="summary_large_image" />',
        ].join('\n  ');
        const html = template
          .replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`)
          .replace(/<meta name="description"[\s\S]*?\/>/, `<meta name="description" content="${description}" />`)
          .replace(/<!-- social:start[\s\S]*?<!-- social:end -->/, social);
        const file = path.join(outDir, `${page.route}.html`);
        fs.mkdirSync(path.dirname(file), { recursive: true });
        fs.writeFileSync(file, html);
      }
    },
  };
}

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const base = env.VITE_BASE_PATH || '/';
    return {
      base,
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), socialPreviews()],
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
