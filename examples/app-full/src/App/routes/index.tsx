import { Router } from "@smartb/archetypes-ui-providers";
import {Route} from "react-router-dom";

export const AppRouter = () => {
  return (
    <Router>
      <Route exact path="/" >
        Home
      </Route>
    </Router>
  );
};
