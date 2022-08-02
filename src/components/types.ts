import { UseFormRegister } from 'react-hook-form';
import React from 'react';

export type MainBarInputField = {
  description: string;
  buttonRequired: boolean;
  buttonDescription: string;
  buttonIcon: string;
  buttonNavigateUrl: string;
};

export type FileInputProps = {
  setFiles:React.Dispatch<any>;
  files:any;
  defaultFileText?:string;
  registerFunction?: UseFormRegister<any>;
  registerName?:string;
};

export type LogoutProps ={
  setLogoutModal:React.Dispatch<React.SetStateAction<boolean>>
}

export type FilesDragAndDropProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFiles: React.Dispatch<any>;
  file: any;
  registerFunction?: UseFormRegister<any>;
  registerName?:string;
};

export type InputFieldProps = {
  placeholder: string;
  type: string;
  registerFunction: UseFormRegister<any>;
  registerName: string;
  value: string | number;
};

export type LabelProps = {
  name: string;
};

export type Dropdown = {
  id: number;
  name: string;
};

export type DropdownMenuProps = {
  dropdown: Array<Dropdown>;
  registerFunction: UseFormRegister<any>;
  registerName: string;
  defaults?:string | number;
};

export type ButtonProps = {
  bgcolor: string;
  textcolor: string;
  bghover?: string;
  text: string;
  border?: string;
  type: 'button' | 'submit' | 'reset';
  onclick?: () => void;
}

export type DeleteModalProps = {
  setDelete:React.Dispatch<React.SetStateAction<boolean>>;
  clickedId:number;
}

// export type UpdateEmployeeProps={
//   employeeid:number;
// }

export type AddFileRequestType={
  name:string;
  file:any;
};

export type DepartmentDetailsApi = {
  id: number;
  name: string;
  department_details_id: number;
  Department: {
    id: number;
    department_room: string;
    department_code: string;
    website: string;
  }
}

  export type RoleDetailsApi={
    id:number;
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
  id: number;
  name: string;
  username: string;
  email: string;
  age: number;
  is_active: boolean;
  department_id: number;
  role_id: number;
  address_id: number;
  isAdmin: boolean;
  id_proof:any;
  Department:
  {
    id: number;
    name: string;
    department_details_id: number;
    Department: {
      id: number;
      department_room: string;
      department_code: string;
      website: string;
    }
  }
  Role: {
    id: number;
    role: string;
  }
  Address: {
    id: number;
    street: string;
    city: string;
    state: string;
  }
};

export type EmployeeDetailsApi =
  {
    id: number;
    name: string;
    username: string;
    email: string;
    age: number;
    is_active: boolean;
    department_id: number;
    role_id: number;
    address_id: number;
    isAdmin: boolean;
    id_proof:any;
    Department:
    {
      id: number;
      name: string;
      department_details_id: number;
      Department: {
        id: number;
        department_room: string;
        department_code: string;
        website: string;
      }
    },

    Role: {
      id: number;
      role: string;
    }
    Address: {
      id: number;
      street: string;
      city: string;
      state: string;
    }
  };

export type UpdateEmployeeForm = {
  employeeName: string,
  userName: string,
  age: number,
  street: string,
  city: string,
  state: string,
  role_id: number,
  department_id: number,
  status: boolean,
};

export type UpdateEmployeeReq = {
  id: number,
  body: any
};

// export type AuthenticationProps ={
//   setAuthentication:React.Dispatch<React.SetStateAction<string>>
// };