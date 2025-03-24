interface ImageProps {
    imageUrl : string,
    alt : string ,
    className : string
}
export default function Image({imageUrl, alt, className}: ImageProps) {
  return (
    <>
        <img src={imageUrl} alt={alt} className={className} />
    </>
  )
}
