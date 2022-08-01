import Button from 'react-bootstrap/Button'
import { Form  } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'
import {useState} from 'react'
import ProductCounter from './ProductCounter';
import ProductModal from './ProductModal';


const ProductItem = ({
    product,
    setDisplayModal,
    setActiveProduct,
    setCartProducts,
    cartProducts,
    displayModal,
    activeProduct,
 }) => {

    const [quantity, setQuantity] = useState(0);

    return <Card style={{
        width: '25%',
        float: 'left',
        minHeight: '450px'
    }}
        className='product-item'

    >
        <div style={{
            maxHeight: '220px',
            overflow: 'hidden'

        }}
            onClick={() => {
                setDisplayModal(true);
                setActiveProduct(product);
            }}
        >
            <Card.Img style={{
                width: '200px',
            }} src={product.photo} alt="" />
        </div>

        <Card.Body>
            <Card.Title>

                {product.name}
            </Card.Title>
            <p>$ {product.price}</p>
            <ProductCounter 
                quantity={quantity} 
                setQuantity={setQuantity}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                product={product}
            />
        </Card.Body>
        <ProductModal
          displayModal={displayModal}
          setDisplayModal={setDisplayModal}
          activeProduct={activeProduct}
          quantity={quantity}
          setQuantity={setQuantity}
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
          product={product}
        />
    </Card>

}


export default ProductItem;