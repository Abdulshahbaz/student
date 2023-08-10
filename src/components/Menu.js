import React from 'react'
import cart from "../assets/images/menuBurger.png"
import cart1 from "../assets/images/pizzaBurger.png"
import cart2 from "../assets/images/menucoffce.png"
import cart3 from "../assets/images/menuchicken.png"
import cart4 from "../assets/images/chickenpop.png"
import cart5 from "../assets/images/twister.png"
import cart6 from "../assets/images/twister1.png"
import cart7 from "../assets/images/pepsi.png"
const Menu = () => {
  return (
    <>
     <h1 className='heading'>
          our<span>Menu</span>
       </h1>
    <section className='menu' id='menu'>
       <div className='box-container'>
           <div className='box'>
                <img src={cart} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>

         <div className='box-container'>
           <div className='box'>
                <img src={cart1} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>

         <div className='box-container'>
           <div className='box'>
                <img src={cart2} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>

         <div className='box-container'>
           <div className='box'>
                <img src={cart3} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>
    </section>

    <section className='menu' id='menu'>
       <div className='box-container'>
           <div className='box'>
                <img src={cart4} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>

         <div className='box-container'>
           <div className='box'>
                <img src={cart5} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>

         <div className='box-container'>
           <div className='box'>
                <img src={cart6} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>

         <div className='box-container'>
           <div className='box'>
                <img src={cart7} alt='' />
                  <h3>tasty and healty</h3>
               <div className='price'>
                  $15.99<span>20.99</span>
              </div>
           </div>
         </div>
    </section>

      
    </>
  )
}

export default Menu

// import IMAGES from '../assets/images/data.js'


// <img src={IMAGES.imgone} alt='' />
//        <img src={IMAGES.imgtwo} alt='' />

// {
//   cart.map((item,index)=>(
//     <div className='box'>
//      <img src={item.img} alt='' />
//      </div>
//   ))}