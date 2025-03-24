import { v4 as uuid } from 'uuid';
import { IProduct } from '../interface';




export const ProductList : IProduct[] = [
   {
         id : uuid(),
         title : "2022 Genesis GV70",
         description : "As luxury brands go, South Korea’s Genesis is stil... As luxury brands go, South Korea’s Genesis is stil... As luxury brands go, South Korea’s Genesis is stil...",
         imgurl : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
         price : "200$",
         colors : ["orange-500", "red-800", "yellow-300"],
         catogry : {
              name : "nike",
              imgurl : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
         }
    },
    {
        id : uuid(),
        title : "2022 Genesis GV72",
        description : "As luxury brands go, South Korea’s Genesis is stil... As luxury brands go, South Korea’s Genesis is stil... As luxury brands go, South Korea’s Genesis is stil...", 
        imgurl : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        price : "400$",
        colors : ["orange-500", "red-800", "yellow-300"],
        catogry : {
            name : "nike",
            imgurl : "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
   }

]