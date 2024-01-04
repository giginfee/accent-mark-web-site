<template>
    <div class="main">
        <progress-line :progress="currentIndex/words.length*100"></progress-line>
        <word-card v-if="currentIndex<words.length" @increaseIndex="increaseIndex" :word="words[currentIndex]"></word-card>
        <div v-else> Кінець</div>
    </div>
</template>

<script>
import WordCard from "@/components/WordCard.vue";
import ProgressLine from "@/components/ProgressLine.vue";

export default {
    name: "TrainingSection",
    components: {ProgressLine, WordCard},
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
            progress: 90
        }
    },
    methods:{
        increaseIndex(){
            this.currentIndex++
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