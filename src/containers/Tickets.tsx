import styled from "styled-components";
import Ticket from "../components/Ticket/Ticket";
import { useFetch } from "../useFetch";

// missing styles
const TicketsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Alert = styled.div`
  text-aling: center;
`;

interface TicketsProps {}

const Tickets = ({}: TicketsProps) => {
  const [loading, data] = useFetch("../../assets/data.json");

  let tickets;
  if (!loading) {
    tickets = data.map((ticket) => (
      <Ticket key={ticket.id} data={ticket} marginRight />
    ));
  }

  return (
    <TicketsWrapper>
      {loading && <Alert>Loading</Alert>}
      {tickets}
    </TicketsWrapper>
  );
};

export default Tickets;
