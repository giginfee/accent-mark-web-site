<template>
    <div class="levels">
        <div class="level-pop-up">Рівень слова</div>

        <div class="level-point" v-for="num of [1,2,3,4]" v-bind:class="{ orange: num<=level }"></div>

    </div>
</template>

<script>
export default {
    name: "Levels",
    data(){
        return{
            popUpText:""
        }
    },
    props:{
        level:{
            type:Number,
            required:true
        }
    }
}
</script>

<style scoped>
.levels:hover .level-pop-up{
    opacity:1;
}

.level-pop-up{
    text-align: center;
    border: var(--hint-block-color) 1px solid;
    border-radius:  var(--border-radius);
    opacity: 0;
    top:-90%;
    left:-90%;
    width: fit-content;
    min-width: fit-content;
    padding: 10px;
    font-weight: 400;
    position: absolute;
    font-size: 11px;
    background-color: rgb(255, 255, 255);
    color: var(--main-text-color);
    transition: opacity 0.2s;
}


.levels{
    padding: 10px 8px;
    display: flex;
    flex-direction: column;
    gap: 3px;
    position: relative;
    /*height: auto;*/
    height: max-content;
    max-height: fit-content;


}

.level-point{
    width: 7px;
    height: 7px;
    border-radius: 10px;
    background-color:var(--level-point-inactive-color);
}
.orange{
    background-color: var(--level-point-active-color);
}

</style>