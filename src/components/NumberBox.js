import '../styles/App.css';
import React, { PureComponent } from 'react'

export default class NumberBox extends PureComponent {
    render() {
        return (
            <div className = "NumberBox">

               <input className= "submit" type="submit" value="Get from mongodb 100" />
               <p className = "number" >100</p>

            </div>
        )
    }
}
