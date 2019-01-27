import styled from "styled-components/native";
import colors from "src/colors/colors";

export const Container = styled.View`
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

export const UserImage = styled.Image`
  width: 50px;
  height: 50px;
`;

export const Name = styled.Text`
  flex: 1;
  text-align: left;
  font-size: 18px;
  padding: 0 10px;
  color: ${colors.text};
  font-family: "Barlow";
`;

export const Button = styled.TouchableOpacity`
  background-color: ${props =>
    props.clicked ? colors.secondary : colors.primary};
  padding: 3px 7px;
  width: 90px;
`;

export const BTitle = styled.Text`
  color: white;
  text-align: center;
  font-family: "Barlow";
`;
