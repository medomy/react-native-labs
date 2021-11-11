import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://www.omdbapi.com/',
  });


instance.interceptors.request.use((config)=>{
    console.log(config);
    config.params ={
        ...config.params,
        apikey : "4cb4a4a3",
        type : "movie"
    }
})  


