import React from 'react';
import StyledSidebar from '../styled/StyledSidebar';
import getMovieSeasons from '../utils/getMovieSeasons';

const Sidebar = props => {
  return (
    <StyledSidebar>
      <h2>Seasons</h2>

      <ol>
        {props.movie._embedded && (
          <li
            className="Season__Item"
            style={{ marginBottom: 10 }}
            onClick={() => props.onEpisodesVisible(null)}
          >
            All Seasons
          </li>
        )}

        {props.movie._embedded &&
          getMovieSeasons(props.movie._embedded.episodes).map(seasonNum => (
            <li
              key={seasonNum}
              className="Season__Item"
              onClick={() => props.onEpisodesVisible(seasonNum)}
            >
              Season {seasonNum}
              <ol className="Episode__List">
                {props.seasonFilter === seasonNum
                  ? props.filteredEpisodes.map(episode => (
                      <li key={episode.id}>
                        Episode {episode.number}: {episode.name}
                      </li>
                    ))
                  : null}
              </ol>
            </li>
          ))}
      </ol>
    </StyledSidebar>
  );
};

export default Sidebar;
