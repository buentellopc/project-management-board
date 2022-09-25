import React, { FC } from "react";
import styled from "styled-components";

interface TicketProps {
  data: { id: number; title: string; body: string; lane: number };
}

const TitleWrapper = styled.div`
  background-color: darkGray;
  padding: 20px;
  border-radius 20px;

  &:not(:last-child) {
    margin-bottom: 5%
  }
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
    <TitleWrapper>
      <em>{id}</em>
      <Title>{title}</Title>
      <Body>{body}</Body>
    </TitleWrapper>
  );
};

export default Ticket;
