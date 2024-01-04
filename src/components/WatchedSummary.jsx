import sprite from '../assets/svgs/sprite.svg';

const average = (arr) =>
	arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

function WatchedSummary({ watched }) {
	const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
	const avgUserRating = average(watched.map((movie) => movie.userRating));
	const avgRuntime = average(watched.map((movie) => movie.runtime));
	return (
		<div className="summary">
			<h2>Peliculas vistas</h2>
			<div>
				<p>
					<svg className="icon">
						<use href={sprite + '#film-outline'}></use>
					</svg>
					<span>{watched.length} totales</span>
				</p>
				<p>
					<svg className="icon">
						<use href={sprite + '#podium-outline'}></use>
					</svg>
					<span>{avgImdbRating.toFixed(2)}</span>
				</p>
				<p>
					<svg className="icon">
						<use href={sprite + '#star-outline'}></use>
					</svg>
					<span>{avgUserRating.toFixed(2)}</span>
				</p>
				<p>
					<svg className="icon">
						<use href={sprite + '#hourglass-outline'}></use>
					</svg>
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
}

export default WatchedSummary;
