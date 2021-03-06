import React, { Component } from "react";
import { MovieDetailPresenter } from "./MovieDetailPresenter";
import { movieApi } from "../../api";

interface IProps {
  match: {
    params: {
      id: string;
    };
  };
  history: {
    push: any;
  };
}

interface IState {
  result: any;
  cast: any;
  directors: any;
  producers: any;
  writers: any;
  editors: any;
  cinematographies: any;
  productionDesigns: any;
  composers: any;
  costumes: any;
  creditIndex: number;
  error: string | null;
  loading: boolean;
}

class MovieDetailContainer extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      result: null,
      cast: null,
      directors: null,
      producers: null,
      writers: null,
      editors: null,
      cinematographies: null,
      productionDesigns: null,
      composers: null,
      costumes: null,
      creditIndex: 2,
      error: null,
      loading: true,
    };
  }

  async componentDidMount() {
    try {
      const {
        match: {
          params: { id },
        },
        history: { push },
      } = this.props;
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }

      try {
        const { data: result } = await movieApi.detail(parsedId);
        const { data: credit } = await movieApi.credit(parsedId);
        const { cast } = credit;
        const { crew } = credit;
        const directors = crew.filter(
          (people: any) => people.department === "Directing"
        );
        const producers = crew.filter(
          (people: any) => people.department === "Production"
        );
        const writers = crew.filter(
          (people: any) => people.department === "Writing"
        );
        const editors = crew.filter(
          (people: any) => people.department === "Editing"
        );
        const cinematographies = crew.filter(
          (people: any) => people.department === "Camera"
        );
        const productionDesigns = crew.filter(
          (people: any) => people.department === "Art"
        );
        const composers = crew.filter(
          (people: any) => people.department === "Sound"
        );
        const costumes = crew.filter(
          (people: any) => people.department === "Costume & Make-Up"
        );

        this.setState({
          result,
          cast,
          directors,
          producers,
          writers,
          editors,
          cinematographies,
          productionDesigns,
          composers,
          costumes,
          loading: true,
        });
      } catch (error) {
        this.setState({ error: error.message });
      } finally {
        this.setState({ loading: false });
      }
      this.setState({ loading: true });
    } catch (error) {
      this.setState({ error: error.message });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleCreditIndexChange = (creditIndex: number) => {
    this.setState({ creditIndex });
  };

  render() {
    const {
      result,
      cast,
      directors,
      producers,
      writers,
      editors,
      cinematographies,
      productionDesigns,
      composers,
      costumes,
      creditIndex,
      error,
      loading,
    } = this.state;

    return (
      <MovieDetailPresenter
        result={result}
        cast={cast}
        directors={directors}
        producers={producers}
        writers={writers}
        editors={editors}
        cinematographies={cinematographies}
        productionDesigns={productionDesigns}
        composers={composers}
        costumes={costumes}
        creditIndex={creditIndex}
        error={error}
        loading={loading}
        handleCreditIndexChange={this.handleCreditIndexChange}
      />
    );
  }
}

export default MovieDetailContainer;
