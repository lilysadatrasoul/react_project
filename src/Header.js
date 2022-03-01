import logo from "./assets/images/1.png"
function Header(){
    return(
        <header>
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
        </header>
    )
}
export default Header;