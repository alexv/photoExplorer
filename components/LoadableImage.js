import React from 'react';
import PropTypes from 'prop-types';

import { View, Text, Image } from 'react-native';

export default class LoadableImage extends React.Component {
  static propTypes = {
    style: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
    source: PropTypes.shape({ uri: PropTypes.string }),
  };
  static defaultProps = {
    style: { height: 100, width: 100 },
    source: { uri: '' },
  };

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
