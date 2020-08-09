import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { db } from '../firebase';
import ScrollToTop from '../helpers/scrollToTop';
import IdeaList from './IdeaList/IdeaList';
import Categories from './Categories/Categories';

class App extends React.Component {
  state = {
    categories: []
  };

  componentDidMount() {
    this.getCategories();
  }

  getCategories = async () => {
    await db.collection('categories')
      .orderBy('createdAt', 'asc')
      .onSnapshot(querySnapshot => {
        const docs = [];
        querySnapshot.forEach(doc => {
          docs.push({ ...doc.data(), id: doc.id });
        });
        this.setState({ categories: docs });
      });
  };

  render() {
    return (
      <>
        <BrowserRouter>
          <ScrollToTop>
            <Switch>
              <Route
                exact
                path='/'
                render={props => (
                  <IdeaList {...props} categories={this.state.categories} />
                )}
              />
              <Route
                path='/categories'
                render={props => (
                  <Categories {...props} categories={this.state.categories} />
                )}
              />
            </Switch>
          </ScrollToTop>
        </BrowserRouter>
        <ToastContainer />
      </>
    );
  }
}

export default App;
