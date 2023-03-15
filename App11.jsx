import React, { Component } from 'react'
import JSON from "./student.json"
import Details from './Details';


class App11 extends Component {
  constructor(){
    super()
    this.state={
        json: JSON
    }
  }
  render()
  {
    return(
        <div>
<Details data={this.state.json}/>
        </div>
    )
  }
}
export default App11;