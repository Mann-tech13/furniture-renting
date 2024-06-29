import axios from 'axios';

export async function getFurniture(){
    try {
        const api = await axios.get('http://localhost:3000/furniture/list');
        console.log(api);
        return api;
    } catch (error) {
        console.log(error);
    }
}