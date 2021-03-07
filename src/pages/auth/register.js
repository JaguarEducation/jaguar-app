import React, { useState } from 'react';
import { useTheme } from '@react-navigation/native';
import { Text, ActivityIndicator, TouchableWithoutFeedback, Keyboard, View } from 'react-native';
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

export default function SignUp({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState();
  const [processing, setProcessing] = useState(false);
  const { colors } = useTheme();

  function handleFormRegister() {
    setProcessing(true)
    // Persist Created User
    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(function () {
        // Create User
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user =>
            firebase.auth().currentUser.updateProfile({ displayName: name })
          )
          .catch(error => {
            setProcessing(false)
            setError(JSON.stringify(error.message))
          })
      })
      .catch(error => {
        setProcessing(false)
        setError("Error to create a new user")
      });
  }

  return (

    <PageContainer
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, justifyContent: "space-between", width: "100%", flexDirection: "column", alignItems: "center", marginTop: 20 }}>
          <LogoForm style={{ color: colors.text }}>
            Bienvenido
      </LogoForm>
          {error && (
            <ErrorBox>
              <ErrorText>{error}</ErrorText>
            </ErrorBox>
          )}

          <InputsContainer>
            <InputForm
              placeholder="Nombre"
              onChangeText={text => setName(text)}
              value={name}
              color={colors.text}
              placeholderTextColor={colors.text}
              style={{ backgroundColor: colors.card }}
            />
            <InputForm
              placeholder="Correo electronico"
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
              placeholderTextColor={colors.text}
              color={colors.text}
              style={{ backgroundColor: colors.card }}
            />
            {processing && <ActivityIndicator size="large" style={{ marginBottom: 16 }} />}
            <ButtonForm onPress={handleFormRegister}>
              <ButtonTextForm>Registrarse</ButtonTextForm>
            </ButtonForm>
          </InputsContainer>

          <Text style={{ color: colors.text, margin: 2, fontFamily: 'Lato', fontSize: 20 }}>o</Text>

          <View style={{ marginBottom: 30 }}>
            <SwitchForm onPress={() => navigation.push('Login')}> Ya tengo una cuenta</SwitchForm>

            <SwitchForm onPress={() => navigation.push('ResetPassword')}>Olvidé mi contraseña :c</SwitchForm>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </PageContainer>

  );
}
