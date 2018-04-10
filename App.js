import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'

import Home from './screens/Home'
import Detail from './screens/Detail'

const RootStack = StackNavigator({
  Home: { screen: Home },
  Detail: { screen: Detail }
})

export default class App extends React.Component {
  render() {
    return <RootStack />
  }
}
