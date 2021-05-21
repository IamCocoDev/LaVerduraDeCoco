import React from 'react';
import { useDispatch } from 'react-redux';

import { changeQuantity, deleteProduct } from '../app/actions';

const CartItem = ({ product }) => {
    const dispatch = useDispatch();
    const { name, img, stock, quantity, price, id } = product;

    const handleChangeQuantity = e => {
        const { value } = e.target;
        value > 0 && value <= stock && dispatch(changeQuantity(id, value));
    };

    const handleDeleteProduct = () => dispatch(deleteProduct(id));

    return (
        <div className='CartItemGrid'>
            <img className='CartItemImg' src={img} alt={name} />
            <div className='CartItemName'>{`${name}`}</div>
            <div className='CartItemPrice'>{`${price}`}</div>
            <div className='CartItemPrice'>Stock: {`${stock}`}</div>
            <div>
                <input type='number' value={quantity} onChange={handleChangeQuantity} />
            </div>
            <button onClick={handleDeleteProduct} >Delete product</button>
        </div>
    );
};

export default CartItem;
