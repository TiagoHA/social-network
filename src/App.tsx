import * as React from "react";
import { FlatList } from "react-native";
import styled from "styled-components/native";
import Header from "./components/header";
import ListTile from "./components/ListTile";
import Api from "src/api";
import { Users, User } from "./models/Feed";
import Loading from "./components/Loading";

interface Props {}

interface State extends Users {
  loading: boolean;
}

export default class App extends React.Component<Props, State> {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    this.setState({ loading: true });
    await Api.fetch().then(users => this.setState({ loading: false, users }));
  };

  keyExtractor = item => String(item.id);

  render() {
    const { loading } = this.state;
    return (
      <Container>
        <Header
          title="EXCELENTE!"
          subtitle="Para aproveitar ao máximo, conecte com seus amigos!"
          buttonTitle="Continuar"
        />
        <Loading loading={loading}>
          <FlatList
            data={this.state.users}
            keyExtractor={this.keyExtractor}
            renderItem={({ item }) => (
              <ListTile
                name={item.name}
                image={item.image}
                isOpacity={isOpacity(item.id)}
              />
            )}
          />
        </Loading>
      </Container>
    );
  }
}

const Container = styled.View`
  flex: 1;
  background-color: white;
  flex-direction: column;
`;

function isOpacity(number) {
  if (number === 0) return true;
  if (number) return number % 2 === 0;
  return false;
}
