import { createDrawerNavigator, createAppContainer } from 'react-navigation';
import Home from '../screens/Home';
import TabNavigator from './TabNavigation';
import MyOrders from '../screens/MyOrder';
import AboutUs from '../screens/AboutUs';
import User from '../screens/User';
import DetailedPage from '../screens/DetailedPage';


const DrawerNavigator = createDrawerNavigator({
  TabNavigator: {
    screen: TabNavigator,
    navigationOptions: {
      title: 'Home',
    }
  },
  MyOrders: MyOrders,
  DetailedPage: DetailedPage,
  AboutUs: AboutUs,
  User: {
    screen: User,
    navigationOptions: {
      title: 'Your Account',
    }
  },
},
  {
    unmountInactiveRoutes:true,
    initialRouteName: "TabNavigator",
    headerMode: 'none',
    drawerWidth: 200,
    drawerType:'back'
  },
);

export default AppContainer = createAppContainer(DrawerNavigator);