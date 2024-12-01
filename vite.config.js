import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build:{
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split('.').pop();
          if (/png|jpe?g|gif|svg|webp/.test(extType)) {
            return 'assets/images/[name].[hash][extname]';
          } else if (/css/.test(extType)) {
            return 'assets/css/[name].[hash][extname]';
          } else if (/woff2?|ttf|eot|otf/.test(extType)) {
            return 'assets/fonts/[name].[hash][extname]';
          }
          return '[name].[hash][extname]';
        }
      }
    }
  }
})
