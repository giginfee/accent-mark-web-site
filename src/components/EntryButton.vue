<template>
    <router-link ref="btn" :to=href class="exit-button">{{ buttonContent}}</router-link>

</template>

<script>
export default {
    name: "EntryButton",
    props:{
        buttonContent:{type:String, required:true},
        href:{type:String, required:true},
    },
    methods:{
        click(){
            this.$refs["btn"].addEventListener("click",()=>{
                this.$emit("click")
            })
        }
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