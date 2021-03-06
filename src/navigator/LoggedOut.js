import { createAppContainer, createStackNavigator } from 'react-navigation'

import Login from '../components/Login'

const LoggedOutNavigator = createAppContainer (createStackNavigator({
  Login: {
    screen: Login
  }
}));

export default LoggedOutNavigator
