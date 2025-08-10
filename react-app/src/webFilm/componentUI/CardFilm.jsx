import Tilt from "react-parallax-tilt";

export default function CardFilm(props){
    return(
        <>

        <Tilt 
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            perspective={500}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
            className="rounded-lg shadow-lg bg-white overflow-hidden"
            
        >
            <img
                src={`https://image.tmdb.org/t/p/original/${props.filmImg}`}
                alt={props.filmTitle}
                className="w-full h-60 object-cover"
            />

            <div className="p-4 h-70">
                <div className="h-50">
                    <h3 className="text-lg font-semibold">{props.filmTitle}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                        <span className="font-medium">Popularitas:</span>{" "}
                        {props.filmPopularity}
                    </p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3">
                        {props.filmOverview}
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                        <span className="font-medium">Tanggal Rilis:</span>{" "}
                        {props.filmTanggal}
                    </p>
                </div>
                <a href={`/movie/${props.detailFilm}`} className="p-2 m-4 mt-2 rounded-xs bg-[rgb(92,92,247)] text-white hover:bg-white hover:text-[rgb(92,92,247)] hover:border-[rgb(92,92,247)] hover:shadow-md transition-all duration-300 ease-in-out">Detail</a>
            </div>
        </Tilt>
        </>
    )
}