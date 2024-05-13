import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import NavigationBar from "./navigation/NavigationBar";

const App = () => {
  return (
    <div className={styles.App}>
      <NavigationBar />
    </div>
  );
};

export default App;
