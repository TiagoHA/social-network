import styled from "styled-components/native";
import colors from "src/colors/colors";

export const Container = styled.View``;

export const Title = styled.Text`
  color: ${colors.secondary};
  font-family: "Barlow-Medium";
  font-weight: 700;
  font-size: 35px;
  flex: 1;
  margin: 5px;
`;

export const Subtitle = styled.Text`
  font-size: 20px;
  color: ${colors.primary};
  font-family: "Barlow-Medium";
  font-weight: 500;
  padding-bottom: 10px;
  padding-left: 10px;
`;

export const Button = styled.TouchableOpacity`
  background-color: ${colors.primary};
  position: absolute;
  right: 1;
  bottom: 1;
  flex: 0;
  padding: 0 5px;
`;

export const TextButton = styled.Text`
  color: white;
  font-family: "Barlow-Medium";
`;

export const borderWidth = 5;
export const WhiteLine = styled.View`
  border-left-width: ${borderWidth}px;
  border-left-color: white;
  left: -10px;
  flex-direction: row;
`;

export const BlueLine = styled.View`
  border-width: ${borderWidth}px;
  padding: 5px;
  margin: 5px;
  border-color: ${colors.primary};
`;

export const Col = styled.View`
  flex-direction: column;
`;

export const RedLine = styled.View`
  border-left-color: ${colors.secondary};
  border-left-width: 5px;
  flex: 1;
  margin: 5px 0;
  left: -5px;
`;
