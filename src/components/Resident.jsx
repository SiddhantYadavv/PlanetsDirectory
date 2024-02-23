import React, { useEffect, useState } from 'react'
import axios from "axios"

const Resident = (props) => {
    const [residentData,setResidentData]=useState(null)
// console.log(residentData)
   useEffect(()=>{
    const residentFunction = async()=>{
        try {
        const response = await axios.get(props.renderProp)
            setResidentData(response.data)
        } catch (error) {
            console.error(error)
        }
    }
    residentFunction()
   },[])

  return (
    <div>
       {residentData && (<div className='residentCard'>
            <h4 style={{textAlign:"center"}}>Resident Info</h4>

            <p>Name: {residentData.name}</p>
            <p>Height: {residentData.height}</p>
            <p>Mass: {residentData.mass}</p>
            <p>Gender: {residentData.gender}</p>
        </div>
       )}
    </div>
  )
}

export default Resident