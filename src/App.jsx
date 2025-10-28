import './desktop.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Desktop from './Desktop'
import Header from './Header'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Desktop />} />
          <Route path="/plain" element={<Header />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App
