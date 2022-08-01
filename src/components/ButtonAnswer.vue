<template>
  <button 
    :class="this.class"
    v-on:click="compareAnswer($event)"
    v-bind:value="this.choice"
    :disabled="this.isDisabled"
    >{{ choice }} 
  </button>
</template>
<script>
  export default {
    name: "ButtonAnswer",
    data() {
      return{
        disabledBtn: "w-full border border-gray-300 bg-gray-300 rounded-md py-2 mb-3 text-white cursor-default",
        normalBtn: "w-full border border-gray-300 rounded-md py-2 mb-3 text-gray-600 hover:border-yellow-500 cursor-pointer",
        correctBtn: "w-full border border-green-500 bg-green-100 text-green-600  rounded-md py-2 mb-3 cursor-default",
        wrongBtn: "w-full border border-red-500 bg-red-200 text-red-500  rounded-md py-2 mb-3 cursor-default",
        next: true,
      }
    },
    props: {
      choice: {
        type: String,
        required: true
      },
      isDisabled: {
        type: Boolean,
        required: true
      },
      correct_ans: {
        type: String,
        required: true
      },
      isNext: {
        type: Boolean,
        required: true
      }
    }, 
    computed: {
      class(){
        if(this.clicked && this.isCorrect ) {
          // console.log(`clicked and correct`)
          // console.log(this.clicked)
          // console.log(this.isCorrect)
          return this.correctBtn;
        }
        if (!this.clicked && this.isCorrect && this.isDisabled ) {
          // console.log(`NOT clicked but correct`)
          return this.correctBtn;
        }
        else if (this.clicked && !this.isCorrect && this.isDisabled ) {
          // console.log(`clicks but wrong`)
          // console.log(this.clicked)
          // console.log(this.isCorrect)
          return this.wrongBtn;
        }
        else if (!this.isDisabled) {
          // console.log(`Normal Button`)
          return this.normalBtn;
        }
        else if (!this.clicked && !this.isCorrect && !this.isDisabled ) {
          // console.log(`Disabled Button`)
          return this.disabledBtn;
        }
        else {
          return this.disabledBtn
        }
      },
      isCorrect() {
        return this.choice == this.correct_ans;
      },
      setterNext : {
        get() {
          if (this.isNext) {
            this.next = true;
            return true;
          }
          else {
            this.next = false;
            return false;
          }
        },
        set(val) {
          this.next = val
          if(this.next) {
            this.clicked = false;
          }
        },
      },
      setterClicked: {
        //getter
        get() {
          if(this.next) {
            this.clicked = false;
            console.log(`Setter Clicked: ${this.clicked}`)
            return false;
          }
        },
        //setter
        set (newVal){
              this.clicked = newVal;
              console.log(newVal)
              console.log(`working: ${this.clicked}`)
            
        }
      },
      clicked : {
        get() {
          if(this.next) {
            return false;
          }
          else {
            return true;
          }
        },
        set(newVal) {
          return newVal;
        }
       
      }
    },
    methods: {
     
      compareAnswer(e) {
        this.$emit('set-isNext-false');        //check if answer is correct
        this.setterNext = false;
        console.log(`isNex: ${this.next}`)

        this.setterClicked = true;
        console.log(`click: ${this.clicked}`)
        if (e.target.value == this.correct_ans) {
          console.log(`click: ${this.clicked}`)
          this.$emit('add-score-and-index')
        }
        else {
          console.log(`click: ${this.clicked}`)
          this.$emit('disable-btns');
        }
      }
    }
  }
</script>