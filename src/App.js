import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'
import EmotionRecognitions from './EmotionRecognitions'
import Login from './Login'
import Register from './Register'
import { BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom'



class App extends Component {
  render() {
    return (

      <Router basename={process.env.PUBLIC_URL}>
        <div className="App">
        <header className="App-header">
          <div className="header-left">
            <Link to='/'>
              {/* <img src={logo} className="App-logo" alt="logo" /> */}
              <h1 className="App-title">Emotion Recognition</h1>
            </Link>
          </div>
          <div className="header-right">
            <h2 className="login"><Link to='/login'>Login</Link></h2>
            <h2 className="register"><Link to='/register'>Register</Link></h2>
          </div>
        </header>

          <Switch>
                <Route exact path= "/" render={() => (
                  <Redirect to="/emotionlist"/>
                )}/>
                 <Route exact path='/emotionlist' component={EmotionRecognitions} />
                 <Route exact path='/login' component={Login} />
                 <Route exact path='/register' component={Register} />
          </Switch>
      </div>
    </Router>
    );
  }
}

export default App
