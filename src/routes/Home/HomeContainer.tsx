import React, { Component } from "react";
import { HomePresenter } from "./HomePresenter";
import { movieApi } from "../../api";

interface IState {
  movies: any;
  error: string | null;
  loading: boolean;
}

class HomeContainer extends Component<{}, IState> {
  state = {
    movies: null,
    error: null,
    loading: false,
  };

  async componentDidMount() {
    try {
      const {
        data: { results: movies },
      } = await movieApi.popular(1);
      this.setState({
        movies: movies.slice(0, 10),
        loading: true,
      });
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
    const { movies, error, loading } = this.state;
    return <HomePresenter movies={movies} error={error} loading={loading} />;
  }
}

export default HomeContainer;
