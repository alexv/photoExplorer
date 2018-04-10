import React from 'react';
import { Button, Image, StyleSheet, Text, SafeAreaView } from 'react-native';

import LoadableImage from '../components/LoadableImage';

export default class Detail extends React.Component {
  static navigationOptions = {
    title: 'Detail',
  };

  render() {
    const { hit } = this.props.navigation.state.params;
    console.log('hit', hit);
    return (
      <SafeAreaView style={styles.container}>
        <Text>Photo: {hit.id}</Text>
        <Text>Author: {hit.user}</Text>
        <LoadableImage style={{ width: 600, height: 400 }} source={{ uri: hit.webformatURL }} />
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
