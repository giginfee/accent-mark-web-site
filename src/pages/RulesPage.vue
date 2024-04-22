<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div class="wrapper">
            <rule v-for="(rule,i) in rules" :rule="rule" ></rule>
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
            ]
        }
    },
    beforeMount() {
        const options = {
            method: 'GET',
            mode:"cors",
            credentials: 'include'
        };

        fetch(`http://localhost:3000/all-rules`, options).then(response=>
            response.json()
        ).then(data=> {
                console.log(data)
                this.rules=data
            }
        )
    }}
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