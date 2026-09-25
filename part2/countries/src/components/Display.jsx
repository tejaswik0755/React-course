import { useEffect, useState } from 'react'
import weatherService from '../services/countries'
const Display=({country})=>{
    const api_key=import.meta.env.VITE_WEATHER_API_KEY
    const latitude=country.latlng[0]
    const longitude=country.latlng[1]
    const [temp,setTemp]=useState(0)
    const [wind,setWind]=useState(0)
    const [icon,setIcon]=useState('')
    const api_url=`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`
    const icon_url=`https://openweathermap.org/img/wn/${icon}@2x.png`
    useEffect(()=>{
        weatherService
        .getAll(api_url)
        .then(res=>{
            setTemp(res.main.temp)
            setWind(res.wind.speed)
            setIcon(res.weather[0].icon)
                })
    },[country])
    
    return(
    <>
    <h1>{country.name.common}</h1>
    <h3>Capital(s) are</h3>
    {country.capital.map(con=>
      <p key={con}>{con}</p>
    )}
    <p>Area is {country.area}</p>
    <h2>Languages spoken are</h2>
    <ul>
      {Object.values(country.languages).map(lang=>
      <li key={lang}>{lang}</li>
    )}
    </ul>
    <br/>
    <img src={Object.values(country.flags)[0]} />
    <h2>Weather in {country.capital[0]}</h2>
    {console.log(icon)}
    <p>Temperature {temp} Kelvin</p>
    <p>Wind Speed {wind} m/s </p>
    <img src={icon_url} />
    </>
        
    )
}
export default Display