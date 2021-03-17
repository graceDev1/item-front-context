import React,{useContext} from 'react'
import { ItemContext } from '../context/ItemContext'

function NavBar() {
  const [item] = useContext(ItemContext)
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        {/*  eslint-disable-next-line */}
        <a class="navbar-brand" href="#">ITEM LIST</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarColor02">
          <ul class="navbar-nav mr-auto"> 
          </ul>
         <div className="my-2 my-lg-0 mf-4 mt-2">
             <p className="font-weight-bold">Grace - {item.length}</p>
         </div>
        </div>
      </nav>
    )
}

export default NavBar
