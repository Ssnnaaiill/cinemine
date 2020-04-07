import React, { SFC } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";

import { Loading, Section } from "../../components";
import { movieApi } from "../../api";

const Container = styled.div`
  margin: 5rem 0 10rem 0;
`;

const SectionContainer = styled.div`
  width: 55.5rem;
  margin: 0 auto;
`;

interface IProps {
  movies: any;
  error: string | null;
  loading: boolean;
}

export const HomePresenter: SFC<IProps> = ({ movies, error, loading }) =>
  loading ? (
    <Loading />
  ) : (
    <>
      <Helmet>
        <title>Home | Cinemine</title>
      </Helmet>
      <Container>
        <SectionContainer>
          <Section title="현재 상영중" getAPI={movieApi.nowPlaying} />
          <Section title="인기 작품" getAPI={movieApi.popular} />
          <Section title="개봉 예정작" getAPI={movieApi.upcoming} />
          <Section title="최고 평점작" getAPI={movieApi.topRated} />
        </SectionContainer>
      </Container>
    </>
  );
