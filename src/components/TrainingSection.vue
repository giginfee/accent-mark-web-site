<template>
    <div class="main">
         <template v-if="currentIndex<words.length">
             <progress-line :progress="currentIndex/words.length*100"></progress-line>
             <word-card @hintUsed="hintWasUsed=true"
                        @increaseIndex="increaseIndex"
                        @rightAnswer="rightAnswer"
                        @wrongAnswer="wrongAnswer"
                        :word="words[currentIndex]"></word-card>
         </template>
          <results :increased-level="increasedLevel" :decreased-level="decreasedLevel" :all-number="words.length" :right-number="rightAnswerCount" v-else></results>
    </div>
</template>

<script>
import WordCard from "@/components/WordCard.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import Results from "@/components/Results.vue";

export default {
    name: "TrainingSection",
    components: {ProgressLine, WordCard, Results},
    data(){
        return{
            hintWasUsed:false,
            increasedLevel:0,
            decreasedLevel:0,
            currentIndex: 0,
            words:[
                {word:"Слово 1",answerInd:1, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:3, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 2",answerInd:2, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:2, rule:"Правило що пояснює чому слово має такий наголос2"},
                {word:"Слово 3",answerInd:3, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0},
                // {word:"Слово 4",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                // {word:"Слово 5",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:2, rule:"Правило що пояснює чому слово має такий наголос"},
                // {word:"Слово 6",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                // {word:"Слово 7",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:4, rule:"Правило що пояснює чому слово має такий наголос"},
                // {word:"Слово 8",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                // {word:"Слово 9",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:3, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 10",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:1, rule:"Правило що пояснює чому слово має такий наголос"}
            ],
            progress: 0,
            rightAnswerCount:0
        }
    },
    methods:{
        increaseIndex(){
            this.currentIndex++
        },
        rightAnswer(){
            this.rightAnswerCount++

            //increase level of this word if user didn't use a hint
            if(!this.hintWasUsed) {
                this.increasedLevel++
                console.log("переведено")

            }
            //to do: post method to server
            this.hintWasUsed=false
        },
        wrongAnswer(){
            this.decreasedLevel++

            //to do: post method to server
            console.log("зменшено")

            this.hintWasUsed=false
        }
    }
}


</script>

<style scoped>
.main{
    width: 100%;
    flex: 1;

}
</style>