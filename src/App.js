import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';
import BookListContainer from './components/BooklistContainer';
import Categories from './components/Categories';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<BookListContainer />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);

export default App;
