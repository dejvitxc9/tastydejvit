import "./menu.css";
import SmallCard from "../small-card/small-card";

function Menu({ menuData, theme }) {
  return (
    <div className="menu-grid">
      {menuData.map((singleMenuData) => {
        return (
          <SmallCard
            key={singleMenuData.id}
            theme={theme}
            singleMenuData={singleMenuData}
          />
        );
      })}
    </div>
  );
}

export default Menu;
