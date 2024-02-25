import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Product from './Components/Product';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (productId) => {
    const productInCart = cart.find(item => item.id === productId);

    if (productInCart) {
      const updatedCart = cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { id: productId, quantity: 1 }]);
    }

    console.log(`Product added to cart`);
  };

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          {/* <Route path="/" exact component={Home} /> */}
          <Route path="/" exact>
            <Home addToCart={addToCart} />
          </Route>
          <Route
            path="/cart"
            render={() => <Cart cart={cart} />}
          />
          {/* <Route path="/cart" exact component={Cart}/> */}
          <Route path="/product/:id" component={Product} />
        </Switch>
        {/* <Home/> */}
      </div>
    </Router>
  );
}

export default App;