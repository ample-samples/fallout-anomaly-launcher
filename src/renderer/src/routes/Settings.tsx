import { MainPanel } from '@renderer/components/MainPanel'
import { SettingPanel } from '@renderer/components/SettingPanel'
import cross from '../assets/close-svgrepo-com.svg'
import check from '@assets/icons/check-circle-svgrepo-com.svg'
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
import { Transition } from '@headlessui/react'

export const Settings = (): JSX.Element => {
  const navigate = useNavigate()
  const [selectedENB, setSelectedENB] = useState('none')
  const [isENBConfirmed, setIsENBConfirmed] = useState(true)
  const [currentENB, setCurrentENB] = useState('No ENB')

  const handleClose = (): void => {
    navigate('/')
  }

  const confirmENB = (value: string): void => {
    window.electron.ipcRenderer.send('terminalLog', value)
    setIsENBConfirmed(true)
    setCurrentENB(value)
  }

  const handleENBChange = (value: string): void => {
    setIsENBConfirmed(false)
    setSelectedENB(value)
  }

  const shadSelectENB = (
    <div className="w-full flex flex-row items-center">
      <Select onValueChange={handleENBChange}>
        <SelectTrigger className="transition-transform [&>span]:text-blue duration-3000 highlight-none bg-[#ffffff1a] border-[1px] border-[#35e28c] rounded-full self-center h-9 px-2 my-1">
          <SelectValue className="leading-6 text-md" placeholder={currentENB}></SelectValue>
        </SelectTrigger>
        <SelectContent className="leading-6 text-md bg-[#00000077] border-[#777777] border-[1px] rounded-[12px]">
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
      <Transition
        show={!isENBConfirmed && currentENB !== selectedENB}
        enter="transition-opacity transition-translate duration-3000"
        enterFrom="opacity-0 translate-x-50"
        enterTo="opacity-100 translate-x-0"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <img
          className="cursor-pointer"
          width={30}
          onClick={() => confirmENB(selectedENB)}
          src={check}
          alt=""
          style={{
            filter: isENBConfirmed
              ? 'brightness(0) saturate(100%) invert(73%) sepia(66%) saturate(477%) hue-rotate(89deg) brightness(92%) contrast(93%)'
              : 'brightness(0) saturate(100%) invert(88%) sepia(27%) saturate(3763%) hue-rotate(335deg) brightness(99%) contrast(87%)'
          }}
        />
      </Transition>
    </div>
  )

  // FIX: Fix confirmation behaviour
  const revertENB = (
    <button
      onClick={() => handleENBChange('No ENB')}
      className="w-full h-9 highlight-none bg-[#ffffff1a] border-[1px] border-[#35e28c] rounded-full self-center px-2 my-1 leading-6 text-[14px]"
    >
      Revert to None
    </button>
  )

  const settings = [
    {
      description: 'Select Profile',
      settingInput: shadSelectENB
    },
    {
      description: 'Revert Profile',
      settingInput: revertENB
    }
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
            <section className="w-full h-full"></section>
          </div>
        </section>
      </div>
    </div>
  )
}
