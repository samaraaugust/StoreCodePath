import { Link } from "react-router-dom"
import "./Product.css"
export default function Product({ product = {} })
{
    const detailsPage = event => {
        event.preventDefault();  
    }
  
    const addButton = event => {
        event.preventDefault();
    }
  
    const deleteButton = event => {
        event.preventDefault();
    }

    return (
        <div className="section">
        <div className="productSection">
            <div className="productCover">
            <img className="prodImage" src={product.image} alt={"Picture of " + product.name}/>
            </div>
            <div className="productBody">
                <div className="productTitle">
                    <h1>{product.name}</h1> 
                </div>
                <div className="productPrice">
                    <h4>{"$" + product.price}</h4>
                </div>
            </div>
            <div className="btnSection">
                <div className="details">
                    <form onSubmit={detailsPage}>
                    <Link to={`/store/${product.idNum}`}><button className="detailsBtn">Details</button></Link>
                    </form>
                </div>
                <div className="add">
                    <form onSubmit={addButton}>
                        <button className="addBtn">Add</button>
                    </form>
                </div>
                <div className="delete">
                    <form onSubmit={deleteButton}>
                        <button className="deleteBtn">Remove</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}