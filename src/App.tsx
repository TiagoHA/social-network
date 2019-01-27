import * as React from "react";
import { FlatList } from "react-native";
import Header from "./components/header";
import ListTile from "./components/ListTile";
import Api from "src/api";
import { Users, User } from "./models/Feed";
import Loading from "./components/Loading";
import { Container } from "./styles";

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
            renderItem={({ item }) => {
              const user: User = item;
              return (
                <ListTile
                  id={user.id}
                  name={user.name}
                  image={user.image}
                  isOpacity={Opacity(user.id)}
                />
              );
            }}
          />
        </Loading>
      </Container>
    );
  }
}

function Opacity(number: number): boolean {
  if (number === 0) return true;
  if (number) return number % 2 === 0;
  return false;
}
