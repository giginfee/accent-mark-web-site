<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div class="container">
            <div class="word-info">
              <h2> {{word.word.toUpperCase()}}</h2>
                <div>{{word.rule.text}}</div>
            </div>
            <div v-if="word.rule.words" class="other-words second-border">
                <p>Слова з аналогічним правилом</p>
                <div>{{words}}</div>
            </div>
        </div>
        <div class="navigation">
            <!-- to do: v-if next/prev word -->
            <a href="/">← Попереднє </a>
            <div id="between"></div>
            <a href="/" >Наступне → </a>

        </div>
<!--        <div class="wrapper">-->
<!--            <rule v-for="(rule,i) in rules" :rule="rule" :index="i+1"></rule>-->
<!--        </div>-->


    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import TrainingSection from "@/components/TrainingSection.vue";
import Rule from "@/components/Rule.vue";

export default {
    name: "RulesPage",
    components: {Rule, TrainingSection, LeftBlock, Header},
    data(){
        return{
            word:{
              word:"Слово",
              rule:{text:"Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально.", words:["cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово"  ]}
            },
            words:""
        }
    },
    methods:{
        renderWordsArray(){
            this.words=this.word.rule.words.join(", ").concat(".")
            this.words=this.words[0].toUpperCase().concat(this.words.slice(1))

        }
    },
    mounted() {
        this.renderWordsArray();
    }
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

h2{
    margin: 10px 0 15px 0;
}
.other-words{

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