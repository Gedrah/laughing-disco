// import library
import React from 'react';
import { Text, AppRegistry } from 'react-native';
import Header from './src/components/header';

// creates components (<ComponentName /> to use it)

const SomeText = () => (<Text>Some Text on screen !</Text>);

// render component

export default class App extends React.Component {
  render () {
    return (<Header/>);
  }
}
