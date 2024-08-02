<template>
<div class="wrap">
        <div class="card second-border">
            <h3>Правило #{{rule.id}}</h3>
            <p class="text">{{rule.text}}</p>
            <h4>Слова</h4>
            <p class="words">{{words}}</p>

        </div>


</div>
</template>

<script>
export default {
    name: "Rule",
    props:{rule:{
            id:Number,
            text:String,
            required:true
        }
    },
    data(){
        return {
            words:[]
        }
    },

    methods:{
        renderWordsArray(){
            this.words=this.words.join(", ").concat(".")
            this.words=this.words[0].toUpperCase().concat(this.words.slice(1))

        }
    },
    mounted() {
        const options = {
            method: 'GET',
            mode:"cors",
            credentials: 'include'
        };

        fetch(`${import.meta.env.VITE_API_URL}/words-for-rule/${this.rule.id}`, options).then(response=>
            response.json()
        ).then(data=> {
            this.words=data.map(obj=>obj.word)
            this.renderWordsArray();
        })


    }
}
</script>

<style scoped>
.wrap{
    margin-bottom: 10px;
}

.card{
    border-radius: var(--border-radius);
    border: var(--rule-card-border-color) solid 2px;
    width: 80%;
    padding: 30px;
}
.text{
    margin: 15px 0 30px 0;

}
.words{
    margin: 15px 0 0 0;
}
.text, .words{
    font-size: clamp(14px,0.8vw,18px);
}
h4{
font-weight: 500;
}
h3, p, h4{
    margin: 0;
}


</style>