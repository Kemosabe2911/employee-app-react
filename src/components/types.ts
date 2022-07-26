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
};

export type LabelProps = {
  name: string;
};

export type DropdownMenuProps = {
  dropdown: Array<string>;
  registerFunction: UseFormRegister<FieldValues>;
  registerName: string;
};

export type ButtonProps = {
  bgcolor: string;
  textcolor: string;
  bghover: string;
  text: string;
  border: string;
  types: 'button' | 'submit' | 'reset';
}
