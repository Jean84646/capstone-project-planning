import React from 'react';
import bg from './../img/bg1.jpg';
import Header from './Header';
import Admin from './Admin';
import CourseList from './CourseList';
import Error404 from './Error404';
import { Switch, Route, Link } from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      masterCourseList: [{
        name: 'Basic Life Support (BLS)',
        description: 'BLS is a level of medical care which is used for victims of life-threatening illnesses or injuries until they can be given full medical care at a hospital. It can be provided by trained medical personnel, including emergency medical technicians, paramedics, and by qualified bystanders.',
        steps: [
          'Step 1: check pulse',
          'Step 2: 30 chest compressions',
          'Step 3: 2 breaths'
        ],
        id: 0
      },
      {
        name: 'Advanced Cardiovascular Life Support (ACLS)',
        description: 'ACLS refers to a set of clinical interventions for the urgent treatment of cardiac arrest, stroke and other life-threatening medical emergencies, as well as the knowledge and skills to deploy those interventions.',
        steps: [
          'Step 1: ',
          'Step 2: ',
          'Step 3: '
        ],
        id: 1
      },
      {
        name: 'pediatric advanced life support (PALS)',
        description: 'PALS is pediatric emergencies with a systematic approach to pediatric assessment, basic life support, PALS treatment algorithms, effective resuscitation, and team dynamics. The goal of the PALS Course is to improve the quality of care provided to seriously ill or injured children, resulting in improved outcomes.',
        steps: [
          'Step 1: ',
          'Step 2: ',
          'Step 3: '
        ],
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
          <Route component={Admin} />
          <Route exact path='/bls' component={() => <CourseList course={this.state.masterCourseList[0].name} />} />
          <Route exact path='/acls' component={() => <CourseList course={this.state.masterCourseList[1].name} />} />
          <Route exact path='/pals' component={() => <CourseList course={this.state.masterCourseList[2].name} />} />
          <Route component={Error404} />
        </Switch>
      </div>
    </div>
  );
}
}

export default App;
