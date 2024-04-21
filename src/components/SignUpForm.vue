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
                    <input type="password" v-model="userSignUp.password" class="input second-border"  >
                </div>
                <div>Повторіть пароль</div>
                <div class="input-wrapper">
                    <input  type="password" v-model="checkPassword" class="input second-border">
                </div>
                <entry-button href="" @click="signup" button-content="Зареєструватись"></entry-button>
            </form>


        </div>
    </div>
</template>

<script>
import {useToast} from "vue-toast-notification";
import EntryButton from "@/components/EntryButton.vue";
import getUserMixin from "@/mixin/getUserMixin.js";

export default {
    name: "LoginForm",
    components: {EntryButton},
    mixins: [getUserMixin],
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
        signup(){
            if(this.validate()){
                const options = {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    credentials:"include",
                    body: JSON.stringify(this.userSignUp),

                };
                const $toast = useToast();
                fetch("http://localhost:3000/signup", options)
                    .then(response => {
                        if(response.status===201) {
                            let jwt=response.headers.get("jwt")
                            document.cookie = `jwt=${jwt}; max-age=86400000`;
                            this.getUser().then(data=>{
                                this.$store.dispatch('user', data.login)
                            })
                            this.$router.push("/")
                            return response.text()
                        }
                        else {
                            let instance = $toast.error('Користувач з таким логіном вже існує');
                            return response.text()
                        }
                    })
                    .then(data => {
                        console.log(data)
                    })
                    .catch(error => console.error('Помилка:', error));




            }
        },
        validate(){
            const $toast = useToast();
            if(this.userSignUp.login.trim().length===0 ) {
                let instance = $toast.error('Введіть коректний логін');
                return false
            }
            if(this.userSignUp.password.trim().length<8) {
                let instance = $toast.error('Довжина пароля має бути мінімум 8 символів');
                return false
            }
            if(this.checkPassword!==this.userSignUp.password){
                let instance = $toast.error('Паролі не збігаються');
                return false
            }
            return true
        },
        changeMode(){
            this.$emit('changeMode')
            
        }
    }
}
</script>

<style scoped>
@import '@/assets/form.css';

</style>