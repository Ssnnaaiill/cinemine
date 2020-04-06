import React, { SFC } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
// import { Rate } from "antd";

import { Loading } from "../../components";
import { Credit } from "../../components";

// import placeholder image file

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  padding: 3rem;
`;

interface IBackdropProps {
  imageUrl: string;
}

const Backdrop = styled("div")<IBackdropProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 1200px;
  height: 675px;
  left: 50%;
  transform: translateX(-50%);
  background-image: linear-gradient(
      to right,
      rgba(20, 24, 28, 1),
      transparent,
      rgba(20, 24, 28, 1)
    ),
    linear-gradient(to bottom, transparent, rgba(20, 24, 28, 1)),
    url(${props => props.imageUrl});
  background-position: center center;
  background-size: cover;
  z-index: 0;
`;

const Content = styled.div`
  padding-top: 25rem;
  padding-bottom: 2rem;
  width: 60rem;
  margin: 0 auto;
`;

const MediaInfo = styled.div`
  margin-right: 3rem;
  width: 15rem;
  float: left;
`;

const Cover = styled.img`
  width: 15rem;
  background: #161718;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.35);
  border: 1px solid rgba(221, 238, 255, 0.35);
  display: inline-block;
  overflow: hidden;
  position: relative;
  border-radius: 4px;
`;

/* Film Status */

const FilmStats = styled.ul`
  clear: both;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.6rem 0 0.3rem;
  text-align: center;
  list-style: none;
`;

const FilmStat = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0.4rem;
  font-size: inherit;
  line-height: 1.38461538;
`;

const FilmStatIcon = styled.i`
  font-size: 0.8rem;
  margin-right: 0.3rem;
`;

const FilmStatText = styled.span``;

/* Watch Info */

const Watch = styled.div`
  margin-top: 1.2rem;
  border: 1px solid #303840;
  background-color: #14181c;
  overflow: hidden;
  border-radius: 3px;
`;

const WatchTitle = styled.div`
  background: #242c34;
  color: #9ab;
  margin: 0;
  padding: 9px 12px;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.075em;
`;

const WatchPanel = styled.p`
  color: #9ab;
  margin: 10px;
  margin-bottom: 1em;
  line-height: 1.5;
`;

/* Trailer Info */

const TrailerIcon = styled.i`
  display: inline-block;
  vertical-align: top;
  position: relative;
  top: auto;
  left: auto;
  font-size: 1rem;
  margin-right: 0.4rem;
`;

const TrailerText = styled.div`
  display: inline-block;
  vertical-align: middle;
  font-size: 12px;
  line-height: 1.66666667;
  min-width: 75px;
`;

const MoreService = styled.div`
  display: block;
  padding: 6px 10px 4px;
  text-transform: uppercase;
  letter-spacing: 0.075em;
  font-size: 0.76923077rem;
  line-height: 1.3;
  border-top: 1px solid #303840;
  color: #678;
`;

const MoreServiceText = styled.div``;

const TextInfo = styled.div`
  position: relative;
  width: 42rem;
  float: right;
`;

/* Title */

const TitleSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: -0.2rem 0 2rem;
`;

const Title = styled.div`
  display: inline;
  margin: 0 0.5rem 0 0;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 900;
  font-size: 2.46153846rem;
  margin: 0 0 0.6rem;
  color: #fff;
  line-height: 1.2;
`;

const Subtitle = styled.div`
  display: inline;
  max-width: 100%;
  font-size: 17px;
  line-height: 1.6;
  color: #9ab;
  text-shadow: #000 2px 0 5px;
  margin: 0;
  white-space: nowrap;
  font-family: "Nanum Myeongjo", serif;
  font-weight: 400;
  letter-spacing: 0.02em;
`;

const SideInfoSection = styled.div`
  padding-bottom: 3rem;
  width: 25rem;
  float: left;
`;

const Overview = styled.div`
  overflow: hidden;
  font-size: 1rem;
  line-height: 1.5625;
  margin-bottom: 0.625em;
`;

const Divider = styled.span`
  margin: 0 0.2rem;
`;

// const Sidebar = styled.aside`
//   padding-bottom: 3rem;
//   float: right;
//   width: 15rem;
// `;

// const UserPanel = styled.ul`
//   margin-bottom: 1.5rem;
//   font-size: 0.8rem;
//   color: #bcd;
// `;

