import React from "react";

function Universe() {
  const partners = [
    {
      logo: "media/smallcaseLogo.png",
      alt: "Smallcase logo",
      description: "Thematic investment platform with curated baskets of stocks and ETFs.",
    },
    {
      logo: "media/streakLogo.png",
      alt: "Streak logo",
      description: "Systematic trading platform that allows you to create and backtest strategies without coding..",
    },
    {
      logo: "media/sensibullLogo.svg",
      alt: "Sensibull logo",
      description: "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      logo: "media/zerodhaFundhouse.png",
      alt: "Zerodha Fund House logo",
      description: "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      logo: "media/goldenpilogo.png",
      alt: "GoldenPi logo",
      description: "Access to bonds and fixed-income opportunities in one place.",
    },
    {
      logo: "media/dittoLogo.png",
      alt: "Ditto logo",
      description: "Personalized advice on life and health insurance and no mis-selling",
    },
  ];

  return (
    <section className="container mt-5 universe-section">
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted mb-0">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 align-items-stretch">
        {partners.map((partner) => (
          <div className="col" key={partner.alt}>
            <div className="h-100 d-flex flex-column align-items-center justify-content-center text-center p-4 universe-partner-card">
              <img
                src={partner.logo}
                alt={partner.alt}
                className="img-fluid universe-logo"
              />
              <p className="text-small text-muted mt-3 mb-0">
                {partner.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-5">
        <button className="btn btn-primary fs-5 px-4 universe-signup-btn">
          Sign up for free
        </button>
      </div>
    </section>
  );
}

export default Universe;