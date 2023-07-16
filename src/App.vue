<template>
  <div class="relative h-full">
    <nav class="shadow-md  relative">
      <div class="max-w-7xl block mx-auto">
  
        <router-link to="/">
          <div class="flex items-center h-20 mx-6">
            <img src="../src/assets/7082687_23978.jpg" class="w-12 h-12 rounded-full mr-3">
            <h1 class="text-2xl md:text-3xl text-yellow-400 font-bold">Trivia Quiz</h1>
          </div>
        </router-link>
      </div>
    </nav>
    <router-view />
    <footer class="bg-yellow-100 h-14 flex items-center mt-10 absolute -bottom-20 w-full">
      <div class="max-w-7xl block mx-auto">
        <p class="text-sm text-yellow-900 text-center">Powered by Open Trivia DB © 2022 | Asther Louie Cabardo</p>
      </div>    
    </footer>
  </div>
</template>
