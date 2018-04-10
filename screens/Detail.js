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
          hit: {
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
    const { hit } = this.props.navigation.state.params;
    return (
      <SafeAreaView style={styles.container}>
        <Text>By: {hit.user}</Text>
        <LoadableImage style={{ width: 600, height: 400 }} source={{ uri: hit.webformatURL }} />
        <Text>Tags</Text>
        {hit.tags
          .replace(/,/g, '')
          .split(' ')
          .map(tag => <Text>{tag}</Text>)}
      </SafeAreaView>
    );
  }
}
//  "comments": 0,
// 12:49:54:       "downloads": 103,
// 12:49:54:       "favorites": 4,
// 12:49:54:       "id": 3303721,
// 12:49:54:       "imageHeight": 1080,
// 12:49:54:       "imageSize": 525599,
// 12:49:54:       "imageWidth": 1920,
// 12:49:54:       "largeImageURL": "https://pixabay.com/get/ea36b10c2ff6003ed1584d05fb1d4e90e775e3d718ac104497f3c27eafe4bcbb_1280.jpg",
// 12:49:54:       "likes": 4,
// 12:49:54:       "pageURL": "https://pixabay.com/en/nature-mammal-animal-wildlife-wolf-3303721/",
// 12:49:54:       "previewHeight": 84,
// 12:49:54:       "previewURL": "https://cdn.pixabay.com/photo/2018/04/09/10/15/nature-3303721_150.jpg",
// 12:49:54:       "previewWidth": 150,
// 12:49:54:       "tags": "nature, mammal, animal",
// 12:49:54:       "type": "photo",
// 12:49:54:       "user": "Ihaksi",
// 12:49:54:       "userImageURL": "https://cdn.pixabay.com/user/2018/02/09/09-57-02-435_250x250.jpg",
// 12:49:54:       "user_id": 1727450,
// 12:49:54:       "views": 184,
// 12:49:54:       "webformatHeight": 360,
// 12:49:54:       "webformatURL": "https://pixabay.com/get/ea36b10c2ff6003ed1584d05fb1d4e90e775e3d718ac104497f3c27eafe4bcbb_640.jpg",
// 12:49:54:       "webformatWidth": 640,
