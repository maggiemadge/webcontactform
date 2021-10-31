import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./home";
import ViewList from "./viewList";
  import AddContact from "./saveContact";
  import style from './App.css';

export default function App(){
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/saveContact" component={AddContact} />
      <Route exact path="/viewList" component={ViewList} />
    </Switch>
  </BrowserRouter>
  );
}



