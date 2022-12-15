import "./styles.css";
import Home from './component/Home';
import SearchResult from "./component/SearchResult";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopResults from "./component/TopResults";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} >
            <Route path="home" element={<TopResults />} />
            <Route path='search' element={<SearchResult />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}
