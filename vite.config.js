import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/resume/', // This ensures that GitHub Pages serves assets correctly
});