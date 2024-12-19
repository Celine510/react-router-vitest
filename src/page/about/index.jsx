import { Outlet, Link } from 'react-router-dom';
import './index.css';

function About() {
  return (
    <>
      <div className="about-container">
        <div className="about-nav">
          <Link to="/about/resume">Resume</Link>
          <Link to="/about/socialMedia">SocialMedia</Link>
        </div>
        <div className="outlet-content">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default About;
