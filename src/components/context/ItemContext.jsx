import React,{createContext, useReducer} from 'react'
import AppReducer from './AppReducer';

const initialState = {
    items: [
        {
            id:"1",
            name:"Tomate",
            quantity:16,
            price: 19.99
        },
        {
            id:"2",
            name:"Riz",
            quantity:25,
            price: 18.0
        },
        {
            id:"3",
            name:"Pomme de terre",
            quantity:10,
            price: 5.0
        }
    ]
}

export const ItemContext = createContext(initialState);

export const ItemProvider = (props) => {
  
    const [state, dispatch] = useReducer(AppReducer,initialState);
    
    function addItem(item){
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        })
    }
    
    function deleteItem(id){
        dispatch({
            type: 'DELETE_ITEM',
            payload: id
        })
    }


    return (
       <ItemContext.Provider value={{
           items: state.items,
           addItem,
           deleteItem
       }}>
           {props.children}
       </ItemContext.Provider>
    )
}


