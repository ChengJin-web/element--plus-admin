import {fileURLToPath, URL} from 'node:url'
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
            iconDirs: [fileURLToPath(new URL('src/assets/icons/svg', import.meta.url))],
            symbolId: 'icon-[dir]-[name]'
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
        open: false,
        proxy: {
            '/dev-api': {
                target: 'http://vue.ruoyi.vip/',
                changeOrigin: true,
                rewrite: (p) => p.replace(/^\/dev-api/, '')
            }
        }
    }
})
