import React from "react";
import { Route, Routes } from "react-router-dom";

// import SearchAppBar from "./component/SearchAppBar";

import ButtonAppBar from "./component/ButtonAppBar";
import ClickableLinkChips from "./component/ClickableLinkChips";
import HomePage from "./pages/HomePage";

import MorePage from "./pages/MorePage";
import NextPage from "./pages/NextPage";

const themes = {
  light: {
    foreground: "#000000",
    background: "#eeeeee",
  },
  dark: {
    foreground: "#ffffff",
    background: "#222222",
  },
};
export const ThemeContext = React.createContext(themes.light);
console.log("Theme light", ThemeContext);
function App() {
  return (
    <ThemeContext.Provider value={themes.dark}>
      <div
        style={{
          background: themes.dark.background,
          color: themes.dark.foreground,
        }}
      >
        <ButtonAppBar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/more/:id" element={<MorePage />}></Route>
          <Route path="/page/1" element={<HomePage />}></Route>
          <Route path="/page/2" element={<NextPage />}></Route>
        </Routes>
        <ClickableLinkChips></ClickableLinkChips>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
