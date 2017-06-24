import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';
import Loading from '../loading/loading.component';

const Header = props => (
    <nav>
        <IndexLink to="/" activeClassName="active">Home</IndexLink>
        {" | "}
        <IndexLink to="/courses" activeClassName="active">Courses</IndexLink>
        {" | "}
        <IndexLink to="/about" activeClassName="active">About</IndexLink>
        <Loading interval={100} dots={20} />
    </nav>
);

export default Header;
