import React,{useContext} from 'react';
import { ItemContext } from '../context/ItemContext';


function Item() {
   const [item] = useContext(ItemContext);

    return (
        item.map(ite => (
            <div key={ite.id}>
                <h5>{ite.name}</h5>
                <p>Unit price {ite.price} * Quantity({ite.quantity}) = {ite.price * ite.quantity} $</p>
                <button className="btn btn-outline-danger">delete</button>
            </div>
        ))
      
    )
}

export default Item
