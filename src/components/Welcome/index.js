// Write your code here

import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false}

  changeToFalse = () => {
    const {isSubscribed} = this.state
    if (isSubscribed) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  //   this.setState({isSubscribed: false})
  // this.setState({isSubscribed: true})

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="page_container">
        <h1>Welcome</h1>
        <p>Thank you! Happy Learning</p>
        {isSubscribed ? (
          <button onClick={this.changeToFalse} type="button">
            Subscribed
          </button>
        ) : (
          <button onClick={this.changeToFalse} type="button">
            Subscribe
          </button>
        )}
      </div>
    )
  }
}
export default Welcome
