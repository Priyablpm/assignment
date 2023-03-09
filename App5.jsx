import React from "react";
import {Component} from "react"
import Nav5 from './Nav5';
class App5 extends Component {
    render()
    {
        return(
            // <Nav5 data="priya" number={123} boolean={true} data2={null}/>
            <Nav5 data5={{username:"priya" , password:143}}/>
        )
    }
}
export default App5