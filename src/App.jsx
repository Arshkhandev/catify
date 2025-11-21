import './App.css'
import { Routes,Route} from 'react-router-dom'
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import NavBar from './componets/NavBar'


function App() {


  return (
    <div>
      <NavBar/>
    <Routes>
     <Route path='/' element ={<Home/>}></Route>
     <Route path='/cart' element ={<Cart/>}></Route>
    </Routes>
    </div>
      
  )
}

export default App
