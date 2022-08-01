<template>
<router-link :to="{ name: 'QuizView', params: { categoryNo: categoryNo } }">
  <div class="cursor-pointer py-2 mb-2 md:mb-0 group">
    <p class="text-center text-yellow-800 group-hover:text-yellow-600 transition-all ease-in-out">{{ categoryName }}</p>
    <div class="w-0 block mx-auto h-0.5 bg-yellow-500 group-hover:w-1/3 transition-all ease-in-out"></div>
  </div>
</router-link>
</template>

<script>
  export default {
    props: {
      categoryName: {
        type: String, 
        required: true,
      },
      categoryNo: {
        type: Number,
        required: true
      }
    },
    name: "ButtonCategory"
  }
</script>