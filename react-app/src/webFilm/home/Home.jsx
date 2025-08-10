import Herosection from "./HomeComponent/Herosection"
import GenreSction from './HomeComponent/GenreSection'

export default function Home(){
    return(
        <>
            <Herosection/>
            
            <h2 className="text-amber-50 p-5 text-4xl">Genre</h2>
            <GenreSction/>
        </>
    )
}