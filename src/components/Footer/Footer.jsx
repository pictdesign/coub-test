import { NavLink } from 'react-router-dom';
import './Footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer__link">
        logo
      </NavLink>
    </footer>
  );
}  

export default Footer;