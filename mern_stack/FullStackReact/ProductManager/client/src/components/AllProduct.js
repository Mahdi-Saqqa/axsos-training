import axios from 'axios'
import { useState,useEffect } from 'react' 
import { Link } from 'react-router-dom'


const AllProduct = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            console.log(res)
            setProducts(res.data)
        })
        .catch(err => console.log(err))},[])




  return (
    <div>
        <h1>All Product</h1>
        <Link to="/product/new">Add Product</Link>
{        products.map((product, idx) => {
            return <><Link to={"/product/"+product._id} key={idx}>{product.title}</Link><hr/></>
        })}
    </div>  
  )
}

export default AllProduct