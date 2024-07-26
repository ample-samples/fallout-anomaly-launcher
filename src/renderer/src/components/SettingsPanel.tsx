interface SettingItem {
  description: string
  settingInput: JSX.Element
}

interface Props {
  title: string
  settingItems: SettingItem[]
}

export const SettingsPanel = ({ title, settingItems }: Props): JSX.Element => {
  return (
    <div className="bg-[#cccccc22] border-white border-[1px] rounded-[16px] p-2">
      <h1 className="text-2xl">{title}</h1>
      {settingItems.map((option) => (
        <div className="flex flex-row justify-between align-middle" key={option.description}>
          <h1 className="self-center">{option.description}</h1>
          <div className="bg-[#ffffff1a] border-[1px] border-[#35e28c] rounded-full self-center px-2 my-1">
            {option.settingInput}
          </div>
        </div>
      ))}
    </div>
  )
}
