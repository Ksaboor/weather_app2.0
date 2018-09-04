import React from 'react';
import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "bdf10afbc134449891aae8da581cf20a";

class App extends React.Component{
    /*
    is an object that lives inside of an component
    It is responsible for keeping track of changing data within an component

     */
    state = {
        temperature:undefined,
        city:undefined,
        country:undefined,
        humidity:undefined,
        description: undefined,
        error:undefined
    }
    //create get method using arrow function
    //to allow us to use "this" independently
    //of creating an constructor
    //where every I use "this" it is
    //bound to the App class

    // the e is a event object use control the event of a function
    //in our case we use e.preventDefault to prevent the wab page
    //from refreshing.
    /*
    from stackOverflow
    e is the short var reference for event object which will be passed to event handlers.
    The event object essentially has lot of interesting methods and properties that can be used in the event handlers.
     */
    getWeather = async (e) => {
        //async await
        //template strings = noraml strings that allows us
        //to inject the variables that we have define in our files
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&mode=json&appid=${API_KEY}&units=imperial`);
        const data = await api_call.json();
        console.log(data);
        //setting our state
        this.setState({
            temperature:data.main.temp,
            city:data.name,
            country:data.sys.country,
            humidity:data.main.humidity,
            description: data.weather[0].description,
            error:''
        })

        //async await -> form fillout -> props 32.17
        //props are html abtributes
        //we are going to use them to give a component
        //access to our getweather method in App.Js
        //37:54
    };
        render(){
            return (
                <div>
                    <Titles />
                    <Form getWeather={this.getWeather}/>
                    <Weather
                        temperature={this.state.temperature}
                        city={this.state.city}
                        country={this.state.country}
                        humidity={this.state.humidity}
                        description={this.state.description}
                        error={this.state.error}
                    />
                </div>
            );
        }
}
export default App;
