import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  base: '/react-calculator-app/',
  plugins: [react(), tsconfigPaths()],
  server: {
    open: true,
  },
});
