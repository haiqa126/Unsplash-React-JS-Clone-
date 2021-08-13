import axios from 'axios';


export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID b78a0fd502988cc48a88946d103ddbe973d229ec48f52a9cdab7c0bdae002a20'

    }





    });