import Versions from './components/Versions'
import falloutBackground from './assets/darkly-atmospheric-retail-environment-rendering.jpg'

function App(): JSX.Element {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('ping')

  return (
    <>
      <div className="h-full" >
        <img alt="logo" className="w-full absolute inset-0" src={falloutBackground} />
        <div className="font-ShareTech text-green-400 relative z-10">
          Build an Electron app with <span className="react">React</span>
          &nbsp;and <span className="ts">TypeScript</span>
          Powered by electron-vite
          <p className="">
            Please try pressing <code>F12</code> to open the devTool
          </p>
          <div className="">
            <div className="action">
              <a href="https://electron-vite.org/" target="_blank" rel="noreferrer">
                Documentation
              </a>
            </div>
            <div className="action">
              <a target="_blank" rel="noreferrer" onClick={ipcHandle}>
                Send IPC
              </a>
            </div>
          </div>
          <Versions></Versions>
        </div>
      </div>
    </>
  )
}

export default App
