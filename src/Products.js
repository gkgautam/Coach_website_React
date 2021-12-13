import React, { useEffect,useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { useParams } from 'react-router-dom';
const Products = () => {

  // const fetchData = async () =>{
  //   const res = await fetch('https://www.coach.com/api/get-product-data/C4823%20B4%2FBK?__v__=xbEEtUE0Jm6CnEoWuWe8Y%27', {
  //     method:"GET",
  //     mode:"no-cors"
  //   });

  //   const data = await res.json();

  //   console.log(data)
  // }


  // useEffect(()=>{
  //   fetchData()
  // },[])

  const params = useParams();

  let pid = params.pid;

  const [productDataMedia, setProductDataMedia] = useState([]);
  const [productName, setProductName] = useState("")
  const [productPrice, setProductPrice] = useState(0)

  const fetchData = async () => {

    try {
      const res = await fetch(`https://www.coach.com/api/get-product-data/${pid}`, { method: "GET" });
      const data = await res.json();

      const media = data.media;

      let img_arr = [];

      for (let i = 0; i < media.full.length; i++) {
        const element = media.full[i];
        img_arr.push(element);
      }


      setProductDataMedia(img_arr)
      setProductName(data.name);
      setProductPrice(data.prices);



    } catch (error) {
      console.log(error);
    }
  }

  // console.log(productDataMedia);


  useEffect(() => {
    fetchData()
  }, [pid])



  return (
    
    <div>
      <Navbar />

      <div className="container-fluid">
        <div className="container-xxl">

          <div className="row my-3">
            <div className="col">
              <nav aria-label="breadcrumb" style={{fontFamily: "BemboMTPro-Regular"}}>
                <ol className="breadcrumb my-0">
                  <li className="breadcrumb-item"><a href="#">Women</a></li>
                  <li className="breadcrumb-item"><a href="#">Handbags</a></li>
                  <li className="breadcrumb-item"><a href="#">Totes & Carryalls</a></li>
                  <li className="breadcrumb-item active" aria-current="page" >Soft Tabby Shoulder Bag</li>
                </ol>
              </nav>
            </div>
          </div>

          <div className="row my-3">
            <div className="col-xl-7">
              <div className="d-flex mt-2 justify-content-center align-items-center" style={{ backgroundColor: "#F1F1F1" }}>
                <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel" style={{ width: "500px" }}>
                  {/* <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  </div> */}
                  <div className="carousel-inner">
                  {
                      productDataMedia.map((val, index) => {

                        var flag='';

                        if(index == 0){
                          flag = "active"
                        }

                        return (<div className={`carousel-item ${flag}`} key={index}>
                          <img src={val.src} className="d-block w-100" alt="..." />
                        </div>
                        )
                      })
                    }
                  </div>
                  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <h3 className="text-black mb-3 mt-2" style={{fontFamily: "HelveticaLTPro-Roman", fontWeight: "200" }}>{productName}</h3>
              <small className="p-2 rounded" style={{ backgroundColor: "rgba(0,0,0,0.2)", fontSize: "12px" }}>BESTSELLER</small>
              <p className="my-3" style={{ fontWeight: "200",fontFamily: "BemboMTPro-Regular", fontSize: "32px" }}>${productPrice.currentPrice ? productPrice.currentPrice:'150'}</p>
              <p className="text-muted my-0" style={{ fontWeight: "400", fontSize: "12px" }}>4 interest-free payments of $112.50 with Klarna. <u><a href="#!">Learn more</a></u></p>
              <hr className="divider my-2" />
              <p className="p-2" style={{ backgroundColor: "#f0d3ec" }}>Use code HOLIDAY to get a free large tech pouch with your $400+ purchase. While supplies last.</p>
              <p><b>COLOR:</b> Brass/Black</p>


              <div className="d-flex">
                <select className="form-select rounded-0 w-50" style={{boxShadow:'none'}}>
                  <option value="1" selected>1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <button className="btn btn-dark rounded-0 ms-3 py-2 text-uppercase" style={{ boxShadow:'none', width: "100rem" }}>I Want It</button>
              </div>


              <div className="my-2 py-2">
                <a href="#!" id="pickupLink" className="border py-2 list-group-item text-center stretched-link">FIND A STORE FOR PICKUP</a>
              </div>


              <div className="mt-3">
                <p className="my-0"><img src="https://content.shoprunner.com/assets/pik_images/v4/_sr_logo.svg" alt="" /> <small style={{ fontSize: "12px" }}>Free 2-Day Shipping & Free Returns.</small></p>
                <p className="m-0"><small><u><a href="#!">sign up</a></u> | <u><a href="#!">sign in</a></u></small></p>
              </div>
              <hr className="divider" />

              <div className="">

                <div className="accordion" id="accordionPanelsStayOpenExample">
                  <div className="accordion-item border-0 border-bottom rounded-0">
                    <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                      <button className="accordion-button collapsed" type="button" style={{ boxShadow: 'none' }} data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        Complimentary Shipping and Returns
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body text-muted">
                        <p> <small> We are pleased to offer complimentary ground shipping on all orders shipping within the United States. We are also pleased to offer complimentary return shipping on all orders returned within 14 days of original purchase. Customized items will take an additional 2-3 days to ship. Only full-price and non-customized items are eligible for returns or exchange.</small></p>

                        <p><small>All sale or customized orders are final sale and are not eligible for return or exchange.</small></p>

                        <p><small>For full details, please visit our SHIPPING and RETURNS pages.</small></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 border-bottom">
                    <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" style={{ boxShadow: 'none' }} data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        Product Details
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingTwo">
                      <div className="accordion-body">
                        <p className="m-0"><small>Smooth leather</small></p>
                        <p className="m-0"><small>Inside zip pocket</small></p>
                        <p className="m-0"><small>Snap closure, fabric lining</small></p>
                        <p className="m-0"><small>Detachable handle with 9" drop</small></p>
                        <p className="m-0"><small>Outside zip pocket</small></p>
                        <p className="m-0"><small>Detachable strap with 21 1/2" drop for shoulder or crossbody wear</small></p>
                        <p className="m-0"><small>10 1/2" (L) x 6 1/2" (H) x 3 1/2" (W)</small></p>
                        <p className="m-0"><small>Style No. C4823</small></p>
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item border-0 border-bottom">
                    <h2 className="accordion-header" id="panelsStayOpen-headingThree">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={{ boxShadow: 'none' }} data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        Editor's Notes
                      </button>
                    </h2>
                    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                      <div className="accordion-body">
                        <small className="text-muted">The Soft Tabby reimagines our structured take on an archival 1970s Coach design with a slouchy relaxed feel. Finished with our Signature hardware for an iconic touch, this smooth leather shoulder bag features zip pockets inside and out to organize small accessories and two detachable straps to carry by hand, style as a short shoulder bag or wear crossbody.</small>
                      </div>
                    </div>
                  </div>
                </div>


                <hr className="divider" />

                <div className="d-flex justify-content-between align-items-center">
                  <small>Share This Product</small>
                  <div className="">
                    <a href="#!" className="me-3" style={{ fontSize: "20px" }}><i className="fab fa-facebook-f"></i></a>
                    <a href="#!" className="mx-3" style={{ fontSize: "20px" }}><i className="fab fa-pinterest-p"></i></a>
                    <a href="#!" className="mx-3" style={{ fontSize: "20px" }}><i className="fab fa-twitter"></i></a>
                    <a href="#!" className="ms-3" style={{ fontSize: "20px" }}><i className="fas fa-envelope"></i></a>
                  </div>
                </div>


              </div>


            </div>
          </div>

        </div>
      </div>

      <Footer />

      <style jsx>
        {`
          #pickupLink:hover{
            background-color: #212529;
            color:#fff;
          }
        `}
      </style>
    </div>
  )
}

export default Products
