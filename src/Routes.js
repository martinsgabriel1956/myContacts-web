import { Switch, Route } from 'react-router-dom';
import { Container as Home } from './pages/Home';
import { Container as EditContact } from './pages/EditContact';
import { Container as NewContact } from './pages/NewContact';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
