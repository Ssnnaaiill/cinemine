import React, { Component } from "react";
import { HomePresenter } from "./HomePresenter";
import { movieApi } from "../../api";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    popular: null,
    upcoming: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying }
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular }
      } = await movieApi.popular();
      const {
        data: { results: upcoming }
      } = await movieApi.upcoming();
      this.setState({ nowPlaying, popular, upcoming, loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { nowPlaying, popular, upcoming, error, loading } = this.state;

    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        upcoming={upcoming}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
