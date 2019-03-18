import { createStackNavigator } from "react-navigation";
import Home from '../screens/Home';
import SearchPage from '../screens/SearchPage';
import DetailedPage from '../screens/DetailedPage';
import AboutUs from '../screens/AboutUs';
import Cart from '../screens/Cart'
import TabNavigator from './TabNavigation'

export default StackNavigator = createStackNavigator(
  {
    Home: Home,
    SearchPage: SearchPage,
    AboutUs: AboutUs,
    // DetailedPage: DetailedPage,
    Cart: Cart,
    TabNavigator: TabNavigator
  },
  {
    // initialRouteName: "TabNavigator",
    headerMode: 'none',
  },
);
