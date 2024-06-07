import { useEffect, useState } from "react";
import { api } from "../service/api";


export function useFetch(url: string) {
    const [data,setData] = useState()
    const [error,setError] = useState()
    const [isFetching,setIsFetching] = useState(true)

    useEffect(()=>{
        api.get(url).then((response)=>{
            setData(response.data)
        }).catch(error=>{
            setError(error)
        }).finally(()=>{
            setIsFetching(false)
        })
    },[])

    return {data,error,isFetching}
}   
