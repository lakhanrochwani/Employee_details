import React from 'react';
import { Component } from 'react';

import EmployeeList from '../containers/employee-record-list';
import EmployeeDetail from '../containers/employee-detail';


export default class App extends Component {
  render(){
    return(
      <div>
        <EmployeeList />
        <EmployeeDetail />
      </div>
    )
  }
}
