import React from 'react'
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  SafeAreaView,
  ScrollView
} from 'react-native'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = { text: '', searchResult: { hits: [] } }
  }
  static navigationOptions = {
    title: 'Home'
  }

  handleSubmit = () => {
    const webSafeString = this.state.text.replace(/\s/g, '+')
    fetch(
      `https://pixabay.com/api?key=8642121-3579382886baa758cf8891d9d&image_type=photo&q=${webSafeString}`
    )
      .then(response => response.json())
      .then(data => this.setState({ searchResult: data }))
      .catch(console.error)
  }

  render() {
    console.log(this.state.searchResult)
    return (
      <SafeAreaView style={styles.container}>
        <Text>Here there be a searchsbar</Text>
        <TextInput
          style={styles.search}
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          onSubmitEditing={this.handleSubmit}
        />
        <ScrollView style={styles.scrollView}>
          {this.state.searchResult.hits.map(hit => (
            <TouchableHighlight
              onPress={() =>
                this.props.navigation.navigate('Detail', { hit: hit })
              }
            >
              <Image
                style={{ width: 100, height: 100 }}
                source={{ uri: hit.webformatURL }}
              />
            </TouchableHighlight>
          ))}
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff'
  },
  scrollView: {
    display: 'flex',
    flexDirection: 'row'
  },
  search: {
    width: '80%',
    textAlign: 'center',
    height: 40,
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 7,
    backgroundColor: '#FFFFFF'
  }
})
