import { InputHTMLAttributes } from "react";

interface InputeProps extends InputHTMLAttributes<HTMLInputElement> {

}

export default function FormInpute({...rest}: InputeProps) {
  return (
    <input {...rest} className="border border-gray-300 shadow-md focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 p-2 rounded-lg text-md " /> 
  )
}
