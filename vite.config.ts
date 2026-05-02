import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig} from 'vite';

export default defineConfig(({mode}) => {
  const isGitHubPages = process.env.VITE_GITHUB_PAGES === 'true';
  const repoName = process.env.VITE_GITHUB_REPO;
  return {
    plugins: [react(), tailwindcss()],
    base: isGitHubPages ? `/${repoName}/` : '/',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
