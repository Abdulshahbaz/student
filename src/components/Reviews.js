import React from 'react'
import review from "../assets/images/review1.png"
import reviews2 from "../assets/images/user.png"
const Reviews = () => {
  return (
    <>
      <h1 className='heading'>
         customer's<span>Reviews</span>
      </h1>
    <section className='reviews' id='reviews'>
           <div className='box-container'>
              <div className='box'>
                 <img src={review} alt='' className='qoute'/>
                 <p>     
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                      veritatis minus labore non molestias et, voluptas earum aspernatur doloribus 
                      laudantium, repellat adipisci sit necessitatibus neque itaque, facilis beatae eum voluptatum.
                 </p>
                 <img src={reviews2} alt='' className='user'/>
                 <h3>jenny</h3>
                 <div className='star'>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star-half-alt'/>
                 </div>
              </div>
           </div>

           <div className='box-container'>
              <div className='box'>
                 <img src={review} alt='' className='qoute'/>
                 <p>     
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                      veritatis minus labore non molestias et, voluptas earum aspernatur doloribus 
                      laudantium, repellat adipisci sit necessitatibus neque itaque, facilis beatae eum voluptatum.
                 </p>
                 <img src={reviews2} alt='' className='user'/>
                 <h3>jenny</h3>
                 <div className='star'>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star-half-alt'/>
                 </div>
              </div>
           </div>

           <div className='box-container'>
              <div className='box'>
                 <img src={review} alt='' className='qoute'/>
                 <p>     
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                      veritatis minus labore non molestias et, voluptas earum aspernatur doloribus 
                      laudantium, repellat adipisci sit necessitatibus neque itaque, facilis beatae eum voluptatum.
                 </p>
                 <img src={reviews2} alt='' className='user'/>
                 <h3>jenny</h3>
                 <div className='star'>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star-half-alt'/>
                 </div>
              </div>
           </div>

           <div className='box-container'>
              <div className='box'>
                 <img src={review} alt='' className='qoute'/>
                 <p>     
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                      veritatis minus labore non molestias et, voluptas earum aspernatur doloribus 
                      laudantium, repellat adipisci sit necessitatibus neque itaque, facilis beatae eum voluptatum.
                 </p>
                 <img src={reviews2} alt='' className='user'/>
                 <h3>jenny</h3>
                 <div className='star'>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star'/>
                    <i className='fas fa-star-half-alt'/>
                 </div>
              </div>
           </div>
    </section>          
    </>
  )
}

export default Reviews
