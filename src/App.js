import React from 'react';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import rawData from './data.json';
import SelectedBeast from './SelectedBeast';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allBeasts: rawData,
      selectedBeast: {},
      showModal: false,
    }
  }
  handleClose = () => {
    this.setState({
      showModal: false,
    })
  }
  displayModal = (nameOfBeast) => {
    const selectedBeast = rawData.find(beast => beast.title === nameOfBeast);
    this.setState({
      selectedBeast: selectedBeast,
      showModal: true,
    })
  }
  displayFilteredBeasts= (allBeasts) => {
    this.setState ({
      allBeasts: allBeasts,
    })
  }

  render() {
    return (
      <div className="App">

        <Header />
        <Main 
          allBeasts={this.state.allBeasts} 
          displayModal= {this.displayModal}
          displayFilteredBeasts= {this.displayFilteredBeasts}
        />
        <SelectedBeast 
          selectedBeast={this.state.selectedBeast} 
          show={this.state.showModal}
          handleClose={this.handleClose}
        />
        <Footer />
      </div>
    );
  }
}
export default App;
