import { JSXElementConstructor, ReactElement, ReactNode } from "react"

interface SettingItem {
  description: string
  settingInput: ReactNode
}

interface Props {
  title: string
  settingItems: SettingItem[]
}

const settingInput = (settingInput) => {
  return (
    <div>
      {settingInput}
    </div>
  )
}

export const SettingPanel = ({ title, settingItems }: Props): JSX.Element => {
  return (
    <div className="bg-[#cccccc22] border-[#777777] border-[1px] rounded-[16px] p-2">
      <h1 className="text-xl">{title}</h1>
      {settingItems.map((option) => (
        <div className="flex flex-row justify-between align-middle" key={option.description}>
          <h1 className="self-center">{option.description}</h1>
            {option.settingInput}
        </div>
      ))}
    </div>
  )
}
