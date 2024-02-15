<template>
    <div class="header">
        <a href="/training" class="header-option">Тренажер</a>
        <a href="/rules" class="header-option">Правила</a>
        <div class="account-box">
            <EntryButton button-content="Вийти" href="/"></EntryButton>
            <a href="/profile" class="avatar-link">
                <img class="avatar" src="/src/assets/avatar.svg">
            </a>
        </div>
    </div>
</template>

<script>
import EntryButton from "@/components/EntryButton.vue";

export default {
    name: "Header",
    components: {EntryButton}
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