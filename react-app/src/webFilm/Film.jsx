import React,{useState,useEffect} from "react";
import Detailfilm from "./detailfilm";

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
                console.log(data)
                setFilm(data)
                setMovies(data.results)
            }else{
                const responseSearch = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,options)
                const datasearch = await responseSearch.json()
                console.log(datasearch)

                setMovies(datasearch.results)
            }
        }
        getFilm()
    },[search])

    useEffect(() => {
        const getPage = async (page) => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,options)
                const data = await response.json()
                console.log(data)
                setFilm(data)
                setMovies(data.results)
        }
        getPage(page)
    },[page])

    function searchInput(event){
        setSearch(event.target.value)
    }

    function detailDirect(){
        <Detailfilm/>
    }

    return(
        <>
            <div className="content">
                <h1>Halaman {listfilm.page}</h1>
                <input type="text" onChange={searchInput}/>
            </div>
            <div className="container-film">
                    {movies?.map(movie => (
                        <div className="list-film" key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} alt="" />
                            <h1>{movie.title}</h1>
                            <p>Popularitas : {Math.round(movie.popularity)}</p>
                            <h2>Sinopsis</h2>
                            <div className="sinopsis">
                                <p>{movie.overview}</p>
                            </div>
                            <p>{new Date(movie.release_date).toLocaleDateString('id-ID',{year : 'numeric',month : 'long',day:'2-digit'})}</p>
                            <a href={`/movie/${movie.id}`}>Detail</a>
                        </div>
                    ))}
            </div>
            <div className="list">
                {pages.map((page,index) => (
                    <li key={index} onClick={() => setPage(page)}>{page}</li>
                ))}
            </div>
        </>
    )

}
