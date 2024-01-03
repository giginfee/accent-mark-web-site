<script >
import WordList from "@/components/WordList.vue";
import Logo from "@/components/Logo.vue";
import Header from "@/components/Header.vue";
import ProgressLine from "@/components/ProgressLine.vue";
import WordCard from "@/components/WordCard.vue";
export default {
    name: "App",
    components:{
        WordList,Header,Logo,ProgressLine,WordCard
    }

}
</script>

<template>
    <div class="left-block">
       <logo></logo>
        <word-list></word-list>
    </div>
    <div class="right-side">
        <Header></Header>

    </div>

</template>

<style>



a{
    color: inherit;
    text-decoration-line: none;
}


.right-side{
    min-width: 350px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    margin-left: 4%;
}





.left-block{
    width: 250px;
    height: 100%;
    background-color: #D4DFE8;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    padding: 15px;
    box-sizing: border-box;

}



/*@media (min-width: 1024px) {*/
/*  header {*/
/*    display: flex;*/
/*    place-items: center;*/
/*    padding-right: calc(var(--section-gap) / 2);*/
/*  }*/

/*  .logo {*/
/*    margin: 0 2rem 0 0;*/
/*  }*/

/*  header .wrapper {*/
/*    display: flex;*/
/*    place-items: flex-start;*/
/*    flex-wrap: wrap;*/
/*  }*/
/*}*/


</style>
