import React, { Component } from 'react';
import './App.css';
import {connect} from 'react-redux';
import SmurfForm from './SmurfForm';
import { getSmurfs, addSmurf } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      smurf: {
        name: '',
        age: null,
        height: ''
      }
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  render() {
    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>
          {this.props.smurfs.map(smurf => {
            return <div key={smurf.id}>
              <h4>{smurf.name}</h4>
            </div>
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  smurfs: state.smurfs,
  error: state.error
})

export default connect(mapStateToProps, {getSmurfs, addSmurf})(App);
