import { fileURLToPath, URL } from "url";
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from 'vite-svg-loader'


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(), 
        svgLoader({
            svgoConfig: {
                multipass: true,
                svgo: false
            }
        }),
    ],
    resolve: {
        alias: {
            find: /^@\/(.+)/,
            "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
    },
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            sass: {
                additionalData: `@use "@/assets/sass/styles.sass" as *`,
            },
        },
    },

    base: '/vite-business/'
});