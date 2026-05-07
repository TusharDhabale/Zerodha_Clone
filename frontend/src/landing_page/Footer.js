import React from "react";

function Footer() {
  const columns = [
    {
      title: "Account",
      links: [
        "Open demat account",
        "Minor demat account",
        "NRI demat account",
        "HUF demat account",
        "Commodity",
        "Dematerialisation",
        "Fund transfer",
        "MTF",
      ],
    },
    {
      title: "Support",
      links: [
        "Contact us",
        "Support portal",
        "How to file a complaint?",
        "Status of your complaints",
        "Bulletin",
        "Circular",
        "Z-Connect blog",
        "Downloads",
      ],
    },
    {
      title: "Company",
      links: [
        "About",
        "Philosophy",
        "Press & media",
        "Careers",
        "Zerodha Cares (CSR)",
        "Zerodha.tech",
        "Open source",
        "Referral program",
      ],
    },
    {
      title: "Quick links",
      links: [
        "Upcoming IPOs",
        "Brokerage charges",
        "Market holidays",
        "Economic calendar",
        "Calculators",
        "Markets",
        "Sectors",
        "Gift Nifty",
      ],
    },
  ];

  const legalNotes = [
    "Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF",
    "Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances",
    "Investments in securities market are subject to market risks; read all the related documents carefully before investing.",
    "Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.",
    "India's largest broker based on network as per NSE. NSE broker factsheet",
    "\"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary. Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.",
    "*Customers availing insurance advisory services offered by Ditto (Tactful Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.",
    "Fixed deposit products offered on this platform are third-party products (TPP) and are not Exchange traded products. These are offered through Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is acting solely as a distributor for these products. Any disputes arising with respect to such distribution activity will not have access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are regulated by the Reserve Bank of India (RBI).",
  ];

  const bottomLinks = [
    "NSE",
    "BSE",
    "MCX",
    "Terms & conditions",
    "Policies & procedures",
    "Privacy policy",
    "Disclosure",
    "For investor's attention",
    "Investor charter",
  ];

  return (
    <footer className="footer-shell">
      <div className="container py-4">
        <div className="row g-4 footer-grid">
          <div className="col-12 col-lg-3 footer-brand-column">
            <img
              src="media/logo.svg"
              alt="Zerodha"
              className="footer-logo"
            />
            <p className="footer-copy mb-3">&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>

            <div className="footer-socials mb-3">
              <a href="https://x.com" aria-label="X" className="footer-social-link">X</a>
              <a href="https://facebook.com" aria-label="Facebook" className="footer-social-link">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="https://instagram.com" aria-label="Instagram" className="footer-social-link">
                <i className="fab fa-instagram" />
              </a>
              <a href="https://linkedin.com" aria-label="LinkedIn" className="footer-social-link">
                <i className="fab fa-linkedin-in" />
              </a>
            </div>

            <div className="footer-socials footer-socials-secondary mb-4">
              <a href="https://youtube.com" aria-label="YouTube" className="footer-social-link footer-social-link-small">
                <i className="fab fa-youtube" />
              </a>
              <a href="https://whatsapp.com" aria-label="WhatsApp" className="footer-social-link footer-social-link-small">
                <i className="fab fa-whatsapp" />
              </a>
              <a href="https://telegram.org" aria-label="Telegram" className="footer-social-link footer-social-link-small">
                <i className="fab fa-telegram-plane" />
              </a>
            </div>

            <div className="footer-badges">
              <a href="https://play.google.com" aria-label="Get it on Google Play">
                <img src="media/googlePlayBadge.svg" alt="Google Play" className="footer-badge" />
              </a>
              <a href="https://www.apple.com/app-store/" aria-label="Download on the App Store">
                <img src="media/appstoreBadge.svg" alt="App Store" className="footer-badge" />
              </a>
            </div>
          </div>

          {columns.map((column) => (
            <div className="col-6 col-lg-2 footer-links-column" key={column.title}>
              <h2 className="footer-heading">{column.title}</h2>
              <ul className="footer-links-list">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="/" className="footer-link">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="footer-legal mt-4">
          {legalNotes.map((note) => (
            <p className="footer-legal-text mb-3" key={note}>
              {note}
            </p>
          ))}
        </div>

        <div className="footer-bottom-links">
          {bottomLinks.map((link) => (
            <a href="/" className="footer-bottom-link" key={link}>
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;