import '../styles/App.css';
import React, { PureComponent } from 'react'

const axios = require('axios');



export default class NumberBox extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            number : 0
        };
    }
    getNumber =  async function(){      
        try {
          const response = await axios.get('https://server-02-devkim.herokuapp.com/60a6666fbdb08120a8071cb5');
          const  value = response.data.data.numX.value;
          this.setState({number : value});

        } catch (error) {
          console.error(error);
        }
      };


componentDidMount(){
this.getNumber();

}

    render() {
        return (
            <div className = "NumberBox">

               <input className= "submit" type="submit" value="Get from mongodb" 
               onClick = {()=>this.getNumber()}           
               />

               <p className = "number" >{this.state.number}</p>

            </div>
        )
    }
}
