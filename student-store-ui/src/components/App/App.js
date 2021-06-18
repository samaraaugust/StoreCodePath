import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios";
import Home from "../Home/Home";
import './App.css';
import NavBar from "../NavBar/NavBar"
import DetailsPage from "../Details/Details";

function App() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
          try 
          {
            const res = await axios.get("http://localhost:3001/store");
            const products = res?.data?.products;
            if (products)
            {
                setProducts(products)
            }
          }
          catch(err)
          {
            console.log(err)
          }

        }
        
        fetchProducts();
    }, []);
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={
          <div className="everything">
          <div className="introMessage">
            <h1>Welcome! Find Your Merch!</h1>
            <p>We have all kinds of goodies. <br></br>
            Click on any of the items to start filling up your shopping cart.<br></br>
            Checkout whenever you're ready.
             </p>
          </div>
          <div className="about">
            <h1>About</h1>
            <p>The codepath student store offers great products at great prices from a great team and for a great cause.
              <br></br>
              We've searched far and wide for items that perk the interests of even the most eccentric students and decided to offer them all here in one place.
              <br></br>
              All proceeds go towards bringing high quality CS education to college students around the country.
            </p>
            <img src="https://student-store.surge.sh/static/media/giant_codepath.ce489369.svg" alt="CodePath logo"></img>
          </div>
          <Home products={products}/>
          </div>
        } />
        <Route path="/store/:idNum" element={<DetailsPage />} />
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
