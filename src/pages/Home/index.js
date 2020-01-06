import React, { Component } from "react";

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

  handleFavoriteUser = () => {
    console.log();
  };

  render() {
    const { user } = this.state;

    return (
      <Container>
        <Form>
          <Title>GitHub Favorites</Title>
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
