import React from 'react'
import Movies from './Movies'
import JSON from "./userdata.json"


const App6 = () => {
  return (
    <Movies payload={JSON}/>
  )
}

export default App6
