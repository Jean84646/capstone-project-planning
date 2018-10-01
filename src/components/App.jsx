import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import CourseList from './CourseList';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCourseList: [{
        name: 'Basic Life Support (BLS)',
        description: 'BLS is a level of medical care which is used for victims of life-threatening illnesses or injuries until they can be given full medical care at a hospital. It can be provided by trained medical personnel, including emergency medical technicians, paramedics, and by qualified bystanders.',
        id: 0
      },
      {
        name: 'Advanced Cardiovascular Life Support (ACLS)',
        description: 'ACLS refers to a set of clinical interventions for the urgent treatment of cardiac arrest, stroke and other life-threatening medical emergencies, as well as the knowledge and skills to deploy those interventions.',
        id: 1
      },
      {
        name: 'pediatric advanced life support (PALS)',
        description: 'PALS is pediatric emergencies with a systematic approach to pediatric assessment, basic life support, PALS treatment algorithms, effective resuscitation, and team dynamics. The goal of the PALS Course is to improve the quality of care provided to seriously ill or injured children, resulting in improved outcomes.',
        id: 2
      }
    ]
    };
  }

  render(){
  return (
    <div>
      <style jsx>{`
        body {
          color: #FFF;
          font-family: monospace;
          background-image: url(${bg});
          background-size: cover;
          background-repeat: no-repeat;
        }
        `}</style>
      <div className="container">
        <Header/>
        <Switch>
          <Route exact path='/' render={()=><CourseList courseList={this.state.masterCourseList}/>} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}
}

export default App;
