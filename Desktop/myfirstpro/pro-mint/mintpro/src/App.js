
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.scss';
import Mainhead from "./component/Mainhead";
import Navhead from "./component/Navhead";
import Rside from "./component/Rside";

function App() {
  return (
   <>
    <Navhead />
    <Mainhead />
    <Rside />
    
   </>
  );
}

export default App;
