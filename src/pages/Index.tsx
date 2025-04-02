
import { Link } from "react-router-dom";
import "../styles/main.css";
import DigitalIndiaLogo from "../assets/digital-india-logo.png";
import Slide1 from "../assets/slide1.jpg";
import Slide2 from "../assets/slide2.jpg";
import Slide3 from "../assets/slide3.jpg";
import AadhaarLogo from "../assets/logos/aadhaar.png";
import UPILogo from "../assets/logos/upi.png";
import CoWINLogo from "../assets/logos/cowin.png";
import DigiLockerLogo from "../assets/logos/digilocker.png";
import AarogyaSetuLogo from "../assets/logos/aarogya-setu.png";
import DikshaLogo from "../assets/logos/diksha.png";
import UmangLogo from "../assets/logos/umang.png";
import ESanjeevaniLogo from "../assets/logos/esanjeevani.png";

const Index = () => {
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

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>India's Digital Awakening</h1>
          <p>
            Digital India Unveiled, your gateway to digital transformation. We showcase groundbreaking
            initiatives revolutionizing governance, finance,
            healthcare, and more. From UPI to DigiLocker,
            explore how technology enhances accessibility,
            security, and efficiency. Stay informed on
            innovations shaping the future.
          </p>
        </div>
        <div className="slideshow-container">
          <div className="slideshow">
            <img src={Slide1} alt="Digital India Initiative 1" className="slide" />
            <img src={Slide2} alt="Digital India Initiative 2" className="slide" />
            <img src={Slide3} alt="Digital India Initiative 3" className="slide" />
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics-section">
        <h2>Digital India Impact</h2>
        <div className="stats-container">
          <div className="stat-box">
            <div className="stat-number" data-target="1350">0</div>
            <div className="stat-label">Million Aadhaar IDs</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-target="9800">0</div>
            <div className="stat-label">Million UPI Transactions Monthly</div>
          </div>
          <div className="stat-box">
            <div className="stat-number" data-target="220">0</div>
            <div className="stat-label">Million DigiLocker Users</div>
          </div>
        </div>
      </section>

      {/* Digital Infrastructure Section */}
      <section className="dpi-section">
        <h2>Digital Public Infrastructure</h2>
        <div className="dpi-grid">
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={AadhaarLogo} alt="Aadhaar Logo" />
                <h3>Aadhaar</h3>
              </div>
              <div className="dpi-card-back">
                <p>India's biometric-based digital identity system.</p>
                <p><strong>Leader:</strong> Shri Bhuvnesh Kumar</p>
                <p><strong>Contact:</strong> ceo@uidai.gov.in</p>
                <Link to="/aadhaar" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={UPILogo} alt="UPI Logo" />
                <h3>UPI</h3>
              </div>
              <div className="dpi-card-back">
                <p>India's real-time digital payment system.</p>
                <p><strong>Leader:</strong> Mr. Dilip Asbe</p>
                <p><strong>Contact:</strong> ceo@npci.org.in</p>
                <Link to="/upi" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={CoWINLogo} alt="Co-WIN Logo" />
                <h3>Co-WIN</h3>
              </div>
              <div className="dpi-card-back">
                <p>India's digital vaccination management platform.</p>
                <p><strong>Leader:</strong> Ms. Deepti Gaur Mukerjee</p>
                <p><strong>Contact:</strong> ceo.nha@nha.gov.in</p>
                <Link to="/cowin" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={DigiLockerLogo} alt="DigiLocker Logo" />
                <h3>DigiLocker</h3>
              </div>
              <div className="dpi-card-back">
                <p>A secure cloud-based document storage system.</p>
                <p><strong>Leader:</strong> Mr. Nand Kumaram</p>
                <p><strong>Contact:</strong> ceo-negd@digitalindia.gov.in</p>
                <Link to="/digilocker" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={AarogyaSetuLogo} alt="Aarogya Setu Logo" />
                <h3>Aarogya Setu</h3>
              </div>
              <div className="dpi-card-back">
                <p>India's contact tracing and health information app.</p>
                <p><strong>Leader:</strong> Mr. IPS Sethi</p>
                <p><strong>Contact:</strong> dg@nic.in</p>
                <Link to="/aarogya-setu" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={DikshaLogo} alt="DIKSHA Logo" />
                <h3>DIKSHA</h3>
              </div>
              <div className="dpi-card-back">
                <p>An e-learning platform for teachers and students.</p>
                <p><strong>Leader:</strong> Dr. Amarendra P. Behera</p>
                <p><strong>Contact:</strong> jdciet.ncert@nic.in</p>
                <Link to="/diksha" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={UmangLogo} alt="UMANG Logo" />
                <h3>UMANG</h3>
              </div>
              <div className="dpi-card-back">
                <p>A unified mobile app for accessing e-governance services.</p>
                <p><strong>Leader:</strong> Mr. Nand Kumaram</p>
                <p><strong>Contact:</strong> ceo-negd@digitalindia.gov.in</p>
                <Link to="/umang" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
          
          <div className="dpi-card">
            <div className="dpi-card-inner">
              <div className="dpi-card-front">
                <img src={ESanjeevaniLogo} alt="eSanjeevani Logo" />
                <h3>eSanjeevani</h3>
              </div>
              <div className="dpi-card-back">
                <p>India's telemedicine platform for virtual healthcare consultations.</p>
                <p><strong>Leader:</strong> Mr. Magesh Ethirajan</p>
                <p><strong>Contact:</strong> dg@cdac.in</p>
                <Link to="/esanjeevani" className="learn-more">Learn More</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <h2>SOCIAL</h2>
        <div className="social-feeds">
          <div className="social-feed">
            <div className="social-header">Digital India on Twitter</div>
            <div className="social-content twitter-feed">
              {/* Twitter feed placeholder */}
              <p>Follow us on Twitter for latest updates</p>
            </div>
          </div>
          <div className="social-feed">
            <div className="social-header">Digital India on Facebook</div>
            <div className="social-content facebook-feed">
              {/* Facebook feed placeholder */}
              <div className="fb-post">
                <h4>Promoting Handmade Indian Products</h4>
                <p>Supporting local artisans and their crafts. #MakeInIndia #VocalForLocal</p>
              </div>
              <div className="fb-post">
                <h4>Swabhav Swachhata Campaign</h4>
                <p>Join us in the cleanliness drive as part of Swachh Bharat Abhiyan. #SHS2024</p>
              </div>
            </div>
          </div>
        </div>
        <div className="visitor-stats">
          <div className="visitor-box">
            <div className="visitor-number">5,522,273</div>
            <div className="visitor-label">Total Visitors</div>
          </div>
          <div className="visitor-box">
            <div className="visitor-number">7,601</div>
            <div className="visitor-label">Today's Visitors</div>
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="collaboration-section">
        <div className="collab-content">
          <p>Need a successful national-level project?</p>
          <h3>Let's Collaborate Together</h3>
          <Link to="/contact" className="collab-button">Connect with Us</Link>
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

export default Index;
