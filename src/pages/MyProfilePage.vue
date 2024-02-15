<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div>
            <div class="greeting">Вітаємо, {{user.login}}!</div>
            <div class="title">Ваша статистика</div>
            <div class="container">
                <word-levels-stats :user="true" :all-words="user.allWords"></word-levels-stats>
            </div>


        </div>


    </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LeftBlock from "@/components/LeftBlock.vue";
import Statistic from "@/components/Statistic.vue";
import WordLevelsStats from "@/components/WordLevelsStats.vue";


export default {
    name: "MyProfilePage",
    components: {WordLevelsStats, Statistic, LeftBlock,Header},
    data(){
        return{
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
    }
}
</script>

<style scoped>
.title{
    width: 100%;
    display: flex;
    justify-content: center;
    font-size: clamp(20px,1.5vw,24px);

}
.greeting{
    display: flex;
    justify-content: center;
    margin: 30px;
    font-size: clamp(20px,1.5vw,24px);
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