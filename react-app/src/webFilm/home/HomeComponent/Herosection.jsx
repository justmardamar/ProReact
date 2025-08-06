import React,{useState,useEffect} from "react";

export default function Herosection(){

    const[popular,setPopular] = useState()

    //API untuk fetch data film yang populer
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getPopular = async () => {
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=true&include_video=false&language=en-US&page=1&sort_by=popularity.desc')
            const data = await response.json()
            setPopular(data.results[0])
        }
        getPopular()
    })

    return (
        <section className="hero">
        <div className="hero-content">
            <img
            src={`https://image.tmdb.org/t/p/original/${popular.poster_path}`}
            alt="Movie Poster"
            className="hero-poster"
            />
            <div className="hero-text">
                <h1>{popular.original_title}</h1>
                <p>{popular.overview}</p>
                
            </div>
        </div>
        </section>
    );
}