import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class SecondScreen extends React.Component {

  constructor() {
    super();
    this.state = { showLoader: false , data: '' };

    this.getDetails = this.getDetails.bind(this);
    this.moveToThird = this.moveToThird.bind(this);

  }


  render() {
    return (
      <View style={styles.container}>

        <View style={styles.topView}>
          <Text>Hello World</Text>
          <Button title='send request' onPress={this.getDetails}></Button>
          <Text> {this.state.data} </Text>
          <Button onPress={this.moveToThird} title='click me'/>
          {this.state.showLoader &&
          <ActivityIndicator style={styles.loading} size="large" color="#0000ff" animating={this.state.showLoader}/>}
        </View>
      </View>
    );
  }

  getDetails() {
    this.setState({ showLoader: true});
    fetch('https://demo3895568.mockable.io/getDetails', {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON);
        this.setState({ showLoader: false, data: responseJSON.msg});
      }).catch((error) => {
      console.log(error);
      this.setState({ showLoader: false});
    });
  }

  moveToThird() {
    const { navigate } = this.props.navigation;
    navigate('Container');
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
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5FCFF88'
  }
});
