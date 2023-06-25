import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Product = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const handleDelete = () => {
        axios.delete('http://localhost:8000/api/product/' + id)

            .then(res => {
                console.log(res)
                navigate("/");
            })
            .catch(err => console.log(err))
    }
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/product/" + id)
      .then((res) => {
        console.log(res);
        setProduct(res.data);
        console.log(product);


      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <>
        <h1>{product.title}</h1>
        <h2>{product.price}</h2>
        <h3>{product.description}</h3>
        <Link to={"/product/" + product._id + "/edit"}>Edit</Link>
        <button onClick={() => handleDelete(product._id)}>Delete</button>
        <hr />
        <Link to={"/"}>Back</Link>  
        <hr />
        <Outlet />
      </>
    </div>
  );
};

export default Product;
