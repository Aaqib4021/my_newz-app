import { useState } from "react";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [themeName, setThemeName] = useState("Light");

  return (
    <Provider store={appStore}>
      <div>
        <Body themeName={themeName} setThemeName={setThemeName} />
      </div>
    </Provider>
  );
}

export default App;
