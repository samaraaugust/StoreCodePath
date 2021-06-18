import "./Home.css"
import Product from "../Product/Product"

export default function Home({ products = [] }) {

    return (
      <div className="Home">
        <h1>Best Selling Products</h1>
          <div className="productList">
            {
                products.map(product => (
                    <div className="product-pre">
                      <Product product={product} key={product.idNum}/>
                    </div>
                ))
            }
          </div>
      </div>
    )
  }