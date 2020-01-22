import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import GlobalStyles from './styled/GlobalStyles';
import InitialState from './components/InitialState';
import Header from './components/Header';
import Movie from './components/Movie';
import Sidebar from './components/Sidebar';

axios.defaults.baseURL = 'https://api.tvmaze.com/singlesearch/shows';

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyledMain = styled.main`
  display: flex;
  padding-top: 80px;
  min-height: calc(100vh);
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initState: true,
      searchQuery: '',
      movie: {},
      seasonFilter: null,
      filteredEpisodes: [],
      isLoading: false,
    };
  }

  handlesearchQueryChange = e => {
    this.setState({ searchQuery: e.currentTarget.value });
  };

  handleSearch = async e => {
    e.preventDefault();
    this.setState({
      initState: false,
      movie: {},
      seasonFilter: null,
      filteredEpisodes: [],
      isLoading: true,
    });

    try {
      const { data: movie } = await axios.get(
        `?q=${this.state.searchQuery}&embed=episodes`
      );

      this.setState({ movie });
    } catch (error) {
      console.log('Error', error.name);
    }

    this.setState({ isLoading: false });
  };

  handleEpisodesVisibility = seasonFilterValue => {
    this.setState({ seasonFilter: seasonFilterValue });

    if (seasonFilterValue === null) {
      return this.setState({
        filteredEpisodes: this.state.movie._embedded.episodes,
      });
    }

    const filteredEpisodes = this.state.movie._embedded.episodes.filter(
      item => item.season === seasonFilterValue
    );

    this.setState({ filteredEpisodes });
  };

  render() {
    if (this.state.initState) {
      return (
        <>
          <GlobalStyles />
          <InitialState
            searchQuery={this.state.searchQuery}
            onsearchQueryChange={this.handlesearchQueryChange}
            onSearch={this.handleSearch}
          />
        </>
      );
    }

    return (
      <StyledApp>
        <GlobalStyles />
        <Header
          searchQuery={this.state.searchQuery}
          onsearchQueryChange={this.handlesearchQueryChange}
          onSearch={this.handleSearch}
        />
        <StyledMain>
          <Movie
            searchQuery={this.state.searchQuery}
            movie={this.state.movie}
            isLoading={this.state.isLoading}
            seasonFilter={this.state.seasonFilter}
            filteredEpisodes={this.state.filteredEpisodes}
          />
          <Sidebar
            movie={this.state.movie}
            seasonFilter={this.state.seasonFilter}
            filteredEpisodes={this.state.filteredEpisodes}
            onEpisodesVisible={this.handleEpisodesVisibility}
          />
        </StyledMain>
      </StyledApp>
    );
  }
}

export default App;
