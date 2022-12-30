import { StyleSheet, View } from 'react-native'
import React from 'react'
import { Button, TextInput, Text } from 'react-native-paper';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './AuthScreen';

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const LoginFormScreen: React.FC<LoginScreenProps> = (props) => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Text variant='displayLarge' style={styles.title}>Login</Text>
        <TextInput
          style={styles.input}
          mode='outlined'
          textContentType='emailAddress'
          placeholder='E-Mail'
          label="Email"
          value={form.email}
          onChangeText={email => setForm({ password: form.password, email })}
        />
        <TextInput
          style={styles.input}
          mode='outlined'
          textContentType='password'
          placeholder='Password'
          label="Password"
          value={form.password}
          onChangeText={password => setForm({ password, email: form.email })}
        />
        <Button style={styles.authButton} mode='contained' onPress={() => props.navigation.navigate('Home')}>Login</Button>
      </View>
    </View>
  )
}

export default LoginFormScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    top: '30%'
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  },
  input: {
    width: '90%',
    marginTop: 10,
  },
  authButton: {
    marginTop: 10,
  },
  title: {
    fontSize: 40
  }
})