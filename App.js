import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Button } from 'react-native';
import SlotMachine from './app/component/slot-machine';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' + 'Shake or press menu button for dev menu',
});

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '                    ',
      savedOption: [
        'Uno',
        'Doss',
        'Tress'
      ]
    };
  }

  onPress() {
    var random = this.state.savedOption[
      Math.floor(Math.random() * this.state.savedOption.length)
    ];
    var n = 20 - random.length;
    var i = 0;

    for (i = 0; i < n; i++) { 
      random = random + " ";
    }
    
    console.log('test', random);

    this.setState({
      text: random
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <SlotMachine 
          text={this.state.text} 
          
        />
        <Button
          onPress={() => this.onPress()}
          title="Spin"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
