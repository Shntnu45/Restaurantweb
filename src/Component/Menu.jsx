import React from 'react'
import Dish from './Imgs/img/dish1.png'
import Dish1 from './Imgs/img/dish3.png'
import Dish2 from './Imgs/images/plate1.png'
import Dish3 from './Imgs/images/plate3.png'
export default function Menu() {
  return (
<>
<div class="men" >
        <div class="menu">
            <h6 className='gn'>Special</h6>
        </div>
        <div class="menu">
            <h2><b>MENU OF THE WEEK</b></h2>

        </div>
        <hr/>
    <br/>
    <section class="menulist">
        <div className="container-fluid">
            <div class="container" >
             <div class="cardimg">
             <div class="row">
                <div class="col-md-3">
                    <div class="card" >
                        <img className='menudish' src={Dish} class="card-img-top" alt="..."/>
                        <div class="card-body">
                          <h5 class="card-title">Barbeque Salad</h5>
                          <p class="card-text">Delicious dish</p>
                          <h6>$22.00</h6>
                        </div>
                    </div>

                </div>
               
                <div class="col-md-3">
                    <div class="card" >
                        <img  className='menudish' src={Dish1} class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Barbeque Salad</h5>
                            <p class="card-text">Delicious dish</p>
                            <h6>$22.00</h6>
                        </div>
                    </div>
                </div>
                <div class="col-md-3" >
                    <div class="card" >
                    <img  className='menudish' src={Dish2} class="card-img-top" alt="..."/>
                    <div class="card-body">
                      <h5 class="card-title">Barbeque Salad</h5>
                      <p class="card-text">Delicious dish</p>
                      <h6>$22.00</h6>
                    </div>
                    </div>
                </div>
                    <div class="col-md-3">
                     <div class="card" >
                        <img  className='menudish' src={Dish3} class="card-img-top" alt="..."/>
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
</div>


</>  )
}
