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
            const response = await fetch('https://api.themoviedb.org/3/trending/all/day?language=en-US',options)
            const data = await response.json()
            console.log(data.results.slice(0,4))
            setPopular(data.results.slice(0,4))
        }
        getPopular()
    },[])

    return (
        <>
            <section className="hero">
                <div className="hero-content mt-4 p-4">
                    <h1 className="text-4xl mb-4 text-white">Popular Today</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {populars?.map((popular) => (
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
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}