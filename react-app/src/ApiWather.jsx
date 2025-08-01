import React,{useState,useEffect} from "react";

export default function ApiWather(){

    const ApiKey = '08af498bed719706f793f135b518b354'

    const [namaKota,setnamaKota] = useState()
    const [dataWeather,setdataWeather] = useState()
    const [forcast,setForcast] = useState()


    useEffect(() => {
        const fetchWeather = async () => {
            try{
    
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${namaKota}&appid=${ApiKey}&units=imperial`
                const response = await fetch(url)
                const data = await response.json()

                const forecast = `https://api.openweathermap.org/data/2.5/forecast?q=${namaKota}&appid=${ApiKey}&units=imperial`
                const resCast = await fetch(forecast)
                const dataFor = await resCast.json()

                console.log(data)
                console.log(dataFor)

                const harianForcast = dataFor.list.filter(
                    (item,index) => index % 8 === 0
                )

                setForcast(harianForcast)
                setdataWeather(data)
            }catch(error){
                console.log(error)
            }
        }
        fetchWeather(namaKota)
    },[namaKota])


    function inputCity(event){
        setnamaKota(event.target.value)
    }
    
    return(
        <>
            <div className="container-weather">
                <input type="text" onChange={inputCity}/>
                    <div className="wad">
                      <h1>{dataWeather?.name}</h1>
                      <h3>{dataWeather?.weather[0].description}</h3>
                      <div className="desk">
                        <div className="in">
                            <h5>Humidity</h5>
                            <p>{dataWeather?.main.humidity}%</p>
                        </div>
                        <div className="in">
                            <h5>Clouds</h5>
                            <p>{dataWeather?.clouds.all}</p>
                        </div>
                        <div className="in">
                            <h5>pressure</h5>
                            <p>{dataWeather?.main.pressure}</p>
                        </div>
                      </div>
                    </div>
                    <div className="forecast">
                        <h2 className="forecast-header">5-Day Forecast</h2>
                        <div className="forecast-days">
                            {forcast?.map((day, index) => (
                            <div key={index} className="forecast-day">
                                <p>
                                    {new Date(day.dt * 1000).toLocaleDateString("en-US", {
                                    weekday: "short",
                                    })}
                                </p>
                                <img
                                    src={`http://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                                    alt={day.weather[0].description}
                                />
                                <p>{Math.round(day.main.temp)}°F</p>
                                <p>{day.weather[0].main}</p>
                            </div>
                            ))}
                        </div>
                    </div>
            </div>
        </>
        
    )
}