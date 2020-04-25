import * as React from 'react';
import {BottomNavigation, Text} from 'react-native-paper';
import RestaurantsPage from '../RestaurantInfoPage/RestaurantInfoPage';

const RestaurantsInfoRoute = () => <RestaurantsPage />;

const SearchRoute = () => <Text>Search</Text>;

const OwnerRoute = () => <Text>Owner</Text>;

export default class MyComponent extends React.Component {
  state = {
    index: 0,
    routes: [
      {key: 'browse', title: 'Browse', icon: 'queue-music'},
      {key: 'search', title: 'Search', icon: 'album'},
      {key: 'owner', title: 'Owner', icon: 'history'},
    ],
  };

  _handleIndexChange = index => this.setState({index});

  _renderScene = BottomNavigation.SceneMap({
    browse: RestaurantsInfoRoute,
    search: SearchRoute,
    owner: OwnerRoute,
  });

  render() {
    return (
      <BottomNavigation
        navigationState={this.state}
        onIndexChange={this._handleIndexChange}
        renderScene={this._renderScene}
      />
    );
  }
}
