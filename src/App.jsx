import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { DataProvider } from './context/DataContext';
import DetailPage from './pages/details';
import HomePage from './pages/home';

export default function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/product-detail" component={DetailPage} />
        </Switch>
      </DataProvider>
    </BrowserRouter>
  );
}
