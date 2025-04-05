interface errorParms{
    MSG : string
}

export default function Errors({MSG}:errorParms) {
  return (
    <span className="text-red-900 text-sm block">{MSG}</span>
  )
}
