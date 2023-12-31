import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import { HomePage } from './pages';
const App = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        ></Route>
      </Route>
    </Routes>
  );
};

export default App;
