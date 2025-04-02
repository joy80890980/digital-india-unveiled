
import { Link } from "react-router-dom";
import "../styles/main.css";
import DigitalIndiaLogo from "../assets/digital-india-logo.png";
import AboutImg from "../assets/about-image.jpg";

const About = () => {
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

      {/* About Content */}
      <section className="about-section">
        <h1>About Digital India</h1>
        <div className="about-content">
          <div className="about-image">
            <img src={AboutImg} alt="Digital India Initiative" />
          </div>
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>Digital India is a flagship program of the Government of India with a vision to transform India into a digitally empowered society and knowledge economy. The initiative includes plans to connect rural areas with high-speed internet networks, improve digital literacy, and make government services available electronically.</p>
            
            <h2>Our Vision</h2>
            <p>The vision of Digital India focuses on three key areas:</p>
            <ul>
              <li>Digital Infrastructure as a Utility to Every Citizen</li>
              <li>Governance and Services on Demand</li>
              <li>Digital Empowerment of Citizens</li>
            </ul>
            
            <h2>Key Objectives</h2>
            <p>The key objectives of Digital India include:</p>
            <ul>
              <li>To provide high-speed internet as a core utility for delivery of services to citizens</li>
              <li>To provide digital identity that is unique, lifelong, online, and authenticable to every citizen</li>
              <li>To provide mobile phone and bank account enabling citizen participation in digital and financial space</li>
              <li>To provide easy access to a Common Service Centre</li>
              <li>To provide shareable private space on a public cloud</li>
              <li>To provide safe and secure cyber space</li>
            </ul>
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

export default About;
