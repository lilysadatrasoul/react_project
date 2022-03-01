import product1 from "./assets/images/1.jpg"
function ProductCard (){//.....component
    return(
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
    )


}
export default ProductCard;