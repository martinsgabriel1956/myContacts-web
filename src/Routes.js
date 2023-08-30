import { Switch, Route } from 'react-router-dom';
import { EditContact, Home, NewContact } from './pages';

export function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/new" component={NewContact} />
      <Route path="/edit/:id" component={EditContact} />
    </Switch>
  );
}
