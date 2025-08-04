export default function CardFilm(props){
    return(
        <>
            <img src={`https://image.tmdb.org/t/p/original/${props.filmImg}`} alt="" />
            <h1>{props.filmTitle}</h1>
            <p>Popularitas : {Math.round(props.filmPopularity)}</p>
            <h2>Sinopsis</h2>
            <div className="sinopsis">
                <p>{props.filmOverview}</p>
            </div>
            <p>{new Date(props.filmTanggal).toLocaleDateString('id-ID',{year : 'numeric',month : 'long',day:'2-digit'})}</p>
            <a href={`/movie/${props.detailFilm}`}>Detail</a>
        </>
    )
}