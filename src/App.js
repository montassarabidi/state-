
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ Component } from 'react';
import Profile from './component/Profile'
import Date from '../src/component/Date'
class App extends Component {
  state = {
    fullname: 'Montassar Abidi',
    bio: ' Full-Stack javascript ',
    profession: ' Developer',
    imgprofile: '',
   counter: 0
}

  render() {
    return  (
    <div>
    <button className="btn btn-sm btn-outline-primary w-100" onClick={()=>this.setState({show:!this.state.show})} >   {this.state.show?"Hide":"Show"} </button>
       {this.state.show? <Profile/> :null}

       </div>

    );
  }
}
  export default App;