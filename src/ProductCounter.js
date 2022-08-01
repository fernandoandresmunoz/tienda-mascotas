import Button from 'react-bootstrap/Button'


const ProductCounter = ({
    quantity,
    setQuantity,
    cartProducts,
    setCartProducts,
    product
    }) => {
    return <>
        <Button variant='light '
            onClick={() => {
                if (quantity > 0) {
                    setQuantity(quantity - 1)
                }
            }}
        >-</Button>
        <span style={{
            marginLeft: '15px',
            marginRight: '15px'
        }}>
            {quantity}
        </span>

        <Button variant='light' onClick={() => {
            setQuantity(quantity + 1);
        }}>+</Button>
        <Button disabled={quantity > 0 ? false : true}
            onClick={() => {
                if (quantity > 0) {

                    setCartProducts([...cartProducts, { 'product': product, quantity: quantity }]);
                    setQuantity(0);
                }
            }}>agregar</Button>
    </>
}


export default ProductCounter;