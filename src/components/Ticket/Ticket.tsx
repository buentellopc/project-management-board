import React, { FC } from "react";
import styled from "styled-components";

interface TicketProps {
  data: { id: number; title: string; body: string; lane: number };
  marginRight?: boolean;
  onDragStart?: (e: React.DragEvent<HTMLElement>, id: string) => void;
}

const TicketWrapper = styled("div")<{ marginRight?: boolean }>`
  background-color: darkGray;
  padding: 20px;
  border-radius 20px;

  &:not(:last-child) {
    margin-bottom: 5%
  }
  margin-right: ${(props) => (!!props.marginRight ? "1%" : "0")}
`;

const Title = styled.h3`
  width: 100%;
  margin: 0px;
`;

const Body = styled.p`
  width: 100%;
`;

const Ticket = (props: TicketProps) => {
  const { id, title, body } = props.data;

  return (
    <TicketWrapper
      marginRight={props.marginRight}
      draggable
      onDragStart={(e) => props.onDragStart!(e, id.toString())}
    >
      <em>{id}</em>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </TicketWrapper>
  );
};

export default Ticket;
