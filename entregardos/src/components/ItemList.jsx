import React from 'react'

const ItemList = ( {productos} ) => {
  return (
    <div>
      <h2>Productos</h2>

      <div className='productos'>
        { productos.map((prod) => <h2 key={prod.id}>{prod.titulo}</h2>) } 
      </div>
    </div>
  )
}

export default ItemList
