<template>
  <div class="max-w-7xl mx-auto block"> 
    <div class="mx-6 flex items-center justify-center max-h-full h-screen">
      <div v-if="quiz">
        <div class="flex py-4" v-if="question_index <= 9">
          <h3 class="text-gray-400 flex-grow">Category Name: <span class="text-yellow-500 font-bold">{{ quiz[0].category }}</span></h3>
          <h3 class="text-gray-400">Score: <span class="text-yellow-500 font-bold">{{ score }}</span></h3>
        </div>
        <div v-if="question_index > 9" class="congratulations">
          <p class="text-gray-700 text-center text-lg">You answered <span class="font-bold">{{ score }}</span> out of 10 questions correctly.</p>
          <p class="text-gray-600 text-center"> {{ score >= 7 ? score_range[0] : score >= 4 && score <= 6 ? score_range[1] : score_range[2] }} </p>
          <div class="block mx-auto">
            <!-- <Vue3Lottie :options="defaultOptions" :height="200" :width="200"/> -->
            <Vue3Lottie :animationData="successLottie" :height="200" :width="200"/>
          </div>
          <router-link to="/">
            <button class="px-10 py-2 rounded-md bg-yellow-500 text-white hover:bg-yellow-600 transition-colors ease-in-out mt-10 block mx-auto">HOME</button>
          </router-link>
        </div>
        <div class="w-full" v-if="question_index <= 9">
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
import { Vue3Lottie } from 'vue3-lottie';
import 'vue3-lottie/dist/style.css';
import successLottie from '../assets/success.json';

  export default {
    name: "QuizView",
    components: { QuizCard, Vue3Lottie },
    props: ["categoryNo"],
    data(){
     return {
      quiz: null,
      question_index: 0,
      score: 0,
      score_range: ['Keep up the good work!', 'Way to go!', 'There is plenty of room for improvements.'],
      // defaultOptions: {
      //   animationData: successLottie.default
      // }
      successLottie,  
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