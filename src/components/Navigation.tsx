import React from 'react';
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Add Place</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
