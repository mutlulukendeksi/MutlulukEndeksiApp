import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Button, } from 'react-native-paper';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Home: undefined;
  Auth: undefined;
  Login: undefined;
  Register: undefined;
};

type AuthScreenProps = NativeStackScreenProps<RootStackParamList, 'Auth'>;

const AuthScreen: React.FC<AuthScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/launch_screen.png')}
      />
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => props.navigation.navigate('Login')}
      >
        Login
      </Button>
      <Button
        style={styles.button}
        mode="contained"
        onPress={() => props.navigation.navigate('Register')}
      >
        Register
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    top: '30%'
  },
  logo: {
  },
  button: {
    marginTop: 10,
    width: "90%"
  }
});

export default AuthScreen