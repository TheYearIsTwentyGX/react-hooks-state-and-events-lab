import React, {useState} from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  const [theme, setTheme] = useState("App light");
  const appClass = false ? "App dark" : "App light"

  function toggleTheme() {
    setTheme(theme === "App light" ? "App dark" : "App light");
  }

  return (
    <div className={theme}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleTheme}>Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
