import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import SearchPage from '../screens/SearchPage';
import Cart from '../screens/Cart';
import TabNavigator from './TabNavigatio';

StackNavigator = createStackNavigator(
  {
    Home: Home,
    SearchPage: SearchPage,
    Cart: Cart,
    TabNavigator: TabNavigator
  },
  {
    initialRouteName: "TabNavigator",
    headerMode: 'none',
  },
);

export default AppContainer = createAppContainer(StackNavigator);