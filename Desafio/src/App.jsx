import Home from './views/Home'
import Carrito from './views/Carrito'
import Navbar from './components/Navbar'
import PizzaContext from './context/PizzaContext'
import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='/pizzas/:id' element={<PizzaContext/>} />
    </Routes>
    </>
  )
}

export default App
