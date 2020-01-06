import React from "react";

import { TouchableOpacity } from "react-native";

import { Starred, OwnerAvatar, Info, Title, Author } from "./styles";

export default function StarList({ star, navigation }) {
  return (
    <Starred>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={() => navigation.navigate("WebView", { owner: star.owner })} 
      >
        <OwnerAvatar source={{ uri: star.owner.avatar_url }} />
        <Info>
          <Title>{star.name}</Title>
          <Author>{star.owner.login}</Author>
        </Info>
      </TouchableOpacity>
    </Starred>
  );
}
