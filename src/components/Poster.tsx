import React, { SFC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NoImage from "../asset/popcorn.png";

const Container = styled.div`
  font-size: 0.8rem;
`;

interface IImageProps {
  bgUrl: string;
}

const Image = styled("div")<IImageProps>`
  background: url(${(props) => props.bgUrl});
  height: 11rem;
  background-size: cover;
  border-radius: 0.3rem;
  background-position: center center;
  transition: 0.1s ease-in-out;
`;

const Rating = styled.span`
  bottom: 0.3rem;
  right: 0.3rem;
  position: absolute;
  opacity: 0;
  transition: 0.1s ease-in-out;
`;

const ImageContainer = styled.div`
  margin-bottom: 0.3rem;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.3;
    }
    ${Rating} {
      opacity: 1;
    }
  }
`;

const Title = styled.span`
  display: block;
  font-size: 0.8rem;
  margin-bottom: 0.2rem;
`;

const Year = styled.span`
  font-size: 0.6rem;
  color: rgba(255, 255, 255, 0.5);
`;

interface IProps {
  id: number;
  imageUrl: string;
  title: string;
  rating: number;
  year: string;
}

export const Poster: SFC<IProps> = ({ id, imageUrl, title, rating, year }) => (
  <Link to={`/film/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl ? `https://image.tmdb.org/t/p/w300${imageUrl}` : NoImage
          }
        />
        <Rating>
          <span role="img" aria-label="rating" style={{ color: "goldenrod" }}>
            ★{" "}
          </span>
          {rating}
        </Rating>
      </ImageContainer>
      <Title>
        {title.length > 10 ? `${title.substring(0, 10)}...` : title}
      </Title>
      <Year>{year}</Year>
    </Container>
  </Link>
);
