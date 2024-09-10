import { useState } from "react";
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
function App() {
  const [themeName, setThemeName] = useState("Light");
  return (
    <Provider store={appStore}>
      <div>
        <Header themeName={themeName} setThemeName={setThemeName} />
        <Body themeName={themeName} />
      </div>
    </Provider>
  );
}

export default App;
