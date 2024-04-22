<template>
    <left-block></left-block>
    <div class="right-side">
        <Header></Header>
        <div>
            <div class="greeting">Вітаємо, {{user.login}}!</div>
            <div class="title">Ваша статистика</div>
            <div class="container">
                <word-levels-stats class="word-stats" :user="true" :all-words="user.allWords"></word-levels-stats>
                <general-progress :percent="percent" :end-rotation="endRotation"></general-progress>


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
            percent:0,
            rotation:-90,
            user:{
                login:"Gigi",
                allWords:[[ "Без рівня"],
                    ["Другий рівень"],
                    ["Третій рівень"],
                    ["Четвертий рівень"],
                ]
            },
            endRotation:15,
        }
    },
    mounted() {
        // setTimeout(()=> /*to do: calculate percentage according to real progress*/ this.rotation = this.endRotation, 300)

    },
    methods:{
      getUserScore(){
          const options = {
              method: 'GET',
              mode:"cors",
              credentials: 'include'
          };

          fetch(`http://localhost:3000/user-progress`, options).then(response=>
              response.json()
          ).then(data=> {

                  this.percent=data.score
                  this.endRotation=180*data.score/100-90
                  setTimeout(()=>this.rotation = this.endRotation, 300)

              }
          )
      },
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
              this.user.allWords=[arr0,arr1,arr2,arr3]


              }
          )
      }
    },

    beforeMount() {
        this.getUser().then(data => {
            if(data=== null)
                this.$router.push("/")
            else{
                this.user.login=data.login
                this.getUserScore()
                this.getUserWords()
            }
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