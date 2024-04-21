<template>
    <div class="form-wrapper">
        <div class="form">
            <h2>УВІЙДІТЬ</h2>
            <a href="#" @click.prevent="changeMode" class="change-option">Немає акаунту?</a>
            <form>
                <div>Логін</div>
                <div class="input-wrapper">
                    <input v-model="userLogin.login" class="input second-border" >
                </div>
                <div>Пароль</div>
                <div class="input-wrapper">
                    <input type="password" v-model="userLogin.password" class="input second-border" >
                </div>
            </form>
            <entry-button href="" @click="login" button-content="Увійти"></entry-button>
        </div>
    </div>
</template>

<script>
import EntryButton from "@/components/EntryButton.vue";
import getUserMixin from '@/mixin/getUserMixin';
import {useToast} from "vue-toast-notification";

export default {
    name: "LoginForm",
    components: {EntryButton},
    mixins: [getUserMixin],
    data(){
        return{
            userLogin:{
              login:"",
              password:""
            }
    }},
    mounted() {
    },
    methods:{
        changeMode(){
            this.$emit('changeMode')
        },
        login(){

            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                credentials:"include",
                body: JSON.stringify({
                    login:this.userLogin.login,
                    password:this.userLogin.password,
                }),

            };
            const $toast = useToast();
            fetch("http://localhost:3000/login", options)
                .then(response => {
                    if(response.status===200) {
                        let jwt=response.headers.get("jwt")
                        document.cookie = `jwt=${jwt}; max-age=86400000`;
                        this.getUser().then(data=>{
                            this.$store.dispatch('user', data.login)
                        })
                        this.$router.push("/")
                        return response.text()
                    }
                    else {
                        let instance = $toast.error('Користувача з таким логіном та паролем не знайдено');
                        return response.text()
                    }
                })
                .then(data => {
                    console.log(data)
                })
                .catch(error => console.error('Помилка:', error));
        }
    }
}
</script>

<style scoped>
@import '@/assets/form.css';

</style>