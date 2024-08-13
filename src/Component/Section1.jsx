import React from 'react'
import shantu from '../Component/Imgs/img/dish1.png'
import './Style.css'
import './dish'
import Aboutimg from './Imgs/images/1st.jpg'
import Dish from './Imgs/img/dish1.png'
import Dish1 from './Imgs/img/dish3.png'
import Dish2 from './Imgs/images/plate1.png'
import Dish3 from './Imgs/images/plate3.png'
import s2 from './Imgs/img/dish1.png'
import s3 from './Imgs/img/dish2.png'
import s4 from './Imgs/img/dish3.png'
import s5 from './Imgs/img/dish4.png'

export default function Section1() {
  return (
<>

<main className='bg'>
    
<section className='main'>
<div className="container-fluid">
    <div className="container">
        <div className="row">
        <div class="col-md-6" >
                        <div className="text">
                        <h4 className='butter'>Butter Special</h4>
                        <h1><b>Freshness in every bite</b></h1>
                        <p>Best Cooks and best delivery guys all your service . <br /> Hot tasty food will reach you in 20 min </p>
                             <br/>
                             <button class="btn"> Order Now</button>
                        <br/>
                        </div>
                        <div className='plateimg'>
                        <img className='plateimg' id='dish2' src={s2} alt=""  />
                        <img className='plateimg' id='dish3' src={s3} alt=""  />
                        <img className='plateimg' id='dish4' src={s4} alt=""  />
                        <img className='plateimg' id='dish5' src={s5} alt=""  />



                        </div>
                        
                       
            </div>
            <div className="col-md-6">
                <img className='img1' id='dish' src={shantu} alt=""  />
            </div>
        </div>
    </div>
</div>
</section>
</main>

<hr/>

<br />
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
<br />
<div class="men" >
        <div class="menu">
            <h6 className='gn'>Special</h6>
        </div>
        <div class="menu">
            <h2><b>MENU OF THE WEEK</b></h2>

        </div>
        <hr/>
    </div>
    <br/>
    <section class="menulist">
        <div className="container-fluid">
            <div class="container" >
             <div class="cardimg">
             <div class="row">
                <div class="col-md-3">
                    <div class="card" >
                        <img src={Dish} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Barbeque Salad</h5>
                          <p class="card-text">Delicious dish</p>
                          <h6>$22.00</h6>
                        </div>
                    </div>

                </div>
               
                <div class="col-md-3">
                    <div class="card" >
                        <img src={Dish1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Barbeque Salad</h5>
                            <p class="card-text">Delicious dish</p>
                            <h6>$22.00</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="card" >
                    <img src={Dish2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Barbeque Salad</h5>
                      <p class="card-text">Delicious dish</p>
                      <h6>$22.00</h6>
                    </div>
                    </div>
                </div>
                    <div class="col-md-3">
                     <div class="card" >
                        <img src={Dish3} class="card-img-top" alt="..."/>
                        <div class="card-body">
                             <h5 class="card-title">Spinach Salad</h5>
                            <p class="card-text">Delicious dish</p>
                            <h6>$22.00</h6>
                        </div>
                    </div>
                </div>
        </div>
        </div>
    </div>
    </div>
</section>
<br />
<div class="men" >
<div class="menu">
        <h6 className='gn'>Offering</h6>
    </div>
    <div class="menu">
        <h2> <b>Our Amazing Services</b></h2>

    </div>
    <br /> 
    <hr />
    <div class="del">
    <div class="container">
        <div class="row">
                <div class="col-md-4">
                <i class="fa fa-utensils"></i>

                <h3>Excellent food</h3>
                <p>We offer our clients excellent quality <br/>
                    services for many years, with the best <br/>
                    and delicious food in the city.
                </p>
                </div>
                <div class="col-md-4">
                <i class="fas fa-mug-hot"></i>

                    <h3>Fast food </h3>
                <p>We offer our clients excellent quality <br/>
                    services for many years, with the best <br/>
                    and delicious food in the city.
                </p>
                </div>
                <div class="col-md-4">
                <i class="fa fa-truck"></i>

                    <h3>Delivery </h3>
                <p>We offer our clients excellent quality <br/>
                    services for many years, with the best <br/>
                    and delicious food in the city.
                </p>
                </div>
        </div>
    </div>
</div>
<hr/>
</div>
<br />
<footer>
    <div className="container-fluid">
        <div className="container">
            <div className="row">
                <div className="col-md-3">
                    <div className="testy">
                    <h3><b className='taste1'>TASTY FOOD</b></h3> 
                        <p>Restaurant</p>
                        
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-twitter"></i>
                       
                    </div>
                </div>
                <div className="col-md-3">
                    <h3><b>SERVICES</b></h3>
                     <br/>
                     <label for="">Delivery</label>
                     <br/>
                     <label for="">Pricing</label>
                     <br/>
                     <label for="">Fast Food</label>
                     <br/>
                     <label for="">Reserve Your Spot</label>

                </div>
                <div className="col-md-3">
                    <h3><b>INFORMATION</b></h3>
                    <br/>
                    <label for="">Event</label>
                    <br/>
                    <label for="">ContactUs</label>
                    <br/>
                    <label for="">Privacy Policy</label>
                    <br/>
                    <label for="">Terms and Condition</label>
                </div>
                <div className="col-md-3">
                    <h3><b>ADDRESS</b></h3>
                    <p>
                        Near Sandip Foundation <br/>
                        Trimbakeshwar Road Mahiravani <br/>
                        Nashik Maharashtra 422213.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </footer>

</>  )
}


