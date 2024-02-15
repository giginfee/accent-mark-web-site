<template>
    <div class="form-wrapper">
        <div class="form">
            <h2>УВІЙДІТЬ</h2>
            <a href="#" @click.prevent="changeMode" class="change-option">Немає акаунту?</a>
            <form>
                <div>Логін</div>
                <div class="input-wrapper">
                    <input  v-model="userLogin.login" class="input second-border" >
                </div>
                <div>Пароль</div>
                <div class="input-wrapper">
                    <input type="password" v-model="userLogin.password" class="input second-border" >
                </div>
            </form>
            <entry-button href="/" button-content="Увійти"></entry-button>

        </div>
    </div>
</template>

<script>
import EntryButton from "@/components/EntryButton.vue";

export default {
    name: "LoginForm",
    components: {EntryButton},
    data(){
        return{
            userLogin:{
              login:"",
              password:""
            }
    }},
    methods:{
        changeMode(){
            this.$emit('changeMode')

        }
    }
}
</script>

<style scoped>
@import '@/assets/form.css';

</style>