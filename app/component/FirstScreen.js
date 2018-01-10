import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { CounterContainer } from '../containers/CounterContainer';

export default class FirstScreen extends React.Component {

  constructor() {
    super();
    this.onPressButton = this.onPressButton.bind(this);
  }
  static navigationOptions = {
    title: 'Home',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.topView}>
          <Text>Hello World</Text>
          <Button onPress={ this.onPressButton } title="Click me to navigate"></Button>
        </View>
        <View style = {styles.bottomView}>
          <View style = {[styles.bottomInner, {backgroundColor: '#196' , flex: 1}]}></View>
          <View style = {[styles.bottomInner, {backgroundColor: '#c19', flex: 4} ]}></View>
          <View style = {[styles.bottomInner, {backgroundColor: '#523', flex: 2}]}></View>
        </View>
      </View>
    );
  }

  onPressButton() {
    console.log(this.props.navigation.navigate());
    const { navigate } = this.props.navigation;
    navigate('Second');
    console.log('clicked');
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // flexDirection: 'row',

  },
  topView: {
    flex: 2,
    backgroundColor: '#faf',
    width: '100%',
    height: '100%',

  },
  bottomView: {
    flex: 3,
    backgroundColor: '#fba',
    width: '100%',
    height: '100%',
    flexDirection: 'row',

  },
  buttonStyle: {


  },
  bottomInner: {
    flex: 1,
    width: '100%',
    height: '100%',
  }
});
