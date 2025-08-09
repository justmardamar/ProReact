import React,{useState,useEffect} from "react"

export default function TrendingMovies(){
    
    const [genres,setGenres] = useState()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getGenres = async () => {
            const response = await fetch(`https://api.themoviedb.org/3/genre/movie/list?language=en`,options)
            const data = await response.json()
            console.log(data)
            setGenres(data.genres)
        }
        getGenres()
    })

    //API untuk fetch genre
    
    return(
        <section className="genre">
            <h2>Genre</h2>
            <div className="grid grid-cols-4 sm:grid-cols-8 lg:grid-cols-10 gap-12">
                {genres?.map((genre) => (
                    <a href="" className="border-2 text-center p-2 " key={genre.id}>{genre.name}</a>
                ))}
            </div>
        </section>
    )
}