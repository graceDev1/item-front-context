import './App.css';
import AddItem from './components/additem/additem.component';
import Item from './components/item/item.component';
import NavBar from './components/navbar/navbar.component';
import { ItemProvider } from './components/context/ItemContext';




function App() {
  return (
    <div className="App">
      <ItemProvider>
        <NavBar/>
        <div className="container">
          <AddItem/>
          <Item/>
        </div>
      </ItemProvider>
    </div>
  );
}

export default App;
