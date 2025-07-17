import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Basket from "./pages/Basket";
import Games from "./pages/Games";
import GamesView from "./pages/GamesView";
import Replenishment from "./pages/Replenishment";
import SubscriptionPage from "./pages/SubscriptionPage";

import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
//comment
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/games" element={<Games />} />
          <Route path="/games/:id" element={<GamesView />} />
          <Route path="/replenish" element={<Replenishment />} />
          <Route path="/subscription" element={<SubscriptionPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
