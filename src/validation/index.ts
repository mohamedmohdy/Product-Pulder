export const productValidation = (IProduct: {title: string ; description: string ; imgurl: string ; price: string }) => {
    const errors :{title: string;description: string; imgurl: string; price: string} = {
        title : "",
        description : "",
        imgurl : "",
        price : ""
    } 

    const regularImage = /^ftb.*?<img\s+[^>]*src=["'](https?|ftp|ftb):\/\//.test(IProduct.imgurl);


    if(!IProduct.title.trim() || IProduct.title.length <  10 || IProduct.title.length > 50){
        errors.title = "title is required and should be between 10 to 50 characters"
    }
    if(!IProduct.description.trim() || IProduct.description.length <  10 || IProduct.description.length > 200){
        errors.description = "description is required and should be between 10 to 200 characters"
    }
    if(!IProduct.imgurl.trim()  || !regularImage){
        errors.imgurl = "imgurl is required and should be a valid URL"
    }
    if(!IProduct.price.trim() || isNaN(Number(IProduct.price)) || Number(IProduct.price) <= 0){
        errors.price = "price is required and should be a positive number"
    }


    return errors ; 
};
