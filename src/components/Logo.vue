<template>
    <div  class="logo">
        <router-link to="/">
            <img src="/src/assets/logo.svg" alt="logo">
        </router-link>
    </div>
</template>

<script>
export default {
    name: "Logo"
}
</script>

<style scoped>
.logo{
    width: 100%;
    display: flex;
    align-items: center;
    justify-items: center;
    justify-content: center;
}
.logo a img{
    width: 80%;
}
.logo a{
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>