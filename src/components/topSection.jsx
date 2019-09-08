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

    toggleSelectLocation(){
        this.setState(prevState => ({ isSelectLocationOpen: !prevState.isSelectLocationOpen}));
    }

    render(){
        const { isSelectLocationOpen } = this.state;
        return(
            <div className="top-container">
                <h3 className="title">Weather Report</h3>
                < Weather { ...this.props } />

                <Manager>
                    <Reference>
                    {({ ref }) => (
                         <button className="btn btn-select-location" ref={ref} 
                         onClick={this.toggleSelectLocation.bind(this)} >
                             Select Location
                        </button> 
                    )}
                    </Reference>
                    { isSelectLocationOpen &&
                    <Popper placement="top">
                    {({ ref, style, placement, arrowProps }) => (
                        <div ref={ref} style={style} data-placement={placement}>
                        Popper element
                        <div ref={arrowProps.ref} style={arrowProps.style} />
                        </div>
                    )}
                    </Popper>}
                </Manager>
            </div>
        )
    }
}