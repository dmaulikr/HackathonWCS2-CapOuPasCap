/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
/*jshint esversion: 6 */

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';


class hackathon extends Component {


  getInitialState() {
     return {
       myText : "Hello, Tableless!",
     };
  }

  textInputDidChange(event) {
     this.setState({
        myText: event.nativeEvent.text
      });
  }

    render() {
        return (
          < View style = {styles.container} >
              < Text style = {styles.welcome} >
                    Welcome to React Native!
              </Text>
              < Text style = {styles.instructions} >
                To get started, edit index.android.js
              < /Text>
              < Text style = {styles.instructions} >
                Shake or press menu button for dev menu
            < /Text>

            < TextInput
                  placeholder = {'Type your Name here'}
                  placeholderTextColor = {'#FFAADD'}
                  style = {styles.textInput}
                  selectTextOnFocus = {true}
                  //onChange={this.textInputDidChange}
                  //value={this.getInitialState}
            />
        < /View >
      );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#C46A3E',
        borderWidth: 2,
        borderColor: '#ff0000',
    },
    welcome: {
        fontSize: 20,
        color: '#FFFFFF',
        fontSize: 25,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#FFFFFF',
        marginBottom: 5,
    },
    textInput: {
        width: 250,
        height: 30,
        borderWidth: 0.5,
        borderColor: '#aaaaaa',
        fontSize: 13,
        padding: 4,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 20,
    },
});

AppRegistry.registerComponent('hackathon', () => hackathon);



/*
< View style = {styles.container} >
    <Text onPress={isModalOpen => this.setState({isModalOpen: true})}>
      Open Modal.
    </Text>
    < Text style = {styles.welcome} >
          Welcome to React Native!
    < /Text>
    < Text style = {styles.instructions} >
      To get started, edit index.android.js
    < /Text>
    < Text style = {styles.instructions} >
      Shake or press menu button for dev menu
  < /Text>

  < TextInput
        placeholder = {'Type your Name here'}
        placeholderTextColor = {'#FFAADD'}
        style = {styles.textInput}
        value={this.state.myText}
        onChangeText={myText => this.setState({myText})}
        selectTextOnFocus = {true}
  />

  <Text>{this.state.myText}</Text>
  <Modal isVisible={this.state.isModalOpen} onClose={isModalOpen => this.setState({isModalOpen: false})}>
   <Text>Hello world!</Text>
 </Modal>
< /View >*/
