<template>
    <div class="main">
         <template v-if="currentIndex<words.length">
             <progress-line :progress="currentIndex/words.length*100"></progress-line>
             <word-card @hintUsed="hintWasUsed=true"
                        @increaseIndex="increaseIndex"
                        @rightAnswer="rightAnswer"
                        @wrongAnswer="wrongAnswer"
                        :word="words[currentIndex]"></word-card>
         </template>
          <results :increased-level="increasedLevel" :decreased-level="decreasedLevel" :all-number="words.length" :right-number="rightAnswerCount" v-else></results>
    </div>
</template>

<script>
import WordCard from "@/components/WordCard.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import Results from "@/components/Results.vue";
import getUserMixin from "@/mixin/getUserMixin.js";

export default {
    name: "TrainingSection",
    components: {ProgressLine, WordCard, Results},
    mixins: [getUserMixin],
    data(){
        return{
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
    beforeMount() {
        //
        this.getUser().then(data => {
            if (data === null)
                this.user = false
            else {
                this.user = true
            }
        })

        const options = {
            method: 'GET',
            mode:"cors",
            credentials: 'include'
        };

        fetch(`http://localhost:3000/random-50-words`, options).then(response=>
            response.json()
        ).then(data=> {
            this.words=data
            }
        )


    },
    methods:{
        increaseLevel(id){

            const options = {
                method: 'POST',
                mode:"cors",
                credentials: 'include'
            };
            if(this.user)
               fetch(`http://localhost:3000/increase-level/${id}`, options).then()

        },
        decreaseLevel(id){

            const options = {
                method: 'POST',
                mode:"cors",
                credentials: 'include'
            };
            if(this.user)
              fetch(`http://localhost:3000/decrease-level/${id}`, options).then()

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
                console.log("переведено")
                this.increaseLevel(id)
            }
            this.hintWasUsed=false

        },
        wrongAnswer(id){
            this.decreasedLevel++

            console.log("зменшено")
            this.decreaseLevel(id)

            this.hintWasUsed=false
        }
    }
}


</script>

<style scoped>
.main{
    width: 100%;
    flex: 1;

}
</style>