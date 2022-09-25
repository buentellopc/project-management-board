import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Lane from "../components/Lane/Lane";
import { useFetch } from "../useFetch";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

type BoardProps = {};

const BoardCopy = (props: BoardProps) => {
  const [loading, data] = useFetch("../../assets/data.json");
  console.log(loading);

  // useFetch, because of useEffect not retrieves immediately the data
  // that is why data.map is not function was being rendered, initially
  // no data has been fetched
  if (loading === false) {
    let tickets = data.map((ticket) => ticket.title);
    console.log(tickets);
  }

  const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  return (
    <BoardWrapper>
      {!loading &&
        lanes.map((lane) => (
          <Lane
            key={lane.id}
            title={lane.title}
            tickets={data.filter((ticket) => ticket.lane === lane.id)}
            loading={loading}
            error={String(loading)}
          />
        ))}
    </BoardWrapper>
  );
};

export default BoardCopy;
