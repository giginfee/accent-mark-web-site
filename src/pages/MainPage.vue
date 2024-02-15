<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div>

        </div>


    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";


export default {
    name: "MainPage",
    components: {LeftBlock,Header},
    data(){
        return{
        }
    }
}
</script>

<style scoped>




</style>