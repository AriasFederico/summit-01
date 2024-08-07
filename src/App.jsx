import './App.css';
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom';
import { Home } from './pages/home/Home';
import { Header } from './components/Header';
import { Provider } from './provider/Provider';

function App() {
	return (
		<BrowserRouter>
			<Provider>
				<Header />
				<Routes>
					<Route index path='/' element={<Home />} />
				</Routes>
			</Provider>
		</BrowserRouter>
	);
}

export default App;
