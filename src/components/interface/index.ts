export interface IProduct {
    id : string | undefined,
    title : string,
    description : string,
    imgurl : string,
    price : string,
    colors: string[],
    catogry :{
        name : string,
        imgurl : string,
    }
}