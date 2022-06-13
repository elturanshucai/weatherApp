import React from "react";
import './Sports.css'

class Sports extends React.Component{
    state={
        futbol:[]
    }
    componentDidMount(){
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'e5a3bc6bdamshb22e7a745afbeeep1f5fc1jsna09b9662398e',
                'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
            }
        };
        
        fetch('https://weatherapi-com.p.rapidapi.com/sports.json?q=istanbul', options)
            .then(response => response.json())
            .then(data=>this.setState({futbol: data.football}))
            .catch(err => console.error(err));
    }
    
    render(){
        return (
            <div className="sports">
                <div className="football">
                    {this.state.futbol.map(item=>(
                        <div className="match">
                             <div className="matchinfo">
                                <div>{item.tournament}</div>
                                <div>{item.start}</div>
                                <div>{item.stadium}</div>
                             </div>
                             <div className="matchtitle">{item.match}</div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default Sports