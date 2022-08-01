import './App.css';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';


import ProductItem from './ProductItem';
import HeaderApp from './HeaderApp';
import Button from 'react-bootstrap/Button';



function App() {


  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);

  const [displayModal, setDisplayModal] = useState(false)
  const [activeProduct, setActiveProduct] = useState();
  const [cartProducts, setCartProducts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);


  const loadDataOnlyOnce = () => {

    fetch('http://sva.talana.com:8000/api/product/').then(res => {
      return res.json();
    }).then(res => {
      setProducts(res);
    })
  }


  const loadCategories = () => {
    setActiveFilter(null)
    fetch('http://sva.talana.com:8000/api/product-category/').then(res => {
      return res.json()
    }).then(res => {
      setCategories(res);
    })
  }

  useEffect(loadDataOnlyOnce, []);
  useEffect(loadCategories, []);


  const cleanFilter = () => {
    setActiveFilter(null)
  }


  const productItems = () => {
    if (activeFilter != null) {

      return <div>
        {products.filter(p => p.category.id == activeFilter?.id).map(p => {
          return <ProductItem
            setDisplayModal={setDisplayModal}
            setActiveProduct={setActiveProduct}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
            product={p}
            displayModal={displayModal}
            activeProduct={activeProduct}
          />
        })}
      </div>
    } else {
      return <div>{products.map(p => {
        return <ProductItem
          setDisplayModal={setDisplayModal}
          setActiveProduct={setActiveProduct}
          setCartProducts={setCartProducts}
          cartProducts={cartProducts}
          product={p}
          displayModal={displayModal}
          activeProduct={activeProduct}
        />
      })} </div>
    }
  }


  const categoryItems = () => {
    return <div >
      <h3>Categorías</h3>
      <ListGroup>
        {categories.map(cat => {
          return <ListGroup.Item onClick={() => {
            setActiveFilter(cat);
          }}
            action active={activeFilter == cat}>{cat.name}</ListGroup.Item>
        })}
      </ListGroup>
    </div>
  }






  const CleanFilterButton = () => {
    if (activeFilter != null) {

      return <div style={{ float: 'right' }}>
        <Button onClick={() => {
          setActiveFilter(null)
        }}>clean filter</Button>
      </div>
    } else {
      return <></>
    }
  }

  return (
    <>
      <div>
        <HeaderApp
          cartProducts={cartProducts}
        />
      </div>


      <div style={{
        display: 'flex'
      }}>
        <div style={{
          width: '25%',
        }}>
          {categoryItems()}
        </div>
        <div style={{
          width: '80%'
        }}>

          <CleanFilterButton />

          <div>

            {productItems()}
          </div>
        </div>
      </div>





    </>
  );
}

export default App;
