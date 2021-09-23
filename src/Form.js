import React from 'react';
import Form from 'react-bootstrap/Form';
import rawData from './data.json';

class FilterForm extends React.Component {
  filterBeast = event => {
    const numOfHorns = parseInt(event.target.value);
    let allBeasts = rawData;
    if (numOfHorns) {
      allBeasts = rawData.filter(beast => beast.horns === numOfHorns);
    }
    this.props.displayFilteredBeasts(allBeasts)
  }
  render() {
    return (
      <>
        <Form>
          <Form.Label>
            How Many Horns?
          </Form.Label>
          <select onChange={this.filterBeast}>
            {/* <option >Open this select menu</option> */}
            <option selected value="">All</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="100">One-Hundred</option>
          </select>
        </Form>
      </>
    )
  }
}

export default FilterForm;
