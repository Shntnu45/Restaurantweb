import React from 'react'
import Aboutimg from './Imgs/images/1st.jpg'
export default function About() {
  return (
<>
<section className="allabout">

<div className="container-fluid" style={{marginTop:130}}>
    <div className="container">
    <div className="row">
        <div class="col-md-6">
            <img className='aboutimg' src={Aboutimg} alt="" />
        </div>
        <div class="col-md-6">
            <div class="about">
                <p>About Us </p>
                <h1> <b>We cook the best <br/>
                    tasty food</b>
                    </h1>
                <p>We cook the best food in the entire city, <br/> with excellent customer service, <br/>the best meals and at the best price, visit us.
    
                </p>
                <br/>
                <button class="btn"> Explore </button>
            </div>
        </div>
    </div>
    </div>
</div>
</section>

</>  )
}
