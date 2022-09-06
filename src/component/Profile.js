import React, { Component } from 'react'
import time from './Date'
class profile extends Component {
  state = {
    fullname: 'Montassar Abidi',
    bio: ' Full-Stack javascript ',
    profession: '  Developer',
    imgprofil: './pp.png',
    counter: 0
}

componentDidMount() {
    setInterval(() => {
        this.setState({ counter: this.state.counter + 1 })
    }, 1000)
    

}
render() {
    return <div>
    <div class="container">
    <div class="content">
      <h1>Pratham</h1>
      <h3>I love designing websites and keep things as simple as possible. My goals is to focus on minimalism and conveying the message that you want to send</h3>
    </div>
    <div class="flap"></div>
  </div>
        </div>
}
}
export default profile;