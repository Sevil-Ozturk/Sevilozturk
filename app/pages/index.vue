<script setup lang="ts">
</script>

<template>
  <div class="portfolioFont min-h-screen w-full flex flex-col md:flex-row bg-gray-900 items-center p-5 gap-5">

    <div class="flex-1 flex flex-col max-w-lg m-10 text-gray-100">
      <h1 class="text-4xl  md:text-5xl font-bold  mb-4">
        Hello, I'm Sevil Öztürk
      </h1>
      <p class="text-lg md:text-2xl text-gray-100">
                I am a Full Stack Developer specializing in modern, performance-focused web applications.
          I enjoy creating user-friendly, modern websites that are fully responsive and mobile-friendly.

          On the frontend, I design interactive, elegant, and responsive interfaces using Vue.js and Nuxt.js;
          on the backend, I build robust, reliable, and scalable systems with Node.js, Express.js, and databases.

          In my projects, clean code, reusable components, and performance optimization are my top priorities.
          My goal is to bridge technology and design to solve challenges in my Full Stack projects with innovative and user-focused solutions.
      </p>
    </div>

    <div class="flex justify-center md:justify-end flex-1 m-10">
      <img 
        class="w-64 h-64 md:w-96 md:h-96 rounded-full border-4 border-gray-300 object-cover" 
        src="https://avatars.githubusercontent.com/u/170648779?v=4" 
        alt="Profile"
      />
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');

.portfolioFont {
  font-family: 'Forum', serif;
}
</style>
