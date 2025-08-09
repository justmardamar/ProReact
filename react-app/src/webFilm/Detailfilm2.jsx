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
        <>
            <a href="/" className='tombol'>Kembali</a>
            <div className="container-detail justify-center text-center items-center">
                <h1>{movieId?.title}</h1>
                <img src={`https://image.tmdb.org/t/p/original/${movieId?.belongs_to_collection.poster_path}`} alt="" />
                <p>Popularitas : {Math.round(movieId?.popularity)}</p>
                <h2>Genre</h2>
                <div className="genres">
                    {movieId?.genres.map((value) => {
                        return (<li key={value.id}>{value.name}</li>)
                    })}
                </div>
                <h2>Sinopsis</h2>
                <p>{movieId?.overview}</p>
            </div>
        </>
    )
}