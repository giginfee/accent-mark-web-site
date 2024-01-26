<template>
  <div class="title" >Ваш результат: {{rightNumber/allNumber*100}}%</div>
    <div id="result">
        <div class="right-part" ref="right">{{rightNumber}}</div>
        <div v-if="rightNumber!==allNumber" class="left-part">{{allNumber-rightNumber}}</div>
    </div>

    <div class="conclusion">
      <a href="/" class="again">
          <img alt="Заново" src="/src/assets/again.png"/>
      </a>
    </div>
    <statistic :increased-level="increasedLevel" :decreased-level="decreasedLevel"></statistic>



</template>

<script>
import Statistic from "@/components/Statistic.vue";

export default {
    name: "Results",
    components: {Statistic},
    props:{
        increasedLevel:{
            type:Number
        },
        decreasedLevel:{
            type:Number
        },
        rightNumber:{
            type:Number,
            required: true
        },
        allNumber:{
            type:Number,
            required: true
        }
    },
    mounted() {
        console.log(this.decreasedLevel)
        this.$refs.right.style.width = (this.rightNumber/this.allNumber*100)+'%';
    }
}
</script>

<style scoped>
.right-part{
    background-color: #3EBC33;
    width:70%
}
.left-part{
    background-color: #B62626;
    flex: 1;
}
.left-part, .right-part{
    display: flex;
    justify-content: center;
    align-items: center;
}


#result{
    margin-top: 10px;
    display: flex;
    border-radius: 20px;
    height: 35px;
    overflow: hidden;
}

a{
    display: inline-block;
}
a img{
    width: 30px;
}

.conclusion{
    font-size: 20px;
    padding-top: 30px;
    text-align: center;
}

.grid{
    /*width: 50%;*/
    margin-top: 20px;
    border-left: rgba(26, 26, 26) 1px solid;
    border-top: rgba(26, 26, 26) 1px solid;

    /*background-color: rgb(56, 51, 51);*/
    display: grid;
    grid-template-columns: 1fr 1fr;
}
.grid :first-child{
    background-color: #5dcb56;

}
.grid :nth-child(2){
    background-color: #f38484;
}


.item {
    /*border: rgba(26, 26, 26, 0.5) 1px solid;*/
    border-bottom: 1px solid rgb(56, 51, 51);;
    border-right: 1px solid rgb(56, 51, 51);;
    background-color: white;
    padding: 20px;
    text-align: center;
}


.grid-title{
  font-weight: 500;

}
.title{
    margin: 20px 0;
    display: flex;
    justify-content: center;
    font-size: 24px;

}
</style>