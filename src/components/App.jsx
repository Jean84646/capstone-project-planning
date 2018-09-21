import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import Error404 from './Error404';
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
        <Switch>
          <Route exact path='/' render={()=><BeerList />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}
}

export default App;
