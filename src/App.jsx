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
      <h1>Yildiz</h1>
      <Route path='/Home'><Home/></Route>
      <Route path='/OrderPizza'><OrderPizza/></Route>
      <Route path='/Success'><Success/></Route>
    </>
  )
}

export default App
