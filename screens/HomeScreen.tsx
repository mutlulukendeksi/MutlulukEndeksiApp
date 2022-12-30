import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './AuthScreen';
import { CommonActions, StackActions } from '@react-navigation/native';

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  // useEffect(() => {
  //   props.navigation.dispatch(
  //     CommonActions.reset({
  //       index: 1,
  //       routes: [
  //         { name: 'Home' }
  //       ]
  //     })
  //   );
  // }, [])

  return (
    <View>
      <Text>HomeScreen</Text>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})