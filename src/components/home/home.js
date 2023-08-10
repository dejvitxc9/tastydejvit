import React, { useEffect, useState } from "react";
import "./home.css";

function Home({ theme, changeTheme }) {

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);

  return (
    <div>
      <h2>Home page</h2>
      <h3>Welcome to the Recipe Website!</h3>
      <p>
        This website offers a wide selection of recipes for various dishes. You
        will find delicious breakfasts, lunches, desserts, and much more. Choose
        the category that interests you and enjoy cooking!
      </p>
    </div>
  );
}

export default Home;
