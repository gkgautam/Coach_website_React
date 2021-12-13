import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import RightSection from './components/RightSection';
import { useEffect, useState } from 'react';
import LeftSection from './components/LeftSection';

function Home() {

  const [productData, setProductData] = useState([]);
  const [productDataPrice, setProductDataPrice] = useState([]);
  const [pageTitle, setPageTitle] = useState("");
  const [breadCrumb, setBreadCrumb] = useState({
    htmlValue: "",
    alternateH1Tag: "",
    categoryID: ""
  });
  const [filterData, setFilterData] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0);
  const [pageNo, setPageNo] = useState(1);

  const [pid, setPid] = useState([])

  const [sort, setSort] = useState("featured");

  const getSortValue = (event) => {
    setSort(event.target.value);
  }

  const incrementPageNo = () => {
    setPageNo(pageNo + 1);
  }

  const fetchData = async () => {

    try {
      // const res = await fetch(`/shop/new?srule=${sort}&page=${pageNo}&start=0&fmt=headlessjson`, { method: "GET", credentials: "include" });
      const res = await fetch(`https://development.coach.com/shop/new?srule=${sort}&page=${pageNo}&start=0&fmt=headlessjson`, { method: "GET", credentials: "include" });
      const data = await res.json();

      const s_data = data.schemaData.itemListElement;
      const hits_data = data.hits;
      const breadcrumbs = data.breadcrumbs[0];
      const page_title = data.CurrentPageMetaData;
      const total_products = data.total;
      const refinements = data.refinements;

      let f_arr = []

      let arr = [];
      let narr = [];

      let product_id = [];

      for (let i = 0; i < s_data.length; i++) {
        const element = s_data[i];
        arr.push({ name: element.name, img: element.image });
      }

      for (let j = 0; j < hits_data.length; j++) {
        const element = hits_data[j];
        narr.push(element.minPrices);
        product_id.push(element.productId)
      }

      for (let k = 0; k < refinements.length; k++) {
        const element = refinements[k];
        f_arr.push(element)
      }

      for (let l = 0; l < hits_data.length; l++) {
        const element = hits_data[l];
        product_id.push(element.productId)
      }

      setProductData(arr);
      setProductDataPrice(narr);
      setBreadCrumb({ htmlValue: breadcrumbs.htmlValue, alternateH1Tag: breadcrumbs.alternateH1Tag, categoryID: breadCrumb.categoryID });
      setPageTitle(page_title.title);
      setTotalProducts(total_products);
      setFilterData(f_arr);
      setPid(product_id);

    } catch (error) {
      console.log('govind error',error);
    }
  }


  useEffect(() => {
    fetchData();
  }, [sort, pageNo]);



  return (
    <>

      <Navbar />
      <title>{pageTitle}</title>

      <div className="container-fluid" >
        <div className="container-xxl">
          <div className="row mt-4">

            <nav aria-label="breadcrumb">
              <ol className="breadcrumb my-0">
                <li className="breadcrumb-item" style={{ fontSize: "14px" }}><a href={`/${breadCrumb.categoryID}`}>{breadCrumb.htmlValue}</a></li>
                <li className="breadcrumb-item active" aria-current="page" style={{ fontSize: "14px" }}>{breadCrumb.alternateH1Tag}</li>
              </ol>
            </nav>

          </div>
          <div className="row mt-3 mb-5">
            <h2 className="my-0" style={{ fontWeight: "700", fontSize: "26px", color: "black" }}>NEW ARRIVALS</h2>
          </div>
          <div className="row">


            <div className="col-xl-3 col-lg-3 col-md-4">

              <div className="d-flex justify-content-between align-items-center" >
                <small className="p-0">FILTER BY</small>
                <small className="p-0"><button className="btn btn-sm py-1 border">CLEAR ALL</button></small>
              </div>

              <hr className='divider' />

              <LeftSection filter_data={filterData}/>

            </div>

            <div className="col-xl-9 col-lg-9 col-md-8">
              <div className="row">
                <div className="col-2 d-flex align-items-center">
                  <small>{totalProducts} Products</small>
                </div>
                <div className="col-10">
                  <div className="d-flex justify-content-end align-items-center">
                    <small style={{ fontSize: "12px" }}>Sort by:</small>

                    <select className="form-select border-0 form-selectsm" onChange={getSortValue} style={{boxShadow: "none", fontSize: "12px", width: "150px" }}>
                      <option value="featured">Featured</option>
                      <option value="newest">Newest</option>
                      <option value="top-rated">Top Rated</option>
                      <option value="most-relevant">Most Relevant</option>
                      <option value="price-low-to-high">Price Low To High</option>
                      <option value="price-high-to-low">Price High to Low</option>
                    </select>

                  </div>
                </div>

              </div>

              <RightSection p_data={productData} p_hits={productDataPrice} pid={pid} />

              <div className="row">
                <div className="col my-3 text-center">
                  <button className='btn border' onClick={incrementPageNo}>Load more</button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <Footer />

    </>
  )
}

export default Home;
