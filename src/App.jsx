import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";

export default function App() {
  return (
    <>
      <Switch>
        <Route path='/'>
          <CharacterList />
        </Route>
      </Switch>
    </>
  );
}
