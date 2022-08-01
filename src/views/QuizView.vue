<template>
  <div class="max-w-7xl mx-auto block"> 
    <div class="mx-6 flex items-center justify-center max-h-full h-screen">
      <div v-if="quiz">
        <div class="flex py-4">
          <h3 class="text-gray-400 flex-grow">Category Name: <span class="text-yellow-500 font-bold">{{ quiz[0].category }}</span></h3>
          <h3 class="text-gray-400">Score: <span class="text-yellow-500 font-bold">{{ score }}</span></h3>
        </div>
        <div class="w-full">
          <QuizCard 
            :quiz_details=quiz 
            :question_index=question_index 
            :score=score 
            @increase-score="addScore"
            @increase-index="increaseIndex"
            />
        </div>
      </div>
      <div v-else-if="!quiz">Loading...</div>
    </div>
  </div>
</template>
<script>
import QuizCard from "../components/QuizCard.vue"
import axios from "axios";
  export default {
    name: "QuizView",
    components: { QuizCard },
    props: ["categoryNo"],
    data(){
     return {
      quiz: null,
      question_index: 0,
      score: 0,
     }
    },
    created(){
      axios.get( `https://opentdb.com/api.php?amount=10&category=` + this.categoryNo + `&type=multiple`)
        .then( (response) => {
          this.quiz = response.data.results;
          console.log(this.quiz)
          })
        .catch( (err) => console.err(err))
    },
    methods: {
      addScore() {
        this.score += 1;
        console.log(this.score)
      },
      increaseIndex() {
        this.question_index += 1;
      }
    }
    
}
</script>