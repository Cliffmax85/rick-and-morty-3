import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import List from './views/Characters/List';
import Detail from './views/Characters/Detail';

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/character/:id'>
          <Detail />
        </Route>
        <Route path='/'>
          <List />
        </Route>
      </Switch>
    </>
  );
}
