import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import icon_utility_favorite_default from '../Social_icons/icon-utility-favorite-default.svg'
import icon_utility_favorite_filled from '../Social_icons/icon-utility-favorite-filled.svg'
import Skeleton from 'react-loading-skeleton';
import '../../node_modules/react-loading-skeleton/dist/skeleton.css';
import { useState } from 'react';

const ImageBox = (props) => {
  const [fav, setFav] = useState(icon_utility_favorite_default)
  const updateHeart=()=>{
    if(fav===icon_utility_favorite_default)
    {
      setFav(icon_utility_favorite_filled)
    }
    else { 
    setFav(icon_utility_favorite_default)
    }
  }
  // console.log(props.pid);

  return (
    <>
      <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-6 px-1">
        <div className="mt-2">


          <NavLink to={`/products/${props.pid}`}>

            <div style={{ position: "relative" }}>
              {
                props.src ? <> <img src={props.src} className="img-fluid" />
                <Link to='/'> <img className='ms-2' onClick={()=>updateHeart()}
              style={{position:"absolute", top:"10px", right:"10px", fontSize:"18px"}}
                src={fav}/> </Link> </> : (<Skeleton height={26} />)
              }
            </div>
          </NavLink>

          {
            props.pname ? <> <NavLink to="/products">
              <p className="mt-2 mb-1 px-2" title={props.pname} style={{ letterspacing:'0.2', fontSize:'1.12', fontFamily:"BemboMTPro-Regular", display: "-webkit-box", WebkitLineClamp: "1", WebkitBoxOrient: "vertical", overflow: "hidden" }}>{props.pname}</p> </NavLink> </> : <Skeleton height={26} />
          }
          <p className="px-2 " style={{fontFamily: "BemboMTPro-Regular"}}>${props.price}</p>
        </div>
      </div>
    </>
  )
}

export default ImageBox
