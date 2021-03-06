import React from 'react';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorites: 0,
    }
  }

  addFavorites = () => {
    this.setState({favorites: this.state.favorites+1});
    this.props.displayModal(this.props.title);
  }
  render() {
    return (
      <>
        <Card style={{ width: '18rem' }} onClick = {this.addFavorites}>
          <Card.Img variant="top" src={this.props.image}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
            favorites: {this.state.favorites}
            </Card.Text>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default HornedBeast;