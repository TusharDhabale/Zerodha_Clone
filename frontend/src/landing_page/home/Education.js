import React from "react";

function Education() {
  return (
    <div className="conatainer mt-5">
      <div className="row">
        <div className="col-6">
          <img src="media/education.svg" alt="Education svg" style={{width:"70%"}}/>
        </div>
        <div className="col-6">
                 <h1 className='mb-3 fs-2'> Free and Open market education</h1>
                <p> Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                <a href="https://zerodha.com/varsity/" style={{ textDecoration: "none" }}>
              Versity{" "} 
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            <p className="mt-5"> TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                <a href="https://tradingqna.com/" style={{ textDecoration: "none" }}>
             TradingQ&A{" "} 
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
            </div>
        </div>
      </div>
     
  );
}

export default Education;
