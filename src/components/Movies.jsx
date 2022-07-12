import { Movie } from "./Movie";

function Movies(props) {
  const { movies = [] } = props;
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Movie
              key={movie.imdbID}
              Title={movie.Title}
              Year={movie.Year}
              imdbID={movie.imdbID}
              Type={movie.Type}
              Poster={movie.Poster}
            />
          );
        })
      ) : (
        <h4>Nothing found</h4>
      )}
    </div>
  );
}
export { Movies };
