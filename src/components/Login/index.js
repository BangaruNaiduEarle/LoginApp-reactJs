import './index.css'

const Login = props => {
  const {onClickIn} = props

  return (
    <button type="button" className="button" onClick={onClickIn}>
      Login
    </button>
  )
}

export default Login
