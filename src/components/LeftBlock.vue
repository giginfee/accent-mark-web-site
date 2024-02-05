<template>
    <div class="left-block">
        <logo></logo>
        <word-list></word-list>
    </div>
</template>

<script>
import Logo from "@/components/Logo.vue";
import WordList from "@/components/WordList.vue";

export default {
    name: "LeftBlock",
    components: {WordList, Logo}
}
</script>

<style scoped>

.left-block{
    width: 250px;
    height: 100%;
    background-color: var(--button-header-color);
    /*border-radius: 16px;*/
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;
}
</style>