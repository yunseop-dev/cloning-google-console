import React from "react";
import useHackerNewsStoires from "../hooks/useHackerNewsStories";
import dayjs from "dayjs";
import styled from "styled-components";
import PageWrapper from "../components/PageWrapper";

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

function News() {
  const { error, isLoading, items, fetchMore } = useHackerNewsStoires();

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <PageWrapper>
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
    </PageWrapper>
  );
}

export default News;
