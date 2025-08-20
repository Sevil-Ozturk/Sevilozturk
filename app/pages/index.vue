<script>
</script>

<template>
  <div class="font-sans">

    <!-- Hero Section -->
    <section class="portfolioFont h-screen flex flex-col justify-center items-center bg-gray-900 text-white text-center">
      <h1 class="text-6xl mb-4">Hello, I'm <span class="text-pink-500">Sevil Öztürk</span></h1>
      <p class="text-xl mb-6">Full Stack Developer | Modern & Performance-Oriented Web Applications</p>
      <div class="flex gap-4">
        <NuxtLink to="/projects" class="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700">View Projects</NuxtLink>
        <NuxtLink to="/contact" class="px-6 py-3 bg-purple-600 rounded-xl hover:bg-purple-700">Contact Me</NuxtLink>
      </div>
    </section>

    <!-- About Section -->
    <section class="portfolioFont py-20 px-6 max-w-4xl mx-auto text-center ">
      <h2 class="text-5xl mb-6">About Me</h2>
      <p class="text-lg text-gray-500">
        <!-- Kullanıcı dostu, mobil uyumlu ve performanslı web uygulamaları geliştiriyorum.
        Frontend’de <span class="font-semibold">Vue.js</span> ve <span class="font-semibold">Nuxt.js</span>,
        Backend’de <span class="font-semibold">Node.js</span> & <span class="font-semibold">PHP</span>
        ile modern çözümler üretiyorum. -->

         Hello! I’m Sevil Öztürk, a Full Stack Developer creating modern and performance-focused web applications.
I design user-friendly, mobile-friendly, and elegant web solutions, while building robust and scalable backend systems
      </p>
    </section>

    <!-- Skills Section -->
    <section class="portfolioFont bg-gray-800 py-20 px-6">
      <h2 class="text-5xl text-center mb-10">Skills</h2>
      
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 p-8">
    <div class="flex flex-col items-center p-4  hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg" class="w-12 h-12" alt="Vue.js" />
      <span class="mt-2 text-sm">Vue.js</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="w-12 h-12" alt="JavaScript" />
      <span class="mt-2 text-sm">JavaScript</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="w-12 h-12" alt="TypeScript" />
      <span class="mt-2 text-sm">TypeScript</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg" class="w-12 h-12" alt="Nuxt.js" />
      <span class="mt-2 text-sm">Nuxt.js</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="w-12 h-12" alt="Python" />
      <span class="mt-2 text-sm">Python</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" class="w-12 h-12" alt="CSS" />
      <span class="mt-2 text-sm">CSS</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg" class="w-12 h-12" alt="Tailwind CSS" />
      <span class="mt-2 text-sm">C#</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" class="w-12 h-12" alt="Node.js" />
      <span class="mt-2 text-sm">Node.js</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" class="w-12 h-12" alt="MongoDB" />
      <span class="mt-2 text-sm">MongoDB</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain.svg" class="w-12 h-12" alt="MSSQL" />
      <span class="mt-2 text-sm">MSSQL</span>
    </div>

    <div class="flex flex-col items-center p-4 hover:scale-105 transition">
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" class="w-12 h-12" alt="Git" />
      <span class="mt-2 text-sm">Git</span>
    </div>

  </div>
    </section>

    <!-- Projects Section -->
    <section class="portfolioFont py-20 px-6">
      <h2 class="text-5xl text-center mb-10">Featured Projects</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <div class="bg-white rounded-xl shadow p-6">
          <h3 class="text-xl mb-2">🎬 Movie App</h3>
          <p class="mb-3">Nuxt + TMDB API ile film arama uygulaması.</p>
          <a href="#" target="_blank" class="text-pink-600 hover:underline">GitHub / Demo</a>
        </div>
        <div class="bg-white rounded-xl shadow p-6">
          <h3 class="text-xl mb-2">📝 Not Yönetim Sistemi</h3>
          <p class="mb-3">Vue + Pinia + LocalStorage ile not uygulaması.</p>
          <a href="#" target="_blank" class="text-pink-600 hover:underline">GitHub / Demo</a>
        </div>
        <div class="bg-white rounded-xl shadow p-6">
          <h3 class="text-xl mb-2">🌐 Portfolio Website</h3>
          <p class="mb-3">Nuxt + TailwindCSS ile kişisel portfolio sitesi.</p>
          <a href="#" target="_blank" class="text-pink-600 hover:underline">GitHub / Demo</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="portfolioFont bg-gray-900 text-white py-20 px-6 text-center">
      <h2 class="text-5xl mb-6">Contact</h2>
      <p class="mb-6">Contact Me 👇</p>
      <a href="mailto:sevil@example.com" class="px-6 py-3 bg-pink-600 rounded-xl hover:bg-pink-700">Send Mail</a>
      <div class="flex justify-center gap-6 mt-8">
        <a href="#" class="hover:text-pink-400">LinkedIn</a>
        <a href="#" class="hover:text-pink-400">GitHub</a>
        <a href="#" class="hover:text-pink-400">Twitter</a>
      </div>
    </section>

    <!-- Footer -->
    <footer class="portfolioFont bg-black text-gray-400 py-6 text-center">
      © 2025 Sevil Öztürk — Tüm Hakları Saklıdır
    </footer>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');

.portfolioFont {
  font-family: 'Forum', serif;
}
</style>