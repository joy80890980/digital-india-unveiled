
import { Link } from "react-router-dom";
import "../styles/main.css";
import DigitalIndiaLogo from "../assets/digital-india-logo.png";
import ContactImg from "../assets/contact-image.jpg";

const Contact = () => {
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

      {/* Contact Content */}
      <section className="contact-section">
        <h1>Contact Us</h1>
        <div className="contact-container">
          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input type="text" id="subject" name="subject" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows={6} required></textarea>
              </div>
              <button type="submit" className="submit-btn">Send Message</button>
            </form>
          </div>
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-item">
              <div className="info-icon location"></div>
              <div className="info-text">
                <h3>Address</h3>
                <p>Electronics Niketan, 6, CGO Complex, Lodhi Road, New Delhi - 110003</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon phone"></div>
              <div className="info-text">
                <h3>Phone</h3>
                <p>+91-11-24301756</p>
                <p>+91-11-24301757</p>
              </div>
            </div>
            <div className="info-item">
              <div className="info-icon email"></div>
              <div className="info-text">
                <h3>Email</h3>
                <p>feedback@digitalindia.gov.in</p>
                <p>support@digitalindia.gov.in</p>
              </div>
            </div>
            <div className="contact-image">
              <img src={ContactImg} alt="Digital India Contact" />
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

export default Contact;
