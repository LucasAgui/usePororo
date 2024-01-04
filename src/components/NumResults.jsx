function NumResults({ movies }) {
	return (
		<p className="num-results">
			Se encontraron <strong>{movies.length}</strong> resultados
		</p>
	);
}

export default NumResults;
