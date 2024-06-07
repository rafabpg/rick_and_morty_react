import { useFetch } from "../hooks/useFetch"


export function HomePage(){

    const {data,error,isFetching} = useFetch('/character')

    return(

        <div>
            teste
        </div>

    )

}