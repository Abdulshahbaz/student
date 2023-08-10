import React from 'react'
import abouts from "../assets/images/about.png"
const About = () => {
  return (
    <>
      <section className='about' id='about'>
         <h1 className='heading'>
            <span>about</span>as
         </h1>
         <div className='row'>
            <div className='image'>
                <img src={abouts} alt=''/>
            </div>
            <div className='content'>
                <h3>What Makes Our Food Special?</h3>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                 veritatis minus labore non molestias et, voluptas earum aspernatur doloribus 
                laudantium, repellat adipisci sit necessitatibus neque itaque, facilis beatae eum voluptatum.
                </p>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                 veritatis minus labore non molestias et, voluptas earum aspernatur doloribus 
                laudantium, repellat adipisci sit necessitatibus neque itaque, facilis beatae eum voluptatum.
                </p>
               
            </div>
         </div>
      </section>
    </>
  )
}

export default About
