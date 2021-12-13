import React from "react";
import us_flag from '../Social_icons/usa.svg'
import icon_mobile_bag from '../Social_icons/icon-mobile-bag.svg'
import icon_mobile_search from '../Social_icons/icon-mobile-search.svg'
import icon_utility_favorite_default from '../Social_icons/icon-utility-favorite-default.svg'
import locator from '../Social_icons/icon-mobile-locator.svg'
import icon_utility_account_login from '../Social_icons/icon-utility-account-login.svg'
const Navbar = () => {
  return (
    <>
    <div id="carouselExampleControls" className="carousel slide d-flex text-light justify-content-center" style={{backgroundColor:"#333"}} data-bs-ride="carousel">
    <div className="carousel-inner py-2" style={{maxWidth:"80%"}}>
      <div className="carousel-item text-center active">
        <p className="m-0 py-1" style={{ fontSize: "10px", fontWeight:"500", letterSpacing:"1px" }}>FOR DELIVERY BY 12/25, WE RECOMMEND ORDERING BY 12PM NOON EST ON 12/19. (CUSTOMIZED & MONOGRAMMED GIFTS TAKE LONGER TO SHIP.)</p>
      </div>
      <div className="carousel-item text-center">
        <p className="m-0 py-1" style={{ fontSize: "10px", fontWeight:"500", letterSpacing:"1px" }}>SHOP GIFTS STRESS-FREE WITH FREE SHIPPING & EXTENDED RETURNS</p>
      </div>
      <div className="carousel-item text-center">
        <p className="m-0 py-1" style={{ fontSize: "10px", fontWeight:"500", letterSpacing:"1px" }}><b>30-50% OFF</b> AT OUR HOLIDAY SALE. <a href="#">SHOP WOMEN’S</a> <a href="#">SHOP MEN’S</a></p>
      </div>
    </div>
    <button className="carousel-control-prev mx-3 my-1" style={{width:"16px"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next mx-3 my-1" style={{width:"16px"}} type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>

      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-4">
        <div className="container-fluid d-block">
          {/* <a href="/" className="navbar-brand text-uppercase" style={{ fontSize: "26px", fontFamily:"Yeseva One", fontWeight:"400" }}>Coach</a> */}

          <div className="d-flex justify-content-between align-items-center mb-3">
            <div className="flag-area">
              <img className='mx-0'
                src={us_flag}
                
              />
              <span>US</span>
              <img className='ms-2'
                src={locator}
              />
              <span>Stores</span>
            </div>

            <a
              href="/"
              className="navbar-brand text-uppercase m-0"
              style={{
                fontSize: "26px",
                fontFamily: "Yeseva One",
                fontWeight: "400"
              }}
            >
              <svg
                width="114"
                height="14"
                viewBox="0 0 114 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ marginLeft: "100px" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M41.9362 2.69785C39.6367 1.37413 36.5967 0.634399 33.3618 0.634399C30.088 0.634399 27.048 1.37413 24.7875 2.69785C23.1116 3.71011 22.1372 5.26744 22.1372 7.01943C22.1372 8.77142 23.1116 10.3287 24.7875 11.341C27.087 12.6647 30.127 13.4045 33.3618 13.4045C36.6357 13.4045 39.6757 12.6647 41.9362 11.341C43.6121 10.3287 44.5864 8.77142 44.5864 7.01943C44.5864 5.26744 43.6121 3.71011 41.9362 2.69785ZM33.3228 12.8205C31.2572 12.8205 27.7885 11.6135 27.7885 7.01943C27.7885 3.00932 30.5557 1.2184 33.3228 1.2184C37.0254 1.2184 39.208 3.39865 39.208 7.01943C39.247 10.9127 37.2982 12.8205 33.3228 12.8205Z"
                  fill="black"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M114 1.4131V0.829102H104.646V1.4131H106.634V6.43547H98.8002V1.4131H100.827V0.906968V0.829102H91.4341V1.4131H93.4607V12.6648H91.4341V13.2488H100.827V12.6648H98.8002V7.01946H106.634V12.6648H104.646V13.2488H113.922H114V12.6648H111.974V1.4131H114Z"
                  fill="black"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M56.0062 0.634399H55.6944L45.8728 12.6647H43.6123V13.2487H49.2636V12.6647H46.6133L48.9908 9.78368H57.799L60.4492 12.7037H57.8769V13.2877H69.6082V12.6647H66.9969L56.0062 0.634399ZM49.4585 9.16075L53.0831 4.68344L57.2533 9.16075H49.4585Z"
                  fill="black"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.1354 2.03598C15.9795 1.95812 15.5118 1.64665 14.7323 1.33519C13.8749 1.02372 12.5108 0.595459 10.7569 0.595459C7.95077 0.595459 5.33949 1.14052 3.42974 2.11385C1.16923 3.24291 0 4.95597 0 6.98049C0 11.1853 3.93641 13.3655 11.4195 13.3655C13.2513 13.3655 14.8492 12.8983 16.1744 11.9639L18.4349 13.1708H18.8636V8.34315H18.4349L18.3959 8.38208V8.42101C18.3959 8.45994 18.0062 9.55007 16.9928 10.6402C16.0574 11.6525 14.3426 12.8594 11.5364 12.8594C9.66564 12.8594 8.14564 12.1586 7.13231 10.8738C6.35282 9.86154 5.88513 8.45994 5.88513 7.05835C5.88513 3.28184 8.8082 1.25732 11.5364 1.25732C13.4072 1.25732 15.0831 1.84132 16.4082 2.97038C17.5385 3.90477 18.1621 4.9949 18.3959 5.73463V5.77356H18.8636V0.829058H18.4349L16.1354 2.03598Z"
                  fill="black"
                ></path>
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M85.3151 2.03598C85.1592 1.95812 84.6915 1.64665 83.912 1.33519C83.0546 1.02372 81.6905 0.595459 79.9366 0.595459C77.1305 0.595459 74.5192 1.14052 72.6094 2.11385C70.3489 3.24291 69.1797 4.95597 69.1797 6.98049C69.1797 11.1853 73.1161 13.3655 80.5992 13.3655C82.431 13.3655 84.0289 12.8983 85.354 11.9639L87.6146 13.1708H88.0433V8.34315H87.6146L87.5756 8.38208V8.42101C87.5756 8.45994 87.1858 9.55007 86.1725 10.6402C85.2371 11.6525 83.5223 12.8594 80.7161 12.8594C78.8453 12.8594 77.3253 12.1586 76.312 10.8738C75.5325 9.86154 75.0648 8.45994 75.0648 7.05835C75.0648 3.28184 77.9879 1.25732 80.7161 1.25732C82.5869 1.25732 84.2628 1.84132 85.5879 2.97038C86.7181 3.90477 87.3417 4.9949 87.5756 5.73463V5.77356H88.0433V0.829058H87.6146L85.3151 2.03598Z"
                  fill="black"
                ></path>
              </svg>
            </a>





            <div className="d-flex align-items-center">
              <form className="d-flex">
                <div className="d-flex align-items-center justify-content-end">
                  <input
                    className="form-control rounded-0 ps-0"
                    type="search"
                    style={{ boxShadow: "none", borderBottom: "1px solid black", borderLeft: "none", borderRight: "none", borderTop: "none", position: "relative", paddingRight: "30px", fontSize: "14px", width: "130px" }}
                    placeholder="Search"
                    aria-label="Search"
                  />

                  <button className="btn btn-sm btn-floating rounded-0" style={{ position: "absolute", boxShadow: "none" }} type="submit">
                  <img className='ms-2'
                src={icon_mobile_search}/>
                  </button>
                </div>

              </form>



              <div className="">
              <img className='ms-2'
                src={icon_utility_favorite_default}/>
                 <img className='ms-2'
                src={icon_utility_account_login}/>
                 <img className='ms-2'
                src={icon_mobile_bag}/> 
              </div>
            </div>




          </div>

          <div className="">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav mx-auto mb-2 mb-lg-0 text-uppercase "
                style={{ fontWeight: "500", fontSize: "12px" }}
              >
                <li className="nav-item mx-4">
                  <a className="nav-link text-danger" style={{ fontWeight: "700" }} href="#">
                    Sale
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#">
                    New
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#">
                    Women
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#">
                    Men
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#">
                    Coach (Re)Loved
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#">
                    Coach Insider
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-dark" href="#">
                    Customization
                  </a>
                </li>
                <li className="nav-item mx-4">
                  <a className="nav-link text-info" style={{ fontWeight: "700" }} href="#">
                    Gifts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
