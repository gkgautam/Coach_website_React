import React from 'react'

const Footer = () => {
  return (
    <>
      <footer className="bg-light text-center text-lg-start p-0">
        <div className="container">
          <div className="row py-4">
            <div className="col-xl-2 col-lg-4 col-md-6">
              <h6>HELP</h6>
              <ul className="list-group list-group-flush bg-light" style={{lineHeight:"2"}}>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Feedback</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Coach Insider Information</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Product Drops</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Customer Care</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Track Order</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Shipping Details & Fees</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Returns</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Contact Us</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Coach Cares</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Product Care</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Gift Cards</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Unsubscribe</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">FAQ</a></li>
              </ul>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-6">
              <h6>ABOUT US</h6>
              <ul className="list-group list-group-flush bg-light" style={{lineHeight:"2"}}>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Coach Story</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Responsibility</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Coach Foundation</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Careers</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Tapestry</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Investor Relations</a></li>
              </ul>
            </div>
            <div className="col-xl-3 col-lg-4 col-md-6">
              <ul className="list-group list-group-flush bg-light pt-4" style={{lineHeight:"2"}}>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Sign up for emails for 10% off</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Sign up for texts for $15 off</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Coach Foundation</a></li>
                <li className="list-group-item px-0 py-1 bg-light border-0" style={{ fontSize: "14px" }}><a href="#!">Refer a Friend for $20 off</a></li>
              </ul>
            </div>
            <div className="col-xl-5 col-lg-12 col-md-6">
              <form>
                <div className="d-flex py-1 my-2">
                  <input type="email" className="form-control rounded-0" placeholder="Enter Email" required />
                  <button className="btn bg-dark text-light btn-sm rounded-0" style={{ width: "100px" }}>SIGN UP</button>
                </div>
              </form>
              <div className="mt-4">
                <p style={{ fontSize: "14px" }}>You are signing up to receive Coach emails. You can withdraw your consent at any time.</p>
              </div>
              <div className="mt-1">
                <small>Read our <u><a href="#!">Privacy Policy</a></u> or <u><a href="#!">Contact Us</a></u> for more details.</small>
              </div>
              <div className="mt-1" >
                <a className="btn btn-sm btn-link border-0 shadow-0 text-dark me-2" style={{fontSize:"20px"}} href="#!" role="button"
                ><i className="fab fa-facebook-f"></i
                ></a>

                <a className="btn btn-sm btn-link border-0 shadow-0 text-dark mx-2" style={{fontSize:"20px"}} href="#!" role="button"
                ><i className="fab fa-twitter"></i
                ></a>


                <a className="btn btn-sm btn-link border-0 shadow-0 text-dark mx-2" style={{fontSize:"20px"}} href="#!" role="button"
                ><i className="fab fa-instagram"></i
                ></a>


                <a className="btn btn-sm btn-link border-0 shadow-0 text-dark ms-2" style={{fontSize:"20px"}} href="#!" role="button"
                ><i className="fab fa-youtube"></i 
                ></a>
                <a className="btn btn-sm btn-link border-0 shadow-0 text-dark ms-2" style={{fontSize:"20px"}} href="#!" role="button"
                ><i class="fab fa-pinterest-p"></i></a>

              </div>
            </div>

          </div>

        </div>
        <hr className="divider" />
        <div className="container-fluid">
          <div className="row d-flex justify-content-between">
            <div className="col-xl-1 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>TERMS OF USE</a></div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>PRIVACY POLICY</a></div>
            <div className="col-xl-3 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>CA TRANSPARENCY & UK MODERN SLAVERY ACT</a></div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>DO NOT SELL MY PERSONAL INFO</a></div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>MANAGE COOKIES</a></div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>BRAND PROTECTION</a></div>
          </div>
          <div className="row mt-3 d-flex justify-content-center">
            <div className="col-xl-1 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>ACCESSIBILITY</a></div>
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>CUSTOMER CARE</a></div>
            <div className="col-xl-1 col-lg-2 col-md-3 col-sm-6 col-6 text-center"><a href="#!" style={{ fontSize: "12px" }}>FEEDBACK</a></div>
          </div>
          <div className="text-center mt-3"><small>© DISNEY</small></div>
          <div className="text-center mb-2"><small>© 2007-2021 COACH. ALL RIGHTS RESERVED.</small></div>
        </div>
      </footer>
    </>
  )
}

export default Footer
