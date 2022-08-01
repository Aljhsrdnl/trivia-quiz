<template>
<section class="h-64 flex items-center">

  <TestKnowledge />
</section>
<div class="max-w-7xl mx-auto block">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-x-10 md:gap-y-4">
    <ButtonCategory categoryName="General Knowledge" :categoryNo=9 />
    <ButtonCategory categoryName="Books" :categoryNo=10 />
    <ButtonCategory categoryName="Film" :categoryNo=11 />
    <ButtonCategory categoryName="Music" :categoryNo=12 />
    <ButtonCategory categoryName="Musical & Theatres" :categoryNo=13 />
    <ButtonCategory categoryName="Television" :categoryNo=14 />
    <ButtonCategory categoryName="Video Games" :categoryNo=15 />
    <ButtonCategory categoryName="Board Games" :categoryNo=16 />
    <ButtonCategory categoryName="Science & Nature" :categoryNo=17 />
    <ButtonCategory categoryName="Computer" :categoryNo=18 />
    <ButtonCategory categoryName="Mathematics" :categoryNo=19 />
    <ButtonCategory categoryName="Mythology" :categoryNo=20 />
    <ButtonCategory categoryName="Sports" :categoryNo=21 />
    <ButtonCategory categoryName="Geography" :categoryNo=22 />
    <ButtonCategory categoryName="History" :categoryNo=23 />
    <ButtonCategory categoryName="Politics" :categoryNo=24 />
    <ButtonCategory categoryName="Art" :categoryNo=25 />
  </div>
</div>
</template>

<script>
  import TestKnowledge from "../components/TestKnowledge.vue"
  import ButtonCategory from "../components/ButtonCategory.vue"
  export default {
    name: "HomeView",
    components: {
    TestKnowledge,
    ButtonCategory
},
  }
</script>
