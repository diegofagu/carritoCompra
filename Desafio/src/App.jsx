import Home from './views/Home'
import Carrito from './views/Carrito'
import Pizza from './views/Pizza'
import Navbar from './components/Navbar'
import PizzaProvider from './context/PizzaContext'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
    <Router>
      <PizzaProvider>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/carrito' element={<Carrito/>}/>
            <Route path="/pizza/:pizzaId" element={<Pizza />} />
          </Routes>
      </PizzaProvider>
    </Router>
  )
}

export default App
