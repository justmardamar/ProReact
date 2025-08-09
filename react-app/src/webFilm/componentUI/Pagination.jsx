import React,{useState,useEffect} from "react"

export default function Pagination(){

    const [page,setPage] = useState(1)

    const pages = [1,2,3,4,5,6,7,8,9]

    return(
        <>
            <div className="content">
                <h1>Halaman {listfilm.page}</h1>
                <input type="text" onChange={searchInput}/>
            </div>
            <div className="list">
                {pages.map((page,index) => (
                    <li key={index} onClick={() => setPage(page)}>{page}</li>
                ))}
            </div>
        </>
    )
}