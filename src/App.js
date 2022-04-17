import './frontend/commonstyles/Globalstyles.css'
import Navbar from "./frontend/commoncomponents/navbar/navbar";
import Navigator from "./frontend/navigation/navigator";
import { UseTheme } from "./frontend/context/store/theme";





function App() {
  const { theme } = UseTheme()
  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Navigator />
    </div>
  );
}

export default App;
