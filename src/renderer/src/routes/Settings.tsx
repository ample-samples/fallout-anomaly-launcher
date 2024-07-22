import { MainPanel } from '@renderer/components/MainPanel'

export const Settings = (): JSX.Element => {
  return (
    <div
      style={{ display: 'grid', gridTemplateColumns: '224px calc(100% - 224px)' }}
      className="h-full w-full"
    >
      <MainPanel highlight="settings" />
      <div className="bg-[#000000cc] backdrop-blur-[1px] m-6 rounded-xl"></div>
    </div>
  )
}
