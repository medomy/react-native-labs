import { instance } from "./clients";

export default async function getMovs(movie){


    const params = {
        s : movie
    }
    await instance.get("/",params)
    .then((data)=>{
        console.log(data);
        console.log("in promise");
        return data;
    })
    .catch(err=> console.log(err));
}