// const UserActionContainer = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const UserAction = styled.li`
//   padding: 1rem 0;
//   width: 5rem;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   background-color: #456;
//   margin-bottom: 1px;
// `;

// const UserActionIcon = styled.i`
//   font-size: 2rem;
//   margin-bottom: 0.5rem;
// `;

// const UserActionText = styled.span``;

// const RatingContainer = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   padding: 1rem 0;
//   margin-bottom: 1px;
//   background-color: #456;
// `;

// const RatingText = styled.span`
//   margin-bottom: 0.2rem;
// `;

// const AddReview = styled.div`
//   background-color: #456;
//   padding: 1rem 0;
//   margin-bottom: 1px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const AddList = styled.div`
//   background-color: #456;
//   padding: 1rem 0;
//   margin-bottom: 1px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// const Share = styled.div`
//   background-color: #456;
//   padding: 1rem 0;
//   border-bottom-left-radius: 4px;
//   border-bottom-right-radius: 4px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

interface IProps {
  result: any;
  credit: any;
  directors: any;
  creditIndex: number;
  error: string | null;
  loading: boolean;
  handleCreditIndexChange: (creditIndex: number) => void;
}

export const MovieDetailPresenter: SFC<IProps> = ({
  result,
  credit,
  directors,
  creditIndex,
  error,
  loading,
  handleCreditIndexChange
}) =>
  loading ? (
    <Loading />
  ) : (
    <Container>
      <Helmet>
        <title>{result.title} | Cinemine</title>
      </Helmet>
      <Backdrop
        imageUrl={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
      />
      <Content>
        <MediaInfo>
          <Cover
            src={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : "https://dummyimage.com/800x600/000/fff"
            }
          />
          <FilmStats>
            <FilmStat>
              <Link to={`/film/${result.id}/members`}>
                <FilmStatIcon
                  style={{ color: "chartreuse" }}
                  className="fas fa-eye"
                />
                <FilmStatText>20K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/film/${result.id}/lists/by/popular/`}>
                <FilmStatIcon
                  style={{ color: "skyblue" }}
                  className="fas fa-th-list"
                />
                <FilmStatText>24K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/film/${result.id}/likes/`}>
                <FilmStatIcon
                  style={{ color: "orange" }}
                  className="fas fa-heart"
                />
                <FilmStatText>28K</FilmStatText>
              </Link>
            </FilmStat>
            <FilmStat>
              <Link to={`/best`}>
                <FilmStatIcon
                  style={{ color: "yellow" }}
                  className="fas fa-crown"
                />
                <FilmStatText>6</FilmStatText>
              </Link>
            </FilmStat>
          </FilmStats>
          <Watch>
            <WatchTitle>WATCH</WatchTitle>
            <WatchPanel>
              <Link
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start"
                }}
                to={"/"}
              >
                <TrailerIcon className="fas fa-play-circle" />
                <TrailerText>예고편 보기</TrailerText>
              </Link>
            </WatchPanel>
            <MoreService>
              <Link to={"/"}>
                <MoreServiceText>MORE SERVICE</MoreServiceText>
              </Link>
            </MoreService>
          </Watch>
        </MediaInfo>
        <TextInfo>
          <TitleSection>
            <Title>{result.title}</Title>
            <Subtitle>
              <Link
                style={{ textDecoration: "underline" }}
                to={`/movies/year/${result.release_date.substring(0, 4)}`}
              >
                {result.release_date.substring(0, 4)}
              </Link>
              <Divider>•</Divider> Directed by
              {directors.map((director: any, index: number) => {
                return (
                  <>
                    <Link
                      style={{
                        marginLeft: "0.3rem",
                        textDecoration: "underline"
                      }}
                      to={`/director/${director.name}/`}
                    >
                      {director.name}
                    </Link>
                    {directors.length - 1 !== index && <span>,</span>}
                  </>
                );
              })}
            </Subtitle>
          </TitleSection>
          <SideInfoSection>
            <Overview>{result.overview}</Overview>
            <Credit
              creditIndex={creditIndex}
              handleCreditIndexChange={handleCreditIndexChange}
            />
          </SideInfoSection>
        </TextInfo>
      </Content>
    </Container>
  );

MovieDetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
