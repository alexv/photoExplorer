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
          item: PropTypes.shape({
            id: PropTypes.number,
            user: PropTypes.string,
            tags: PropTypes.string,
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
          item: {
            id: 0,
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
    const { item } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={styles.container}>
        <Text>By: {item.user}</Text>
        <LoadableImage style={{ width: 600, height: 400 }} source={{ uri: item.webformatURL }} />
        <Text>Tags</Text>
        {item.tags
          .replace(/,/g, '')
          .split(' ')
          .map(tag => <Text>{tag}</Text>)}
      </SafeAreaView>
    );
  }
}
