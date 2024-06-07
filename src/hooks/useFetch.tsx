import { useEffect, useState } from "react";
import { api } from "../service/api";


export function useFetch<T = unknown>(url: string,params:string) {
    const [data,setData] = useState<T>()
    const [error,setError] = useState<unknown>()
    const [isFetching,setIsFetching] = useState<boolean>(true)

    useEffect(()=>{
        api.get(url+params).then((response)=>{
            setData(response.data)
        }).catch(error=>{
            setError(error)
        }).finally(()=>{
            setIsFetching(false)
        })
    },[params])

    return {data,error,isFetching}
}   
