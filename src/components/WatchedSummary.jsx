import Monitoring from '../Icons/Monitoring';
import Movie from '../Icons/Movie';
import Star from '../Icons/Star';
import Time from '../Icons/Time';

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
					<Movie className={'icon'} />
					<span>{watched.length} totales</span>
				</p>
				<p>
					<Monitoring className={'icon'} />
					<span>{avgImdbRating.toFixed(2)}</span>
				</p>
				<p>
					<Star className={'icon'} />
					<span>{avgUserRating.toFixed(2)}</span>
				</p>
				<p>
					<Time className={'icon'} />
					<span>{avgRuntime} min</span>
				</p>
			</div>
		</div>
	);
}

export default WatchedSummary;
