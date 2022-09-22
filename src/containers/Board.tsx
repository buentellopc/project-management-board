import React from "react";
import styled from "styled-components";
import Lane from "../components/Lane/Lane";

const BoardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin: 5%;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

type BoardState = {
  data: { id: number; title: string; body: string; lane: number }[];
  loading: boolean;
  error: string;
};

type BoardProps = {};

class Board extends React.Component<BoardProps, BoardState> {
  constructor(props: any) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount(): Promise<void> {
    try {
      const tickets = await fetch("../../assets/data.json");
      const ticketsJSON: {
        id: number;
        title: string;
        body: string;
        lane: number;
      }[] = await tickets.json();

      if (ticketsJSON) {
        console.log("This are the tickets", ticketsJSON);

        this.setState({
          data: ticketsJSON,
          loading: false,
        });
      }
    } catch (error) {
      console.log(error);

      let errorMessage;
      if (error instanceof Error) {
        errorMessage = error.message;
      } else {
        errorMessage = "Unkown error";
      }

      this.setState({
        loading: false,
        error: errorMessage,
      });
    }
  }

  render() {
    const { data, loading, error } = this.state;

    const lanes = [
      { id: 1, title: "To Do" },
      { id: 2, title: "In Progress" },
      { id: 3, title: "Review" },
      { id: 4, title: "Done" },
    ];

    return (
      <BoardWrapper>
        {lanes.map((lane) => (
          <Lane
            key={lane.id}
            loading={loading}
            title={lane.title}
            tickets={data}
            error={error}
          />
        ))}
      </BoardWrapper>
    );
  }
}

export default Board;
