<template>
    <div class="form-wrapper">
        <div class="form">
            <h2>СТВОРІТЬ АКАУНТ</h2>
            <a href="#" @click.prevent="changeMode" class="change-option">Вже зареєстровані?</a>
            <form>
                <div>Придумайте логін</div>
                <div class="input-wrapper">
                    <input v-model="userSignUp.login" class="input second-border" >
                </div>
                <div>Придумайте пароль</div>
                <div class="input-wrapper">
                    <input type="password" v-model="userSignUp.password" class="input second-border" >
                </div>
                <div>Повторіть пароль</div>
                <div class="input-wrapper">
                    <input type="password" v-model="checkPassword" class="input second-border" >
                </div>
            </form>
            <entry-button href="/" button-content="Зареєструватись"></entry-button>

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
            userSignUp:{
                login:"",
                password:""
            },
            checkPassword:""
        }
    },
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