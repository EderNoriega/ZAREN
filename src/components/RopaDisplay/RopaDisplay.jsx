import React, { useContext } from 'react'
import './RopaDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import RopaItem from '../RopaItem/RopaItem'

const RopaDisplay = ({category}) => {

   const {ropa_list} = useContext(StoreContext)

  return (
    <div className='ropa-display' id='ropa-display'>
        <h2>Moda para ti</h2>
       <div className="ropa-display-list">
        {ropa_list.map((item,index)=>{
            if (category=="All" || category==item.category) {
            return <RopaItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>    
            }
         
        })}
       </div>
    </div>
  )
}

export default RopaDisplay