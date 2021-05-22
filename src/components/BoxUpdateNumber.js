import axios from 'axios';
import React, { PureComponent } from 'react';
import '../styles/App.css';
export default class BoxUpdateNumber extends PureComponent {

    updateNumber = async function() {
        const response = await axios.put('https://server-02-devkim.herokuapp.com/60a6666fbdb08120a8071cb5',{
                "value" : parseInt(document.getElementById("inputBox").value)
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
        }
    

    render() {
        return (
            <div className= "BoxUpdateNumber">
              
              <input type="text"  className= "inputText" id="inputBox"/>
              
              <input className= "submit" type="submit" value="Put to mongodb"
              onClick = {()=>this.updateNumber()}  />
            

            </div>
        )
    }
}
