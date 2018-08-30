import React from 'react';

class Form extends React.Component{
    render(){
        return(
            // onSubmit the form conponent calls the getWeather prop
            //in our App.js conponent
            //but our page keeps refreshing causing our
            //json object to not persist onto the console for display.
            <form onSubmit={this.props.getWeather}>
                <input type="text"  name="city" placeholder="City..."/>
                <input type="text" name="country" placeholder="Country..." />
                <button> Get Weather</button>
            </form>
        )
    }
}
export default Form;