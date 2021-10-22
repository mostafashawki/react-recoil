import {useEmployees} from './hooks/useEmployees';
import {IEmployee } from '../interfaces/employee';
import api from '../api/employees';
import { notify } from "react-notify-toast";

interface Props {
  employee:IEmployee;
}

enum States {
  ADDED = 'Added',
  IN_CHECK = 'In-check',
  APPROVED = 'Approved',
  ACTIVE = 'Active',
  INACTIVE = 'Inactive'
}

const ArrowButtons: React.FunctionComponent<Props> = (props) => {
  const {state} = props.employee;
  const arrowButtonStyle = (buttonState:string) :React.CSSProperties => {
    return {
    fontSize: ".85em",
    display: "inline-block",
    position: "relative",
    color:  `${state === buttonState ? 'white' : 'grey'}`,
    border: "none",
    background: "none",
    padding:  '0',
    cursor: "pointer",
    WebkitFilter: "drop-shadow(3px 3px 3px rgba(50, 50, 50, 0.35))",
    WebkitTransform: "translateZ(0)",

  }};

  const arrowStyle = (buttonState:string) :React.CSSProperties => {
    return {
      display: "block",
      float: "left",
      width: "0",
      height: "0",
      borderTop: "25px solid transparent",
      borderBottom: "25px solid transparent",
      borderLeft: `${buttonState === States.INACTIVE ? '0': '20px'} solid ${state === buttonState ? 'black' : '#D3D3D3'}`,
      transition: "all 0.2s",
   
  }};

  const labelStyle = (buttonState:string) :React.CSSProperties => {
    return {
    
      display: "inline-block",
      height: "50px",
      lineHeight: "50px",
      padding: "0 .5em",
      float: "left",
      backgroundColor: ` ${state === buttonState ? 'black' : '#D3D3D3'}`,
      transition: "all 0.2s",
 
}};

  const {employees, setEmployees} = useEmployees();

  const updateEmployeesHandler = async (employee:IEmployee, newState:string) => {
    const editedEmployee = {...employee};
    editedEmployee.state =  newState
    const response = await api.put(`/employees/${employee.id}`, editedEmployee);
    if (response.status === 200) {
      notify.show("Updated! 🙂", "success");
      setEmployees([
        ...employees.map((elem:IEmployee) => {
          if(elem.id === employee.id)
             return {...elem, state:newState}
          return elem
      })
      ]);
    }else{
      notify.show("Oops, something went wrong! 😕", "error");
    }
    
  };

  return (
    <div style={{display:"flex", border:"2px solid black", backgroundColor:'#DCDCDC', WebkitFilter: "drop-shadow(3px 3px 3px rgba(50, 50, 50, 0.35))"}}>
      <a style={arrowButtonStyle(States.ADDED)} href="#" onClick={() => updateEmployeesHandler(props.employee, States.ADDED)}>
        <span style={labelStyle(States.ADDED)}>{States.ADDED}</span>
        <span style={arrowStyle(States.ADDED)}></span>
      </a>
      <a style={arrowButtonStyle(States.IN_CHECK)} href="#" onClick={() => updateEmployeesHandler(props.employee, States.IN_CHECK)}>
        <span style={labelStyle(States.IN_CHECK)}>{States.IN_CHECK}</span>
        <span style={arrowStyle(States.IN_CHECK)}></span>
      </a>
      <a style={arrowButtonStyle(States.APPROVED)} href="#" onClick={() => updateEmployeesHandler(props.employee, States.APPROVED)}>
        <span style={labelStyle(States.APPROVED)}>{States.APPROVED}</span>
        <span style={arrowStyle(States.APPROVED)}></span>
      </a>
      <a style={arrowButtonStyle(States.ACTIVE)} href="#" onClick={() => updateEmployeesHandler(props.employee, States.ACTIVE)}>
        <span style={labelStyle(States.ACTIVE)}>{States.ACTIVE}</span>
        <span style={arrowStyle(States.ACTIVE)}></span>
      </a>
      <a style={arrowButtonStyle(States.INACTIVE)} href="#" onClick={() => updateEmployeesHandler(props.employee, States.INACTIVE)}>
        <span style={labelStyle(States.INACTIVE)}>{States.INACTIVE}</span>
        <span style={arrowStyle(States.INACTIVE)}></span>
      </a>
      </div>
  );
}

export default ArrowButtons;