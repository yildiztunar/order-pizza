import { useState } from 'react'
import reactLogo from './assets/react.svg'
import workintech from '/workintech.svg'
import './App.css'
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
import OrderPizza from './pages/OrderPizza'
import Home from './pages/Home'
import Success from './pages/Success'

function App() {
  return (
    <>
      <Route exact path='/'><Home/></Route>
      <Route exact path='/Home'><Home/></Route>
      <Route exact path='/OrderPizza'><OrderPizza/></Route>
      <Route exact path='/Success'><Success/></Route>

      <div>
        <Link to="/">Home</Link>
        <Link to="/OrderPizza" data-cy="route-OrderPizza">Order Pizza</Link>
        <Link to="/Success">Success</Link>
      </div>
    </>
  )
}

export default App
