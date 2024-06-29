import axios from 'axios';

export async function register(data){
    try {
        const api = await axios.post("https://furniture-renting.onrender.com/user/add", data)
        return api;
    } catch (error) {
        
        console.log(error);
    }
}


export async function login(data){
    try {
        console.log(data)
        const api = await axios.post("https://furniture-renting.onrender.com/user/login", {
            email: data.email,
            password: data.password
        })
        return api;
    } catch (error) {
        console.log(error);
        
    } 
}