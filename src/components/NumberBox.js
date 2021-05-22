import '../styles/App.css';
import React, { PureComponent } from 'react'

export default class NumberBox extends PureComponent {
    render() {
        return (
            <div className = "NumberBox">
               <p className = "number" >100</p>

            </div>
        )
    }
}
