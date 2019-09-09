import React from 'react';

import { EventEmitter } from 'event';

eventEmitter = new EventEmitter()

export default class Store extends React.Component{
    constructor(props){
        super(props);
        // Main app state 
        this.state = {
            appName: "Weather Report";
        }
    }

    render(){
        return React.Children.map(this.props.children = (child) => {
            return React.cloneElement(child, { ...this.state, 
                eventEmitter: this.eventEmitter });
        });
    }
}