<template>
    <div class="word-with-options">
        <div class="word">
            {{word}}
        </div>
        <div class="options" ref="options">
            <button class="option" @click="increaseIndex"
                    v-bind:class="{'columns-2':i===2}"
                    :ref="options.indexOf(option)"
                    v-bind:data-index="options.indexOf(option)"
                    v-for="(option,i) in options">{{ option}}</button>
        </div>

    </div>
</template>

<script>
import RecordButton from "@/components/RecordButton.vue";

export default {
    name: "WordWithOptions",
    components: {RecordButton},
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

    updated() {


    },
    methods:{


        increaseIndex(e){
            //show whether the answer was right or wrong
            this.answerResult(e.target.dataset.index)

        },
        answerResult(index){
            let rightAnswer=+(index)===this.answerInd
            let className=rightAnswer?"right":"wrong"
            this.$refs[index][0].classList.add(className)

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

            setTimeout(()=>{ this.$refs[index][0].classList.remove(className)

                right.classList.remove("right")
                this.$refs.options.style.pointerEvents="all"

                this.$emit('increaseIndex', this.increasedLevel, this.decreasedLevel)}, 1000)
        }
    }

}
</script>

<style scoped>

img {
    width: 95%;
}
.record-button{
    margin: auto 10px  auto auto ;
}
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
    border-radius:  var(--border-radius);
    border: 2px solid var(--training-word-border-color);
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
    border-radius:  var(--border-radius);
    border-width: 0;
    background-color: var(--training-option-color);
    transition: opacity 0.3s;
}
.columns-2 {
    grid-column: span 2; /* Займати дві колонки */
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