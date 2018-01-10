import React from 'react';
import { StyleSheet, Text, View, Button, ActivityIndicator } from 'react-native';

export default class ThirdScreen extends React.Component {
    constructor() {
        super();
        this.state = {count: 0};
        this.incremented = this.incremented.bind(this);
        this.decremented = this.decremented.bind(this);
    }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topView}>
            <Button title = '+' onPress={this.props.increment} />
            <Text> {this.props.count} </Text>
            <Button title = '-' onPress={ this.props.decrement } />


            <Button title = 'Debug' onPress={ this.incremented } />
        </View>
      </View>
    );
  }

  incremented() {
    console.log(this.props);
  }
  decremented() {
      this.props.decrement;
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

});
