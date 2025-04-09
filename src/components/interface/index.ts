export interface IProduct {
    id? : string | undefined,
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

export interface IinputeModel {
    id : string ,
    name : "title" | "description" | "imgurl" | "price" ,
    label : string,
    type : string,
}

export interface ISelectModel {
    id : string,
    name : string,
    imgurl : string,
}