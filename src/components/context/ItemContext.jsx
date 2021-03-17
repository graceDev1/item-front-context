import React,{useState,createContext} from 'react'

export const ItemContext = createContext();

export const ItemProvider = (props) => {
    let items = [
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
    const [item, setItem] = useState(items);
    return (
       <ItemContext.Provider value={[item, setItem]}>
           {props.children}
       </ItemContext.Provider>
    )
}


