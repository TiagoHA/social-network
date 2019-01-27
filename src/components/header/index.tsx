import * as React from "react";
import styled from "styled-components/native";
import colors from "src/colors/colors";

interface Props {
  title: String;
  subtitle: String;
  buttonTitle: String;
}

export default function Header(props: Props) {
  const { title, subtitle } = props;
  return (
    <Container>
      <BlueLine>
        <WhiteLine>
          <Title>{title}</Title>
        </WhiteLine>
        <Subtitle>{subtitle}</Subtitle>
        <Button>
          <TextButton>CONTINUAR</TextButton>
        </Button>
      </BlueLine>
    </Container>
  );
}

const Container = styled.View``;

const Title = styled.Text`
  color: ${colors.secondary};
  font-family: "Barlow";
  font-weight: 700;
  font-size: 35px;
  border-left-width: 5px;
  border-left-color: ${colors.secondary};
  left: -10px;
  padding-left: 10px;
  margin: 5px;
`;

const Subtitle = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  font-family: "Barlow";
  font-weight: 500;
  padding-bottom: 10px;
`;

const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  position: absolute;
  right: 1;
  bottom: 1;
  flex: 0;
  padding: 0 5px;
`;

const TextButton = styled.Text`
  color: white;
  font-family: "Barlow";
`;

const borderWidth = 5;
const WhiteLine = styled.View`
  border-left-width: ${borderWidth}px;
  border-left-color: white;
  left: -10px;
`;

const BlueLine = styled.View`
  border-width: ${borderWidth}px;
  padding: 5px;
  margin: 5px;
  border-color: ${colors.primary};
`;
