<template>
    <div class="levels">
        <div class="level-point" v-for="num of [1,2,3,4]" v-bind:class="{ orange: num<=level }"></div>
<!--        <div class="level-point"></div>-->
<!--        <div class="level-point"></div>-->
<!--        <div class="level-point"></div>-->
    </div>
</template>

<script>
export default {
    name: "Levels",
    props:{
        level:{
            type:Number,
            required:true
        }
    }
}
</script>

<style scoped>

.levels{
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    gap: 1%;
}

.level-point{
    width: 7px;
    height: 7px;
    border-radius: 10px;
    background-color: #D9D9D9;
}
.orange{
    background-color: #F07F17;
}

</style>