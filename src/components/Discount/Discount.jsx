import React from 'react'
import './Discount.css'
import { assets } from '../../assets/assets'

function Discount() {
    return (
        <div className='discount-text'>
            <p>Consigue descuentos de hasta 20%.</p>
            <div className="discount-img">
                <img src={assets.discount} alt="" />
            </div>
        </div>
    )
}

export default Discount