import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import Gallerie from "./components/Gallerie";
import MyFooter from "./components/MyFooter";
import { useState } from "react";

function App() {
  const [State, setState] = useState(null);
  
  return (
    <div className="body">
      <MyNavbar searchValue={(e) => setState(e )} />
      <Gallerie searchVal={State} />
      <MyFooter />
    </div>
  );
}

export default App;
