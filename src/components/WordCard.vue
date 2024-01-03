<template>
    <div class="word-card" v-bind:class="{ gap: word.level ===undefined }">
        <word-with-options :word=word.word :options="word.options"></word-with-options>
        <levels v-if="word.level!==undefined" :level=word.level></levels>
        <hint :rule=word.rule></hint>

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
            word:String,
            rule:String,
            level: Number,
            options: Array
        }
    }

}

</script>

<style scoped>






.word-card{
    padding-top: 4%;
    display: flex;
    flex-direction: row;
    height: 40%;
    min-height: 185px;
}

.gap{
    gap:10px
}

</style>