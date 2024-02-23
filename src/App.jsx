import React from 'react'
import Cards from './components/Cards'
import heading from "../public/heading.png"


const App = () => {
  return (
    <div>
    <div className='main'>
      <img className='headingImage' src={heading}/>
      <h1 className='heading' >Planets Directory</h1>
      <hr/>
    </div>
    <Cards/>
 
    </div>
  )
}

export default App