import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

import LoadableImage from '../components/LoadableImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

export default class Detail extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          hit: PropTypes.shape({
            id: PropTypes.string,
            user: PropTypes.string,
            webformatURL: PropTypes.string,
          }),
        }),
      }),
    }),
  };
  static defaultProps = {
    navigation: {
      state: {
        params: {
          hit: {
            id: 'n/a',
            user: 'no user listed',
            webformatURL: '',
          },
        },
      },
    },
  };
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
