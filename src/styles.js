import styled from "styled-components/native";


export const PageContainer = styled.KeyboardAvoidingView`
  flex: 1;
  padding-top: 20px;
`;
export const ErrorBox = styled.View`
  flex: 1;
  width: 87%;
  max-height: 50;
  align-items: center;
  padding: 15px 18px;
  border-radius: 8px;
  margin-top: 14px;
  background-color: #f8d7da;
  align-self: center;
`;
export const ErrorText = styled.Text`
  text-align: center;
  line-height: 18px;
  font-size: 14px;
  color: #721c24;
`;
export const LogoForm = styled.Text`
  font-family: Lato;
  font-size: 33px;
  line-height: 30px;
  text-align: center;
  margin-top: 10px;
`;

export const InputsContainer = styled.View`
  width: 90%;
  margin-top: 10px;

`;
export const InputForm = styled.TextInput`
  width: 100%;
  height: 52px;
  padding-left: 24px;
  left: 0px;
  top: 0px;
  background: #DDDD;
  border-radius: 8px;
  margin-bottom: 8px;
`;
export const ButtonForm = styled.TouchableOpacity`
  height: 52px;
  justify-content: center;
  align-items: center;
  background: #f4b723;
  border-radius: 8px;
`;
export const ButtonTextForm = styled.Text`
  font-family: Lato-Bold;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
`;
export const SwitchForm = styled.Text`
  font-family: Lato;
  font-size: 17px;
  text-align: center;
  color: #f4b723;
  text-decoration: underline #f4b723;
  margin-top: 19px;
`;

