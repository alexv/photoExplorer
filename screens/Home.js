import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  StyleSheet,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  View,
  FlatList,
} from 'react-native';

import LoadableImage from '../components/LoadableImage';
import { fetchPhotos, fetchMorePhotos, searchFieldChanged } from '../actions/home';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    display: 'flex',
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

class Home extends React.Component {
  static navigationOptions = {
    title: '📷 Fresh Pix 📷',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.search}
          placeholder="🔍 Search"
          value={this.props.searchField}
          onChangeText={text => this.props.searchChange({ text })}
          onSubmitEditing={() => this.props.getPhotos({ searchString: this.props.searchField })}
          clearButtonMode="while-editing"
        />
        {this.props.photos.length > 0 && (
          <View style={{ flex: 1 }}>
            <FlatList
              data={this.props.photos}
              numColumns={2}
              onEndReachedThreshold={0.5}
              onEndReached={() =>
                this.props.getMorePhotos({
                  searchString: this.props.searchField,
                  page: this.props.page,
                })
              }
              renderItem={({ item }) => (
                <TouchableHighlight
                  key={item.id}
                  style={{ width: 180, height: 180 }}
                  onPress={() =>
                    this.props.navigation.navigate('Detail', { item, title: item.user })
                  }
                >
                  <LoadableImage
                    style={{ width: 180, height: 180 }}
                    source={{ uri: item.webformatURL }}
                  />
                </TouchableHighlight>
              )}
            />
          </View>
        )}
      </SafeAreaView>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }).isRequired,
  page: PropTypes.number.isRequired,
  searchField: PropTypes.string.isRequired,
  photos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    webformatURL: PropTypes.string,
  })).isRequired,
  getPhotos: PropTypes.func.isRequired,
  getMorePhotos: PropTypes.func.isRequired,
  searchChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  photos: state.home.photos,
  page: state.home.searchPage,
  searchField: state.home.searchField,
});
const mapDispatchToProps = dispatch => ({
  getPhotos: ({ searchString }) => dispatch(fetchPhotos({ searchString })),
  getMorePhotos: ({ searchString, page }) => dispatch(fetchMorePhotos({ searchString, page })),
  searchChange: ({ text }) => dispatch(searchFieldChanged({ text })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
