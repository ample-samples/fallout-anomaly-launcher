import { useNavigate } from 'react-router-dom'

export const Start = (): JSX.Element => {
  const ipcHandle = (): void => window.electron.ipcRenderer.send('this will launch FA eventually')

  const navigate = useNavigate()

  return (
    <>
      <div className="h-full flex flex-row">
        <div className="flex flex-col gap-[2px] font-ShareTech text-xl text-fgreen1 relative p-4 w-56 pb-8 justify-end bg-[#000000cc]">
          <p className="w-full text-3xl hover:text-black hover:bg-fgreen1 px-4 mb-1">
            <button onClick={ipcHandle}>Play</button>
          </p>
          <p className="w-full hover:text-black hover:bg-fgreen1 px-4">
            <a
              href="https://doc.clickup.com/9014300118/d/h/8cmpkep-6174/ae0788e9f3d2615"
              target="_blank"
              rel="noreferrer"
            >
              Install Guide
            </a>
          </p>
          <p className="w-full hover:text-black hover:bg-fgreen1 px-4">
            <a href="">Game Guides</a>
          </p>
          <p className="w-full hover:text-black hover:bg-fgreen1 px-4">
            <a href="https://discord.com/invite/falloutanomaly" target="_blank" rel="noreferrer">
              Discord
            </a>
          </p>
          <p className="w-full hover:text-black hover:bg-fgreen1 px-4">
            <a href="">Endorse</a>
          </p>
          <p className="w-full hover:text-black hover:bg-fgreen1 px-4">
            <span onClick={() => navigate('/settings')}>Launcher Settings</span>
          </p>
          <p className="w-full hover:text-black hover:bg-fgreen1 px-4">
            <a href="">Make a Report</a>
          </p>
        </div>
      </div>
    </>
  )
}
