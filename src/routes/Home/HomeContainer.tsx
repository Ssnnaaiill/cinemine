import React, { Component } from "react";
import { HomePresenter } from "./HomePresenter";
import { movieApi } from "../../api";

class HomeContainer extends Component {
  state = {
    nowPlaying: null,
    popular: null,
    upcoming: null,
    error: null,
    loading: true,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying(1);
      const {
        data: { results: popular },
      } = await movieApi.popular(1);
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming(1);
      this.setState({ nowPlaying, popular, upcoming, loading: true });
    } catch (error) {
      this.setState({
        error: error.message,
      });
    } finally {
      this.setState({
        loading: false,
      });
    }
  }

  render() {
    const { nowPlaying, upcoming, popular, error, loading } = this.state;
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}

export default HomeContainer;
