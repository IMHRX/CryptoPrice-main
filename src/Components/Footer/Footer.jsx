import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-left">
          <div className="footer-logo">
            <img src="./bitcoin.png" alt="CryptoPrice" />
            <span>CryptoPrice</span>
          </div>
          <small>© {new Date().getFullYear()} CryptoPrice. All rights reserved.</small>
        </div>
        <div className="footer-right">
          <nav className="footer-nav">
            <Link to="/CryptoPrice/">Home</Link>
            <Link to="#">Compare</Link>
            <Link to="#">Watchlist</Link>
            <Link to="/CryptoPrice/dashboard">Dashboard</Link>
            <a href="https://Rohan-Rajak07.github.io/CryptoPrice" target="_blank" rel="noreferrer">Project</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
