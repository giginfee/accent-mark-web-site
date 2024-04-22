<template>
    <div class="container">
        <word-levels-stats :all-words="allWords" :user="user"></word-levels-stats>
        <div class="stats" v-if="user">
            <p>Всього переведено на наступний рівень: {{increasedLevel}}</p>
            <p>Всього переведено на попередній рівень: {{decreasedLevel}} </p>
        </div>
        <div class="stats" v-else>
            Щоб переглядати статистику та мати можливість вчити слова по рівням, Вам необхідно бути зареєстровним користувачем.
        </div>
    </div>
</template>

<script>
import WordLevelsStats from "@/components/WordLevelsStats.vue";
import getUserMixin from "@/mixin/getUserMixin.js";

export default {
    name: "Statistic",
    components: {WordLevelsStats},
    mixins:[getUserMixin],
    props:{
        increasedLevel:{
            type:Number
        },
        decreasedLevel:{
            type:Number
        },
    },
    methods:{
        getUserWords(){
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };

            fetch(`http://localhost:3000/all-words-with-levels`, options).then(response=>
                response.json()
            ).then(data=> {

                    let arr0=[]
                    let arr1=[]
                    let arr2=[]
                    let arr3=[]
                    arr0= data.filter(obj=>!obj.hasOwnProperty("level"))
                    arr1= data.filter(obj=>obj["level"]===1)
                    arr2= data.filter(obj=>obj["level"]===2)
                    arr3= data.filter(obj=>obj["level"]===3)
                    this.allWords=[arr0,arr1,arr2,arr3]


                }
            )
        }
    },
    data(){
        return {
            user:false,
            allWords:[[{word:"Cлово"}, {word:"gfh"},{word:"gловfgthgfhbgrdо"},{word:"grdhnfcg"},{word:"grdhbdf"},
                {word:"gresdf"},{word:"grhbg"},{word:"gfh"},{word:"gловfgthgfhbgrdо"},{word:"grdhnfcg"},{word:"grdhbdf"},
                {word:"gresdf"},{word:"grhbg"},{word:"gfh"},{word:"gловfgthgfhbgrdо"},{word:"grdhnfcg"},{word:"grdhbdf"},
                {word:"gresdf"},{word:"grhbg"},{word:"gловfgthgfhbgrdо"},{word:"gdhnfcg"},{word:"gdfgfrdhbdf"},{word:"gresfgfbdf"},{word:"grhbg"},{word:"gresdf"},{word:"grhbg"},{word:"gловfgthgfhbgrdо"},{word:"gdhnfcg"},{word:"gdfgfrdhbdf"},{word:"gresfgfbdf"},{word:"grhbg"}],
            ["Другий рівень " ],
            ["Третій рівень", ],
            ["Четвертий рівень",  ],
            ],
        }
    },
    beforeMount() {
        this.getUser().then(data => {
            if (data === null)
                this.user = false
            else {
                this.getUserWords()
                this.user = true
            }
        })
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
    max-width: 350px;
}


.container{
    margin-top: 50px;
    display: flex;
    width: 100%;
    max-height: 230px;
    min-width: 500px;
}

</style>