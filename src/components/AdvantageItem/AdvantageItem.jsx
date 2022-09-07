import "./AdvantageItem.scss";

const AdvantageItem = ({ item }) => {
  return (
    <div className="advantage-item">
      <div className="advantage-item__content">
        <div
          className="advantage-item__icon"
          style={{ backgroundImage: `url(${item.icon})` }}
        ></div>
        <p className="advantage-item__text">{item.text}</p>
      </div>
      <div className="advantage-item__count">{item.id}</div>
    </div>
  );
};

export default AdvantageItem;
