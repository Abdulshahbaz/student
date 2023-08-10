import React, {useRef} from 'react'
import Logo from "../assets/images/logo1.png"


const Navigations=()=>{
  const  searchRef = useRef();
   const searchHandler  = ()=> {
          searchRef.current.classList.toggle("active");
   }
  return (
    <>
        <header className='header'>
          <a href='#' className='logo'>
            <img src={Logo} alt='' />
          </a>
          <nav className='navbar'>
            <a href='#home'>Home</a>
            <a href='#about'>About As</a>
            <a href='#products'>Products</a>
            <a href='#reviews'>Reviews</a>
            <a href='#menu'>Menu</a>
            <a href='#Contact'>Contact As</a>
            <a href='#Blogs'>Blogs</a>
          </nav>
          <div className='icons'>
             <div className="fas fa-search" onClick={searchHandler}></div>
               <div className="fas fa-shopping-cart"></div>
              <div className="fa-solid fa-bars" id="menu-btn"></div>
          </div>
          <div className='search-form' ref={searchRef}>
            <input type='search' placeholder='search here...' id='search-box' />
            <label htmlFor='search-box' className="fas fa-search"></label>
          </div>
        </header>
    </>
  )
}

export default Navigations
