import { useState , useEffect } from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [ispending,setIspending] = useState(true);
    
    useEffect(() =>{
        const abortCont = new AbortController();

        fetch(url,{signal:abortCont.signal})
        .then(res => {
            if(!res.ok){
                throw Error ("couldn't found data !");   
            }
            return res.json();
        })
        .then(data =>{
            setData(data);
            setIspending(false);
        })
        .catch(err =>{
            console.log(err.massage);
        });
        // return abortCont.abort();
    },[url]);

    return {data,ispending};
}
 
export default useFetch;