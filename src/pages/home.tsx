import { AllCharacters, Character } from "@/models/character"
import { useFetch } from "../hooks/useFetch"
import { Loading } from "@/components/loading"
import { CardElement } from "@/components/cardElement"

import { useEffect, useState } from "react"
import { PaginationElement } from "@/components/paginationElement"
import { SearchElement } from "@/components/searchElement"
  

export function HomePage(){
    const [pageNumber, setPageNumber] = useState<number>(1)
    const [name,setName] =  useState<string>("")
    const {data,error,isFetching} = useFetch<AllCharacters>(`/character`,`?page=${pageNumber}&name=${name}`)
    // &status=${status}&gender=${gender}&species=${species}
    const nextPage = () => {
        setPageNumber(prevPageNumber => prevPageNumber + 1);
    };

    const prevPage = () => {
        if (pageNumber > 1) {
            setPageNumber(prevPageNumber => prevPageNumber - 1);
        }
    };

    const handleSearch = (searchValue:string) => {
        setName(searchValue); 
    };

    return(
        <>
            {isFetching ? (
               <Loading/>
            ):(
                <section>
                <h1 className="text-center text-black font-bold text-3xl py-5" >Characters</h1>
                    <div >
                        <SearchElement onSearch={handleSearch} />
                    <div>
                    </div>
                        <div  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-24 p-4">
                            {data?.results.map((character:Character)=>(
                            <CardElement
                                key={character.id}
                                character={character}
                            />
                            ))}
                        </div>
                    </div>
                       <PaginationElement
                        pageNumber={pageNumber}
                        endPage={data!.info.pages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                       />
                 </section>

            )}
        </>
    )

}