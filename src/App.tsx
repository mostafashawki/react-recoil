import React, { useEffect} from 'react';
import {useEmployees} from './components/hooks/useEmployees';
import Card from './components/Card';
import api from './api/employees';
import {IEmployee} from './interfaces/employee';
import Notifications from "react-notify-toast";
import './App.css';

const fetchEmployees = async () :Promise<IEmployee[]> => {
  const response = await api.get("/employees");
  return response.data as IEmployee[];
};

  const App: React.FunctionComponent = () => {
  const {employees, setEmployees} = useEmployees();

  useEffect(() => {
    const getEmployees = async () => {
      const employeesList:IEmployee[] = await fetchEmployees();
      if (employeesList) setEmployees(employeesList);
    };

    getEmployees();

  },[]);

  const renderEmployeesList = employees.map((employee:IEmployee) => {
    return (
      <Card key={employee.id} employee={employee}/>
    );
  });

  return (
    <main>
      <header>
        <h1>HR Management System</h1>
      </header>
      <div className="cards">
        {renderEmployeesList}
      </div>
      <Notifications />
      </main>
   
  );
}

export default App;
