<template>
    <div class="levels-info">
        <div class="levels">
            <div class="level" @mouseenter="levelMouseEnter(number)"
                 v-bind:class="{ 'active-level':this.currentLevel===number-1, 'cursor':this.user}"
                 v-for="number in levelsCount">Рівень {{number-1}}</div>
        </div>
        <div class="words-container">
            <template v-if="!user">
                <div class="blurry"></div>
                <img class="icon" alt="Недоступно" src="/src/assets/non-visible.svg">
            </template>
            <div class="words">
                <div v-if="allWords[currentLevel].length>0">
                <span  >{{allWords[currentLevel][0].word}} </span>
                <span  v-for="i in allWords[currentLevel].length-1" >{{", "+(allWords[currentLevel][i]).word}} </span>
                <span  >. </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "WordLevelsStats",
    props:{
        allWords:{
            type:Array,
            required:true
        },
        user:{
            type:Boolean,
            required: true
        }
    },

    methods:{
        levelMouseEnter(number){
            if(this.user)
                this.currentLevel=number-1
        }
    },

    data(){
        return {
            currentLevel:0,
            levelsCount:4
        }
    },
    mounted() {
        this.levelsCount=this.allWords.length
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
::-webkit-scrollbar {
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