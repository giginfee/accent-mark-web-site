export default {

    methods: {
        async getUser(){
            const options = {
                method: 'GET',
                mode:"cors",
                credentials: 'include'
            };

            let response= await fetch(`${import.meta.env.VITE_API_URL}/user`, options)
            if(response.status===200)
                return response.json();
            else
                return null

        },
    }
}
