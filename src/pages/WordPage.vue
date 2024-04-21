<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div class="container">
            <div class="word-info">
              <h2> {{word.word}}</h2>
                <div>{{word.rule.text}}</div>
            </div>
            <div v-if="word.rule.words" class="other-words second-border">
                <p>Слова з аналогічним правилом</p>
                <div>{{renderWordsArray}}</div>
            </div>
        </div>
<!--        <div class="navigation">-->
<!--            &lt;!&ndash; to do: v-if next/prev word &ndash;&gt;-->
<!--            <a v-if="showPrevious" href="/">← Попереднє </a>-->
<!--            <div id="between"></div>-->
<!--            <a v-if="showNext" href="/" >Наступне → </a>-->

<!--        </div>-->


        

    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import TrainingSection from "@/components/TrainingSection.vue";
import Rule from "@/components/Rule.vue";
import {mapGetters} from "vuex";

export default {
    name: "WordPage",
    components: {Rule, TrainingSection, LeftBlock, Header},
    data(){
        return{
            showPrevious:true,
            showNext:true,
            word:{
                ruleId:0,
              word:"Слово",
              rule:{text:"", words:[]}
            },
            words:""
        }
    },
    methods:{
        update(){
            this.showPrevious=(this.$route.params.id != 1)
            this.showNext=(this.$route.params.id !==this.wordsList.length )
            console.log('showPrevious, showNext')
            console.log(this.wordsList.length)
            console.log(this.showPrevious, this.showNext)
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };

            fetch(`http://localhost:3000/word/${this.$route.params.id}`, options).then(response=>
                response.json()
            ).then(data=> {

                    this.word.word=data.word

                    fetch(`http://localhost:3000/rule-for-word/${this.$route.params.id}`, options).then(response=>
                        response.json()
                    ).then(data=> {
                        this.word.rule=data
                        if (this.word.rule.id.length!==0)
                            fetch(`http://localhost:3000/words-for-rule/${this.word.rule.id}`, options).then(response=>
                                response.json()
                                ).then(data=> {

                                    this.word.rule.words=data.map(obj=>obj.word)
                                }
                            )
                        }
                    )
                }
            )
        }
    },

    computed:{
        renderWordsArray(){
            this.words=this.word.rule.words.join(", ").concat(".")
            this.words=this.words[0].toUpperCase().concat(this.words.slice(1))
            return this.words
        },
        ...mapGetters({wordsList: 'words'})
        ///

    },
    mounted() {
        this.update()

        this.$watch(
            () => this.$route.params.id,
            (newId, oldId) => {
                this.update()
            }
        )

    },
}
</script>

<style scoped>
#between{
    flex: 1;
}
.navigation{
    margin-top: 15px;
    display: flex;
    width: 100%;
    font-weight: 500;
}
.word-info{
    flex:1;
    min-width: 150px;
}
h2{
    margin: 10px 0 15px 0;
}
.other-words{
    max-width: 350px;
    border-radius: var(--border-radius);
    border: var(--rule-card-border-color) solid 2px;
    width: fit-content;
    padding: 20px;
}
.other-words div{
    font-size: clamp(14px,1vw,16px);
}
.other-words p{
    margin: 0 0 10px 0;
    font-weight: 500;
}
.container{
padding-top: 3%;
    display: flex;
    gap:20px;
    margin-bottom: 10px;

}


::-webkit-scrollbar {
    display: none;
    width: 2px;
}

</style>