import { useState } from 'react'
import { VIEWS } from './utils/constants'
import Header from './components/Header'
import Home from './components/Home'
import ShoppingCart from './components/ShoppingCart'
import './App.css'

function App() {
  const [currentView, setCurrentView] = useState(VIEWS.HOME)

  return (
    <div className="App">
      <Header currentView={currentView} setCurrentView={setCurrentView} />
      <main>
        {currentView === VIEWS.HOME && <Home />}
        {currentView === VIEWS.CART && <ShoppingCart />}
      </main>
    </div>
  )
}

export default App
