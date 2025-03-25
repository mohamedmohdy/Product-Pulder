import Button from "./Button"
import Image from "./Image"
import { IProduct } from "./interface"
import { textSlice } from "./utilities/functions";
interface ProductCardProps {
    product : IProduct
}

export default function ProductCard({product}: ProductCardProps) {

    const {title , description , price , catogry , colors } = product ;
  return (
    <div className="max-w-sm lg:max-w-lg mx-auto md:mx-0 border">
         <Image imageUrl={product.imgurl}
          alt="nike product"
          className="rounded-md" />
         <h3 className="font-bold">{title}</h3>
         <p>{textSlice(description)}</p>
         <div className="flex space-x-2 my-2">
            <span className="w-5 h-5 rounded-full bg-orange-500" />
            <span className="w-5 h-5 rounded-full bg-red-800" />
            <span className="w-5 h-5 rounded-full bg-yellow-300" />
         </div>
         <div className="flex justify-between items-center my-2">
            <span className="text-indigo-700 font-bold ">{price}</span>
             <Image imageUrl={catogry.imgurl}
             alt={catogry.name}
             className="w-10 h-10 rounded-full"/>
         </div>
         <div className="flex space-x-2 text-white text-lg">
            <Button className="bg-indigo-700" width="w-full">Edite</Button>
            <Button className="bg-red-800" width="w-full">remove</Button>
         </div>
         
    </div>
  )
}