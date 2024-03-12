import React from 'react'

function Counter() {
  return (
    <>
<div className="container">
  <div className="row">
    <div className="col-sm-4">
      <div className="circle-wrapper">
        <div id='ga-btn' className="circle m-4"><span>Gift Aid</span></div>
      </div>
    </div>
    <div className="col-sm-4">
      <div className="circle-wrapper">
        <div id='nga-btn' className="circle m-4"><span>Not Gift Aid</span></div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Counter