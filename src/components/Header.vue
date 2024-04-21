<template>
    <div class="header">
        <router-link to="/training" class="header-option">Тренажер</router-link>
        <router-link to="/rules" class="header-option">Правила</router-link>
        <div v-if="user" class="account-box">
            <EntryButton button-content="Вийти" href="" @click="logout" ></EntryButton>
            <router-link to="/profile" class="avatar-link">
                <img class="avatar" src="/src/assets/avatar.svg">
            </router-link>
        </div>
        <div v-else class="account-box">
            <EntryButton button-content="Увійти" href="/login"></EntryButton>
        </div>

    </div>
</template>

<script>
import EntryButton from "@/components/EntryButton.vue";
import {mapGetters} from "vuex";

export default {
    name: "Header",
    components: {EntryButton},
    computed:{
        ...mapGetters(['user'])
    },
    methods:{
        logout(){
            document.cookie = `jwt=1; max-age=-1`;
            this.$router.go()

        }
    }
}
</script>

<style scoped>


.avatar-link{
    margin-right: 2%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.avatar{
    width: 90%;
}




.account-box{
    flex: 1;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;

}
.header {
    width: 100%;
    height: 50px;
    border-bottom: 2px solid var(--button-header-color);
    display: flex;
    flex-direction: row;
}
.header-option{
    width:80px;
    font-size: 14px;
    display: flex;
    font-weight: 400;
    margin-right: 7%;
    justify-content: center;
    align-items: center;
    transition: transform 0.3s, font-weight 0.1s;
}
.header-option:hover{
    font-weight: 500;
    transform: translateY(-10%);

}
</style>