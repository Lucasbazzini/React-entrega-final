import NavBar from "./components/Navbar"
import ItemListContainer from './components/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from "./components/Cart"
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">

      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer texto='Venta de hardware para gaming!' />}/>
        <Route path="/category/:categoryid" element={<ItemListContainer texto='Venta de hardware para gaming!' />}/>
        <Route path="/detail/:detailid" element={ <ItemDetailContainer />}/>
        <Route path="/cart" element={ <Cart />}/>

      
      </Routes>
      
      
     
      </BrowserRouter>
    </div>
  )
}

export default App
