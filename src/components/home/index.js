import React from 'react';
import { Link } from 'react-router';

class Home extends React.Component {
  render() {
    return (
      <div className="jumbotron">
        <h1>Administrator</h1>
        <p>React and Redux Starter</p>
        <Link to="about" className="btn btn-primary btn-lg">Aprenda Mais</Link>
      </div>
    );
  }
}

export default Home;
