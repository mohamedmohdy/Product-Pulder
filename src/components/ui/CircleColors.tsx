interface CircleColorsProps extends React.HTMLAttributes<HTMLSpanElement> { 
    color: string;
}

export default function CircleColors({color , ...reset}: CircleColorsProps) {
  return (
    <span className={`block  w-5 h-5 rounded-full  cursor-pointer `} style={{backgroundColor : color}} {...reset} />
  )
}
