import { Link } from "react-router-dom";
import "./small-card.css";

function SmallCard({ singleMenuData, theme }) {
  const difficulty = () => {
    if (singleMenuData.difficulty === "Easy") {
      return <span className="diff-easy">{singleMenuData.difficulty}</span>;
    } else if (singleMenuData.difficulty === "Medium") {
      return <span className="diff-medium">{singleMenuData.difficulty}</span>;
    } else {
      return <span className="diff-challange">{singleMenuData.difficulty}</span>;
    }
  };

  return (
    <Link to={singleMenuData.id} className={`small-card card${theme}`}>
      <img
        className="small-photo"
        src={singleMenuData.image}
        alt={singleMenuData.title}
      />
      <h2>{singleMenuData.title}</h2>
      <p>Difficulty: {difficulty()}</p>
    </Link>
  );
}
export default SmallCard;
