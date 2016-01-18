import * as cnst from './const.js'

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput
} = React;


export var auth2 = React.createClass({
  render: function() {
    return (
      <View style={styles.background}>
        <Text style={styles.title_1}>
          Введите код, отправленный на номер +7 (903) 888-88-88
        </Text>
        <Text style={styles.title_2}>
          Отправить на другой номер
        </Text>
        <TextInput style={styles.input}
          keyboardType={'numeric'}                             
          //maxLength = {31}
          //onChangeText={(text) => this.setState({text})}
          //value={this.state.text}
        />
        <Text style={styles.button}>
          Войти
        </Text>
        <Text style={styles.title_3}>
          Нажимая на кнопку «Войти», 
вы соглашаетесь с Условиями пользования 
и Политикой конфиденциальности.
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
  title_1: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Light',
    fontSize: 16,
    margin: 48
  },
  title_2: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Light',
    fontSize: 12,
    margin: 18
  },
  input: {
    alignSelf: 'center',
    height: 42,
    width: 280,
    backgroundColor: '#FFFFFF',
    margin: 26.5,
    fontSize: 16,
  },
  button: {
  	alignSelf: 'center',
    height: 40,
    width: 206,
    backgroundColor: '#FFFFFF',
    margin: 18,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 50,
    fontFamily: 'SFUIText-Light',
    fontSize: 16,
  },
  title_3: {
  	textAlign: 'center',
    color: '#FFFFFF',
    fontFamily: 'SFUIText-Light',
    fontSize: 12,
    margin: 12
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