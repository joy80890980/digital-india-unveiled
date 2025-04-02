
import { Link } from "react-router-dom";
import "../styles/main.css";
import DigitalIndiaLogo from "../assets/digital-india-logo.png";
import DigiLockerLogo from "../assets/logos/digilocker.png";
import DigiLockerDetail from "../assets/details/digilocker-detail.jpg";

const DigiLocker = () => {
  return (
    <div className="main-container">
      {/* Header */}
      <header>
        <div className="site-title">Digital India Unveiled</div>
        <nav className="navbar">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li className="dropdown">
              <span>Digital Global Goods</span>
              <div className="dropdown-content">
                <div className="dropdown-column">
                  <Link to="/digilocker">DigiLocker</Link>
                  <Link to="/upi">Unified Payments Interface (UPI)</Link>
                  <Link to="/umang">UMANG</Link>
                  <Link to="/api-setu">API Setu</Link>
                  <Link to="/e-courts">e-Courts</Link>
                  <Link to="/sidh">SIDH</Link>
                  <Link to="/e-office">e-Office</Link>
                  <Link to="/aarogya-setu">Aarogya Setu</Link>
                  <Link to="/esanjeevani">eSanjeevani</Link>
                  <Link to="/poshan-tracker">Poshan Tracker</Link>
                </div>
                <div className="dropdown-column">
                  <Link to="/cowin">Co-WIN</Link>
                  <Link to="/diksha">DIKSHA</Link>
                  <Link to="/gem">GeM</Link>
                  <Link to="/e-hospital">e-Hospital</Link>
                  <Link to="/ncd-platform">NCD Platform</Link>
                  <Link to="/aadhaar">Aadhaar</Link>
                  <Link to="/abdm">Ayushman Bharat Digital Mission</Link>
                  <Link to="/bharatnet">BharatNet</Link>
                  <Link to="/pm-wani">PM-WANI</Link>
                  <Link to="/cert-in">CERT-In</Link>
                </div>
                <div className="dropdown-column">
                  <Link to="/digiyatra">DigiYatra</Link>
                  <Link to="/swayam">SWAYAM</Link>
                  <Link to="/ndl">National Digital Library</Link>
                  <Link to="/parivahan-sewa">Parivahan Sewa</Link>
                  <Link to="/fastag">FASTag</Link>
                  <Link to="/vahan-sarathi">VAHAN & SARATHI</Link>
                  <Link to="/passport-seva">Passport Seva</Link>
                  <Link to="/enam">eNAM</Link>
                  <Link to="/kisan-suvidha">Kisan Suvidha</Link>
                  <Link to="/rapdrp">RAPDRP</Link>
                </div>
              </div>
            </li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* DigiLocker Content */}
      <section className="service-detail">
        <div className="service-header">
          <img src={DigiLockerLogo} alt="DigiLocker Logo" className="service-logo" />
          <h1>DigiLocker</h1>
        </div>
        
        <div className="service-content">
          <div className="service-image">
            <img src={DigiLockerDetail} alt="DigiLocker Interface" />
          </div>
          
          <div className="service-info">
            <h2>What is DigiLocker?</h2>
            <p>DigiLocker is a flagship initiative under Digital India program. It is a platform for issuance and verification of documents & certificates in a digital way, thus eliminating the use of physical documents. It is a secure cloud based platform for storage, sharing and verification of documents & certificates.</p>
            
            <h2>Key Features</h2>
            <ul>
              <li>Secure document wallet: Store all your important documents in digital format</li>
              <li>Digital document issuance: Various organizations can issue documents directly to your DigiLocker</li>
              <li>Digital document verification: Organizations can verify documents directly from your DigiLocker</li>
              <li>Electronic signature: Sign documents digitally</li>
              <li>Paperless governance: Reduce the need for physical documents</li>
            </ul>
            
            <h2>Leadership</h2>
            <div className="leadership-info">
              <div className="leader">
                <h3>Mr. Nand Kumaram</h3>
                <p>Position: P&CEO, NeGD</p>
                <p>Email: ceo-negd@digitalindia.gov.in</p>
              </div>
              <div className="leader">
                <h3>Mr. Debabrata Nayak</h3>
                <p>Position: Director, NeGD</p>
                <p>Email: dnayak@digitalindia.gov.in</p>
              </div>
            </div>
            
            <h2>Usage Statistics</h2>
            <div className="stats-container small">
              <div className="stat-box">
                <div className="stat-number">100+</div>
                <div className="stat-label">Million Users</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">2000+</div>
                <div className="stat-label">Issuers</div>
              </div>
              <div className="stat-box">
                <div className="stat-number">5.6+</div>
                <div className="stat-label">Billion Documents</div>
              </div>
            </div>
            
            <div className="action-buttons">
              <a href="https://digilocker.gov.in" target="_blank" rel="noopener noreferrer" className="action-btn">Visit DigiLocker Website</a>
              <a href="https://play.google.com/store/apps/details?id=com.digilocker.android" target="_blank" rel="noopener noreferrer" className="action-btn secondary">Download App</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="social-links">
          <a href="#" className="social-icon facebook">Facebook</a>
          <a href="#" className="social-icon twitter">Twitter</a>
          <a href="#" className="social-icon linkedin">LinkedIn</a>
          <a href="#" className="social-icon instagram">Instagram</a>
          <a href="#" className="social-icon youtube">YouTube</a>
        </div>
        <div className="footer-info">
          <p>© 2024. All rights reserved by NeGD under MeitY, Government of India.</p>
          <div className="footer-links">
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Use</Link>
            <Link to="/website-policy">Website Policy</Link>
          </div>
        </div>
        <a href="#" className="scroll-top">↑</a>
      </footer>
    </div>
  );
};

export default DigiLocker;
