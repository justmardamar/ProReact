export default function TrendingMovies(){
    
    //API untuk fetch data yang populer
    
    return(
        <section className="trending">
            <h2>Film Sedang Tren</h2>
            <div className="carousel">
                {movies.map((movie) => (
                <div className="movie-card" key={movie.id}>
                    <img src={movie.poster} alt={movie.title} />
                    <h3>{movie.title}</h3>
                    <p>{movie.genre}</p>
                    <span>⭐ {movie.rating}</span>
                </div>
                ))}
            </div>
        </section>
    )
}