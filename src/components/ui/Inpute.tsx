import { InputHTMLAttributes } from "react";

interface InputeProps extends InputHTMLAttributes<HTMLInputElement> {

}

export default function FormInpute({...rest}: InputeProps) {
  return (
    <input {...rest} /> 
  )
}
