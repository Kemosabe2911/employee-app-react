import { UseFormRegister } from 'react-hook-form';
import React from 'react';
import { MutationDefinition, BaseQueryFn, FetchArgs, FetchBaseQueryError, FetchBaseQueryMeta } 
from '@reduxjs/toolkit/dist/query';
import { MutationTrigger } from '@reduxjs/toolkit/dist/query/react/buildHooks';


export type MainBarInputField = {
  description: string;
  buttonRequired: boolean;
  buttonDescription: string;
  buttonIcon: string;
  buttonNavigateUrl: string;
  setStatus?: React.Dispatch<React.SetStateAction<string>>;
  setText?: React.Dispatch<React.SetStateAction<string>>;
  text?: string;
  popUpRequired:boolean;
};

export type FileInputProps = {
  setFiles: React.Dispatch<any>;
  files: any;
  defaultFileText?: string;
  registerFunction?: UseFormRegister<any>;
  registerName?: string;
};

export type LogoutProps = {
  setLogoutModal: React.Dispatch<React.SetStateAction<boolean>>
}

export type FilesDragAndDropProps = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  setFiles: React.Dispatch<any>;
  file: any;
  registerFunction?: UseFormRegister<any>;
  registerName?: string;
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
export type Role={
  id:number;
  role:string;
}

export type ListComponentProps = {
  status: string;
  text?:string;
  EmployeeList?:any;
  RoleData:Array<Role>;
  DepartmentData: Array<Dropdown>;
  deleteEmployee:MutationTrigger<MutationDefinition<any, BaseQueryFn<string |
   FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'Employee', any, 'api'>>;
  setDelete:React.Dispatch<React.SetStateAction<boolean>>;
  deleteClicked:boolean;
  // eslint-disable-next-line no-unused-vars
  handleDeleteEmployee:(clickedEmployeeId:number)=>void;
  setSelectedId:React.Dispatch<React.SetStateAction<number>>;
  selectedId:number;
};

export type DropdownMenuProps = {
  dropdownData: Array<Dropdown>;
  registerFunction: UseFormRegister<any>;
  registerName: string;
  defaults?: string | number;

};


export type CreateEmployeeProps = {
  addEmployee :MutationTrigger<MutationDefinition<any, BaseQueryFn<string 
  | FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'Employee', any, 'api'>>
  addFile : MutationTrigger<MutationDefinition<any, BaseQueryFn<string | 
  FetchArgs, unknown, FetchBaseQueryError, {}, FetchBaseQueryMeta>, 'Employee', any, 'api'>>
  roleList:Array<Dropdown>;
  departmentList:Array<Dropdown>;
}

export type ButtonProps = {
  buttonClass:string;
  text: string;
  type: 'button' | 'submit' | 'reset';
  handleClick?: () => void;
}

export type DeleteModalProps = {
  selectedId: number;
  setDelete:React.Dispatch<React.SetStateAction<boolean>>;
  // eslint-disable-next-line no-unused-vars
  handleDeleteEmployee?:(clickedEmployeeId:number)=>void;
  primaryText:string;
  secondaryText:string;
};

export type StatusModalProps = {
  statusclicked: number;
};

export type AddFileRequestType = {
  name: string;
  file: any;
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

export type RoleDetailsApi = {
  id: number;
  role: string;
}

export type CreateEmployeeApiRequest = {
  age: number;
  city: string;
  department_id: number;
  email: string;
  name: string;
  role_id: number;
  state: string;
  street: string;
  username: string;
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
  id_proof: any;
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
    id_proof: any;
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

export type PopUpProps = {
  description: string
  popUpStyle: string
}

export type EmployeeDetailsProps = {
  data: {
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
    id_proof: any;
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
}

export type DepartmentListProps={
  department:DepartmentDetailsApi,
};