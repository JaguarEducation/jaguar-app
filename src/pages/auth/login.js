import React, { useState } from 'react';
import { Text, ActivityIndicator, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);
  const { colors } = useTheme();

  function handleFormRegister() {
    setProcessing(true)
    // Persist Login User
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        // Login
        firebase.auth().signInWithEmailAndPassword(email, password)
          .catch(error => {
            setProcessing(false)
            setError(JSON.stringify(error.message))
          });
      })
      .catch(error => {
        setProcessing(false)
        setError("Error to login")
      });
  }

  return (
    <PageContainer>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "space-between", width: "100%", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
          <LogoForm style={{ color: colors.text }}>Iniciar sesión</LogoForm>

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
            <InputForm
              placeholder="Contraseña"
              onChangeText={text => setPassword(text)}
              value={password}
              textContentType="password"
              secureTextEntry={true}
              autoCapitalize="none"
              color={colors.text}
              placeholderTextColor={colors.text}
              style={{ backgroundColor: colors.card }}
            />
            {processing && <ActivityIndicator size="large" style={{ marginBottom: 16 }} />}
            <ButtonForm onPress={handleFormRegister}>
              <ButtonTextForm>Entrar</ButtonTextForm>
            </ButtonForm>
          </InputsContainer>

          <Text style={{ margin: 8, fontFamily: 'Lato' }}>or</Text>

          <View style={{ marginBottom: 30 }}>
            <SwitchForm onPress={() => navigation.push('Register')}>No tengo cuenta</SwitchForm>

            <SwitchForm onPress={() => navigation.push('ResetPassword')}>Olvidé mi contraseña :c</SwitchForm>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </PageContainer>
  );
}
