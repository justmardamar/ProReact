import React,{useState,useEffect} from "react";

export default function ApiWather(){

    const ApiKey = '08af498bed719706f793f135b518b354'

    const [kondisi,setKondisi] = useState([])


    useEffect(() => {
        const fetchWeather = async () => {
            try{
    
                const url = `https://api.open-meteo.com/v1/forecast?latitude=34.6938&longitude=135.5011&hourly=temperature_2m`
                const response = await fetch(url)
                const data = await response.json()
                setKondisi(data)
            }catch(e){
                console.log(e)
            }
        }
        fetchWeather()
    },[kondisi])

    
    return(
        <>
            <div className="container-weather">
                <h1>Location Osaka</h1>
                    <div className="wad">
                        <p>{kondisi.latitude}</p>
                        <p>{kondisi.longitude}</p>
                        <p>{kondisi.timezone}</p>
                        {kondisi.hourly_units?.time}
                    </div>
            </div>
        </>
        
    )
}