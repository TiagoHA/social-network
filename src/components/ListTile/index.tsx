import * as React from "react";
import styled from "styled-components/native";
import colors from "src/colors/colors";

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

const Container = styled.View`
  flex-direction: row;
  background-color: ${props =>
    props.isOpacity ? colors.primaryDark : colors.white};
  height: 60px;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 1px;
  align-items: center;
  padding: 30px 10px;
`;

const UserImage = styled.Image`
  width: 50px;
  height: 50px;
`;

const Name = styled.Text`
  flex: 1;
  text-align: left;
  font-size: 18px;
  padding: 0 10px;
  color: ${colors.text};
  font-family: "Barlow";
`;

const Button = styled.TouchableOpacity`
  background-color: ${props =>
    props.clicked ? colors.secondary : colors.primary};
  padding: 3px 7px;
  width: 90px;
`;

const BTitle = styled.Text`
  color: white;
  text-align: center;
  font-family: "Barlow";
`;
