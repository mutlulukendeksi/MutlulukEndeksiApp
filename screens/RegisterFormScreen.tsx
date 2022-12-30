import { Text, Button } from 'react-native-paper';
import React from 'react'
import { TextInput } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

type Props = {}

const RegisterFormScreen = (props: Props) => {
  const [form, setForm] = React.useState({
    email: '',
    password: '',
    rePassword: '',
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
          onChangeText={email => setForm({
            password: form.password,
            rePassword: form.rePassword,
            email
          })}
        />
        <TextInput
          style={styles.input}
          mode='outlined'
          textContentType='password'
          placeholder='Password'
          label="Password"
          value={form.password}
          onChangeText={password => setForm({
            password,
            rePassword: form.rePassword,
            email: form.email
          })}
        />
        <TextInput
          style={styles.input}
          mode='outlined'
          textContentType='password'
          placeholder='Re-Password'
          label="Re-Password"
          value={form.password}
          onChangeText={rePassword => setForm({
            password: form.password,
            rePassword,
            email: form.email
          })}
        />
        <Button style={styles.authButton} mode='contained' onPress={() => console.log('Pressed')}>Register</Button>
      </View>
    </View>
  )
}

export default RegisterFormScreen

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