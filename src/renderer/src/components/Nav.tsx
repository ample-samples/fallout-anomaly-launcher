import { useNavigate } from 'react-router-dom'

export const Nav = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <nav>
      <h1
        style={{ fontSize: '50px' }}
        className="text-5xl border-b-white text-white"
        onClick={() => navigate('/')}
      >
        ⬅
      </h1>
    </nav>
  )
}
