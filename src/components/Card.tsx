import ArrowButtons from './ArrowButtons';
import {IEmployee} from '../interfaces/employee'

interface Props {
  employee: IEmployee
  }

  const Card: React.FunctionComponent<Props> = (props) => {
  const {id, name, title, email, picture, state} = props.employee;


  const cardStyle:React.CSSProperties = {
    boxShadow: "0 4px 14px 0 rgba(0, 0, 0, 0.2)",
    width: "385px",
    margin: "auto",
    padding: "15px",
    textAlign: "center"
  }

  const imageStyle:React.CSSProperties = {
    width:"50%", 
    borderRadius: "50%"
  }

    return (
       <div style={cardStyle} key={id}> 
        <img src={picture} alt={name} style={imageStyle}/>
        <h1>{name}</h1>
        <p >{title}</p>
        <p>{email}</p>
        <ArrowButtons  employee={props.employee} />
        </div>
        
    )
}

export default Card;
