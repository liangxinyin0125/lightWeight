import './App.css';
import React from 'react';
import 'antd/dist/reset.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/login/Login';
import Register from './pages/Register/Register';
import Home from './pages/mall/Home';
import Mine from './pages/mall/Mine';
import Address from './pages/mall/Address'
import Classification from './pages/mall/Classification';
import Goods from './pages/mall/Goods';
import GoodsList from './pages/mall/GoodsList';
import CreateOrder from './pages/pay/CreateOrder';
import Pay from './pages/pay/Pay';
import PaySuccess from './pages/pay/PaySuccess';
import ShoppinCart from './pages/mall/Shoppincart'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/mine" component={Mine} />
        <Route exact path="/address" component={Address} />
        <Route exact path="/classification" component={Classification} />
        <Route exact path="/goods/:id" component={Goods} />
        <Route exact path="/goodsList/:id" component={GoodsList} />
        <Route exact path="/createOrder" component={CreateOrder} />
        <Route exact path="/pay" component={Pay} />
        <Route exact path="/paySuccess" component={PaySuccess} />
        <Route exact path="/shoppinCart" component={ShoppinCart} />
      </Switch>
  </Router>
  );
}

export default App;
