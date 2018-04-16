import React from 'react';
import { Provider } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import store from './store';
import Home from './screens/Home';
import Detail from './screens/Detail';

const RootStack = StackNavigator({
  Home: { screen: Home },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => ({
      title: `By: ${navigation.state.params.title}`,
    }),
  },
});

const App = () => (
  <Provider store={store}>
    <RootStack />
  </Provider>
);

export default App;
