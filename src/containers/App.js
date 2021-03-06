import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
// import logo from '../logo.svg';
import '../App.css';
import MenuContainer from './MenuContainer'
import CartContainer from './CartContainer'
import FilterContainer from './FilterContainer'
import SearchContainer from './SearchContainer'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1> */}
          <SearchContainer/>
        </header>
        <br/>
        <Container>
          <Row>
            <Col sm="3">
              <FilterContainer />
            </Col>
            <Col sm="6">
              <MenuContainer />
            </Col>
            <Col sm="3">
              <CartContainer />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;

