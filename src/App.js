import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import Header from './components/Header';

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      {/* <Routes>
        <Route path="/" element={} />
        <Route path="/categories" element={<Categories />} />
      </Routes> */}
    </BrowserRouter>
  </Provider>
);

export default App;
