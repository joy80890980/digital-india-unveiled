
import { Link } from "react-router-dom";
import "../styles/main.css";
import DigiYatraLogo from "../assets/logos/digiyatra.png";
import DigiYatraDetail from "../assets/details/digiyatra-detail.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const DigiYatra = () => {
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

      {/* Service Detail */}
      <div className="service-detail">
        <div className="service-header">
          <img src={DigiYatraLogo} alt="DigiYatra Logo" className="service-logo" />
          <h1>DigiYatra</h1>
        </div>

        <div className="service-content">
          <div className="service-image">
            <img src={DigiYatraDetail} alt="DigiYatra Interface" />
          </div>
          <div className="service-info">
            <h2>Overview</h2>
            <p>
              DigiYatra is an initiative by the Ministry of Civil Aviation that aims to make air travel paperless and hassle-free in India. 
              The platform leverages facial recognition technology to automate passenger verification at various checkpoints in airports, 
              including entry, security screening, and boarding.
            </p>
            
            <h2>Features</h2>
            <ul>
              <li>Facial recognition-based contactless passenger processing</li>
              <li>Paperless travel experience with digital boarding passes</li>
              <li>Automated passenger validation at airport entry points</li>
              <li>Seamless security check process without showing physical IDs</li>
              <li>Quick boarding without physical verification of boarding passes</li>
              <li>Optional biometric-based self-bag drop and check-in services</li>
              <li>Enhanced security with biometric authentication</li>
              <li>Data privacy protection through encrypted systems</li>
            </ul>

            <h2>Statistics</h2>
            <div className="stats-grid">
              <Card className="stat-card">
                <CardContent>
                  <div className="stat-title">Airports Deployed</div>
                  <div className="stat-value">10+</div>
                  <div className="stat-desc">Major airports across India</div>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent>
                  <div className="stat-title">Registered Users</div>
                  <div className="stat-value">5.2M+</div>
                  <div className="stat-desc">And growing daily</div>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent>
                  <div className="stat-title">Average Time Saved</div>
                  <div className="stat-value">30%</div>
                  <div className="stat-desc">Reduced processing time</div>
                </CardContent>
              </Card>
            </div>

            <h2>Leadership</h2>
            <div className="leadership-info">
              <div className="leader">
                <h3>Mr. Rajiv Bansal</h3>
                <p><strong>Position:</strong> Secretary, Civil Aviation</p>
                <p><strong>Contact:</strong> secy.moca@nic.in</p>
              </div>
              <div className="leader">
                <h3>DigiYatra Foundation</h3>
                <p><strong>Established:</strong> 2019</p>
                <p><strong>Type:</strong> Not-for-profit company</p>
              </div>
            </div>

            <div className="action-buttons">
              <Button asChild className="action-btn">
                <a href="https://www.digi-yatra.com/" target="_blank" rel="noopener noreferrer">
                  Official Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="action-btn secondary">
                <a href="https://play.google.com/store/apps/details?id=com.digiyatra.digiyatrafoundation&hl=en_IN" target="_blank" rel="noopener noreferrer">
                  Download App <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

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

export default DigiYatra;
