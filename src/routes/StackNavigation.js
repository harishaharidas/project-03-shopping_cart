import { createStackNavigator, createAppContainer } from "react-navigation";
import Home from '../screens/Home';
import SearchPage from '../screens/SearchPage';
import DetailedPage from '../screens/DetailedPage';
import TabNavigator from './TabNavigatio';

export default StackNavigator = createStackNavigator(
  {
    Home: Home,
    SearchPage: SearchPage,
    DetailedPage: DetailedPage,
  },
  {
    initialRouteName: "Home",
    headerMode: 'none',
  },
);
