import { useState } from 'react';
import sprite from '../assets/svgs/sprite.svg';

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="box">
			<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? (
					<svg className="icon">
						<use href={sprite + '#minimize'}></use>
					</svg>
				) : (
					<svg className="icon">
						<use href={sprite + '#close'}></use>
					</svg>
				)}
			</button>
			{isOpen && children}
		</div>
	);
}

export default Box;
