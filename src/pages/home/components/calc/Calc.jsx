import './Calc.scss';
import calc from '../../../../../public/banners/calc.png';
import list from '../../../../../public/banners/list.png';

export const Calc = () => {
	return (
		<section className='Calc'>
			<ImgP
				span={'ACCESO A 4 CALCULADORAS'}
				title={'Calculadoras Summit para la gestión de precios'}
				paragraph={
					'Calcula los precios de forma sencilla y eficiente. Utiliza nuestras calculadoras para mejorar tus estrategias de precios, aplicando porcentajes de ganancia y descuentos de forma precisa. En nuestra plataforma, encontrarás cuatro calculadoras especializadas: una para productos individuales, otra para aplicar aumentos y descuentos, y dos más para gestionar precios de productos por kilo o volumen. Todo diseñado para adaptarse a tus necesidades y facilitar la gestión de tu negocio.'
				}
				img={calc}
			/>
			<ImgP
				span={'LISTA DE HASTA 100 PRODUCTOS'}
				title={'Gestiona tu lista de precios'}
				paragraph={
					'Guarda y administra tus precios con facilidad. Mantén un registro organizado de tus productos y precios, y accede a ellos de manera rápida y precisa. Con Summit, puedes guardar hasta 100 productos, ya sea con precios por volumen o individuales, y almacenarlos en una lista accesible desde cualquier dispositivo. Solo necesitas iniciar sesión en tu cuenta para gestionar tus precios de manera eficiente, sin importar dónde te encuentres.'
				}
				img={list}
			/>
		</section>
	);
};

export const ImgP = ({ title, img, paragraph, span }) => {
	return (
		<div className='Calc-cont'>
			<img src={img} alt='funciones' className='Calc-img' />
			<div className='Calc-item'>
				<span className='Calc-span'>{span}</span>
				<h2 className='Calc-h2'>{title}</h2>
				<p className='Calc-p'>{paragraph}</p>
			</div>
		</div>
	);
};
