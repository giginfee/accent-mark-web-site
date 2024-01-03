<template>
    <div class="main">
        <progress-line></progress-line>
        <word-card :word="words[currentIndex]"></word-card>
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
            currentIndex: 2,
            words:[
                {word:"Слово 1", options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:3, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 2", options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:2, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 3", options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"],level:0, rule:"Правило що пояснює чому слово має такий наголос"},
                {word:"Слово 4", options:["Варіант 1", "Варіант 2","Варіант 3","Варіант 4"], rule:"Правило що пояснює чому слово має такий наголос"}
            ]
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