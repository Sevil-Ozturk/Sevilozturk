
<template>
  <nav class="portfolioFont bg-white border-gray-200 dark:bg-gray-900">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      
      <!-- Logo -->
      <NuxtLink to="/" class="flex space-x-3 rtl:space-x-reverse">
        <span class="self-center text-3xl font-semibold whitespace-nowrap dark:text-white">
          SEVİL ÖZTÜRK
        </span>
      </NuxtLink>

      <!-- Menü -->
      <div class="w-auto">
        <ul class="font-medium flex flex-row space-x-8">
          <li>
            <NuxtLink to="/about" class="block py-2 px-3 hover:text-blue-700 dark:hover:text-blue-400">
              About
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/projects" class="block py-2 px-3 hover:text-blue-700 dark:hover:text-blue-400">
              Projects
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/contact" class="block py-2 px-3 hover:text-blue-700 dark:hover:text-blue-400">
              Contact
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Forum&display=swap');

.portfolioFont {
  font-family: 'Forum', serif;
  font-size: x-large;
}
</style>
