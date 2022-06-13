import React from "react";
import {useDispatch, useSelector} from "react-redux"
import {FaSearch} from "react-icons/fa"
import './Main.css'
import { setCity, setWeather,setAstro } from "../../store/reducers/reducer";

function Main(){
    const dispatch=useDispatch()
    const city=useSelector(state=>state.reducer.city)
    const data=useSelector(state=>state.reducer.weather)
    const astronomy=useSelector(state=>state.reducer.astronomy) 
    let translateCity
    const setData=()=>{
        //hava haqqinda API
        const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`;
            fetch(url, {
            method: "GET",
            withCredentials: true,
            headers: {
            'X-RapidAPI-Key': 'e5a3bc6bdamshb22e7a745afbeeep1f5fc1jsna09b9662398e',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
            }).then(res=>res.json()).then(data=>dispatch(setWeather(data)))
            

        //astronomy API
        const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': 'e5a3bc6bdamshb22e7a745afbeeep1f5fc1jsna09b9662398e',
                    'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
                }
            };
        fetch(`https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${city}`, options)
        .then(response => response.json())
        .then(response => dispatch(setAstro(response)))
        .catch(err => console.error(err));
    }
    return(
        <div className="container">
            <div className="search">
                <input onChange={(e)=>dispatch(setCity(e.target.value))} type='text' placeholder="Şəhər"/>
                <button onClick={setData}><FaSearch className="searchIcon" size='15' color="white"/></button>  
            </div>
            {
                data.location ?
                <main>
                    <h2>{data.location.country}</h2>
                    <h3>{data.location.name}</h3>
                    <div className="title">
                        <p>{data.current.condition.text}</p>
                        <img src={data.current.condition.icon}/>
                    </div>
                    <div className="about">
                        <p>Bulud: {data.current.cloud}</p>
                        <p>Küləyin sürəti: {data.current.gust_mph}</p>
                        <p>Temperatur C: {data.current.temp_c}</p>
                        <p>Temperatur F: {data.current.temp_f}</p>
                        <p>Hiss olunur C: {data.current.feelslike_c}</p>
                        <p>Hiss olunur F: {data.current.feelslike_f}</p>
                        <p>Yerli vaxt: {data.location.localtime}</p>
                    </div>
                </main>
                :
                null
            }
            {
                astronomy ?
                <div className="astronomy">
                <div className="astroinner">
                    <div className="left">Günəş çıxır : {astronomy.astronomy.astro.sunrise}</div>
                    <div className="rigth">Günəş batır : {astronomy.astronomy.astro.sunset}</div>
                </div>
                <div className="astroinner">
                    <div className="left">Ay çıxır : {astronomy.astronomy.astro.moonrise}</div>
                    <div className="rigth">Ay batır : {astronomy.astronomy.astro.moonset}</div>
                </div>
                <div className="moon_ligth">Ayın parlaqlıq səviyyəsi : {astronomy.astronomy.astro.moon_illumination}</div>
                </div>
                :
                null
            }
            
            
        </div>
    )
}
export default Main