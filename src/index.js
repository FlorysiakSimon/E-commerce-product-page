import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './index.css'
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header';


render(
  
  <BrowserRouter>
  <Header/>
    <Routes>
      <Route path="/" element={<HomePage />}>
      </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);

