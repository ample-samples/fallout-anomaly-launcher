import { MainPanel } from '@renderer/components/MainPanel'
import { SettingPanel } from '@renderer/components/SettingPanel'
import cross from '../assets/close-svgrepo-com.svg'
import { useNavigate } from 'react-router-dom'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@shadcomponents/ui/select'
import { useState } from 'react'

export const Settings = (): JSX.Element => {
  const navigate = useNavigate()
  const [selectedENB, setSelectedENB] = useState('none')

  const handleClose = (): void => {
    navigate('/')
  }

  const handleENBChange = (value: string): void => {
    window.electron.ipcRenderer.send('terminalLog', value)
    console.log(value)
  }

  const shadSelect = (
    <div className="w-full">
      <Select onValueChange={handleENBChange}>
        <SelectTrigger className="highlight-none bg-[#ffffff1a] border-[1px] border-[#35e28c] rounded-full self-center px-2 my-1">
          <SelectValue></SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-[#00000077] border-[#777777] border-[1px] rounded-[12px]">
          <SelectGroup className="text-white">
            <SelectItem className="focus:none cursor-pointer" value="No ENB">
              No ENB
            </SelectItem>
            <SelectItem className="focus:none cursor-pointer" value="ENB 1">
              ENB 1
            </SelectItem>
            <SelectItem className="focus:none cursor-pointer" value="ENB 2">
              ENB 2
            </SelectItem>
            <SelectItem className="focus:none cursor-pointer" value="ENB 3">
              ENB 3
            </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )

  const settings = [
    {
      description: 'Select Profile',
      settingInput: shadSelect
    }
    // {
    //   description: 'Select Profile',
    //   settingInput: shadSelect
    // },
    // {
    //   description: 'Select Profile',
    //   settingInput: shadSelect
    // }
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
          <hr className="mb-4" />
          <div className="grid grid-cols-2 gap-6">
            <section className="grid grid-rows-2 gap-4">
              <SettingPanel title="ENB" settingItems={settings} />
            </section>
            <section className="w-full h-full">
            </section>
          </div>
        </section>
      </div>
    </div>
  )
}
