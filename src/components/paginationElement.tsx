import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

interface PaginationElementProps{
    pageNumber:number;
    endPage:number;
    prevPage:()=>void;
    nextPage:()=>void;
}


export function PaginationElement({pageNumber,endPage,prevPage,nextPage }:PaginationElementProps) {
    return(
        <Pagination className="py-4">
                            <PaginationContent>
                            <PaginationItem>
                                <PaginationPrevious
                                className={

                                    
                                    pageNumber === 1 ? "text-2xl pointer-events-none opacity-50" : " text-2xl cursor-pointer"
                                }
                                onClick={prevPage} />
                            </PaginationItem>

                            <PaginationItem>
                                <PaginationNext
                                className={
                                    pageNumber === endPage ? " text-2xl pointer-events-none opacity-50" : "cursor-pointer text-2xl"
                                }
                                onClick={nextPage} />
                            </PaginationItem>
                            </PaginationContent>
                        </Pagination>
    )
}