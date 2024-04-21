<template>
    <div class="words-box">
        <p>
            Слова
        </p>
        <div class="words-list">
            <div v-for="word in words" class="link-container">
                <router-link class="a" :to="`/word/${word.id}`">{{ word.word }}</router-link>

            </div>

        </div>

    </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex';

export default {
    name: "RightBlock",
    data(){
        return {

        }
    },methods:{

    },
    computed:{
        ...mapGetters(['words'])
    },

}
</script>

<style scoped>


.words-box{
    padding: 35px  0 18px 10px;
    max-height: 100%;
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: auto;
}

.words-list{
    flex: 1;
    overflow: auto;
    scroll-behavior: smooth;
    direction: rtl;
}
.link-container{
    width: 100%;
    direction: ltr;

}
.words-list a{
    display: inline-block;
    margin-bottom: 10px;
    margin-left: 5px;
    font-size: 14px;
    font-weight: 400;

    /*transition: font-weight 0.2s;*/

}
.words-list a:hover{
    font-weight: 500;

}


.words-box p{
    font-size: 24px;
    font-weight: 500;
    margin: 0 0 10px 0;
}
::-webkit-scrollbar {
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