import React, { FormEvent, useLayoutEffect, useState } from "react";
import { v4 as uuid } from 'uuid';
import ProductCard from "./components/ProductCard";
import {
  colors,
  inputeModel,
  ProductList,
} from "./components/data/ProductList";
import Modal from "./components/ui/modal";
import Button from "./components/Button";
import FormInpute from "../src/components/ui/Inpute";
import { IProduct } from "./components/interface";
import { productValidation } from "./validation";
import Errors from "./components/Errors";
import CircleColors from "./components/ui/CircleColors";

function App() {
  const dataObject = {
    title: "",
    description: "",
    imgurl: "",
    price: "",
    colors: [],
    catogry: {
      name: "",
      imgurl: "",
    },
  };

  //**TODO */ _____________ states _____________

  const [isOpen, setIsOpen] = useState(false);
  const [products, setProducts] = useState<IProduct[]>(ProductList);
  const [product, setProduct] = useState<IProduct>(dataObject);
  const [formErrors, setFormErrors] = useState({
    title: "",
    description: "",
    imgurl: "",
    price: "",
  });
  const [temp, setTemp] = useState<string[]>([]); //**Todo store date in aray ---> tecnec store prev data */
  console.log(temp);

  //**TODO */ _____________ Modal handler _____________

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  //**TODO */ _____________ Modal handler _____________

  //**TODO */ _____________  handler _____________

  function onchangehandler(e: React.ChangeEvent<HTMLInputElement>) {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
    setFormErrors({
      ...formErrors,
      [e.target.name]: "",
    });
  }

  function submitedHandler(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    const errors = productValidation({
      imgurl: product.imgurl,
      title: product.title,
      description: product.description,
      price: product.price,
    });
    console.log(errors);

    const hasErrorsMsg = Object.values(errors).some((value) => value !== "");
    if (hasErrorsMsg) {
      setFormErrors(errors);
      return;
    }

    setProducts((pre)=>[ {...product,id: uuid(), colors: temp} , ...pre,]);
    console.log(product);

    setProduct(dataObject);
    closeModal();
    
  }

  function displayProductHandler(): void {
    console.log(product);
  }

  function cancelHandler(): void {
    setProduct(dataObject);
    closeModal();
  }
  //**TODO */ _____________  handler _____________

  //**TODO */ _____________ rendering _____________

  const renderProductList = products.map((product) => {
    return <ProductCard key={product.id} product={product} />;
  });
  const renderFormInput = inputeModel.map((inpute) => {
    return (
      <div className="flex flex-col space-y-2" key={inpute.id}>
        <label htmlFor={inpute.id}>{inpute.label}</label>
        <FormInpute
          id={inpute.id}
          name={inpute.name}
          type={inpute.type}
          value={product[inpute.name]}
          onChange={onchangehandler}
        />
        {formErrors[inpute.name] && <Errors MSG={formErrors[inpute.name]} />}
      </div>
    );
  });

  const renderColors = colors.map((colors) => (
    <CircleColors
      color={colors}
      key={colors}
      onClick={() => {
        if (temp.includes(colors)) {
          setTemp((prev) => prev.filter((item) => item !== colors)); //**TODO DELET COLOR IN TEMP */
          return;
        }
        setTemp((prev) => [...prev, colors]); //**todo state can return functions */
      }}
    />
  ));
  //**TODO */ _____________ rendering _____________

  return (
    <div className="container mx-auto">
      <Button
        width="w-full"
        className="bg-indigo-700 text-white font-bold"
        onClick={openModal}
      >
        Add Product
      </Button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 border-2 ">
        {renderProductList}
      </div>

      <Modal isOpen={isOpen} closeModal={closeModal} title="Edite product">
        <div className="flex flex-col space-x-2 space-y-2">
          <form className="space-y-4" onSubmit={submitedHandler}>
            {renderFormInput}
            <div className="flex  space-x-3 pb-2">{renderColors}</div>
            <div className="flex flex-wrap ">
              {temp.map((colors) => (
                <span
                  className=" space-x-1 mr-2 p-1 m-1  rounded-md"
                  key={colors}
                  style={{ backgroundColor: colors, color: "white" }}
                >
                  {colors}
                </span>
              ))}
            </div>

            <Button
              width="w-full"
              className="bg-indigo-700 text-white font-bold"
              onClick={displayProductHandler}
            >
              submited
            </Button>
            <Button
              width="w-full"
              className="bg-gray-300 hover:bg-gray-600 text-white font-bold ease-in duration-300"
              onClick={cancelHandler}
            >
              Cancel
            </Button>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default App;
