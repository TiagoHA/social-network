import * as React from "react";
import styled from "styled-components/native";
import colors from "src/colors/colors";
import { UserImage, Name, BTitle, Button, Container } from "./styles";

interface Props {
  name: string;
  image: string;
  id: number;
  isOpacity: boolean;
}

interface State {
  clicked: boolean;
}

export default class ListTile extends React.Component<Props, State> {
  state = {
    clicked: false
  };

  handleClick = () => this.setState(state => ({ clicked: !state.clicked }));

  isOpacity = number => number % 2 === 0;

  render() {
    const { name, image, id, isOpacity } = this.props;
    const { clicked } = this.state;

    return (
      <Container isOpacity={isOpacity}>
        <UserImage source={{ uri: image }} />
        <Name>{name}</Name>
        <Button onPress={this.handleClick} clicked={clicked}>
          <BTitle>{clicked ? "SEGUINDO" : "SEGUIR"}</BTitle>
        </Button>
      </Container>
    );
  }
}
