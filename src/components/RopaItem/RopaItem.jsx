import React, { useContext } from 'react'
import './RopaItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const RopaItem = ({id,name,price,description,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='ropa-item'>
        <div className="ropa-item-img-container">
            <img className='ropa-item-image' src={image} alt="" />
            {!cartItems[id]
               ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
               :<div className='ropa-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
                </div>
            }
        </div>
    <div className="ropa-item-info">
        <div className="ropa-item-name-rating">
            <p>{name}</p>
            <img src={assets.rating_starts} alt="" />
    </div>
    <p className="ropa-item-desc">{description}</p>
    <p className="ropa-item-price">${price}</p>
    </div>
    </div>
  )
}

export default RopaItem