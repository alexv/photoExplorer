import React from 'react';

import { View, Text, Image } from 'react-native';

export default class LoadableImage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
    };
  }

  render() {
    const { style, source } = this.props;
    return (
      <View>
        {this.state.loading ? (
          <Text>Loading</Text>
        ) : (
          <Image
            style={style}
            source={source}
            onLoadEnd={() => {
              this.setState({ loading: false });
            }}
          />
        )}
      </View>
    );
  }
}
