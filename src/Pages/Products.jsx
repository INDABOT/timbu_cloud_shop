import ProductList from "../Components/ProductList/ProductList"
import Header from "../Layout/Header/Header"
import Navbtn from "../Layout/Navbtn/Navbtn"
import Footer from "../Layout/Footer/Footer"

const Products = () => {
  return (
    <div  >
        <Header />
        <ProductList />
        <Navbtn />
        <Footer />
    </div>
  )
}

export default Products