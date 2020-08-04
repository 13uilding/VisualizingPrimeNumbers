import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Block from './components/Block';
import { Row } from 'reactstrap';

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Row offset>
        {arr.map((block, index) => <Block number={index+1} color={index%2 ? "green" : "brown"}></Block>)}
        {/* <Block number="1" color="green"></Block> */}
        {/* <Block number="2" color="brown"></Block>
        <Block number="1" color="green"></Block>
        <Block number="2" color="brown"></Block>
        <Block number="1" color="green"></Block>
        <Block number="2" color="brown"></Block>
        <Block number="1" color="green"></Block>
        <Block number="2" color="brown"></Block> */}

      </Row>
    </div>
  );
}

export default App;
