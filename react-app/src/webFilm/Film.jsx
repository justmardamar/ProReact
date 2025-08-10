import React,{useState,useEffect} from "react";
import FetchFilm from "./componentUI/FetchFilm";
import SearchFilm from "./componentUI/SearchFilm";

export default function Film(){

    const [movies,setMovies] = useState([])
    const [page,setPage] = useState(1)

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getPage = async (page) => {
            const response = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,options)
                const data = await response.json()
                setMovies(data.results)
        }
        getPage(page)
    },[page])


    return(
        <>
            <FetchFilm
                title='Film Populer'
                movies={movies}
                page={page}
                totalPages={9}
                onPageChange={setPage}
            />
        </>
    )
}
