import './App.css';
import Header from './layouts/header/Header';
import AppRoutes from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>

    </div>
  );
}

export default App;
