import  React,{Component} from "react";
import {connect} from "react-redux";

class EmployeeDetail extends Component{
  render(){
    if(!this.props.employee){
      return <div>Select a Employee name to know details</div>;

    }

  return(
    <div>
    <h3>Details for:</h3>
    <div>Name:{this.props.employee.name}</div>
    <div>Designation:{this.props.employee.position}</div>
    <div>Wage:{this.props.employee.salary}</div>
    <div>Office:{this.props.employee.location}</div>
    </div>

  );
}
}
function mapStateToProps(state){
  return{
  employee:state.activeEmployee
};
}
export default connect(mapStateToProps)(EmployeeDetail);
