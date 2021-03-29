import React,{useContext} from 'react';
import { ItemContext } from '../context/ItemContext';


function Item() {
   const {items }= useContext(ItemContext);
   const { deleteItem} = useContext(ItemContext);

    return (
        items.map(ite => (
            <div key={ite.id}>
                <h5>{ite.name}</h5>
                <p>Unit price {ite.price} * Quantity({ite.quantity}) = {ite.price * ite.quantity} $</p>
                <button onClick={()=> deleteItem(ite.id)} className="btn btn-outline-danger">delete</button>
            </div>
        ))
      
    )
}

export default Item
