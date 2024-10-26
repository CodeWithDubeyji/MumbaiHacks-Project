import React from 'react'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Chat from './component/ui/Chat'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chat/:username" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App