import { NavLink } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "./Logo.scss";

const Logo = () => {
  return (
    <NavLink to="/" className="logo">
      <img src={logo} className="logo__image" alt="logo" />
      <h1 className="logo__title">logo</h1>
    </NavLink>
  );
};

export default Logo;
