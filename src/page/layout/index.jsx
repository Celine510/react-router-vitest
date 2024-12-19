import { Outlet, Link } from 'react-router-dom';
import './index.css';

function Layout() {
  return (
    <>
      <div className="app-container">
        <header className="header">
          <div className="logo">Celine 10</div>
          <nav className="nav">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/blog">Blog</Link>
              </li>
              <li>
                <Link to="/sideProjects">SideProjects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              {/* 差連結至外部網站 */}
            </ul>
          </nav>
        </header>
        <main className="main-content">
          <Outlet />
        </main>
        <footer className="footer">
          <p>Copyright © 2024 HELLO WORLD ALL RIGHTS RESERVED</p>
          <div className="social-media">
            <a href="#">Instagram</a>
            <a href="#">Facebook</a>
            <a href="#">Threads</a>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Layout;
