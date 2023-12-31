import React from 'react'

import { Link } from 'react-router-dom'

function Product(props) {
  // eslint-disable-next-line react/prop-types
  const { image, name } = props
  return (
    <Link to="/product">
      <img src={image} alt="referencia del producto" />
      <h2>{name}</h2>
      <button className="buy-button">comprar</button>
    </Link>
  )
}

export default Product
