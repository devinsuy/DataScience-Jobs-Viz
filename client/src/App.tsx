import { Home } from './views/Home'
import './assets/fonts/Karla/Karla-Regular.ttf'
import { Routes, Route } from 'react-router-dom'

export function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
}

export default App
