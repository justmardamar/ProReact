import React,{useState,useEffect} from "react";
import CardFilm from "./componentUI/CardFilm";

export default function Film(){

    const [listfilm,setFilm] = useState([])
    const [movies,setMovies] = useState([])
    const [search,setSearch] = useState('')
    const [page,setPage] = useState(1)

    const pages = [1,2,3,4,5,6,7,8,9]

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getFilm = async () => {
            if(search == ''){
                const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,options)
                const data = await response.json()
                setFilm(data)
                setMovies(data.results)
            }else{
                const responseSearch = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,options)
                const datasearch = await responseSearch.json()
                setMovies(datasearch.results)
            }
        }
        getFilm()
    },[search])

    useEffect(() => {
        const getPage = async (page) => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,options)
                const data = await response.json()
                setFilm(data)
                setMovies(data.results)
        }
        getPage(page)
    },[page])

    function searchInput(event){
        setSearch(event.target.value)
    }


    return(
        <>
        <section className="p-6">
            <h2 className="text-2xl font-bold mb-6">Daftar Film Tersedia</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {movies?.map(movie => (
                <div
                    key={movie.id}
                    className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
                >
                    <CardFilm 
                        filmImg={movie.poster_path} 
                        filmTitle={movie.title} 
                        filmPopularity={movie.popularity} 
                        filmOverview={movie.overview} 
                        filmTanggal={movie.release_date} 
                        detailFilm={movie.id}
                    />
                </div>
                ))}
            </div>
        </section>
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
