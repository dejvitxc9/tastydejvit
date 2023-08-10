import "./thematic.css";
import { useEffect, useState } from "react";
import Menu from "../menu/menu";
import { Route } from "react-router-dom";

import BigCard from "../big-card/big-card";

function Thematic({ theme, changeTheme, url, opt, activeRoutingFood }) {
  const [currentDay, setCurrentDay] = useState(pobierzDzisiejszyDzien());
  const [currentMenu, setCurrentMenu] = useState();

  function pobierzDzisiejszyDzien() {
    const todayDate = new Date();
    const todayNoDay = todayDate.getDate();
    return todayNoDay;
  }

  useEffect(() => {
    changeTheme(theme);
    setCurrentDay(pobierzDzisiejszyDzien());

    const foodMenu = fetch(`${url}`, opt);

    Promise.all([foodMenu])
      .then(async (response) => {
        const responseFoodMenu = await response[0].json();

        setCurrentMenu(responseFoodMenu);
        activeRoutingFood([responseFoodMenu, url, opt, theme]);
      })
      .catch((error) => {
        console.error("Błąd w pobieraniu danych:", error);
      });
  }, [theme]);

  return (
    <div className="main-content">
      <h1>Today's recommendation:</h1>
      <BigCard
        id={currentDay}
        theme={theme}
        url={url}
        opt={opt}
      />
      <h2>Menu</h2>
      {currentMenu && <Menu theme={theme} menuData={currentMenu} />}
    </div>
  );
}
export default Thematic;
