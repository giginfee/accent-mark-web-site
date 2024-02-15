<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div class="wrapper">
            <rule v-for="(rule,i) in rules" :rule="rule" :index="i+1"></rule>
        </div>


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
            rules:[
                {text:"Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально.", words:["cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово"  ]},
                {text:"Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально.", words:["cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово"  ]},
                {text:"Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально.", words:["cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово"  ]},
                {text:"Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально Суть правило розписана тут доволі детально.", words:["cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово","cлово"  ]}

            ]
        }
    }
}
</script>

<style scoped>

.wrapper{
    scroll-behavior: smooth;
    display: flex;
    gap:20px;
    flex-direction: column;
    margin: 5% 0;
    overflow: auto;
    flex: 1;

}


::-webkit-scrollbar {
    display: none;
    width: 2px;
}

</style>