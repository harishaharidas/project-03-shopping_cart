import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import SearchPage from '../screens/SearchPage';
import Cart from '../screens/Cart';
import TabNavigator from './TabNavigatio';

export default StackNavigator = createStackNavigator(
  {
    Home: Home,
    SearchPage: SearchPage,
    Cart: Cart,
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  },
);
