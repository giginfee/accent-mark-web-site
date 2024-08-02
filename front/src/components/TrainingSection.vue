<template>
    <div class="main">
        <div ref="popUp" class="pop-up second-border" v-if="showPopUp">
            <h3>Пам'ятка, як проходить тест</h3>
            <div class="pop-up-text">Перед вами з'являється слово, вам потрібно правильно вказати його наголос.
                Оберіть той варіант з номером складу, на який, як ви вважаєте, падає наголос у слові.<br>

            </div>

            <div class="buttons"><entry-button href="" @click="closePopUp(0)" button-content="Почати"></entry-button>
<!--            <entry-button href="" @click="closePopUp(1)" button-content="Вимова"></entry-button>-->
            </div>
        </div>

         <template v-else-if="currentIndex<words.length ">

             <progress-line :progress="currentIndex/words.length*100"></progress-line>
             <word-card  @hintUsed="hintWasUsed=true"
                        @increaseIndex="increaseIndex"
                        @rightAnswer="rightAnswer"
                        @wrongAnswer="wrongAnswer"
                        :word="words[currentIndex]"
                        :option="0"
             ></word-card>

         </template>
          <results :increased-level="increasedLevel" :decreased-level="decreasedLevel" :all-number="words.length" :right-number="rightAnswerCount" v-else></results>
    </div>
</template>

<script>
import WordCard from "@/components/WordCard.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import Results from "@/components/Results.vue";
import getUserMixin from "@/mixin/getUserMixin.js";
import {useToast} from "vue-toast-notification";
import EntryButton from "@/components/EntryButton.vue";

export default {
    name: "TrainingSection",
    components: {EntryButton, ProgressLine, WordCard, Results},
    mixins: [getUserMixin],
    data(){
        return{
            option:0,
            showPopUp:true,
            user:false,
            hintWasUsed:false,
            increasedLevel:0,
            decreasedLevel:0,
            currentIndex: 0,
            words:[
                {word:"Слово 1",answerInd:1, options:["Варіант 1", "Варіант 2","Варіант 3"],level:3, rule:"Правило що пояснює чому слово має такий наголос"},
                 ],
            progress: 0,
            rightAnswerCount:0
        }
    },
    mounted() {
    },

    beforeMount() {
        //
        this.getUser().then(data => {
            if (data === null)
                this.user = false
            else {
                this.user = true
            }
        })




    },
    methods:{
        closePopUp(option){
            this.option=option
            this.$refs["popUp"].classList += " pop-up-hide"
            setTimeout(()=>this.showPopUp=false, 1000)
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };
            let withAudio=option===1?"-with-audio":""

            fetch(`${import.meta.env.VITE_API_URL}/random-50-words${withAudio}`, options).then(response=>
                response.json()
            ).then(data=> {

                    this.words=data.map(x=>{
                        let newWord=x
                        newWord.word=newWord.word.toLowerCase()
                        return newWord
                    })
                }
            )
        },
        increaseLevel(id){

            const options = {
                method: 'POST',
                mode:"cors",
                credentials: 'include'
            };
            if(this.user) {
                fetch(`${import.meta.env.VITE_API_URL}/increase-level/${id}`, options).then()
                const $toast = useToast();
                let toast = $toast.success('Слово переведено на вищий рівень');
            }
        },
        decreaseLevel(id){

            const options = {
                method: 'POST',
                mode:"cors",
                credentials: 'include'
            };
            if(this.user) {
                if(this.words[this.currentIndex].hasOwnProperty("level")&& this.word.level!==0) {
                    fetch(`${import.meta.env.VITE_API_URL}/decrease-level/${id}`, options).then()
                    const $toast = useToast();
                    let toast = $toast.error('Слово переведено на нижчий рівень');
                    this.decreasedLevel++
                }


            }
        },

        increaseIndex(){
            this.currentIndex++
        },
        rightAnswer(id){
            console.log(id)
            this.rightAnswerCount++

            //increase level of this word if user didn't use a hint
            if(!this.hintWasUsed) {
                this.increasedLevel++
                this.increaseLevel(id)


            }
            this.hintWasUsed=false

        },
        wrongAnswer(id){


            this.decreaseLevel(id)

            this.hintWasUsed=false
        }
    }
}


</script>

<style scoped>
.buttons{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 15px;
    margin: 15px 0 0 0;
}
.pop-up-hide{
    opacity:0

}
.pop-up{
        width: 70%;
        margin: auto;
        margin-top: 90px;
        padding: 10px 30px 30px 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border: solid var(--training-word-border-color) 2px ;
        border-radius: 15px;
        text-align: center;
        transition: opacity 1s;
    }


    .main{
        width: 100%;
        flex: 1;

    }

</style>