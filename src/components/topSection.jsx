import React from 'react';
import './topSection.scss';
import Weather from './weather';

import { Manager, Reference, Popper } from 'react-popper'; 

export default class TopSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            isSelectLocationOpen: false
        }
    }

    onSelectCity(){
        const { eventEmitter } = this.props;
        const locationName = document.getElementById("location-name").value
        eventEmitter.emit("updateWeather", locationName);
        this.toggleSelectLocation();
    }

    toggleSelectLocation(){
        this.setState(prevState => ({ isSelectLocationOpen: !prevState.isSelectLocationOpen}));
    }

    render(){
        const { isSelectLocationOpen } = this.state;
        const { eventEmitter } = this.props;

        return(
            <div className="top-container">
                <h3 className="title">Weather Report</h3>
                < Weather { ...this.props } />

                <Manager>
                    <Reference>
                    {({ ref }) => (
                         <button className="btn btn-select-location" ref={ref} 
                         onClick={() => this.toggleSelectLocation()} >
                             Select Location
                        </button> 
                    )}
                    </Reference>
                    { isSelectLocationOpen &&
                    <Popper 
                    placement="top">
                    {({ ref, style, placement, arrowProps }) => (
                        <div className="popup-container" 
                        ref={ref} 
                        style={style} 
                        data-placement={placement}>
                            <div className="form-container">
                                <label htmlFor="location-name">Location Name</label>
                                <input
                                id="location-name"
                                type="text"
                                placeholder="City Name"
                                />
                                <button
                                className="btn btn-select-location"
                                onClick={ () => this.onSelectCity() }
                                >
                                Select
                                </button>
                            </div>
                        <div ref={arrowProps.ref} style={arrowProps.style} />
                        </div>
                    )}
                    </Popper>}
                </Manager>
            </div>
        )
    }
}