import './desktop.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Desktop from './Desktop'
import Header from './Header'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Header />} />
          <Route path="/desktop" element={<Desktop />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
