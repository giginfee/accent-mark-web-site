<template>
    <div class="word-card" v-bind:class="{ gap: word.level ===undefined }">
        <word-with-options @increaseIndex="increaseIndex" @wrongAnswer="wrongAnswer" @rightAnswer="rightAnswer" :answerInd= word.answerInd :word=word.word :options="word.options"></word-with-options>
        <levels v-if="word.level!==undefined" :level=word.level></levels>
        <hint @hintUsed="$emit('hintUsed')" :rule=word.rule></hint>

    </div>
</template>

<script>


import WordWithOptions from "@/components/WordWithOptions.vue";
import Hint from "@/components/Hint.vue";
import Levels from "@/components/Levels.vue";

export default {
    name: "WordCard",
    components:{
        WordWithOptions,Hint,Levels
    },
    props:{
        word:{
            answerInd:Number,
            word:String,
            rule:String,
            level: Number,
            options: Array,
        }
    },
    data(){
        return {
            increasedLevel: 0,
            decreasedLevel: 0,
            hintUsed:false
        }
    },
    methods:{
        increaseIndex(){
            this.$emit('increaseIndex')
        },
        rightAnswer(){
            this.$emit('rightAnswer')
        },
        wrongAnswer(){
            this.$emit('wrongAnswer')
        },
        // hintUsed(){
        //     this.$emit('hintUsed')
        // }

    }

}

</script>

<style scoped>






.word-card{
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    height: 40%;
    min-height: 185px;
}

.gap{
    gap:10px
}

</style>