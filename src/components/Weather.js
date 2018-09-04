import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div>
                {/* here we have created a conditional operator so
                 are p tags are shown only when the button
                 is press using */}
                {this.props.city && this.props.country && <p> Location: {this.props.city}, {this.props.country}</p>}
                {/* TRANSLATION if "this.props.temperature exist? then render out the <P> tags"*/}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.temperature && <p>Temperature: {this.props.temperature}</p>}
                {this.props.temperature && <p>Humidity: {this.props.humidity}</p>}
                {this.props.description && <p>Conditions: {this.props.description}</p>}
            </div>
        );
    }
};

export default Weather;
