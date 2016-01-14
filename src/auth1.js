import * as cnst from './const.js'
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

export var auth1 = React.createClass({
  render: function() {
    return (
      <View style={styles.background}>
        <Text style={styles.medme_title}>
          MedMe
        </Text>
        <Text style={styles.request_title}>
          Пожалуйста, введите номер телефона
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: cnst.BACKGROUND_COLOR
  },
  medme_title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Medium',
    fontSize: 38,
    letterSpacing: -0.9,
    margin: 47
  },
  request_title: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Light',
    fontSize: 16,
    margin: 28.5
  }

  /*
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
  },*/
});
