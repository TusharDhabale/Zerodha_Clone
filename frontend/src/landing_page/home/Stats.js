import React from "react";

function Stats() {
  return (
    <div className="conatainer p-3">
      <div className="row p-5">
        <div className="col-6 p-5">
          <h1 className="fs-2 mb-5">Trust with confidence</h1>
          <h2 className="fs-4">Customer forst always</h2>
          <p className="text-muted">
            That's why 1.3+ crore customers trust Zerodha with ru3.5+ lakh
            crores worth of equity investments
          </p>

          <h2 className="fs-4">No spam or gimmicks</h2>
          <p className="text-muted">
            No gimmecks, spam, "gamification, or annoying push notfication. High
            quality apps that you use at your pace, the way you like
          </p>

          <h2 className="fs-4">The Zerodha universe</h2>
          <p className="text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30 +
            fintech stratups offer you tailored services specific to your needs
          </p>

          <h2 className="fs-4">Do better with money</h2>
          <p className="text-muted">
            with initiatives like Nudge and kill switch , we dont just
            facilitate transactions, but actively help you make better financial
            decisions
          </p>
        </div>
        <div className="col-6 p-5">
          <img src="media/ecosystem.png" alt="Zerodha ecosystem products" style={{ width: "90%" }} />
          <div className="text-center">
            <a href="https://zerodha.com/products/" className="mx-5" style={{ textDecoration: "none" }}>
              Explore our products{" "}
              <i className="fas fa-long-arrow-alt-right"> </i>
            </a>
            <a href="https://kite-demo.zerodha.com/" style={{ textDecoration: "none" }}>
              Try kite demo{" "} 
              <i className="fas fa-long-arrow-alt-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
