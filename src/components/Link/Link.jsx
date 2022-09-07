import { NavLink } from "react-router-dom";
import './Link.scss';

export default ({title, link}) => {
    return (
      <NavLink to={link} className={({isActive}) => 'link ' + (isActive ? ' link_active' : '')}>
        {title}
      </NavLink>
    );
};
