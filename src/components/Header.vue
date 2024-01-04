<template>
    <div class="header">
        <a href="/" class="header-option">Тренажер</a>
        <a href="/" class="header-option">Правила</a>
        <div class="account-box">
            <a href="/" class="exit-button">Вийти</a>
            <a href="/" class="avatar-link">
                <img class="avatar" src="/src/assets/avatar.svg">
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>


.avatar-link{
    display: flex;
    align-items: center;
    justify-content: center;
}
.avatar{
    width: 90%;
}


.exit-button{
    margin-left: 2%;
    font-size: 14px;
    background-color: #D3DFE8;
    border-radius: 7px;
    padding: 8px 22px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s,color 0.3s ;
}

.exit-button:hover{
    background-color: #89ADC7;
    color:#D3DFE8;
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
    border-bottom: 2px solid #D3DFE8;
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