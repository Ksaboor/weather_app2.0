import React from 'react';
import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "bdf10afbc134449891aae8da581cf20a";

class App extends React.Component{
    //create get method using arrow function
    //to allow us to use "this" independently
    //of creating an constructor
    //where every I use "this" it is
    //bound to the App class

    getWeather = async () => {
        //async await
        //template strings = noraml strings that allows us
        //to inject the variables that we have define in our files
        const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Montreal&mode=json&appid=${API_KEY}&units=metric`);
        const data = await api_call.json();
        console.log(data);
        //async await -> form fillout -> props 32.17

    }
        render(){
            return (
                <div>
                    <Titles />
                    <Form />
                    <Weather/>
                </div>
            );
        }
}
export default App;