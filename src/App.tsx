import { useState } from 'react'
import ProductCard from './components/ProductCard'
import {ProductList} from './components/data/ProductList'
import Modal from './components/ui/modal'
import Button from './components/Button'

function App() {
    let [isOpen, setIsOpen] = useState(false)


    // _____________ Modal handler _____________
  
    function closeModal() {
      setIsOpen(false)
    }
  
    function openModal() {
      setIsOpen(true)
    }

  const renderProductList = ProductList.map((product) => {
    return (
    <ProductCard key={product.id} product={product} />
  )
  })

  return (
    <div className='container mx-auto'>
      <Button width='w-full' className='bg-indigo-700 text-white font-bold' onClick={openModal}>Add Product</Button>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 border-2 '>
       {renderProductList}
      </div>
      
        <Modal isOpen={isOpen} closeModal={closeModal} title="Edite product"  >
        <div className='flex space-x-2'>
          <Button width='w-full' className='bg-indigo-700 text-white font-bold'>submited</Button>
          <Button width='w-full' className='bg-gray-300 hover:bg-gray-600 text-white font-bold ease-in duration-300'>Cancel</Button>
        </div>
        </Modal>
      
      
    </div>
  )
}

export default App