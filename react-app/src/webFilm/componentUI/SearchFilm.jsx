import React,{useState,useEffect} from "react";

export default function SearchFilm(){
    
    const [film,setFilm] = useState()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getFilm = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&page=${pagination}&language=en-US`, options)
            const data = await response.json()
            console.log(data)
        }
        getFilm()
    },[search])


    return(<>
        <div className="content p-6">
          <h1>Halaman {page}</h1>
          <input
            type="text"
            onChange={(e) => Search(e.target.value)}
            className="border p-2 rounded w-full max-w-sm"
            placeholder="Cari film..."
          />
        </div>
    </>)

}