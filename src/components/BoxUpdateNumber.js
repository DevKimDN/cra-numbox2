import React, { PureComponent } from 'react';
import '../styles/App.css';
export default class BoxUpdateNumber extends PureComponent {
    render() {
        return (
            <div className= "BoxUpdateNumber">
              
              <input type="text"  className= "input"/>
              
              <input className= "submit" type="submit" value="Put to mongodb" />
            

            </div>
        )
    }
}
