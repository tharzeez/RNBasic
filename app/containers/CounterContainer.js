import React, { Component} from 'react';
import { bindActionCreators } from 'react-redux';
import { connect } from 'react-redux';
import ThirdScreen from '../component/ThirdScreen';

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => { dispatch({ type: 'INCREMENT'}) },
    decrement: () => { dispatch({ type: 'DECREMENT'}) },
    reset:  () => { dispatch({ type: 'RESET'}) }
})


export default connect(mapStateToProps, mapDispatchToProps)(ThirdScreen)