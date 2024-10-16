import React, { useContext } from 'react'
import './Item.css'
import { ShopContext } from '../../Context/ShopContext'

const Item = (props) => {
    const { id, name, price, image } = props;

    const { cartItems, addToCart, removeFromCart, url } = useContext(ShopContext);

    const itemQuantity = cartItems[id] || 0;

    return (
        <div className='item'>
            <img src={url + "/images/" + props.image} alt="props.name" />
            <h4>{props.name}</h4>
            <p className='price'>{`1Kg : Rs ${props.price}`}</p>

            <div >
                {!cartItems[id]
                    ? <button onClick={() => addToCart(id)} className='add'>+</button>
                    : <div className="quantity-controls">
                        <button onClick={() => removeFromCart(id)} className='minus'>-</button>
                        <span>{`Amount = ${cartItems[id]} Kg`}</span>
                        <button onClick={() => addToCart(id)} className='plus'>+</button>
                    </div>

                }

            </div>
            <p>{`Total = Rs ${itemQuantity * props.price}`}</p>
        </div>
    )
}

export default Item;
