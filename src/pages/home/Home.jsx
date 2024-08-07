import { Hero } from './components/Hero/Hero';
import { Calc } from './components/Calc/Calc';
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
