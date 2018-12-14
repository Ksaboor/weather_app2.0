import React from 'react';

class Weather extends React.Component{
    render(){
        return(
            <div className="weather__info">
                {/* here we have created a conditional operator so
                 are p tags are shown only when the button
                 is press using */}
                
                {
                    this.props.city && this.props.country && <p className="weather__key"> Location: 
                    <span className="weather__value"> {this.props.city}, {this.props.country}</span>
                    </p>
                }
                {/* TRANSLATION if "this.props.temperature exist? then render out the <P> tags"*/}
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.temperature && <p className="weather__key">Temperature: 
                    <span className="weather__value"> {this.props.temperature}</span>
                    </p>
                }
                {
                    this.props.temperature && <p className="weather__key">Humidity: 
                    <span className="weather__value"> {this.props.humidity}</span>
                    </p>
                }
                {
                    this.props.description && <p className="weather__key">Conditions: 
                    <span className="weather__value"> {this.props.description}</span>
                    </p>
                }
                {
                    this.props.error && <p className="weather__error"> 
                    {this.props.error}
                    </p>
                }
            </div>
        );
    }
};

export default Weather;
