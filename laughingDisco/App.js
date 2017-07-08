// import library
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/list';

// creates components (<ComponentName /> to use it)

const HeaderText = () => (<Text>LaughingDisco</Text>);

// render component

export default class App extends React.Component {
  render () {
    return (
      <View>
        <Header headerText = {<HeaderText/>}/>
        <AlbumList/>
      </View>
      );
  }
}
