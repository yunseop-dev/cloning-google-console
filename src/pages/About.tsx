import React from "react";
import useHackerNewsStoires from "../hooks/useHackerNewsStories";
import useInfinityScroll from "../hooks/useInfinityScroll";
import dayjs from "dayjs";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 1rem;
`;

const Row = styled.li`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.2rem;
  &:nth-child(even) {
    background: #efefef;
  }
  &:hover {
    background: #eaeaea;
  }
`;

const Title = styled.div`
  width: 40%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Score = styled.div`
  width: 10%;
  text-align: center;
`;

const Writer = styled.div`
  width: 20%;
`;

const UpdatedAt = styled.div`
  width: 30%;
`;

function About() {
  const { error, isLoading, items, fetchMore } = useHackerNewsStoires();

  useInfinityScroll({
    action: fetchMore,
  });

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Wrapper>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <ol>
          <Row>
            <Title>제목</Title>
            <Score>점수</Score>
            <Writer>작성자</Writer>
            <UpdatedAt>작성일</UpdatedAt>
          </Row>
          {items.map((item, index) => (
            <Row key={index}>
              <Title>
                <a href={item.url}>{item.title}</a>
              </Title>
              <Score>{item.score}</Score>
              <Writer>{item.by}</Writer>
              <UpdatedAt>
                {dayjs(item.time * 1000).format("YYYY-MM-DD HH:mm:ss")}
              </UpdatedAt>
            </Row>
          ))}
        </ol>
      )}
    </Wrapper>
  );
}

export default About;
