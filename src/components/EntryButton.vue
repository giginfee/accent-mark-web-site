<template>
    <a :href=href class="exit-button">{{ buttonContent}}</a>

</template>

<script>
export default {
    name: "EntryButton",
    props:{
        buttonContent:{type:String, required:true},
        href:{type:String, required:true}
    }
}
</script>

<style scoped>

.exit-button{
    width: fit-content;
    font-size: 14px;
    background-color: var(--button-header-color);
    border-radius: 8px;
    padding: 8px 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: background-color 0.3s,color 0.3s ;
}
.exit-button:hover{
    background-color: var(--hint-block-color);
    color:white;
}
</style>