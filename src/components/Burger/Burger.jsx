import "./Burger.scss";

const Burger = ({ toggleBurger, isActive }) => {
  return (
    <div className="burger" onClick={toggleBurger}>
      <div
        className={`burger__button ${isActive ? "burger__button_active" : ""}`}
      >
        <span className="burger__button-lines"></span>
      </div>
    </div>
  );
};

export default Burger;
