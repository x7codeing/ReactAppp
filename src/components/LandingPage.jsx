// src/components/LandingPage.js
import { Link } from 'react-router-dom';
import '../style/LandingPage.css'; // تأكد من استيراد ملف CSS

const LandingPage = () => {
  return (
    <div className="landing-page">
      <img src="/140113-Oak-Alley,-South-Carolina.jpg" alt="Background" className="background-image" />
      <div className="content">
        <h1 style={{color:"white"}}>Paradise Nursery</h1>
        <p style={{color:"white"}}>Welcome to Paradise Nursery! We offer a variety of houseplants to brighten up your home.</p>
        <Link to="/products" className="get-started-button">Get Started</Link>
      </div>
    </div>
  );
};

export default LandingPage;
