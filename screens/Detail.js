import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';

import LoadableImage from '../components/LoadableImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});
const Detail = ({ navigation }) => {
  const { item } = navigation.state.params;
  const tagsArray = item.tags.split(', ');
  return (
    <SafeAreaView style={styles.container}>
      <Text>By: {item.user}</Text>
      <LoadableImage style={{ width: 600, height: 400 }} source={{ uri: item.webformatURL }} />
      <Text>Tags</Text>
      <View
        style={{
 width: '100%', display: 'flex', flexDirection: 'row', justifyContent: 'center',
}}
      >
        {tagsArray.map(tag => (
          <View
            key={tag}
            style={{
              borderStyle: 'solid',
              borderColor: 'grey',
              borderRadius: 3,
              borderWidth: 1,
              margin: 4,
              padding: 4,
            }}
          >
            <Text>{tag}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  );
};

Detail.propTypes = {
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
  }).isRequired,
};

export default Detail;
