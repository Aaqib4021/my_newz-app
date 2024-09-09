import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";

function App() {
  const [themeName, setThemeName] = useState("Dark");

  return (
    <div>
      <Header themeName = {themeName} setThemeName = {setThemeName} />
      <Body themeName={themeName}/>
    </div>
  );
}

export default App;