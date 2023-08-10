import React from 'react'
import cart1 from "../assets/images/pizzaBurger.png"
import cart2 from "../assets/images/coffce2.png"
const Products = () => {
  return (
    <>
     <h1 className='heading'>
            our <span>Products</span>
        </h1>
    <section className='products' id='products'>
           <div className='box-container'>
              <div className='box'>
                    <div className='icons'>
                         <a href='#' className='fas fa-shopping-cart'></a>
                         <a href='#' className='fas fa-heart'></a>
                         <a href='#' className='fas fa-eye'></a>
                     </div>
                     <div className='image'>
                        <img src={cart1} alt='' />
                     </div>
                        <div className='content'>
                            <h3>fresh coffce</h3>
                               <div className='star'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                               </div>
                               <div className='price'>
                                $15.99<span>20.99</span>
                               </div>
                           </div>
                       </div>             
                   </div>

              <div className='box-container'>
                    <div className='box'>
                        <div className='icons'>
                              <a href='#' className='fas fa-shopping-cart'></a>
                               <a href='#' className='fas fa-heart'></a>
                               <a href='#' className='fas fa-eye'></a>
                        </div>
                          <div className='image'>
                              <img src={cart2} alt='' />
                          </div>
                        <div className='content'>
                            <h3>fresh coffce</h3>
                               <div className='star'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                               </div>
                               <div className='price'>
                                   $15.99<span>20.99</span>
                              </div>
                        </div>
                  </div>             
             </div>

             
             <div className='box-container'>
              <div className='box'>
                  <div className='icons'>
                      <a href='#' className='fas fa-shopping-cart'></a>
                         <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                     </div>
                     <div className='image'>
                        <img src={cart1} alt='' />
                     </div>
                        <div className='content'>
                            <h3>fresh coffce</h3>
                               <div className='star'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                               </div>
                               <div className='price'>
                                $15.99<span>20.99</span>
                               </div>
                        </div>
                  </div>             
             </div>

             
             <div className='box-container'>
              <div className='box'>
                  <div className='icons'>
                      <a href='#' className='fas fa-shopping-cart'></a>
                         <a href='#' className='fas fa-heart'></a>
                        <a href='#' className='fas fa-eye'></a>
                     </div>
                     <div className='image'>
                        <img src={cart1} alt='' />
                     </div>
                        <div className='content'>
                            <h3>fresh coffce</h3>
                               <div className='star'>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star'/>
                                <i className='fas fa-star-half-alt'/>
                               </div>
                               <div className='price'>
                                $15.99<span>20.99</span>
                               </div>
                        </div>
                  </div>             
             </div>
     </section>
    </>
  )
}

export default Products
