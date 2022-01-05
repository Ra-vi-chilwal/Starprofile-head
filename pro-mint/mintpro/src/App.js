
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.scss';

import StarProfile from "./component/EditStar-Header/StarProfile";
import { BrowserRouter as HashRouter,Switch,Route,Link, Routes} from "react-router-dom";
function App() {
  return (
   <>
  <HashRouter>
    <StarProfile />
    <Switch>
     
        
     <Route path="/StarProfile">
        <StarProfile />
     </Route>
    
    
 </Switch>
 </HashRouter>
   </>
  );
}

export default App;
