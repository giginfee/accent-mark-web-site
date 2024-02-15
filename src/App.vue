<script >
import WordList from "@/components/WordList.vue";
import Logo from "@/components/Logo.vue";
import Header from "@/components/Header.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import WordCard from "@/components/WordCard.vue";
import TrainingSection from "@/components/TrainingSection.vue";
import LeftBlock from "@/components/LeftBlock.vue";
export default {
    name: "App",
    components:{
        LeftBlock,
        WordList,Header,Logo,ProgressLine,WordCard,TrainingSection
    }

}
</script>

<template>
    <router-view></router-view>
</template>

<style>





</style>
