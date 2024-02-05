<template>
    <div class="container">
        <div class="levels-info">

            <div class="levels">
                <div class="level" @mouseenter="levelMouseEnter(number)"
                     v-bind:class="{ 'active-level':this.currentLevel===number-1, 'cursor':this.user}"
                     v-for="number in levelsCount">Рівень {{number}}</div>
            </div>
            <div class="words-container">
                <template v-if="!user">
                    <div class="blurry"></div>
                    <img class="icon" alt="Недоступно" src="/src/assets/non-visible.svg">
                </template>
            <div class="words">
                <span  v-for="word in allWords[currentLevel]">{{word+" "}} </span>
            </div>
        </div>
        </div>
        <div class="stats" v-if="user">
            <p>Всього переведено на наступний рівень: {{increasedLevel}}</p>
            <p>Всього переведено на попередній рівень: {{decreasedLevel}} </p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Statistic",
    props:{
        increasedLevel:{
            type:Number
        },
        decreasedLevel:{
            type:Number
        },
    },
    methods:{
      levelMouseEnter(number){
          if(this.user)
            this.currentLevel=number-1
      }
    },
    data(){
        return {
            user:true,
            currentLevel:0,
            allWords:[["Перший рівень Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього",
                "Всього переведено на наступний переведено рівень всього"
            ],
            ["Другий рівень"],
            ["Третій рівень"],
            ["Четвертий рівень"],
            ],
            levelsCount:4
        }
    }
}
</script>

<style scoped>
.icon{
    top: 50%;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);

}
.blurry{
    top: 50%;
    left: 50%;
    position: absolute;
   width: 95%;
   height: 95%;
    transform: translate(-50%, -50%);
    border-radius: 19px;
    backdrop-filter: blur(4px);
    /*-webkit-filter: blur(10px);*/
    /*-moz-filter: blur(10px);*/
    /*-o-filter: blur(10px);*/
    /*-ms-filter: blur(10px);*/
    /*filter: blur(10px);*/
}

.stats p{
    margin: 0 0 10px 0;
}
.stats{
    margin-left: 20px;
    font-size: clamp(14px,1.2vw,16px);

}

.words{
    overflow: auto;
    scroll-behavior: smooth;
    max-height: 100%;
}
.words-container{
    position: relative;
    background-color: #DBDFE2;
    height: 100%;
    width: 100%;
    margin-bottom: 10px;
    box-sizing: border-box;
    padding:15px;
    border-radius:  var(--border-radius);
    font-size: clamp(14px,1.2vw,16px);
    min-width: 150px;

    max-height: 100%;

}
.levels-info{
    width: 65%;
    display: flex;
    gap: 15px;
    max-height: 100%;

}
.levels{
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: fit-content;
    font-size: clamp(14px,1.2vw,16px);


}
.level{
    background-color: #DBDFE2;
    width: 130px;
    height: 50px;
    border-radius:  var(--border-radius);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.2s;

}
.cursor{
    cursor: pointer;

}
.active-level{
    background-color: #F07F17;
}
.container{
    margin-top: 50px;
    display: flex;
    width: 100%;
    max-height: 230px;
}
.words::-webkit-scrollbar {
    display: none;
    width: 2px;
}

::-webkit-scrollbar-track {
    background: rgba(56, 56, 56, 0.2);

}

::-webkit-scrollbar-thumb {
    background: rgba(56, 56, 56, 0.39);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(56, 56, 56, 0.5);
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: rgba(56, 56, 56, 0.39);
}
</style>