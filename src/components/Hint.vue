<template>
    <div @mouseenter="mouseOver" @mouseleave="mouseOut" class="hint-block">
        <div id="question-mark" ref="question-mark">?</div>
        <div id="rule" ref="rule" class="hidden">{{rule}}</div>
    </div>
</template>

<script>
let animationDuration=400

let timers =[]
export default {
    name: "Hint",
    props:{
        rule:{
            type:String,
            required:true
        }
    },
    methods:{
        mouseOver(){
            this.clearAllTimers()
            this.$refs["question-mark"].style.opacity = "1";
            this.$refs.rule.style.opacity = "0";
            this.$refs.rule.style.display = "none";
            this.$refs["question-mark"].style.display = "block";
            timers.push(this.changeOpacity(this.$refs["question-mark"], animationDuration/2, 1))
            timers.push( setTimeout(()=>{
                this.$refs["question-mark"].style.display = "none";
                this.$refs.rule.style.display = "block";

                timers.push(this.changeOpacity(this.$refs.rule, animationDuration/2, 0))

            }, animationDuration))

        },
        mouseOut(){
            this.clearAllTimers()
            this.$refs["question-mark"].style.opacity = "0";
            this.$refs.rule.style.opacity = "1";
            this.$refs["question-mark"].style.display = "none";
            this.$refs.rule.style.display = "block";

            timers.push(this.changeOpacity(this.$refs.rule, animationDuration / 7, 1))
            timers.push(setTimeout(() => {
                this.$refs["question-mark"].style.display = " block ";
                this.$refs.rule.style.display = "none";
            }, animationDuration / 3))

            timers.push(setTimeout(() => {
                timers.push(this.changeOpacity(this.$refs["question-mark"], animationDuration/2, 0))

            }, animationDuration))

        },

        clearAllTimers(){
            timers.forEach(x=> {
                clearTimeout(x);
                clearInterval(x);
            })
        },
        changeOpacity(div, duration, opacityStart) {
            let opacity = opacityStart;
            const startTime = new Date().getTime();

            const intervalId = setInterval(function () {
                const currentTime = new Date().getTime();
                const elapsed = currentTime - startTime;

                if (elapsed >= duration) {
                    clearInterval(intervalId);
                } else if(opacityStart ===1){
                    opacity = 1 - elapsed / duration;
                    div.style.opacity = opacity;
                }else if(opacityStart ===0){
                    opacity = (elapsed / duration);
                    div.style.opacity = opacity;
                }
            }, 10);

            // Clear the interval in case the animation duration is longer than expected
            setTimeout(function () {
                clearInterval(intervalId);
                div.style.opacity = (opacityStart ===0)?1:0;
            }, duration);
            return intervalId
        }
    }
}
</script>

<style scoped>
#rule{
    opacity: 0;
    font-size: clamp(12px,1.5vw,18px);
    font-weight: normal;
    text-align: start;
}
#question-mark{
    font-size: clamp(14px,1.5vw,24px);

}

.hidden{
    display: none;
}

.hint-block{
    /*align-self:start;*/
    text-align:center;
    color: white;
    background-color: #89ADC7;
    padding: 1% 2%;
    border-radius: 16px;
    font-weight: bold;
    font-size: 24px;
    height: max-content;
    min-height: 0;
    transition: min-height 0.5s, flex 0.5s ;
    max-height: fit-content;
    flex:0;
}

.hint-block:hover{
    text-align: start;
    box-sizing: border-box;
    cursor: pointer;
    flex:1;
    min-height:100%;
    /*padding: 2% 2%;*/
}

</style>