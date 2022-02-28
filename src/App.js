import "./App.css"
import logo from "./assets/images/1.png"
import product1 from "./assets/images/1.jpg"
import product2 from "./assets/images/2.jpg"
import product3 from "./assets/images/3.jpg"
import product4 from "./assets/images/4.jpg"

function App() {
  return (
     <div dir="rtl">
       <div className="header">
            <img src={logo} alt="پاساژ" className="logophoto"/>
            <input type="search" id="search" name="search" placeholder="کالای مورد نظر خود را جستجو کنید"/>
            <input type="submit" value="جستجو" id="submit"/>
       </div>
        <div class="navbar">
           <div className="dropdown">
               <button className="dropbtn">کالای دیجیتال 
                <i className="fa fa-caret-down"></i>
               </button>
               <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
               </div>
            </div>
           <div className="dropdown">
               <button className="dropbtn">مد و پوشاک 
                <i className="fa fa-caret-down"></i>
               </button>
               <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
               </div>
            </div>
           <div className="dropdown">
               <button className="dropbtn">آرایشی و بهداشتی 
                <i className="fa fa-caret-down"></i>
               </button>
               <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
               </div>
            </div>
        </div>

        <div className="products">
           <div className="productName">
              <img src={product1} alt="" />
              <div className="product_title">
                 <p>گوشی موبایل شیائومی  </p>
                 <p>
                 10,750,000 تومان
                 </p>
              </div>
              <div>
                 <button className="btn" > اضافه کردن به سبد خرید</button>
              </div>
           </div>
           <div className="productName">
              <img src={product2} alt="" />
              <div className="product_title">
                 <p>گوشی موبایل سامسونگ  </p>
                 <p>
                 5,550,000 تومان
                 </p>
              </div>
              <div>
                 <button className="btn" > اضافه کردن به سبد خرید</button>
              </div>
           </div>
           <div className="productName">
              <img src={product3} alt="" />
              <div className="product_title">
                 <p>گوشی موبایل هاویی   </p>
                 <p>
                 13,750,000 تومان
                 </p>
              </div>
              <div>
                 <button className="btn" > اضافه کردن به سبد خرید</button>
              </div>
           </div>
           <div className="productName">
              <img src={product4} alt="" />
              <div className="product_title">
                 <p>گوشی موبایل اچ تی سی   </p>
                 <p>
                 9,375,000 تومان
                 </p>
              </div>
              <div>
                 <button className="btn" > اضافه کردن به سبد خرید</button>
              </div>
           </div>
         
        </div>
     </div>
    );
}

export default App;
