import { useState } from 'react';
import sprite from '../assets/svgs/sprite.svg';
import Close from '../Icons/Close';
import Minimize from '../Icons/Minimize';

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="box">
			<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? <Minimize /> : <Close />}
			</button>
			{isOpen && children}
		</div>
	);
}

export default Box;
