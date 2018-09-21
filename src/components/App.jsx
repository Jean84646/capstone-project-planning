import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';

import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterKegList: [{}]
    };
  }

  render(){
  return (
    <div>
      <style jsx>{`
        body {
          font-family: monospace;
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container">
        <Header/>
      </div>
    </div>
  );
}
}

export default App;
