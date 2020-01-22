import React from 'react';
import ReactHtmlParser from 'react-html-parser';
import Spinner from './Spinner';
import EmptyResult from './EmptyResult';
import StyledMovie from '../styled/StyledMovie';
import StyledEpisodeList from '../styled/StyledEpisodeList';
import StyledEpisodeCard from '../styled/StyledEpisodeCard';
import MoviePoster from './MoviePoster';

const Movie = props => {
  const {
    searchQuery,
    movie,
    isLoading,
    seasonFilter,
    filteredEpisodes,
  } = props;

  if (isLoading) {
    return <Spinner />;
  }

  if (Object.keys(movie).length === 0) {
    return <EmptyResult searchQuery={searchQuery} />;
  }

  const renderedEpisodes =
    seasonFilter && movie._embedded
      ? filteredEpisodes
      : movie._embedded.episodes;

  return (
    <StyledMovie>
      <div className="Headline">
        <MoviePoster
          location="headline"
          src={
            movie.image
              ? movie.image.medium
              : 'https://via.placeholder.com/210x295'
          }
          alt={`Movie Title: ${movie.name}`}
        />

        <div className="Headline__Info">
          <h1>
            {movie.name} ({new Date(movie.premiered).getFullYear()})
          </h1>
          {ReactHtmlParser(movie.summary)}
          <p style={{ marginTop: 20 }}>
            {movie.genres.join(', ')} &nbsp; | &nbsp; {movie.language} &nbsp; |
            &nbsp; Premiered on {movie.premiered}
          </p>
          <p>
            Rating:{' '}
            <span style={{ color: '#e7711b', fontSize: '1.1em' }}>&#9734;</span>{' '}
            {movie.rating.average}
          </p>
          <p>Airing Status: {movie.status}</p>
          <p>
            <a
              href={movie.officialSite}
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit the official movie homepage
            </a>
          </p>
        </div>
      </div>

      <StyledEpisodeList>
        <h2>{seasonFilter ? `Season ${seasonFilter}` : 'All'} Episodes</h2>

        <ul>
          {renderedEpisodes.map(episode => (
            <StyledEpisodeCard key={episode.id}>
              <a href={episode.url} target="_blank" rel="noopener noreferrer">
                <MoviePoster
                  location="episode card"
                  src={
                    episode.image
                      ? episode.image.medium
                      : 'https://via.placeholder.com/250x140'
                  }
                  alt={`Movie Title: ${movie.name}; Season ${episode.season}, Episode ${episode.number}`}
                />

                <section className="Episode__Info">
                  <h3>{episode.name}</h3>
                  <p>
                    Season {episode.season} &nbsp; | &nbsp; Episode{' '}
                    {episode.number}
                  </p>
                  <p>Aired Date: {episode.airdate}</p>
                  <p></p>
                </section>
              </a>
            </StyledEpisodeCard>
          ))}
        </ul>
      </StyledEpisodeList>
    </StyledMovie>
  );
};

export default Movie;
