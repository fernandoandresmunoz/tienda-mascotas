import Nav from 'react-bootstrap/Nav';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Button from 'react-bootstrap/Button';



const HeaderApp = ({
    cartProducts
}) => {


    const popover = (
        <Popover id="popover-basic" >
            <Popover.Header as="h3">Resumen de compra</Popover.Header>
            <Popover.Body>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Price</th>
                            <th>quantity</th>
                            <th>Subtotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cartProducts.map(p => {
                                return <tr>
                                    <td>{p.product.name}</td>
                                    <td> ${p.product.price}</td>
                                    <td>{p.quantity}</td>
                                    <td> ${p.product.price * p.quantity}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>

            </Popover.Body>
        </Popover>
    );




    return <Nav style={{
        backgroundColor: 'rgb(34,34,191,1.0)',
        height: '50px',
        marginBottom: '2em'
    }}>
        <div>
            <span style={{
                color: 'white',

            }}>Pet's shop</span>
        </div>
        <div style={{
            width: '80%'
        }}>

            <div style={{
                float: 'right'
            }}>
                {/* <input 
            style={{
              width: '300px'
            }} 
            placeholder='Buscador de productos y categorías'
            type="text" /> */}

                <OverlayTrigger trigger="click" placement="left" overlay={popover}>

                    <Button
                        style={{
                            marginLeft: '40px'
                        }}
                    >bolsa</Button>
                </OverlayTrigger>
            </div>

        </div>

    </Nav>
}


export default HeaderApp;