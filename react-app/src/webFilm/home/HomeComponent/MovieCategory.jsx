import React,{useState,useEffect} from "react"

export default function MovieCategory(){

    const [categories,setCategories] = useState()

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTE5ZGIxMDExZTI4YTBiZWYzNTBmNGI2M2Q1ZDRlNyIsIm5iZiI6MTc1MzUxNjY0NC4yOCwic3ViIjoiNjg4NDhhNjQxMjZjNDdkZDY1MTZiZjNiIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.Xazwq6ouPMj9VR5cv9krUCGRZoYvUl5xyrIqjgWY0ns'
        }
    };

    useEffect(() => {
        const getGenre = async () => {
            const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?language=en')
            const data = await response.json()
            setCategories(data.genres)
        }
        getGenre()
    })

    return(
        <section className="categories">
            <h2>Kategori Film</h2>
            <div className="category-list">
                <ul>
                    {categories.map((category) => {
                        <li key={category.id}>{category.name}</li>
                    })}
                </ul>
            </div>
        </section>
    )
}