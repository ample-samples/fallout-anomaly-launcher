import { Route, Routes } from 'react-router-dom'
import { Start } from './routes/Start'
import { Settings } from './routes/Settings'
import falloutBackground from './assets/darkly-atmospheric-retail-environment-rendering.jpg'
// import { useEffect } from 'react'

function App(): JSX.Element {
  return (
    <div
      style={{
        backgroundImage: `url(${falloutBackground})`,
        height: '100vh',
        width: '100vw',
        backgroundSize: '100% 100%'
      }}
    >
      <Routes>
        <Route path="/settings" element={<Settings />} />
        <Route path="/" element={<Start />} />
      </Routes>
    </div>
  )
}

export default App
