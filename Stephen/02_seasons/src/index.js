import './style/App.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

// Issue of functional Component is that
// the geolocation takes time to get the result
// Thus return cannot have the result from geolocation
// When its html element is loaded.
// The solution is used state and class, which the
// App will render again when the state changes.
// const App = () => {
//   window.navigator.geolocation.getCurrentPosition(
//     position => console.log(position),
//     err => console.log(err)
//   );
//   return <div>Latitude: </div>;
// };

class App extends React.Component {
  // State needs to be initialed, having it in constructor
  // of the component is convenient
  // constructor(props) {
  //   super(props);

  //   // THIS IS THE ONLY TIME we do direct assignment
  //   // to this.state
  //   this.state = { lat: null, errorMessage: '' };
  // }

  // This is equivalent to the whole above contructor
  state = { lat: null, errorMessage: '' };

  componentDidMount() {
    // We move this from constructor. Not technical required, but
    // this is for a good practice.
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Spinner message="Please accept location request" />;
  }

  render() {
    return <div className="border red">{this.renderContent()}</div>;
    // return (
    //   <div>
    //     Latitude: {this.state.lat}
    //     <br />
    //     Error: {this.state.errorMessage}
    //   </div>
    // );
  }
}

const container = document.querySelector('#root');
const root = createRoot(container);
root.render(<App />);
