import React, {useContext} from 'react'
import { ItemContext } from '../context/ItemContext'
import {nanoid} from 'nanoid';


function AddItem() {
    const [item, setItem] = useContext(ItemContext)

    const addItem = e =>{
        e.preventDefault()
        const newItem = {
            id: nanoid(),
            name: e.target.name.value,
            price: parseFloat(e.target.price.value),
            quantity: parseInt(e.target.quantity.value)
        }

        console.log(newItem);

        setItem(preItem => [...item, newItem]);
        e.target.reset()
    }

    return (
        <div className="p-4">
            <h3 className="text-center">Add Item List</h3>
            <form onSubmit={addItem}>
                <div className="form-group">
                    <input className="form-control" type="text" name="name" placeholder="Item Name ..." id=""/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="number" placeholder="Price in $....." name="price" id=""/>
                </div>
                <div className="form-group">
                    <input className="form-control" type="number" placeholder="Quantity ...." name="quantity" id=""/>
                </div>
                <div className="button-control">
                <button type="submit" className="btn btn-primary">ADD</button>
                </div>
            </form>
        </div>
    )
}

export default AddItem
