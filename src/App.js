import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import rawData from './data.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: rawData,
    }
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Main allBeasts={this.state.allBeasts}/>
        <Footer />
      </div>
    );
  }
}
export default App;
