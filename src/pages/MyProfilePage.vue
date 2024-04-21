<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div>
            <div class="greeting">Вітаємо, {{user.login}}!</div>
            <div class="title">Ваша статистика</div>
            <div class="container">
                <word-levels-stats class="word-stats" :user="true" :all-words="user.allWords"></word-levels-stats>
                <general-progress></general-progress>
<!--                <div class="progress-container">-->
<!--                    <div class="percent-container">{{51}}%</div>-->
<!--                    <div class="progress-label">{{"Ви на середині шляху"}}</div>-->
<!--                    <div class="progress-imgs">-->
<!--                         <img class="progress-image" src="@/assets/progress.svg" alt="progress">-->
<!--                         <img class="progress-pointer rotating" :style="{ transform: 'translate(-50%) rotate(' + rotation + 'deg)' }" src="@/assets/pointer2.png" alt="progress">-->
<!--                    </div>-->
<!--                </div>-->


            </div>



        </div>


    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import Statistic from "@/components/Statistic.vue";
import WordLevelsStats from "@/components/WordLevelsStats.vue";
import GeneralProgress from "@/components/GeneralProgress.vue";
import getUserMixin from "@/mixin/getUserMixin.js";


export default {
    name: "MyProfilePage",
    components: {GeneralProgress, WordLevelsStats, Statistic, LeftBlock,Header},
    mixins: [getUserMixin],

    data(){
        return{
            rotation:-90,
            user:{
                login:"Gigi",
                allWords:[["Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово",
                    "Слово","Слово","Слово","Слово","Слово","Слово","Слово"

                ],
                    ["Другий рівень"],
                    ["Третій рівень"],
                    ["Четвертий рівень"],
                ]
            }
        }
    },
    mounted() {
        setTimeout(()=> /*to do: calculate percentage according to real progress*/ this.rotation = -0, 300)

    },
    beforeMount() {
        this.getUser().then(data => {
            console.log(data)
            if(data=== null)
                this.$router.push("/")
        })

    }
}
</script>

<style scoped>


.title{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: clamp(18px,1.3vw,20px);

}
.greeting{
    display: flex;
    justify-content: center;
    margin:30px 30px 15px 30px ;
    font-size: clamp(26px,1.8vw,28px);
    font-weight: 500;

}

.container{
    margin-top: 25px;
    display: flex;
    width: 100%;
    max-height: 230px;
    min-width: 500px;
}


</style>