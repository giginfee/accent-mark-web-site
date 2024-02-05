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
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <TrainingSection></TrainingSection>
    </div>

</template>

<style>





.right-side{
    min-width: 350px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 4%;
}








</style>
