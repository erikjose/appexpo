import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { Dimensions, KeyboardAvoidingView } from "react-native";

const width = Dimensions.get("window").width;

export const Container = styled.KeyboardAvoidingView`
  padding: 15px;
  background: #eee;
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Form = styled.View`
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  flex: 1;
  justify-content: center;
  align-items: stretch;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #282c34;
  text-align: center;
`;

export const ViewInput = styled.View`
  flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
  placeholderTextColor: "#999"
})`
  background: #fff;
  border-radius: 4px;
  height: 40px;
  padding: 0 10px;
  margin: 15px 0;
  flex: 1;
  font-size: 16px;
`;

export const ButtonProfile = styled(RectButton)`
  background: #4682b4;
  height: 40px;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
`;

export const ButtonProfileText = styled.Text`
  color: #fff;
  font-weight: 500;
  font-size: 16px;
`;
