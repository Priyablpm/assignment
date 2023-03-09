import React from "react";
import {Component} from "react"
class Nav5 extends Component{
    render()
    {
        return(
            // <h1>{this.props.data} {this.props.number} {this.props.boolean} {this.props.data2}</h1>
            <>
            <h1>{this.props.data5.username}</h1>
            <h1>{this.props.data5.password}</h1>
            </>
        )
    }
}
export default Nav5