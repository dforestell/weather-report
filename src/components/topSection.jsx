import React from 'react';

import './topSection.scss'
export default class TopSection extends React.Component {
    constructor(props){
        super(props)
        this.state = {

        }
    }

    render(){
        return(
            <div className="top-container">
                <h3 className="title">Weather Report</h3>
            </div>
        )
    }
}