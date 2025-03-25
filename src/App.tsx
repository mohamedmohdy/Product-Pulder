import ProductCard from './components/ProductCard'
import {ProductList} from './components/data/ProductList'

function App() {

  const renderProductList = ProductList.map((product) => {
    return (
    <ProductCard key={product.id} product={product} />
  )
  })

  return (
    <div className='container mx-auto'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6 border-2 '>
       {renderProductList}
      </div>
    </div>
  )
}

export default App