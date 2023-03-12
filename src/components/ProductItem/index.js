import PropTypes from 'prop-types';
import React, {useRef} from 'react'
import {  MdAddShoppingCart } from "react-icons/md";

import './style.scss';

function ProductItem({
  // eslint-disable-next-line camelcase
  pictures, product_name, category_name, short_description, packaging, price
}){

  const cartIcon = useRef()
  
  const image = pictures[0].url

  const addItem = (event) => {
    event.preventDefault()
    
    setTimeout(function() {
      // changing the animation class on click
      cartIcon.current.classList.remove("animate__zoomIn");
      cartIcon.current.classList.add("animate__fadeOutUp")
    }, 200)

    setTimeout(function() {
      // changing the animation class on click
      cartIcon.current.classList.remove("animate__fadeOutUp");
      cartIcon.current.classList.add("animate__zoomIn")
    }, 1000)

}

  return (
    <div className='product-item__div'>
      <div className="product-item">
        <div className="product-item__image">
          <img src={image} alt={product_name} />
        </div>
        <div className="product-item__content">
          <h4>{product_name}</h4>
          <p><span>Catégorie:</span>  {category_name}</p>
          <p><span>Description:</span></p>
          <p>{short_description}</p>
          <p><span>Conditionnement:</span>  {packaging}</p>
          <p><span>Prix:</span>  {price} €</p>
        </div>
      </div>

      <button
        type="submit"
        className='product-item__button animate__animated'
        onClick={addItem}
        ref={cartIcon}
      > 
        <MdAddShoppingCart className='animate_animated animate__zoomIn'/>
      </button>
    </div>
  );
}

ProductItem.propTypes = {
  id : PropTypes.number.isRequired,
  pictures: PropTypes.array.isRequired,
  product_name: PropTypes.string.isRequired,
  category_name: PropTypes.string.isRequired,
  short_description: PropTypes.string.isRequired,
  packaging: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
};

export default ProductItem;
