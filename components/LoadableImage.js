import React from 'react';
import PropTypes from 'prop-types';

import { ActivityIndicator, View, Image } from 'react-native';

export default class LoadableImage extends React.Component {
  static propTypes = {
    style: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }).isRequired,
    source: PropTypes.shape({ uri: PropTypes.string }).isRequired,
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
        {this.state.loading && <ActivityIndicator size="small" color="#68a2ff" />}
        <Image
          style={style}
          source={source}
          onLoadEnd={() => {
            this.setState({ loading: false });
          }}
        />
        )
      </View>
    );
  }
}
