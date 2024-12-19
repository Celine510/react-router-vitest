import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, 
    environment: 'jsdom', 
    setupFiles: './src/test/setup.js', 
    exclude: ["src/main.js", "**/node_modules/**"],
    coverage: {
      provider: 'v8', 
      reporter: ['text', 'html'], 
      include: ["src/**/*.js", "src/**/*.jsx"], 
      exclude: ["src/main.js"], 
    },
    onConsoleLog(log, type) {
      console.log('log in test: ', log); 
      if (log === 'message from third party library' && type === 'stdout') { // 過濾特定輸出
        return false;
      }
    },
  },
});
