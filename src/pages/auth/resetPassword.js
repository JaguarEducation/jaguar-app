import React, { useState } from 'react';
import { Text, ActivityIndicator, Alert, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as firebase from 'firebase';

import {
  PageContainer,
  LogoForm,
  InputsContainer,
  InputForm,
  ButtonForm,
  ButtonTextForm,
  SwitchForm,
  ErrorBox,
  ErrorText
} from '../../styles';

export default function ResetPassword({ navigation }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);
  const { colors } = useTheme();

  function handlePress() {
    setProcessing(true)
    firebase.auth().sendPasswordResetEmail(email)
      .then(() => {
        setProcessing(false);
        Alert.alert('Email was sent!');
        navigation.push('Login');
      })
      .catch((error) => {
        setProcessing(false);
        Alert.alert(JSON.stringify(error.message));
      });
  };

  return (
    <PageContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "space-between", width: "100%", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
          <LogoForm style={{ color: colors.text }}>Olvidé mi contraseña</LogoForm>

          {error && (
            <ErrorBox>
              <ErrorText>{error}</ErrorText>
            </ErrorBox>
          )}

          <InputsContainer>
            <InputForm
              placeholder="Correo electrónico"
              onChangeText={text => setEmail(text)}
              value={email}
              autoCapitalize="none"
              autoCompleteType="email"
              keyboardType="email-address"
              color={colors.text}
              placeholderTextColor={colors.text}
              style={{ backgroundColor: colors.card }}
            />
            {processing && <ActivityIndicator size="large" style={{ marginBottom: 16 }} />}
            <ButtonForm onPress={handlePress}>
              <ButtonTextForm>Enviar correo de recuperación</ButtonTextForm>
            </ButtonForm>
          </InputsContainer>

          <Text style={{ margin: 16, fontFamily: 'Lato' }}>or</Text>

          <View style={{ marginBottom: 30 }}>
            <SwitchForm onPress={() => navigation.push('Register')}>No tengo cuenta</SwitchForm>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </PageContainer>
  );
}
