import { MainPanel } from '@renderer/components/MainPanel'
import cross from '../assets/close-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'

export const Settings = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClose = (): void => {
    navigate('/')
  }

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '224px calc(100% - 224px)' }}
      className="h-full w-full"
    >
      <MainPanel highlight="settings" />
      <div className="bg-[#00000077] backdrop-blur-[1px] m-6 rounded-xl shadow-[0px_0px_5px_rgba(0,0,0,1)]">
        <nav className="flex align-middle justify-between">
          <span className="px-4 my-4 text-xl text-white self-center align-middle">Settings</span>
          <img onClick={handleClose} className="h-8 self-center align-middle" src={cross} alt="" />
        </nav>
      </div>
    </div>
  )
}
