import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Home from './pages/Home';
import HeadingText from './pages/HeadingText';

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
  </Routes>
</Router>
</div>

  )
}

export default App;