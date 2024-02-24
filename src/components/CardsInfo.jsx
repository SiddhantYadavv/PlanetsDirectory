import React from 'react'
import { ImCross } from "react-icons/im";
import Resident from './Resident';


const CardsInfo = (props) => {
  return (
    <div className='cardsInfoMainDiv'>
        <div className='infoSubDiv'>

        <div className='closeBtnDiv'><p></p> <p className='crossBtn' onClick={props.closeDivProp}><ImCross/></p></div>
       
        <div className='infoInnerDiv'>
            <p className='infoHeading'>{props.renderData.name.toUpperCase()}</p>
            <div className='residentsDiv'>
            {props.renderData.residents.length===0 ? 
            (<h5 style={{ fontSize:"15px",fontWeight:"bold",textAlign:"center",width:"100%"}}>No information on residents here</h5>) :
             props.renderData.residents.map((resident,index)=>(<Resident key={index} renderProp={resident}/>))}
        </div>
        </div>

       

        </div>
        
    </div>
  )
}

export default CardsInfo