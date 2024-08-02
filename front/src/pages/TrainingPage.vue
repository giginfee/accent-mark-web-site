<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <TrainingSection></TrainingSection>
    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import TrainingSection from "@/components/TrainingSection.vue";

export default {
    name: "TrainingPage",
    components: {TrainingSection, LeftBlock, Header}
}
</script>

<style >

a{
    color: inherit;
    text-decoration-line: none;
}


.right-side{
    min-width: 350px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 4%;
}


</style>