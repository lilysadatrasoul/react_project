import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"


import product2 from "./assets/images/2.jpg"
import product3 from "./assets/images/3.jpg"
import product4 from "./assets/images/4.jpg"
import Header from "./Header"
import ProductCard from "./ProductCard"
import Footer from "./Footer"

function App() {
  return (
     <div dir="rtl">
        <Header/>
       
        <div className="container">
         <h2>محصولات</h2>
        <div className="products">
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>
         <ProductCard/>         
        </div>
        </div>

        <Footer/>

     </div>
    );
}

export default App;
