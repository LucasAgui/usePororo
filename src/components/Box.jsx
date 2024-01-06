import { useState } from 'react';
import Close from '../Icons/Close';
import Minimize from '../Icons/Minimize';

function Box({ children }) {
	const [isOpen, setIsOpen] = useState(true);
	return (
		<div className="box">
			<button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
				{isOpen ? (
					<Minimize className={'icon'} />
				) : (
					<Close className={'icon'} />
				)}
			</button>
			{isOpen && children}
		</div>
	);
}

export default Box;
