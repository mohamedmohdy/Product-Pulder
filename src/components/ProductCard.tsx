import Button from "./Button"
import Image from "./Image"
import { IProduct } from "./interface"
interface ProductCardProps {
    product : IProduct
}

export default function ProductCard({product}: ProductCardProps) {

    const {title , description , price} = product ;
  return (
    <div className="border">
         <Image imageUrl={product.imgurl}
          alt="nike product"
          className="rounded-md" />
         <h3>{title}</h3>
         <p>{description}</p>
         <div className="flex space-x-2 my-2">
            <span className="w-5 h-5 rounded-full bg-orange-500" />
            <span className="w-5 h-5 rounded-full bg-red-800" />
            <span className="w-5 h-5 rounded-full bg-yellow-300" />
         </div>
         <div className="flex justify-between items-center my-2">
            <span>{price}</span>
             <Image imageUrl="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
             alt="avatar nike"
             className="w-10 h-10 rounded-full"/>
         </div>
         <div className="flex space-x-2 text-white text-lg">
            <Button className="bg-sky-950" width="w-full">Edite</Button>
            <Button className="bg-red-800" width="w-full">remove</Button>
         </div>
         
    </div>
  )
}
