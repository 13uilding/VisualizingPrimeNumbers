import React from 'react';
import { Jumbotron, Button, Form } from 'reactstrap';
import MyForm from './MyForm';

const Header = (props) => {
  return (
    <div>
      <Jumbotron>
        <h1 className="display-3">Prime Visualization</h1>
        <p className="lead">I was working on a HackerRank question dealing with prime numbers. The problem suggested that the final result should be O(&#8730;n). I had a hard time visualizing why this is the case, so I decided to create a basic web application to geometrically show why that is the case.</p>
        <hr className="my-2" />
        <MyForm></MyForm>
      </Jumbotron>
    </div>
  )
}

export default Header;


//<link href="https://www.hackerrank.com/challenges/ctci-big-o/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=miscellaneous">