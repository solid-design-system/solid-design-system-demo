// vite.config.js
export default {
  base: 'https://solid-design-system.github.io/solid-design-system-demo/',
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@solid-design-system/tokens/scss";`
      }
    }
  }
}
