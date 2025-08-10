import React,{useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import FetchFilm from "./componentUI/FetchFilm";


export default function FilmGenre(){
    
    const { id,name } = useParams()
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const fetchByGenre = async () => {
            const res = await fetch(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&page=${page}`,options)
            const data = await res.json();
            setMovies(data.results);
        }
        fetchByGenre();
    },[id, page]);

    return (
        <FetchFilm
            title={`Film Genre ${name}`}
            movies={movies}
            page={page}
            totalPages={5}
            onPageChange={setPage}
        />
    );
    
}