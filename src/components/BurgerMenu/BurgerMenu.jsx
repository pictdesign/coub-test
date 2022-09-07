
import './BurgerMenu.scss';

const BurgerMenu = ({isActive, component}) => {
    return (
      <ul className={`burger-menu ${isActive ? "burger-menu_active" : ""}`}>
        
      </ul>
    );
  }


export default BurgerMenu;