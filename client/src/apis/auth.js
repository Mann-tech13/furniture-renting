import axios from 'axios';

export async function register(data){
    const api = await axios.post("http://localhost:3000/user/add", data)
    console.log(api);
}


export async function login(data){
    try {
        console.log(data)
        const api = await axios.post("http://localhost:3000/user/login", {
            email: data.email,
            password: data.password
        })
        return api;
    } catch (error) {
        console.log(error);
        
    } 
}