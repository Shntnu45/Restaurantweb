import React from 'react'

export default function Footer() {
  return (
   <>
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
   </>
  )
}
