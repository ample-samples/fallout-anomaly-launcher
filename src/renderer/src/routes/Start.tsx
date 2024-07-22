import { MainPanel } from '@renderer/components/MainPanel'
import { useNavigate } from 'react-router-dom'

export const Start = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <>
      <MainPanel highlight="start" />
    </>
  )
}
