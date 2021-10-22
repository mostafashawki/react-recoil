import { useRecoilState } from "recoil";
import { employeesState} from "../../atom";
import {IEmployee} from '../../interfaces/employee';

export const useEmployees = () => {
    const [employees, setEmployees] = useRecoilState<IEmployee[]>(employeesState);
    return {employees, setEmployees}
}
