/* eslint-disable no-unused-vars */
import { UseFormRegister, FieldValues } from 'react-hook-form';

export type MainBarInputField = {
  description: string;
};
 export type SideBarInputField ={
  setDescriptionId: (arg1:string)=> void;
 };

export type InputFieldProps = {
  placeholder: string;
  type: string;
  registerFunction: UseFormRegister<FieldValues>;
  registerName: string;
  value:string;
};

export type LabelProps = {
  name: string;
};
export type Dropdown={
  Id:number;
  name:string;
}

export type DropdownMenuProps = {
  dropdown:Array<Dropdown>;
  registerFunction: UseFormRegister<FieldValues>;
  registerName: string;
  defaults?:string;
};

export type ButtonProps = {
  bgcolor: string;
  textcolor: string;
  bghover: string;
  text: string;
  border: string;
  type: 'button' | 'submit' | 'reset';
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

  export type RoleDetailsApi={
    Id:number;
    role:string;
  }

export type CreateEmployeeApiRequest={
    age:number;
    city:string;
    department_id:number;
    email:string;
    name:string;
    role_id:number;
    state:string;
    street:string;
    username:string;
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
  Department:{
    Id:number;
  name:string;
  department_details_id:number;
  Department:{
    Id:number;
    department_room:string;
    department_code:string;
    website:string;}
  },

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
