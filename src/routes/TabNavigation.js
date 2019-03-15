import React from 'react';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/Home';
import User from '../screens/User';
import Search from '../screens/SearchPage';
import Cart from '../screens/Cart'

export default TabNavigator = createBottomTabNavigator({
  Home: Home,
  User: User,
  Search: Search,
  Cart:Cart,
},
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Icon;
        let iconName;
        if (routeName === 'Home') {
          iconName = `home${focused ? '' : '-outline'}`;
        } else if (routeName === 'User') {
          iconName = `account${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `account-search${focused ? '' : '-outline'}`;
        } else if (routeName === 'Cart') {
          iconName = `cart${focused ? '' : '-outline'}`;
        }
        return <IconComponent name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#ED7574',
      inactiveTintColor: 'grey',
    },
    initialRouteName:'Home'
  }
);
