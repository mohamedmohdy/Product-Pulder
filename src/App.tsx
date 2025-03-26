import React, { useState } from 'react'
import ProductCard from './components/ProductCard'
import {inputeModel, ProductList} from './components/data/ProductList'
import Modal from './components/ui/modal'
import Button from './components/Button'
import FormInpute from '../src/components/ui/Inpute'
import { IProduct } from './components/interface'

function App() {
    const [isOpen, setIsOpen] = useState(false)
    const [product , setProduct] = useState<IProduct>({
      title : '',
      description : '',
      imgurl : '',
      price : '',
      colors : [],
      catogry : {
        name : '',
        imgurl :'',
      }
    })


    //**TODO */ _____________ Modal handler _____________
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

    //**TODO */ _____________ inpute handler _____________

    function onchangehandler(e:React.ChangeEvent<HTMLInputElement>){
      setProduct({
        ...product ,
        [e.target.name] : e.target.value
      })   
    }

    //**TODO */ _____________ rendering _____________

  const renderProductList = ProductList.map((product) => {
    return (
    <ProductCard key={product.id} product={product} />
  )
  })
  const renderFormInput = inputeModel.map((inpute)=>{
    return(
      <div className='flex flex-col space-y-2' key={inpute.id}>
        <label htmlFor={inpute.id}>{inpute.label}</label>
        <FormInpute id={inpute.id} name={inpute.name} type={inpute.type} value={product[inpute.name]} onChange={onchangehandler} />
      </div>
    )
  })

  console.log(product);
  

  return (
    <div className='container mx-auto'>
      <Button width='w-full' className='bg-indigo-700 text-white font-bold' onClick={openModal}>Add Product</Button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 border-2 '>
       {renderProductList}
      </div>
      
        <Modal isOpen={isOpen} closeModal={closeModal} title="Edite product"  >
        <div className='flex flex-col space-x-2 space-y-2'>
          <div className='space-y-4'>
          {renderFormInput}
          <Button width='w-full' className='bg-indigo-700 text-white font-bold'>submited</Button>
          <Button width='w-full' className='bg-gray-300 hover:bg-gray-600 text-white font-bold ease-in duration-300'>Cancel</Button>
          </div>
         
        </div>
        </Modal>
      
      
    </div>
  )
}

export default App