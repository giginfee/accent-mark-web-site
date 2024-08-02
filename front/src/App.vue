<script >
import WordList from "@/components/WordList.vue";
import Logo from "@/components/Logo.vue";
import Header from "@/components/Header.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import WordCard from "@/components/WordCard.vue";
import TrainingSection from "@/components/TrainingSection.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import getUserMixin from '@/mixin/getUserMixin';

import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';



export default {
    name: "App",
    mixins:[getUserMixin],
    components:{
        LeftBlock,
        WordList,Header,Logo,ProgressLine,WordCard,TrainingSection
    },beforeMount() {
        this.getUser().then(data => {
            // console.log(data)
            if(data!== null)
                this.$store.dispatch('user', data.login)
        })

        this.getWords()



    },
    mounted() {
    },
    updated() {
    },
    methods:{
        getWords(){
            this.$store.dispatch('fetchWords')
        }
    }

}
</script>

<template>
    <router-view></router-view>
</template>

<style>





</style>
