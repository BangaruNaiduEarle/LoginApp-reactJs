import {Component} from 'react'

import Login from '../Login'
import Logout from '../Logout'
import Message from '../Message'

import './index.css'

class Home extends Component {
  state = {isLoggedIn: false}

  onClickBtn = () => {
    this.setState(prevState => ({isLoggedIn: !prevState.isLoggedIn}))
  }

  render() {
    const {isLoggedIn} = this.state

    return (
      <div className="app-container">
        <div className="bgContainer">
          <Message isLoggedIn={isLoggedIn} />
          {isLoggedIn ? (
            <Logout onClickOut={this.onClickBtn} />
          ) : (
            <Login onClickIn={this.onClickBtn} />
          )}
        </div>
      </div>
    )
  }
}

export default Home
