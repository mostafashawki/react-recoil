import { atom } from "recoil";
import {IEmployee} from './interfaces/employee'

export const employeesState = atom({
    key: 'employeesState',
    default: [] as IEmployee[]
  });