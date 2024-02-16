import './App.css';
import { Routes, Route } from 'react-router-dom';
// screens

import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';

//components
import Navbar from './components/Navbar';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route path="/product/:id" element={<ProductScreen />} />
          <Route path="/cart" element={<CartScreen />} />
        </Routes>
      </main>
    </div>

  );
}

export default App;