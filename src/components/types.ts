/* eslint-disable no-unused-vars */
import { UseFormRegister, FieldValues } from 'react-hook-form';
import { string } from 'yup';

export type MainBarInputField = {
  description: string;
  buttonRequired: boolean;
  buttonDescription: string;
  buttonIcon: string;
  buttonNavigateUrl: string;
};
 export type SideBarInputField ={
  setDescriptionId: (arg1:string)=> void;
 };

export type InputFieldProps = {
  placeholder: string;
  type: string;
  registerFunction: UseFormRegister<FieldValues>;
  registerName: string;
  value:string | number;
};

export type LabelProps = {
  name: string;
};

export type DropdownMenuProps = {
  dropdown: Array<string>;
  registerFunction: UseFormRegister<FieldValues>;
  registerName: string;
  defaults:string | number;
};


export type ButtonProps = {
  bgcolor: string;
  textcolor: string;
  bghover: string;
  text: string;
  border: string;
  types: 'button' | 'submit' | 'reset';
  onclick?:()=>void;
}
// export type UpdateEmployeeProps={
//   employeeid:number;
// }
// export type ListComponentProps={
//   setId:(clickedId:number)=>void;
// }

export type DepartmentDetailsApi={  
  Id:number;
  name:string;
  department_details_id:number;
  Department:{
    Id:number;
    department_room:string;
    department_code:string;
    website:string;}
  }

export type EmployeeListApiResponse = {
  Id:number;
  name: string;
  Username: string;
  Email: string;
  age:number;
  isActive:boolean;
  department_id:number;
  role_id:number;
  address_id:number;
  isAdmin:boolean;
  Department:
  {
    Id:number;
  name:string;
  department_details_id:number;
  Department:{
    Id:number;
    department_room:string;
    department_code:string;
    website:string;}
  }
  
  Role:{
    Id:number;
    role:string;
  }
 Address:{
  Id:number;
  street:string;
  city:string;
  state:string;
 }
};

export type EmployeeDetailsApi = 
{
  Id:number;
  name: string;
  Username: string;
  Email: string;
  age:number;
  is_active:boolean;
  department_id:number;
  role_id:number;
  address_id:number;
  isAdmin:boolean;
  Department:
  {
    Id:number;
  name:string;
  department_details_id:number;
  Department:{
    Id:number;
    department_room:string;
    department_code:string;
    website:string;}
  }
  
  Role:{
    Id:number;
    role:string;
  }
 Address:{
  Id:number;
  street:string;
  city:string;
  state:string;
 }
};
// export type EmployeeDetailsApiPayload={
//   id:string;
// }