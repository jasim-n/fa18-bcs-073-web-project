import React from 'react';
import Cartproduct from './Cartproduct';
import { Grid } from "@material-ui/core";


const Cartdesign = (products) => {



    return ( <div style={{marginTop:"5rem"}}>
<section>
  {/*Grid row*/}
  <div className="row">
    {/*Grid column*/}
    <div className="col-lg-8">
      {/* Card */}
      <div className="mb-3">
        <div className="pt-4 wish-list">
          <h5 className="mb-4">Cart (<span>{sessionStorage.length}</span> items)</h5>
  
             <Grid container spacing={2}>
          
        </Grid>
      
  
          <Cartproduct/>
          <hr className="mb-4" />
 <p className="text-primary mb-0"><i className="fas fa-info-circle mr-1" /> Do not delay the purchase, adding
            items to your cart does not mean booking them.</p>
        </div>
      </div>
 
      <div className="mb-3">
        <div className="pt-4">
          <h5 className="mb-4">Expected shipping delivery</h5>
          <p className="mb-0"> Thu., 12.03. - Mon., 16.03.</p>
        </div>
      </div>

      <div className="mb-3">
        <div className="pt-4">
          <h5 className="mb-4">We accept</h5>
          <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg" alt="Visa" />
          <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg" alt="American Express" />
          <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg" alt="Mastercard" />
          <img className="mr-2" width="45px" src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png" alt="PayPal acceptance mark" />
        </div>
      </div>
      {/* Card */}
    </div>
  
    <div className="col-lg-4">
      {/* Card */}
      <div className="mb-3">
        <div className="pt-4">
          <h5 className="mb-3">The total amount of</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
              Temporary amount
              <span>{JSON.parse( localStorage.getItem("totals"))} rupee</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
              Shipping
              <span>Gratis</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
              <div>
                <strong>The total amount of</strong>
                <strong>
                  <p className="mb-0">(including VAT)</p>
                </strong>
              </div>
              <span><strong>{JSON.parse( localStorage.getItem("totals"))} rupee</strong></span>
            </li>
          </ul>
          <button type="button" className="btn btn-primary btn-block">go to checkout</button>
        </div>
      </div>
      {/* Card */}
      {/* Card */}
      <div className="mb-3">
        <div className="pt-4">
          <a className="dark-grey-text d-flex justify-content-between" data-toggle="collapse" href="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
            Add a discount code (optional)
            <span><i className="fas fa-chevron-down pt-1" /></span>
          </a>
          <div className="collapse" id="collapseExample">
            <div className="mt-3">
              <div className="md-form md-outline mb-0">
                <input type="text" id="discount-code" className="form-control font-weight-light" placeholder="Enter discount code" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Card */}
    </div>
    {/*Grid column*/}
  </div>
  {/* Grid row */}
</section>
{/*Section: Block Content*/}

    </div> );
}
 
export default Cartdesign ;