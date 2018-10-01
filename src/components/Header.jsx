import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <style jsx>{`
        h1 {
          font-family: monospace;
          font-size: 5em;
          color: #FFF;
          text-align: center;
        }
        a {
          font-size: 20px;
          color: #FFF;
        }
        `}</style>
        <div>
          <h1>Emergency Response Review</h1>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/courses">Courses</Link>
        </div>
    </div>
  );
}

export default Header;
