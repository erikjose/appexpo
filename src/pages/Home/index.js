import React, { Component } from "react";
import axios from "../../services/service.api";
import { Keyboard } from "react-native";

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
    user: ""
  };

  handleFavoriteUser = async () => {
    const { navigation } = this.props;
    const { user } = this.state;

    try {
      const res = await axios.get(`/users/${user}`);

      const data = {
        login: res.data.login,
        avatar_url: res.data.avatar_url,
        name: res.data.name,
        bio: res.data.bio
      };

      navigation.navigate("User", { user: data });
    } catch (err) {
      console.tron.warn("Error", err);
    } finally {
      Keyboard.dismiss();
    }
  };

  render() {
    const { user } = this.state;

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
            <ButtonProfileText>Adicionar</ButtonProfileText>
          </ButtonProfile>
        </Form>
      </Container>
    );
  }
}
