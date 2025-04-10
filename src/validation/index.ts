export const productValidation = (IProduct: {title: string ; description: string ; imgurl: string ; price: string }) => {
    const errors :{title: string;description: string; imgurl: string; price: string} = {
        title : "",
        description : "",
        imgurl : "",
        price : ""
    } 

    const regularImage = /^(https?|ftp|ftb):\/\//.test(IProduct.imgurl);


    if(!IProduct.title.trim() || IProduct.title.length <  10 || IProduct.title.length > 50){
        errors.title = "title is required and should be between 10 to 50 characters"
    }
    if(!IProduct.description.trim() || IProduct.description.length <  10 || IProduct.description.length > 200){
        errors.description = "description is required and should be between 10 to 200 characters"
    }
    if(!IProduct.imgurl.trim()  || !regularImage){
        errors.imgurl = "imgurl is required and should be a valid URL"
    }
    const price = parseFloat(IProduct.price.replace('$', '').trim()); // إزالة الـ "$" إذا كانت موجودة وتحويلها إلى رقم
    //!  لازم تفهم الكود دا لسا مكتبتوش عندي  
    if (!IProduct.price.trim() || isNaN(price) || price <= 0) {
        // لو السعر فاضي او مش رقم او لو اقل من الصفر 
        errors.price = "Price is required and should be a valid positive number.";
    } else {
        IProduct.price = `$${price}`; // إضافة الـ "$" بعد الرقم
    }


    return errors ; 
};
