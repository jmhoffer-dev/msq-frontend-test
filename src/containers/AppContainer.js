import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import ScrollTop from '../components/ScrollTop';
import SearchShops from './SearchShops.js';
import ShopDetail from './ShopDetail.js';
import TopNav from '../components/TopNav.js';
import { Switch, Route, useHistory } from 'react-router-dom'

export default function AppContainer() {
  const history = useHistory()
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" style={{marginBottom: 150}}>
        <TopNav history={history} />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <SearchShops history={history} />} />
            <Route
              exact
              path="/shop/:id"
              component={ShopDetail} />
          </Switch>
      </Container>
      <ScrollTop />
    </React.Fragment>
  );
}
