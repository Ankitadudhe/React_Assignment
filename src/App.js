import {Route,Switch,Redirect} from 'react-router-dom'
import AllQuotes from './pages/allQuotes';
import NewQuotes from './pages/newQuote'
import QuotesDeatail from './pages/quoteDetail'

function App() {
  return (
    <Switch>
      <Route path='/' exact>
<Redirect to="/quotes"/>
</Route>
<Route path='/quotes' exact>
<AllQuotes/>
</Route>
<Route path='/quotes/:quoteId'>
  <QuotesDeatail/>
</Route>
<Route path='/new-quotes'>
  <NewQuotes/>
</Route>
    </Switch>
  );
}

export default App;
