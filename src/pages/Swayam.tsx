
import { Link } from "react-router-dom";
import "../styles/main.css";
import SwayamLogo from "../assets/logos/swayam.png";
import SwayamDetail from "../assets/details/swayam-detail.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const Swayam = () => {
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
          <img src={SwayamLogo} alt="SWAYAM Logo" className="service-logo" />
          <h1>SWAYAM</h1>
        </div>

        <div className="service-content">
          <div className="service-image">
            <img src={SwayamDetail} alt="SWAYAM Interface" />
          </div>
          <div className="service-info">
            <h2>Overview</h2>
            <p>
              SWAYAM (Study Webs of Active Learning for Young Aspiring Minds) is a program initiated by 
              the Government of India to achieve the three cardinal principles of Education Policy: access, 
              equity, and quality. The objective is to take the best teaching-learning resources to all, 
              including the most disadvantaged, by leveraging information and communication technology.
            </p>
            
            <h2>Features</h2>
            <ul>
              <li>Free online courses from Class 9 till post-graduation</li>
              <li>Courses prepared by over 1,000 specially chosen faculty from across the country</li>
              <li>Video lectures, reading materials, self-assessment tests, and online discussions</li>
              <li>Credit transfer facility for completed courses</li>
              <li>Four quadrant approach - video lecture, reading material, discussion forum, assessment</li>
              <li>Courses available in multiple languages</li>
              <li>Certification upon successful completion of courses</li>
              <li>Integration with conventional education system through credit transfer</li>
            </ul>

            <h2>Statistics</h2>
            <div className="stats-grid">
              <Card className="stat-card">
                <CardContent>
                  <div className="stat-title">Courses Offered</div>
                  <div className="stat-value">3,000+</div>
                  <div className="stat-desc">Across various disciplines</div>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent>
                  <div className="stat-title">Registered Users</div>
                  <div className="stat-value">25M+</div>
                  <div className="stat-desc">From across India</div>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent>
                  <div className="stat-title">Participating Institutions</div>
                  <div className="stat-value">200+</div>
                  <div className="stat-desc">Including IITs, IIMs, and central universities</div>
                </CardContent>
              </Card>
            </div>

            <h2>Leadership</h2>
            <div className="leadership-info">
              <div className="leader">
                <h3>Prof. Anil D. Sahasrabudhe</h3>
                <p><strong>Position:</strong> Chairman, AICTE</p>
                <p><strong>Contact:</strong> chairman@aicte-india.org</p>
              </div>
              <div className="leader">
                <h3>Prof. B.K. Kuthiala</h3>
                <p><strong>Position:</strong> Chairman, SWAYAM Board</p>
                <p><strong>Contact:</strong> info@swayam.gov.in</p>
              </div>
            </div>

            <div className="action-buttons">
              <Button asChild className="action-btn">
                <a href="https://swayam.gov.in/" target="_blank" rel="noopener noreferrer">
                  Official Website <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild className="action-btn secondary">
                <a href="https://play.google.com/store/apps/details?id=in.gov.swayam.app" target="_blank" rel="noopener noreferrer">
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

export default Swayam;
