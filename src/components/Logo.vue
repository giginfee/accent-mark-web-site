<template>
    <div  class="logo">
        <a href="/">
            <img src="/src/assets/logo.svg" alt="logo">
        </a>
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