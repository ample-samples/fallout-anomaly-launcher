import { useNavigate } from "react-router-dom"

export const Nav = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <nav>
      <h1 className="bg-white" onClick={() => navigate('/')}>Go back</h1>
    </nav>
  )
}
