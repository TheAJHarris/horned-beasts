import React from 'react';
import HornedBeast from './HornedBeast.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Main extends React.Component {
  render() {
    return (
      <>
        <p>Gallery of Horns</p>
        <Row md = 'auto'>
          {this.props.allBeasts.map((beast, idx) => (
            <Col>
              <HornedBeast
                key={idx}
                index={idx}
                title={beast.title}
                description={beast.description}
                image={beast.image_url}
              />
            </Col>
          ))}
        </Row>
      </>
    )
  }
}

export default Main;