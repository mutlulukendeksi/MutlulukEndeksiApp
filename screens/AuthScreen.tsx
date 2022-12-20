import { View, Text, Image, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import { Button, TextInput } from 'react-native-paper';

type Props = {}

const AuthScreen = (props: Props) => {
  const [form, setForm] = React.useState({
    email: '',
    password: ''
  });

  return (
    <View style={styles.container}>
      <View style={{ alignItems: 'center' }}>
        <Image source={require('../assets/launch_screen.png')}></Image>
        <TextInput
          mode='outlined'
          textContentType='emailAddress'
          placeholder='E-Mail'
          label="Email"
          value={form.email}
          onChangeText={email => setForm({ password: form.password, email })}
        />
        <TextInput
          mode='outlined'
          textContentType='password'
          placeholder='Password'
          label="Password"
          value={form.password}
          onChangeText={password => setForm({ password, email: form.email })}
        />
        <Button mode='outlined' onPress={() => console.log('Pressed')}>Submit</Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: 25,
    fontWeight: '500',
  }
});


export default AuthScreen