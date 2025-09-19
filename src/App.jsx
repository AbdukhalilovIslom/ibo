import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Basket from './pages/Basket';
import Games from './pages/Games';
import GamesView from './pages/GamesView';
import HomePage from './pages/HomePage';
import Replenishment from './pages/Replenishment';
import SubscriptionPage from './pages/SubscriptionPage';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
//comment
const App = () => {
	return (
		<Router>
			<div className='flex flex-col min-h-screen'>
				<Header />

				<main className='flex-1'>
					<Routes>
						<Route path='/' element={<HomePage />} />
						<Route path='/basket' element={<Basket />} />
						<Route path='/games' element={<Games />} />
						<Route path='/games/:id' element={<GamesView />} />
						<Route path='/replenish' element={<Replenishment />} />
						<Route path='/subscription' element={<SubscriptionPage />} />
					</Routes>
				</main>

				<Footer />
			</div>
			
		</Router>
	);
};

export default App;
