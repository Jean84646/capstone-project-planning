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
          <Link to='/'>Home</Link> | <Link to='/admin'>Admin</Link> |  <Link to='/bls'>BLS</Link> | <Link to='/acls'>ACLS</Link> | <Link to='/pals'>PALS</Link>
        </div>
    </div>
  );
}

export default Header;
