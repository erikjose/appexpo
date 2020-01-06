import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "../../services/service.api";
import { View, Text, ActivityIndicator } from "react-native";

import StarList from "../../components/StartList";

import { Container, Header, Avatar, Name, Bio, Stars } from "./styles";

export default class User extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam("user").name
    };
  };

  state = {
    stars: [],
    loading: false
  };

  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam("user");

    this.setState({ loading: true });

    try {
      const res = await axios.get(`/users/${user.login}/starred`);

      this.setState({ stars: res.data });
    } catch (err) {
      console.tron.warn("Error", err);
    } finally {
      this.setState({ loading: false });
    }
  }

  render() {
    const { navigation } = this.props;
    const { loading, stars } = this.state;
    const user = navigation.getParam("user");

    if (loading) {
      return (
        <ActivityIndicator
          style={{ marginTop: 30 }}
          size="large"
          color="#4682b4"
        />
      );
    }

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar_url }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        <Stars
          data={stars}
          keyExtractor={star => String(star.id)}
          renderItem={({ item }) => (
            <StarList star={item} navigation={navigation} />
          )}
        />
      </Container>
    );
  }
}

User.propTypes = {
  navigation: PropTypes.shape({
    getParam: PropTypes.func
  })
};
