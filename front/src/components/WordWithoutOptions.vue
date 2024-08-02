<template>
    <div class="word-with-options">
        <div class="word">
            {{word}}
            <record-button id="record" @voiceAnswer="voiceAnswer"
                           :wordId="wordId"
                           :newWord="true"
                           @stopRecord="unfreezeOptions"
                           @recordError="onrecordError"
                           class="record-button"></record-button>
        </div>
        </div>
</template>

<script>
import RecordButton from "@/components/RecordButton.vue";
import {useToast} from "vue-toast-notification";
export default {
    name: "WordWithOptions",
    components: {RecordButton},
    props:{
        wordId: {
            type: Number,
            required: true
         },
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
        document.getElementById("record").style.pointerEvents="all"

    },
    methods:{
        onrecordError(){
            document.getElementById("record").style.pointerEvents="all"
        },

        voiceAnswer(answer){
            setTimeout(()=>this.answerResult(answer),1000)

        },
        unfreezeOptions(){
            document.getElementById("record").style.pointerEvents="none"
        },
        increaseIndex(e){
            //show whether the answer was right or wrong
            this.answerResult(e.target.dataset.index)

        },
        answerResult(answerId){
            const $toast = useToast();
            let rightAnswer=answerId==this.answerInd
            if(rightAnswer) {
                let toast = $toast.success('Правильно!');
                this.$emit('rightAnswer')
            }
            if(!rightAnswer) {
                let toast = $toast.error( `Неправильно, наголос падає на ${this.options[this.answerInd].toLowerCase()} склад!`);
                this.$emit('wrongAnswer')

            }
            setTimeout(()=>{
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
    min-height: 20px;
    font-size: 20px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: bold;
    border-radius:  var(--border-radius);
    border: 2px solid var(--training-word-border-color);
    flex: 0.2;
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