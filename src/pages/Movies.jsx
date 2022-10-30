import { useSearchParams } from 'react-router-dom';
import { SearchBox } from 'components/SeearchBox';
import { useState } from 'react';
import { getMovieByName } from 'services/movieApi';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { useEffect } from 'react';
import { MoviesBox } from './Movies.styled';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState(() => searchParams.get('query') ?? '');
  // setQuery(searchParams.get('filter') ?? '');
  const searchQuery = searchParams.get('query');
  const onChangeFilter = query => {
    setQuery(query);
  };

  const onSearch = e => {
    e.preventDefault();
    // const value = e.target.value;
    setSearchParams(query !== '' ? { query: query } : {});
    // setQuery(value);
  };

  useEffect(() => {
    if (searchQuery) {
      getMovieByName(searchQuery).then(setMovies);
    }
  }, [searchQuery]);

  return (
    <MoviesBox>
      Movies
      <SearchBox
        value={query}
        onSearch={onSearch}
        onChangeFilter={onChangeFilter}
      />
      {movies && <MoviesList movies={movies} />}
      {movies && movies.length === 0 && (
        <div>There are not movies with such name</div>
      )}
    </MoviesBox>
  );
};

export default Movies;
