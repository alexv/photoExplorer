import React from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  ScrollView,
} from 'react-native';

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
  static navigationOptions = {
    title: '📷 Fresh Pix 📷',
  };

  constructor(props) {
    super(props);
    this.state = { text: '', searchResult: { hits: [] } };
  }

  handleSubmit = () => {
    const webSafeString = this.state.text.replace(/\s/g, '+');
    fetch(`https://pixabay.com/api?key=8642121-3579382886baa758cf8891d9d&image_type=photo&q=${webSafeString}`)
      .then(response => response.json())
      .then(data => this.setState({ searchResult: data }))
      .catch(console.error);
  };

  render() {
    console.log(this.state.searchResult);
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
        <ScrollView contentContainerStyle={styles.scrollView}>
          {this.state.searchResult.hits.map(hit => (
            <TouchableHighlight
              key={hit.id}
              style={{ width: 300, height: 200 }}
              onPress={() => this.props.navigation.navigate('Detail', { hit })}
            >
              <Image style={{ width: 300, height: 200 }} source={{ uri: hit.webformatURL }} />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
