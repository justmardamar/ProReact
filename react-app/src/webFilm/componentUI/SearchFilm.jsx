import React,{useState,useEffect} from "react";
import CardFilm from "./CardFilm";

export default function SearchFilm({
    pagination
}){
    
    const [films,setFilm] = useState()
    const [search,setSearch] = useState('')

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };



    useEffect(() => {
        if(search === ''){
            setFilm([])
            return
        }
        else{
            const getFilm = async () => {
                const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=true&page=${pagination}&language=en-US`, options)
                const data = await response.json()
                console.log(data)
                setFilm(data.results)
            }
            getFilm()
        }
    },[search,pagination])


    return(<>
        <div className="content p-6">
          <h1>Halaman {pagination}</h1>
          <input
            type="text"
            onChange={(e) => setSearch(e.target.value.trim())}
            className="border p-2 rounded w-full max-w-sm"
            placeholder="Cari film..."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-3 mb-3">
            {films?.map((film) => (
                <div 
                    className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
                    key={film.id}
                >
                    <CardFilm
                        filmImg={film.poster_path}
                        filmTitle={film.title}
                        filmPopularity={film.popularity}
                        filmOverview={film.overview}
                        filmTanggal={film.release_date}
                        detailFilm={film.id}
                    />
                </div>
            ))}
        </div>


    </>)

}