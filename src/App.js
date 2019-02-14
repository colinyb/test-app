import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PubNubReact from 'pubnub-react';
import Button from '@material-ui/core/Button';

class App extends Component {
  constructor(props) {
    super(props);

    this.pubnub = new PubNubReact({
      publishKey: 'pub-c-4d1fc396-e440-4867-b919-f1b511a299c9',
      subscribeKey: 'sub-c-66c71010-2ff1-11e9-9089-0a173ec63317'
    });
    this.pubnub.init(this);

    this.state = {
      headerText: "Button Pressed",
      clickCount: 0
    }
  }
// componentWillMount() {
//   this.pubnub.subscribe({
//     channels:['Default'],
//     withPresence: true
//   });

//   this.pubnub.getMessage('Default', (message) => {
//     console(message);
//   });

//   this.pubnub.getStatus((st) => {
//     this.pubnub.publish({
//         message: 'hello world from react',
//         channel: 'channel1'
//     });
//   });
// }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            {this.state.headerText + ": " + this.state.clickCount}
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button onClick={() => {
            this.setState({
              clickCount: this.state.clickCount + 1
            });
          }} variant="contained" color="primary">Press Me</Button>
        </header>
      </div>
    );
  }
}

export default App;
