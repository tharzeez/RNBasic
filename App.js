import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import AppNavigator from "./app/routes/routes";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import store from './app/stores/stores.js';
import createLogger from 'react-logger';
import CounterContainer from './app/containers/CounterContainer'


export default class App extends React.Component {
  render() {
    return (

            <Provider store={store}>
                <AppNavigator/>
            </Provider>  )


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

