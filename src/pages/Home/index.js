import React, { Component } from "react";
import axios from "../../services/service.api";
import { Keyboard, ActivityIndicator } from "react-native";

import {
  Container,
  Form,
  Title,
  ViewInput,
  Input,
  ButtonProfile,
  ButtonProfileText
} from "./styles";

export default class Home extends Component {
  state = {
    user: "",
    loading: false
  };

  handleFavoriteUser = async () => {
    const { navigation } = this.props;
    const { user } = this.state;

    this.setState({ loading: true });

    try {
      const res = await axios.get(`/users/${user}`);

      const data = {
        login: res.data.login,
        avatar_url: res.data.avatar_url,
        name: res.data.name,
        bio: res.data.bio
      };

      this.setState({ user: "", loading: false });

      navigation.navigate("User", { user: data });
    } catch (err) {
      console.tron.warn("Error", err);
    } finally {
      Keyboard.dismiss();
    }
  };

  render() {
    const { user, loading } = this.state;

    return (
      <Container behavior="padding" enabled>
        <Form>
          <Title>GitHub Stars</Title>
          <ViewInput>
            <Input
              value={user}
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Usuário"
              returnKeyType="send"
              onSubmitEditing={this.handleFavoriteUser}
              onChangeText={text => this.setState({ user: text })}
            />
          </ViewInput>
          <ButtonProfile onPress={this.handleFavoriteUser}>
            {loading ? (
              <ActivityIndicator size="small" color="#fff" />
            ) : (
              <ButtonProfileText>Adicionar</ButtonProfileText>
            )}
          </ButtonProfile>
        </Form>
      </Container>
    );
  }
}
