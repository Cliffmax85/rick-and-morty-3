import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import List from './views/Characters/List'

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/'>
          <List />
        </Route>
      </Switch>
    </>
  );
}
