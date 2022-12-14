import { Link } from 'react-scroll';
import { HandySvg } from 'handy-svg';
import heroText from '../../static/icon/hero-text.svg';
import arrowDown from '../../static/icon/arrow-down.svg';

import './Hero.scss';


const Hero = () => {
	return (
		<section className="hero outer">
			<div className="container">
				<div className="offer">
					<h1>
						<HandySvg
							className='hero__text'
							src={heroText}
						/>
					</h1>
					<p>
						Киберспортивный онлайн турнир для студентов Северского промышленного колледжа и школьников г. Северска по дисциплине CS:GO. <br />Генеральный партнёр турнира –<br />ОГБПОУ Северский промышленный колледж.
					</p>
				</div>
				<Link className='scroll-down' to='next-game' spy={true} smooth={true} duration={1000}>
					<HandySvg src={arrowDown} />
				</Link>
			</div>
		</section >
	);
}

export default Hero;