import AdvantageItem from '../AdvantageItem/AdvantageItem';
import './AdvantageList.scss';
import Advantages from "../../constants/Advantages";
import Infos from "../../constants/Infos";

const AdvantageList = () => {
  return (
    <section className="advantage-list">
      <h2 className="advantage-list__title">text_text</h2>
      <ul className="advantage-list__list">
        {
          Advantages.map((item) => {
            return (
              <li className="advantage-list__item" key={item.id}>
                <AdvantageItem item={item} />
              </li>
            )
          })
        }
      </ul>
    </section>
  );
};

export default AdvantageList;
