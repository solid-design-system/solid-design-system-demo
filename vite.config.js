// vite.config.js
export default {
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@solid-design-system/tokens/scss";`
      }
    }
  }
}
