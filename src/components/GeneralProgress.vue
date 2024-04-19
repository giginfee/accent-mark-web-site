<template>
    <div class="progress-container">
        <div class="percent-container">{{51}}%</div>
        <div class="progress-label">{{"Ви на середині шляху"}}</div>
        <div class="progress-imgs">
            <img class="progress-image" src="@/assets/progress.svg" alt="progress">
            <img class="progress-pointer rotating" :style="{ transform: 'translate(-50%) rotate(' + rotation + 'deg)' }" src="@/assets/pointer2.png" alt="progress">
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneralProgress",
    data(){
        return{
            rotation:-90
        }
    },
    mounted() {
        setTimeout(()=> /*to do: calculate percentage according to real progress*/ this.rotation = -0, 300)

    }
}
</script>

<style scoped>
.rotating {
    transition: transform 1s ease;
}
.progress-pointer{
    position: absolute;
    max-height: 250px;
    left: 50%;
    top: 25%;

}
.progress-imgs{
    flex: 1;

    max-height: inherit;
    max-width:330px;
    position: relative;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
.progress-container{
    display: flex;
    flex-direction: column;

}
.percent-container{
    margin-top: -8px;
    font-weight: bold;
    font-size: clamp(30px,2.5vw,40px);
    text-align: center;
}
.progress-label{
    font-size: clamp(14px,1.2vw,16px);
    text-align: center;
}

.progress-image{
    max-width: 100%;
    min-width: 330px;
    margin-top: 7px;
    margin-left: -2px;

}
</style>