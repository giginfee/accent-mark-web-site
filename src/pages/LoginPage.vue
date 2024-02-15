<template>
    <div class="content">
        <div class="logo-wrapper">  <logo></logo>
        </div>
        <login-form v-if="login" @changeMode="login=!login"></login-form>
        <sign-up-form v-else  @changeMode="login=!login" ></sign-up-form>
     </div>



</template>

<script>
import Logo from "@/components/Logo.vue";
import EntryButton from "@/components/EntryButton.vue";
import LoginForm from "@/components/LoginForm.vue";
import SignUpForm from "@/components/SignUpForm.vue";

export default {
    name: "LoginPage",
    components: {LoginForm, EntryButton, Logo,SignUpForm},
    data(){return {
        login:!true

        }}
}
</script>

<style scoped>

.logo-wrapper{
    min-height: 70px;
    padding-top: 15px;
}
.content{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center

}

#app,body{
    background-color: var(--login-bg-color);
    padding-right: 0;
}

</style>