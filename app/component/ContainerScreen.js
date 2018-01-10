import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import CounterContainer from '../containers/CounterContainer'


export default class App extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <CounterContainer/>
        </View>
         )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

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


