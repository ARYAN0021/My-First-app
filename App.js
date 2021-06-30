import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';

class Mybutton extends Component{
  render(){
    return(
   <Button color="#220023" title="App"/>
    ); 
  }
}
export default class App extends Component {
  render() {
    return (
      <View style={{marginTop:50}}>
      <Mybutton/>
       <Text>My First React Native Project</Text>
      </View>
    );
  }
}