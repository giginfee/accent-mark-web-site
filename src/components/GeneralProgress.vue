<template>
    <div class="progress-container">
        <div class="percent-container">{{percent}}%</div>
        <div class="progress-label">{{label}}</div>
        <div class="progress-imgs">
            <img class="progress-image" src="@/assets/progress.svg" alt="progress">
            <img class="progress-pointer rotating" :style="{ transform: 'translate(-50%) rotate(' + rotation + 'deg)' }" src="@/assets/pointer2.png" alt="progress">
        </div>
    </div>
</template>

<script>
export default {
    name: "GeneralProgress",
    props:{
        percent:{
            type:Number,
            required: true
        },
        endRotation:{
            type:Number,
            required: true
        }
    },
    data(){
        return{
            rotation:-90
        }
    },
    computed:{
        label(){
            if(this.percent<=25){
                return "Головне - це не здавайся"
            }
            if(this.percent<=40){
                    return "Молодець, що продовжуєш!"
            }
            if(this.percent<=60){
                    return "Ви на середині шляху"
            }
            if(this.percent<=75){
                    return "Третина шляху вже вважай пройдена!"
            }
            if(this.percent<=95){
                    return "Залишилось зовсім трішки!"
            }
            if(this.percent<=100){
                    return "Твоє навчання завершено, вдалих іспитів!"
            }

        }
    },
    mounted() {
        setTimeout(()=> this.rotation = this.endRotation, 300)

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