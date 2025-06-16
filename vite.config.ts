import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/youtube': {
        target: 'https://www.googleapis.com/youtube/v3',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/youtube/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            // Add API key and other parameters
            const url = new URL(req.url || '', 'http://localhost');
            url.searchParams.append('key', import.meta.env.VITE_YOUTUBE_API_KEY || '');
            url.searchParams.append('part', 'snippet');
            url.searchParams.append('type', 'video');
            url.searchParams.append('channelId', 'alexisgriswold');
            url.searchParams.append('maxResults', '10');
            proxyReq.path = url.pathname + url.search;
          });
        },
      },
    },
  },
})
