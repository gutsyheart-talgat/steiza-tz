import './App.css';
import LogIn from './Pages/LogIn';
import { Route, BrowserRouter, Switch} from 'react-router-dom'
import Cabinet from './Pages/Cabinet';

function App() {
  /*В этом проекте используются роуты, так как в проекте несколько страниц. */
  return (
    <BrowserRouter>
        <Switch>
          <Route path="/" component={LogIn} exact/>
          <Route path="/cabinet" component={Cabinet} exact/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
