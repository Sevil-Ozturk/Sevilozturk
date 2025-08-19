// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/ui', '@nuxt/image',],

    app: {
    head: {
      title: 'Sevil Öztürk',
      meta: [
        { name: 'description', content: 'Sevil Öztürk' }
      ]
    }
  },

  css: ['~/assets/css/tailwind.css'],
  
})

