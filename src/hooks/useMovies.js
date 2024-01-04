import { useState, useEffect } from 'react';

const KEY = '27da3b5e';

export function useMovies(query) {
	const [movies, setMovies] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState('');
	useEffect(
		function () {
			// callback?.();

			const controller = new AbortController();
			async function fetchMovies() {
				try {
					setIsLoading(true);
					setError('');
					const res = await fetch(
						`http://www.omdbapi.com/?i=tt3896198&apikey=${KEY}&s=${query}`,
						{ signal: controller.signal }
					);

					if (!res.ok) throw new Error('Algo salió mal al buscar películas');

					const data = await res.json();
					if (data.Response === 'False')
						throw new Error('No se encontraron peliculas');

					setMovies(data.Search);
					setError('');
				} catch (err) {
					if (error.name !== 'AbortError') {
						console.log(err.message);
						setError('No se encontraron peliculas');
					}
				} finally {
					setIsLoading(false);
				}
			}

			if (query.length < 3) {
				setMovies([]);
				setError('');
				return;
			}
			fetchMovies();

			return function () {
				controller.abort();
			};
		},
		[query, error.name]
	);

	return { movies, isLoading, error };
}
