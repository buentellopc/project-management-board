import styled from "styled-components";
import Ticket from "../components/Ticket/Ticket";
import { useFetch } from "../useFetch";

const TicketsWrapper = styled.div`
  display: flex;
`;

interface TicketsProps {}

const Tickets = ({}: TicketsProps) => {
  const [loading, data] = useFetch("../../assets/data.json");

  let tickets;
  if (!loading) {
    tickets = data.map((ticket) => <Ticket key={ticket.id} data={ticket} />);
  }

  return <TicketsWrapper>{tickets}</TicketsWrapper>;
};

export default Tickets;
