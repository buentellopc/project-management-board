import React, { FC } from "react";
import styled from "styled-components";
import Ticket from "../Ticket/Ticket";

interface LaneProps {
  title: string;
  tickets: { id: number; title: string; body: string; lane: number }[];
  loading: boolean;
  error: string;
  onDragStart: (e: React.DragEvent<HTMLElement>, id: string) => void;
  onDragOver: any;
  laneId: any;
  onDrop: any;
}

const LaneWrapper = styled.div`
  list-style: none;
  text-align: left;
  padding: 0;
  background: lightGray;
  border-radius: 20px;
  min-height: 50vh;
  width: 20vw;

  @media (max-width: 768px) {
    margin-bottom: 5%;
  }
`;

const Title = styled.h2`
  width: 100%;
  padding-bottom: 10px;
  text-align: center;
  border-bottom: 1px solid darkGray;
`;

const TicketsWrapper = styled.div`
  padding: 5%;
`;

const Alert = styled.div`
  text-align: center;
`;

const Lane = ({
  title,
  loading,
  tickets,
  error,
  onDragStart,
  onDragOver,
  onDrop,
  laneId,
}: LaneProps) => {
  console.log("hihi");

  return (
    <LaneWrapper onDragOver={onDragOver} onDrop={(e) => onDrop(e, laneId)}>
      <Title>{title}</Title>
      {/* Wipe error or add error handling (error is receiving loading value) */}
      {loading && <Alert>Loading...</Alert>}
      <TicketsWrapper>
        {tickets.map((ticket) => (
          <Ticket key={ticket.id} data={ticket} onDragStart={onDragStart} />
        ))}
      </TicketsWrapper>
    </LaneWrapper>
  );
};

export default Lane;
