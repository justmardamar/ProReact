import React,{useState,useEffect} from "react"
import CardFilm from '../../componentUI/CardFilm'

export default function Herosection(){

    const[populars,setPopular] = useState()

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
            const response = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',options)
            const data = await response.json()
            setPopular(data.results)
        }
        getPopular()
    },[])

    return (
        <section className="hero">
        <div className="hero-content">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {populars?.map((popular) => {
                    <div 
                        className="bg-white shadow-md rounded-xl overflow-hidden transition hover:shadow-lg"
                        key={popular.id}>
                        
                        <CardFilm
                            filmImg={popular.poster_path}
                            filmTitle={popular.title}
                            filmPopularity={popular.popularity}
                            filmOverview={popular.overview}
                            filmTanggal={popular.release_date}
                            detailFilm={popular.id}
                            
                        />
                    </div>
                })}
            </div>
        </div>
        </section>
    );
}