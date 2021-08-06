import './App.css';
import React from 'react';

import { BrowserRouter, Route, NavLink, Button } from 'react-router-dom';
import ADD from './Components/Ccomponent';
//import APP from './Components/Afcomponents';
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/css/bootstrap.css';

import {Navbar, Container} from 'react-bootstrap';
import logo from './Images/book2.jpeg';

class Employee extends React.Component {
  render() {
    return (
      <li className="employee">
        <div>
          <b>Full Name:</b> {this.props.fullName}
        </div>
        <div>
          <b>Gender:</b> {this.props.gender}
        </div>
      </li>
    );
  }
}
 
// EmployeeList Component
class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [
        { empId: 1, fullName: "Trump", gender: "Male" },
        { empId: 2, fullName: "Ivanka", gender: "Female" },
        { empId: 3, fullName: "Kushner", gender: "Male" }
      ]
    };
  }
 
  render() {
    // Array of <Employee>
    var listItems = this.state.employees.map(e => (
      <Employee fullName={e.fullName} gender={e.gender} />
    ));
    return (
        <ul className="employee-list">
           {listItems}
        </ul>
      );
  }
}
 
// Render
ReactDOM.render(<EmployeeList />, document.getElementById("employeelist1"));