import {
  StackNavigator,
} from 'react-navigation';
import FirstScreen from '../component/FirstScreen';
import SecondScreen from '../component/SecondScreen';
import ThirdScreen from '../component/ThirdScreen';
import ContainerScreen from '../component/ContainerScreen';

const AppNavigator = StackNavigator({
  First: { screen: FirstScreen },
  Second: { screen: SecondScreen },
  Third: { screen: ThirdScreen },
  Container: { screen: ContainerScreen }
});

export default AppNavigator;