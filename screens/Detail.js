import React from 'react'
import { Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native'

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail'
  }
  render() {
    let { hit } = this.props.navigation.state.params
    console.log('hit', hit)
    return (
      <SafeAreaView style={styles.container}>
        <Text>Photo: {hit.id}</Text>
        <Text>Author: {hit.user}</Text>
        <Image
          style={{ width: 200, height: 200 }}
          source={{ uri: hit.webformatURL }}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})
