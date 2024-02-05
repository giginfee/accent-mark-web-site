<template>
    <div class="word-with-options">
        <div class="word">
            {{word}}
        </div>
        <div class="options" ref="options">
            <button class="option" @click="increaseIndex"
                    :ref="options.indexOf(option)"
                    v-bind:data-index="options.indexOf(option)"
                    v-for="option in options">{{ option }}</button>
        </div>

    </div>
</template>

<script>
export default {
    name: "WordWithOptions",
    props:{
        word:{
            type:String,
            required: true
        },
        options:{
            type: Array,
            required: true
        },
        answerInd:{
            type: Number,
            required: true
        }
    },
    methods:{
        increaseIndex(e){
            //show whether the answer was right or wrong
            let rightAnswer=+(e.target.dataset.index)===this.answerInd
            let className=rightAnswer?"right":"wrong"
            e.target.classList.add(className)

            //let the parent component know whether user chose the right answer
            if(rightAnswer)
                this.$emit('rightAnswer')

            if(!rightAnswer)
                this.$emit('wrongAnswer')




            //if the answer was wrong, show the right one
            let right=this.$refs[this.answerInd][0]
            if(!right.classList.contains("right"))
                right.classList.add("right")


            this.$refs.options.style.pointerEvents="none"



            setTimeout(()=>{e.target.classList.remove(className)

                right.classList.remove("right")
                this.$refs.options.style.pointerEvents="all"

                this.$emit('increaseIndex', this.increasedLevel, this.decreasedLevel)}, 1000)
        }
    }

}
</script>

<style scoped>
.word-with-options{
    display: flex;
    flex-direction: column;
}

.word{
    min-height: 40px;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: bold;
    border-radius: 16px;
    border: 4px solid #3171A0;
    flex: 0.3;
    background-color: white;
    margin: 0 0 4% 0;
}
.options{
    flex: 1;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 1fr 1fr;
    column-gap: 4%;
    row-gap: 9%;

}
.option{
    padding: 10px 20px;

    font-family: 'Montserrat', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: clamp(14px,1.5vw,18px);
    font-weight: 300;
    box-sizing: border-box;
    border-radius: 16px;
    border-width: 0;
    background-color: var(--training-option-color);
    transition: opacity 0.3s;
}
.option:hover{
    cursor: pointer;
    /*background-color:var(--training-option-color);*/
    opacity: 0.75;
}
.option:active{
    cursor: pointer;
    opacity: 1;
}
.right{
    background-color: var(--right-answer-color);
}
.wrong{
    background-color: var(--wrong-answer-color);
}
.right:hover{
    background-color: var(--right-answer-color);
}
.wrong:hover{
    background-color:var(--wrong-answer-color);
}


.word-with-options{
    flex: 2
}

</style>