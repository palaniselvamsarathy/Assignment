// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Product from './Components/Product';
function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/product/:id" component={Product} />
        </Switch>
        {/* <Home/> */}
      </div>
    </Router>
  );
}

export default App;