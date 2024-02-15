<template>
    <div class="container">
        <word-levels-stats :all-words="allWords" :user="user"></word-levels-stats>
        <div class="stats" v-if="user">
            <p>Всього переведено на наступний рівень: {{increasedLevel}}</p>
            <p>Всього переведено на попередній рівень: {{decreasedLevel}} </p>
        </div>
    </div>
</template>

<script>
import WordLevelsStats from "@/components/WordLevelsStats.vue";

export default {
    name: "Statistic",
    components: {WordLevelsStats},
    props:{
        increasedLevel:{
            type:Number
        },
        decreasedLevel:{
            type:Number
        },
    },

    data(){
        return {
            user:true,
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
            ],
        }
    }
}
</script>

<style scoped>

.stats p{
    margin: 0 0 10px 0;
}
.stats{
    margin-left: 20px;
    font-size: clamp(14px,1.2vw,16px);
    min-width: 100px;
}


.container{
    margin-top: 50px;
    display: flex;
    width: 100%;
    max-height: 230px;
    min-width: 500px;
}

</style>