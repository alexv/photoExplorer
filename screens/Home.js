import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  TextInput,
  Text,
  TouchableHighlight,
  SafeAreaView,
  FlatList,
} from 'react-native';

import LoadableImage from '../components/LoadableImage';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  scrollView: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  search: {
    width: '80%',
    marginTop: 20,
    marginBottom: 15,
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#68a2ff',
    borderRadius: 7,
    backgroundColor: '#FFFFFF',
  },
});

export default class Home extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  };
  static navigationOptions = {
    title: '📷 Fresh Pix 📷',
  };

  constructor(props) {
    super(props);

    this.state = {
      text: '',
      photos: [],
      lastSearchResult: {},
      searchPage: 0,
    };
  }

  getMorePictures = () => {
    const webSafeString = this.state.text.replace(/\s/g, '+');
    fetch(`https://pixabay.com/api?key=8642121-3579382886baa758cf8891d9d&image_type=photo&q=${webSafeString}&page=${
      this.state.searchPage
    }`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          lastSearchResult: { hits: [...this.state.lastSearchResult.hits, ...data.hits] },
          searchPage: this.state.searchPage + 1,
        }))
      .catch(console.error);
  };

  handleSubmit = () => {
    const webSafeString = this.state.text.replace(/\s/g, '+');
    fetch(`https://pixabay.com/api?key=8642121-3579382886baa758cf8891d9d&image_type=photo&q=${webSafeString}`)
      .then(response => response.json())
      .then(data => this.setState({ lastSearchResult: data, searchPage: 1, photos: data.hits }))
      .catch(console.error);
  };

  render() {
    // console.log(this.state);
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.search}
          placeholder="🔍 Search"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.handleSubmit}
          clearButtonMode="while-editing"
        />
        <FlatList
          data={this.state.photos}
          onEndReached={this.getMorePictures}
          renderItem={({ item }) => (
            <TouchableHighlight
              key={item.id}
              style={{ width: 300, height: 200 }}
              onPress={() => this.props.navigation.navigate('Detail', { item })}
            >
              <LoadableImage
                style={{ width: 300, height: 200 }}
                source={{ uri: item.webformatURL }}
              />
            </TouchableHighlight>
          )}
        />
      </SafeAreaView>
    );
  }
}
