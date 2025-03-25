import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode,
    className: string,
    width: "w-full" | "w-fit",
}
export default function Button({ children , className , width , ...rest }: ButtonProps) {
  return (
    <button className={` ${className} ${width} p-2 rounded-md  `} {...rest}> 
        {children}
    </button>
  )
}
