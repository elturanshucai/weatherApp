import {createSlice} from "@reduxjs/toolkit"

export const weatherSlice=createSlice({
    name: "prayer",
    initialState:{
        city:'',
        weather: {},
        astronomy: undefined
    },
    reducers:{
        setCity:(state, {payload})=>{
            state.city=payload
        },
        setWeather: (state, {payload})=>{
            state.weather=payload
        },
        setAstro:(state, {payload})=>{
            state.astronomy=payload
        }
    }
})

export const {setCity, setWeather,setAstro}=weatherSlice.actions
export default weatherSlice.reducer