import React from 'react';
const Cartproduct = () => {
   let n=   Array.from(Array(sessionStorage.length).keys())
  
   let b
   let c
    return ( 
      <div>
      
      {n.map((n, index) => (
        <div>
       <div style={{display:"none"}}>   {
          
        b= JSON.parse( sessionStorage.getItem('product_id['+JSON.stringify({n})+']'))
         
         }
         {c=JSON.parse( localStorage.getItem("totals"))}
         { localStorage.setItem("totals", c+(b[2]*b[4])) }</div>
         <p>item no#{n+1}</p>
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                <img className="img-fluid w-100" src={b[3]} alt="Sample" />
                <a href="#!">
                  <div className="mask">
                    <img className="img-fluid w-100" src={b[3]}/>
                    <div className="mask rgba-black-slight" />
                  </div>
                </a>
              </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                   
                    <h5>{b[1]}</h5>
                    price:
                  </div>
                  
                </div>
                <div className="d-flex justify-content-between align-items-center">
                  {/* <div>
                  {c=b[0]}
                   { <button onClick={(e)=>{console.log("the button button d ",b[0],n)
                  var names = [];
                  // names[(n)]=[b[0],b[1],b[2],b[3],b[4]];

                  // b[2]=0
                  //  sessionStorage.setItem('product_id['+JSON.stringify({n})+']',JSON.stringify(names[(n)]))
                  }}>remove item</button>}
                  </div> */}
                  <p className="mb-0"><span><strong id="summary">{b[4]}</strong></span></p>
                </div>
              </div>
            </div>
          </div>
      
        
        
        
        </div>  ))}
         
      <p>cart products to be handled</p>
      </div>
     );
}
 
export default Cartproduct;