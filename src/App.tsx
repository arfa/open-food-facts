import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { SearchProductDetails } from './pages/search/SearchProductDetails';
import { SearchProduct } from './pages/search/SearchProduct';
import Layout from './components/Layout';
import { About } from './pages/about/About';

const navList = [
  { label: 'Search', to: '/', activeOnlyWhenExact: true },
  { label: 'About', to: '/about' },
];

function App() {
  return (
    <Router>
      <Layout brand='OPEN FOOD FACTS' navList={navList}>
        <Switch>
          <Route exact path='/'>
            <SearchProduct />
          </Route>
          <Route path='/product/:id'>
            <SearchProductDetails />
          </Route>
          <Route path='/about'>
            <About />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
