import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Home from './pages/Home';
import HeadingText from './pages/HeadingText';
import AddressForm from './forms/addressform/AddressForm';
import Login from './forms/loginform/Signup';
import Signup from './forms/loginform/Signup';

const App = () => {
  return (
<div className="App">

<Router>
<Navbar/>
  <Routes>
  <Route className="hm" path="/" exact element={<Home/>}/>
  <Route className="ht" path="/" exact element={<HeadingText/>}/>
<Route path="Shop" exact element={<Shop/>}/>
<Route path="Cart" exact element={<Cart/>}/>
<Route path="AddressForm" exact element={<AddressForm/>}/>
<Route path="Signup" exact element={<Signup/>}/>
  </Routes>
</Router>
</div>

  )
}

export default App;