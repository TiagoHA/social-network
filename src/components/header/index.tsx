import * as React from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import colors from "src/colors/colors";
import {
  Container,
  BlueLine,
  WhiteLine,
  Title,
  Subtitle,
  TextButton,
  Button,
  Col,
  RedLine
} from "./styles";

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
          <Col>
            <RedLine />
          </Col>
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
