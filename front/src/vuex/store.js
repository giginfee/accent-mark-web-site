import {createStore} from "vuex"

export default createStore({
    state:{
        user:null,
        words:[]
    },
    mutations:{
        user(state,user){
            state.user=user
        },
        words(state,words){
            state.words=words
        },
    },
    getters:{
        user(state){

            return state.user
        },
        words(state){
            return state.words
        },
    },
    actions:{
        words(context,words){
            context.commit('words', words)
        },
        user(context,user){
            context.commit('user', user)
        },
        fetchWords({commit}){
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };

            fetch(`${import.meta.env.VITE_API_URL}/all-words`, options).then(response=>
                response.json()
            ).then(data=> {
                    this.words=data
                    data = data.map(obj => {
                        let newObj = {}
                        newObj.id = obj.id
                        newObj.word = obj.word.toLowerCase()
                        newObj.word = newObj.word.charAt(0).toUpperCase()
                            + newObj.word.slice(1)
                        return newObj
                    })
                    commit('words',  data.sort((a,b)=>a.word.localeCompare(b.word)));
                }
            )

        }
    }
})