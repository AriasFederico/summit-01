import { Hero } from './components/Hero/Hero.jsx';
import { Calc } from '../home/components/Calc/Calc.jsx';

import { Functionalities } from './components/Functionalities/Functionalities';

export const Home = () => {
	return (
		<>
			<Hero />
			<Calc />
			<Functionalities />
		</>
	);
};
