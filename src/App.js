import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  CHINESE_FOOD_API_URL,
  chineseFoodOptions,
  MEXICAN_FOOD_API_URL,
  mexicanFoodOptions,
  COCTAIL_API_URL,
  coctailOptions,
  CAKES_API_URL,
  cakesOptions,
  VEGAN_FOOD_API_URL,
  veganFoodOptions,
} from "./api";
import Main from "./components/main/main";
import Home from "./components/home/home";
import Thematic from "./components/thematic/thematic";
import BigCard from "./components/big-card/big-card";


function App() {
  const [theme, setTheme] = useState("home");
  const handleChangeTheme = (newTheme) => {
    setTheme(newTheme);
  };
  const [routingForVF, setRoutingForVF] = useState(null);

  function activeRoutingFood(newRoutes) {
    setRoutingForVF(
      newRoutes[0].map((food) => {
        return (
          <Route
            key={food.id}
            path={`/${newRoutes[3]}/${food.id}`}
            element={
              <BigCard id={food.id} theme={newRoutes[3]} url={newRoutes[1]} opt={newRoutes[2]} />
            }
          />
        );
      })
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main theme={theme} />}>
          <Route
            index
            element={<Home theme={"home"} changeTheme={handleChangeTheme} />}
          />
          <Route
            path={"/cakes"}
            element={
              <Thematic
                theme={"cakes"}
                changeTheme={handleChangeTheme}
                url={CAKES_API_URL}
                opt={cakesOptions}
                activeRoutingFood={activeRoutingFood}
              />
            }
          />
          <Route
            path={"/vegan-food"}
            element={
              <Thematic
                theme={"vegan-food"}
                changeTheme={handleChangeTheme}
                url={VEGAN_FOOD_API_URL}
                opt={veganFoodOptions}
                activeRoutingFood={activeRoutingFood}
              />
            }
          ></Route>
          {routingForVF}
          <Route
            path={"/mexican-food"}
            element={
              <Thematic
                theme={"mexican-food"}
                changeTheme={handleChangeTheme}
                url={MEXICAN_FOOD_API_URL}
                opt={mexicanFoodOptions}
                activeRoutingFood={activeRoutingFood}
              />
            }
          />
          <Route
            path={"/chinese-food"}
            element={
              <Thematic
                theme={"chinese-food"}
                changeTheme={handleChangeTheme}
                url={CHINESE_FOOD_API_URL}
                opt={chineseFoodOptions}
                activeRoutingFood={activeRoutingFood}
              />
            }
          />
          <Route
            path={"/cocktails"}
            element={
              <Thematic
                theme={"cocktails"}
                changeTheme={handleChangeTheme}
                url={COCTAIL_API_URL}
                opt={coctailOptions}
                activeRoutingFood={activeRoutingFood}
              />
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
