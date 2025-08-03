import { useParams } from 'react-router-dom';
import React,{useState,useEffect} from 'react';

export default function Detailfilm(){
    
    const { id } = useParams()
    const [movieId,setMovieId] = useState()
    

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getFilm = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/movie/${id}`,options)
            const data = await response.json()
            console.log(data)
            setMovieId(data)
        }
        getFilm()
    },[id])

    return(
        <p>Halo {id}</p>
    )
}