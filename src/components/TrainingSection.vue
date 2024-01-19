<template>
    <div class="main">
         <div v-if="currentIndex<words.length">
             <progress-line :progress="currentIndex/words.length*100"></progress-line>
             <word-card @increaseIndex="increaseIndex" @rightAnswer="rightAnswer" :word="words[currentIndex]"></word-card>
         </div>
          <results :all-number="words.length" :right-number="rightAnswerCount" v-else></results>
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
            currentIndex: 0,
            words:[
                {word:"Слово 1",answerInd:1, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:3, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 2",answerInd:2, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:2, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 3",answerInd:3, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0},
                {word:"Слово 4",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 5",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:2, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 6",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 7",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:4, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 8",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 9",answerInd:0, options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:3, rule:"Правило що пояснює чому слово має такий наголос"},
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
            console.log(this.rightAnswerCount)
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