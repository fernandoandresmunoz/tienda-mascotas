import Modal from 'react-bootstrap/Modal';
import ProductCounter from './ProductCounter';


const ProductModal = ({
    displayModal,
    setDisplayModal,
    activeProduct,
    quantity,
    setQuantity,
    cartProducts,
    setCartProducts,
    product
}) => {
    return <div id="myModal" style={{
        display: displayModal ? 'block' : 'none'
    }} className="modal">

        <Modal.Dialog className="modal-content">
            <span className="close" onClick={() => {
                setDisplayModal(false);
            }}>&times;</span>
            <p>{activeProduct?.name}</p>
            <p>{activeProduct?.code}</p>
            <img style={{
                width: '200px'
            }}
                src={activeProduct?.photo} alt="" />
            <p>{activeProduct?.price}</p>

            <ProductCounter 
                quantity={quantity} 
                setQuantity={setQuantity}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
                product={product}
            />
            <p>{
                activeProduct?.description}</p>
        </Modal.Dialog>

    </div>
}


export default ProductModal;