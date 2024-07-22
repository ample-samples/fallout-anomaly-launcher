import { useNavigate } from 'react-router-dom'

interface Props {
  highlight: string
}

export const MainPanel = (props: Props): JSX.Element => {
  const { highlight } = props
  const navigate = useNavigate()
  const ipcHandle = (): void => {
    console.log('launching')
    window.electron.ipcRenderer.send('start')
    window.electron.ipcRenderer.send('ping')
  }

  const menuItems = [
    <button
      id="start"
      key="start"
      className="w-full text-3xl hover:text-black hover:bg-white px-4 mb-1 inline text-left"
      onClick={ipcHandle}
    >
      Play
    </button>,
    <p id="help" key="help" className="w-full hover:text-black hover:bg-white px-4">
      <a
        href="https://doc.clickup.com/9014300118/d/h/8cmpkep-6174/ae0788e9f3d2615"
        target="_blank"
        rel="noreferrer"
      >
        Get Help
      </a>
    </p>,
    <p id="guides" key="guides" className="w-full hover:text-black hover:bg-white px-4">
      <a href="">Game Guides</a>
    </p>,
    <p
      onClick={() => navigate('/settings')}
      id="settings"
      key="settings"
      className="w-full hover:text-black hover:bg-white px-4"
    >
      <span>Launcher Settings</span>
    </p>
    // <p className="w-full hover:text-black hover:bg-white px-4">
    //   <a href="https://discord.com/invite/falloutanomaly" target="_blank" rel="noreferrer">
    //     Discord
    //   </a>
    // </p>,
    // <p className="w-full hover:text-black hover:bg-white px-4">
    //   <a href="">Endorse</a>
    // </p>,
    // <p className="w-full hover:text-black hover:bg-white px-4">
    //   <a href="">Make a Report</a>
    // </p>
  ]

  return (
    <div className="h-full flex flex-row">
      <div className="flex flex-col gap-[2px] font-Overseer text-xl text-white relative p-4 w-56 pb-24 justify-end bg-[#000000cc] backdrop-blur-[1px]">
        {menuItems.map((item) =>
          item.props.id === highlight ? (
            <span key={item.props.id} className="underline">
              {item}
            </span>
          ) : (
            item
          )
        )}
      </div>
    </div>
  )
}
