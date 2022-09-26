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

// git stash and create a new branch per feature

const BoardCopy = (props: BoardProps) => {
  const [isLoading, setIsloading] = useState(true);

  const [tickets, setTickets] = useState<
    {
      id: number;
      title: string;
      body: string;
      lane: number;
    }[]
  >(
    {} as {
      id: number;
      title: string;
      body: string;
      lane: number;
    }[]
  );
  const [loading, data] = useFetch("../../assets/data.json");
  console.log(loading);

  useEffect(() => {
    console.log("inside use effect");

    if (!loading) {
      console.log("inside use effect, should log just one time");

      setTickets(data);
      setIsloading(false);
    }
  }, [loading]);

  console.log("the third log use have all tickets", tickets);

  const lanes = [
    { id: 1, title: "To Do" },
    { id: 2, title: "In Progress" },
    { id: 3, title: "Review" },
    { id: 4, title: "Done" },
  ];

  const onDragStart = (e: React.DragEvent<HTMLElement>, id: any) => {
    e.dataTransfer.setData("id", id);
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>, id: any) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLElement>, laneId: any) => {
    const id = e.dataTransfer.getData("id");

    const newTickets = tickets.filter((ticket) => {
      if (ticket.id === parseInt(id)) {
        ticket.lane = laneId;
        console.log(ticket);
      }
      return ticket;
    });
    console.log(newTickets);

    setTickets((prev) => [...newTickets]);
  };

  if (isLoading) {
    return (
      <section>
        <p>Loading..</p>
      </section>
    );
  }

  return (
    <BoardWrapper>
      {lanes.map((lane) => (
        <Lane
          key={lane.id}
          laneId={lane.id}
          title={lane.title}
          tickets={tickets.filter((ticket) => ticket.lane === lane.id)}
          loading={loading}
          error={String(loading)}
          onDragStart={onDragStart}
          onDragOver={onDragOver}
          onDrop={onDrop}
        />
      ))}
    </BoardWrapper>
  );
};

export default BoardCopy;
