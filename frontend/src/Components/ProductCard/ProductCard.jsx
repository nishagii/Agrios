import React, { useState } from 'react';

function ProductCard({ product, onQuantityChange }) {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(prevCount => {
            const newCount = prevCount + 5;
            onQuantityChange(product.id, newCount);
            return newCount;
        });
    };

    const handleDecrement = () => {
        setCount(prevCount => {
            const newCount = prevCount > 0 ? prevCount - 5 : 0;
            onQuantityChange(product.id, newCount);
            return newCount;
        });
    };

    return (
        <div className="card">
            <img src={product.image} alt={product.name} />
            <h4>{product.name}</h4>
            <p>{`1Kg : Rs ${product.price}`}</p>
            <div className="quantity-controls">
                <button onClick={handleDecrement}>-</button>
                <span>{`Amount = ${count} Kg`}</span>
                <button onClick={handleIncrement}>+</button>
            </div>
            <p>{`Total = Rs ${count * product.price}`}</p>
        </div>
    );
}

export default ProductCard;
