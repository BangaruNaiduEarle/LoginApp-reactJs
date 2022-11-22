import './index.css'

const Logout = props => {
  const {onClickOut} = props

  return (
    <button type="button" className="button" onClick={onClickOut}>
      Logout
    </button>
  )
}

export default Logout
