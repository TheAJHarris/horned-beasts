import React from 'react';
import HornedBeast from './HornedBeast.js';


class Main extends React.Component {
  render() {
    return (
      <>
        <p>Gallery of Horns</p>
        {this.props.allBeasts.map((beast, idx) => (
          <HornedBeast
            key={idx}
            index={idx}
            title={beast.title}
            description={beast.description}
            image={beast.image_url}
          />

        ))}
      </>
    )
  }
}

export default Main;