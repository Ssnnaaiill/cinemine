import React, { SFC } from "react";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Loading, Message, Poster, Section } from "../../components";

const Container = styled.div`
  margin: 30rem auto;
`;

interface IProps {
  nowPlaying: any[] | null;
  popular: any[] | null;
  upcoming: any[] | null;
  error: string | null;
  loading: boolean;
}

export const HomePresenter: SFC<IProps> = ({
  nowPlaying,
  popular,
  upcoming,
  error,
  loading,
}) => (
  <>
    <Helmet>
      <title>Film | Cinemine </title>
    </Helmet>
    {loading ? (
      <Loading />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length !== 0 && (
          <Section title="Now Playing">
            {nowPlaying.map((movie) => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {popular && popular.length !== 0 && (
          <Section title="Popular">
            {popular.map((movie) => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length !== 0 && (
          <Section title="Upcoming">
            {upcoming.map((movie) => (
              <Poster
                key={movie.id}
                title={movie.title}
                id={movie.id}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                year={movie.release_date && movie.release_date.substring(0, 4)}
              />
            ))}
          </Section>
        )}
        {error && <Message color="#e74c3c" text={error} />}
      </Container>
    )}
  </>
);
