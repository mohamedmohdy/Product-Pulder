interface CircleColorsProps {
    color: string;
}

export default function CircleColors({color}: CircleColorsProps) {
  return (
    <span className={`block  w-5 h-5 rounded-full  cursor-pointer `} style={{backgroundColor : color}} />
  )
}
