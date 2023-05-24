import React from 'react'
 import '../App.css';
export default function Dashboard() {
  return (
    <>
    <h1>OverView</h1>
    <hr/>
    <div class="container text-center">
  <div class="row">
    <div class="col">
    <h3 className='box'>TotalQuotation</h3>
    <p className='box'>1</p>
    </div>
    <div class="col">
    <h3 className='box'>Totalitem</h3>
    <p className='box'>1</p>
    </div>
    <div class="col">
    <h3 className='box'>TotalSales(without GST)</h3>
    <p className='box'>15000.0</p>
    </div>
  </div>
</div>
{/* <div id="active_admin_content" class="without_sidebar">
        <div id="main_content_wrapper">
          <div id="main_content">
            <div>
              <div class="blank_slate_container" id="dashboard_default_message"></div>
              <div class="columns">
                <div class="column" style={{width: "32.0%", margin_right: "2%"}}>
                  <div class="panel">
                    <h3>Total Quotations</h3>
                    <div class="panel_contents">
                      <p>1</p>
                    </div>
                  </div>
                </div>
                <div class="column" style={{width:" 32.0%", margin_right:" 2%"}}>
                  <div class="panel">
                    <h3>Total Item</h3>
                    <div class="panel_contents">
                      <p>1</p>
                    </div>
                  </div>
                </div>
                <div class="column" style={{width: "32.0%"}}>
                  <div class="panel">
                    <h3>Total Sales(without GST)</h3>
                    <div class="panel_contents">
                      <p>14400.0</p>
                    </div>
                  </div>
                </div>
              <div style={{clear:"both"}}></div></div>
            </div>
          </div>
        </div>
      </div> */}
</>   
  )
}
