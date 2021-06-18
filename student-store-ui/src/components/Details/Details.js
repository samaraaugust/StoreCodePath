import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./Details.css"

export default function DetailsPage ()
{
    const { idNum } = useParams()
    const [product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    
    const addButton = event => {
        event.preventDefault();
    }
  
    const deleteButton = event => {
        event.preventDefault();
    }


    useEffect(() => {
        const fetchProduct = async () => {
            setIsLoading(true)
            try {
                const res = await axios.get(`http://localhost:3001/store/${idNum}`)
                const prod = res?.data?.productResponse
                if (prod)
                {
                    setProduct(prod)
                }
                else{
                    setError("Product Not Found")
                }
            }
            catch (err)
            {
                console.log(err)
                setError("Product Not Found")
            }
            setIsLoading(false)
        }
        fetchProduct()
    }, [idNum])

    const renderPostContent = () => {
        if (isLoading)
        {
            return <h1>Loading...</h1>
        }

        if (error)
        {
           return (
               <>
               <h1>Error</h1>
               <p className="error">{String.error}</p>
               </>
           )
        }
        return (
            <>
            <div className="everything">
            <div className="detailTitle">
                <h1>{product.name}</h1>
            </div>
            <div className="detailPicture">
                <img src={product.image} alt={"Picture of " + product.name}></img>
            </div>
            <div className="detailPrice">
                <h4>{"$" + product.price}</h4>
            </div>
            <div className="detailDesc">
                <h4>{"Description: " + product.description}</h4>
            </div>
            <div className="add2">
                    <form onSubmit={addButton}>
                        <button className="addBtn2">Add</button>
                    </form>
                </div>
                <div className="delete2">
                    <form onSubmit={deleteButton}>
                        <button className="deleteBtn2">Remove</button>
                    </form>
            </div>
            </div>
            </>
        )
    }

    return (
        <div className="detailPage">
            {renderPostContent()}
        </div>

    )
}