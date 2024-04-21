export default {

    methods: {
        async getUser(){
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };

            let response= await fetch("http://localhost:3000/user", options)
            if(response.status===200)
                return response.json();
            else
                return null

        },
    }
}
