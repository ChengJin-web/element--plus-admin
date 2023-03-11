import {fileURLToPath, URL} from 'node:url'
import path from 'path'
import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import {createSvgIconsPlugin} from 'vite-plugin-svg-icons'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueJsx(),
        createSvgIconsPlugin({
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons/svg')],
            symbolId: 'icon-[dir]-[name]',
            svgoOptions: false
        })
    ],
    resolve: {
        alias: {
            '~': fileURLToPath(new URL('./', import.meta.url)),
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 80,
        host: true,
        open: true,
        proxy: {
            // https://cn.vitejs.dev/config/#server-proxy
            '/dev-api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/dev-api/, '')
            }
        }
    }
})
