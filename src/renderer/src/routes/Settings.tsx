import { MainPanel } from '@renderer/components/MainPanel'
import { SettingPanel } from '@renderer/components/SettingPanel'
import cross from '../assets/close-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'

export const Settings = (): JSX.Element => {
  const navigate = useNavigate()

  const handleClose = (): void => {
    navigate('/')
  }

  const settings = [
    {
      description: 'Select Profile',
      settingInput: (
        <select className="bg-[#00000000] highlight-none">
          <option className="bg-[#00000000]" value="ENB">
            ENB 1
          </option>
          <option className="bg-[#00000000]" value="ENB">
            ENB 2
          </option>
          <option className="bg-[#00000000]" value="ENB">
            ENB 3
          </option>
        </select>
      )
    }
  ]

  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '224px calc(100% - 224px)' }}
      className="h-full w-full text-white"
    >
      <MainPanel highlight="settings" />
      <div className="bg-[#00000077] backdrop-blur-[1px] m-6 px-6 rounded-xl shadow-[0px_0px_-15px_rgba(0,0,0,1)]">
        <nav className="flex align-middle justify-between">
          <span className="px-2 my-4 text-xl text-white self-center align-middle">Settings</span>
          <img onClick={handleClose} className="h-8 self-center align-middle" src={cross} alt="" />
        </nav>
        <section>
          <hr className="" />
          <div className="grid grid-cols-2 divide-x gap-6">
            <section>
              col 1
              <SettingPanel title="ENB" settingItems={settings} />
            </section>
            <section>col 2</section>
          </div>
        </section>
      </div>
    </div>
  )
}
