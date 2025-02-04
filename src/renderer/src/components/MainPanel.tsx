import { useNavigate } from 'react-router-dom'

interface Props {
  highlight: string
}

export const MainPanel = (props: Props): JSX.Element => {
  const { highlight } = props
  const navigate = useNavigate()
  const ipcHandle = (): void => {
    window.electron.ipcRenderer.send('terminalLog', 'launching the thing')
  }

  const menuItems = [
    <p id="guides" key="guides">
      <a href="" className="w-full hover:text-black hover:bg-white px-2 block">
        Game Guides
      </a>
    </p>,
    <p
      onClick={() => navigate('/settings')}
      id="settings"
      key="settings"
      className="w-full hover:text-black hover:bg-white px-2 cursor-pointer"
    >
      Settings
    </p>,
    <p id="help" key="help">
      <a
        className="w-full hover:text-black hover:bg-white px-2 block"
        href="https://doc.clickup.com/9014300118/d/h/8cmpkep-6174/ae0788e9f3d2615"
        target="_blank"
        rel="noreferrer"
      >
        Get Help
      </a>
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
      <div className="flex flex-col gap-[2px] font-Overseer text-xl text-white relative p-4 w-56 pb-24 justify-end bg-[#00000077] backdrop-blur-[1px] shadow-[0px_0px_-4px_rgba(0,0,0,1)]">
        <button
          id="start"
          key="start"
          className="w-full text-3xl hover:text-black hover:bg-white px-2 mb-1 inline text-left"
          onClick={ipcHandle}
        >
          Play
        </button>
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
