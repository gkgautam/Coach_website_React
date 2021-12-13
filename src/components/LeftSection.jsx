import React from 'react'

const LeftSection = (props) => {

  // console.log(props.filter_data[4].value[0])


  return (
    <>

      {props.filter_data.length > 0 ? <><div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.filter_data[4].displayName}`} aria-expanded="false" aria-controls="flush-collapseOne" style={{ boxShadow: "none" }}>
              {props.filter_data[4].displayName}
            </button>
          </h2>
          <div id={props.filter_data[4].displayName} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                {
                  props.filter_data[4].value.map((val, index) => {
                    return val.selectable == true ? <> <li key={index}>
                      <input className="form-check-input me-3" type="checkbox" value="" id="1" />
                      <label className="form-check-label" htmlFor="1" style={{ cursor: "pointer" }}>{val.refvalue}</label>
                    </li>
                    </> : null
                  })
                }
              </ul>
            </div>
          </div>
        </div>
      </div></> : null}


      {props.filter_data.length > 0 ? <><div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.filter_data[0].displayName}`} aria-expanded="false" aria-controls="flush-collapseOne" style={{ boxShadow: "none" }}>
              {props.filter_data[0].displayName}
            </button>
          </h2>
          <div id={props.filter_data[0].displayName} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">

              <div className="form-floating mb-3">
                <input type="number" className="form-control" id="floatingInput" defaultValue={0} placeholder="Min Price" />
                <label htmlFor="floatingInput">Min Price</label>
              </div>
              <div className="form-floating">
                <input type="number" className="form-control" id="floatingPassword" defaultValue={100000.01} placeholder="Max Price" />
                <label htmlFor="floatingPassword">Max Price</label>
              </div>
            </div>
          </div>
        </div>
      </div></> : null}



      {props.filter_data.length > 0 ? <><div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.filter_data[1].displayName}`} aria-expanded="false" aria-controls="flush-collapseOne" style={{ boxShadow: "none" }}>
              {props.filter_data[1].displayName}
            </button>
          </h2>
          <div id={props.filter_data[1].displayName} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">

              <ul className='list-group'>
                {
                  props.filter_data[1].value.map((val, index)=>{
                    return val.selectable == true ? <li key={index} className='list-group-item'><a href="#">{val.refvalue}</a></li> : null
                  })
                }
              </ul>

            </div>
          </div>
        </div>
      </div></> : null}


      {props.filter_data.length > 0 ? <><div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${props.filter_data[3].displayName}`} aria-expanded="false" aria-controls="flush-collapseOne" style={{ boxShadow: "none" }}>
              {props.filter_data[3].displayName}
            </button>
          </h2>
          <div id={props.filter_data[3].displayName} className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body">
              null

            </div>
          </div>
        </div>
      </div></> : null}

    </>
  )
}

export default LeftSection
