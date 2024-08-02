<template>
    <div class="word-card" v-bind:class="{ gap: word.level ===undefined }">
        <word-with-options v-if="option===0" @increaseIndex="increaseIndex" @wrongAnswer="wrongAnswer" @rightAnswer="rightAnswer" :answerInd= word.answerInd :word=word.word :options="word.options"></word-with-options>
<!--        <word-without-options v-else-if="option===1"-->
<!--                              :wordId="word.id"-->
<!--                              @increaseIndex="increaseIndex" @wrongAnswer="wrongAnswer" @rightAnswer="rightAnswer" :answerInd= word.answerInd :word=word.word :options="word.options"></word-without-options>-->
        <levels v-if="user" :level=level></levels>
        <hint @hintUsed="$emit('hintUsed')" :rule=rule></hint>

    </div>
</template>

<script>


import WordWithOptions from "@/components/WordWithOptions.vue";
import WordWithoutOptions from "@/components/WordWithoutOptions.vue";
import Hint from "@/components/Hint.vue";
import Levels from "@/components/Levels.vue";
import getUserMixin from "@/mixin/getUserMixin.js";

export default {
    name: "WordCard",
    components:{
        WordWithOptions,Hint,Levels,WordWithoutOptions
    },
    mixins: [getUserMixin],

    props:{
        option:{type:Number,required:true},
        word:{
            id:Number,
            answerInd:Number,
            word:String,
            options: Array,
        }
    },
    data(){
        return {
            user:null,
            rule:"",
            level:0,
            increasedLevel: 0,
            decreasedLevel: 0,
            hintUsed:false
        }
    },
    methods:{

        increaseIndex(){
            this.$emit('increaseIndex')
        },
        rightAnswer(){
            this.$emit('rightAnswer', this.word.id)

        },
        wrongAnswer(){
            this.$emit('wrongAnswer', this.word.id)
        },

        update(){
            //get rule
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };
            fetch(`${import.meta.env.VITE_API_URL}/rule-for-word/${this.word.id}`, options).then(response=>
                response.json()
            ).then(data=> {
                    this.rule=data.text
                }
            )

            // get level
            if(this.word.hasOwnProperty("level")) {
                console.log("has level ", this.word.level)
                this.level = this.word.level
            }else
                this.level=0
        }

    },
    beforeMount() {
        this.getUser().then(data => {
                this.user=data
        })

        this.update()

    },
    updated() {
        this.update()

    }

}

</script>

<style scoped>






.word-card{
    padding-top: 1%;
    display: flex;
    flex-direction: row;
    height: 40%;
    min-height: 185px;
}

.gap{
    gap:10px
}

</style>