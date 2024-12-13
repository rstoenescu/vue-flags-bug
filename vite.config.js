import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  define: {
    // No effect, it's still included
    __VUE_OPTIONS_API__: 'false',

    // Has the opposite effect: devtools will be enabled for prod builds!
    // Commenting this out will disable devtools in prod builds.
    __VUE_PROD_DEVTOOLS__: 'false',

    // Has the opposite effect: mismatch details will be included in prod builds!
    // Commenting this out will disable devtools in prod builds.
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: 'false'
  },

  plugins: [vue()],
})
