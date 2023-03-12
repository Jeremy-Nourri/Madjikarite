// == Import
import WelcomePage from '../WelcomePage';
import { Route, Routes } from 'react-router-dom';
import { fetchProducts, fetchCategories } from '../../actions/products';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NavBar from '../NavBar';
import Footer from '../Footer';
import Header from 'src/components/Header';
import SearchResults from 'src/components/SearchResults';
import Category from '../Category';
import Terms from '../Terms';
import Error from '../Error404';
import Loader from '../Loader';

import './styles.scss';


// == Composant
function App() {

  const isLoading = useSelector((state) => state.products.isLoading);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []); // au 1er rendu

  if (isLoading === true) {
    return (
          <Loader />
    );
  }
  else if (isLoading === false) {
    return (
      <div className="app">
        <Header />
        <NavBar />
        <main>

          <Routes>
            <Route
              path="/"
              element={<WelcomePage />} />

            <Route
              path="/search"
              element={<SearchResults />} />

            <Route
              path="/category/:id"
              element={<Category />} />

            <Route
              path="/terms"
              element={<Terms />} />

            <Route
              path="*"
              element={<Error />} />
          </Routes>

        </main>
        <Footer />
      </div>
    );
  }
}


// == Export
export default App;
